import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface UserDetails {
  image: string | null;
  name: string | null;
  surname: string | null;
  email: string | null;
}

interface UserContextProps {
  user: UserDetails | null;
  loadUser: () => Promise<void>;
  setUser: (user: UserDetails) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUserState] = useState<UserDetails>({
    name: null,
    surname: null,
    email: null,
    image: null,
  });

  const loadUser = async () => {
    try {
      const keys = ['@image_user', '@name_user', '@surname_user', '@email_user'];
      const result = await AsyncStorage.multiGet(keys);

      const userDetails = result.reduce((acc, [key, value]) => {
        if (value !== null) {
          switch (key) {
            case '@image_user':
              console.log(value)
              acc.image = value;
              break;
            case '@name_user':
              acc.name = value;
              break;
            case '@surname_user':
              acc.surname = value;
              break;
            case '@email_user':
              acc.email = value;
              break;
          }
        }
        return acc;
      }, {
        image: null,
        name: null,
        surname: null,
        email: null
      } as UserDetails);

      setUserState(userDetails);
    } catch (error) {
      console.error('Failed to fetch user details', error);
    }
  };

  const setUser = (user: UserDetails) => {
    setUserState(user);
    const keyValuePairs: [string, string][] = [
      ['@image_user', user.image ?? ''],
      ['@name_user', user.name ?? ''],
      ['@surname_user', user.surname ?? ''],
      ['@email_user', user.email ?? ''],
    ];
    AsyncStorage.multiSet(keyValuePairs).catch(err => console.error('Failed to store user details', err));
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, loadUser, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

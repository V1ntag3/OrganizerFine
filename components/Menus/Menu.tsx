import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    ScrollView,
    Image,
    StatusBar,
} from 'react-native';

import Globals from '@/Globals';
import { Drawer } from 'react-native-drawer-layout';
import UserSVG from '@/assets/svgs/userSVG';
import ConfigSVG from '@/assets/svgs/configSVG';
import FineSVG from '@/assets/svgs/fineSVG';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeSVG from '@/assets/svgs/homeSVG';
import MenuSVG from '@/assets/svgs/menuSVG';

interface MenuProps {
    route: any;
    screenElement: JSX.Element;
    navigation: any;
}

interface UserDetails {
    image: string | null;
    name: string | null;
    surname: string | null;
    email: string | null;
}

const Menu: React.FC<MenuProps> = ({ screenElement, navigation }) => {
    const [email, setEmail] = useState<string | null>('');
    const [name, setName] = useState<string | null>('');
    const [profileImage, setProfileImage] = useState<string | null>(null);
    const [openClose, setOpenClose] = useState(false);

    const getUserDetails = async (): Promise<UserDetails> => {
        try {
            const keys = ['@image_user', '@name_user', '@surname_user', '@email_user'];
            const result = await AsyncStorage.multiGet(keys);

            const userDetails = result.reduce((acc, [key, value]) => {
                if (value !== null) {
                    switch (key) {
                        case '@image_user':
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
                        default:
                            break;
                    }
                }
                return acc;
            }, {} as UserDetails);

            if (userDetails.name !== undefined) {
                setEmail(userDetails.email);
                setProfileImage(userDetails.image);
                setName(`${userDetails.name} ${userDetails.surname}`);
            }


            return userDetails;
        } catch (error) {
            console.error('Failed to fetch user details', error);
            throw error;
        }
    };

    useEffect(() => {
        getUserDetails();
    }, [name]);

    return (
        <Drawer
            style={styles.menu}
            drawerStyle={{ width: '90%' }}
            open={openClose}
            onOpen={() => setOpenClose(true)}
            onClose={() => setOpenClose(false)}
            renderDrawerContent={() => (
                <ScrollView style={styles.drawerContent}>
                    {openClose && <StatusBar backgroundColor={Globals.COLOR.LIGHT.COLOR5} />}
                    <View style={styles.imagemUser}>
                        <View style={styles.imagemUserContent}>
                            {profileImage == null ? (
                                <UserSVG style={styles.userIcon} />
                            ) : (
                                <Image
                                    source={{ uri: profileImage }}
                                    style={styles.userImage}
                                />
                            )}
                        </View>
                    </View>
                    <View style={styles.userInfo}>
                        <Text style={styles.userName}>
                            {name !== null && name.replaceAll(" ", "") !== "" && <Text style={styles.userNameBold}>Olá, </Text>} {name}
                        </Text>
                        <Text style={styles.dadosMenu}>{email}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            setOpenClose(false);
                            setTimeout(() => {
                                navigation.navigate('Home');
                            }, 400);
                        }}
                    >
                        <View style={styles.itemMenu}>
                            <HomeSVG style={styles.menuIcon} />
                            <Text style={styles.itemMenuText}>Home</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            setOpenClose(false);
                            setTimeout(() => {
                                navigation.navigate('DashBoard');
                            }, 400);
                        }}
                    >
                        <View style={styles.itemMenu}>
                            <FineSVG />
                            <Text style={styles.itemMenuText}>Finanças</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            marginBottom: 70,
                        }}
                        onPress={() => {
                            setOpenClose(false);
                            setTimeout(() => {
                                navigation.navigate('ProfileEdit');
                            }, 400);
                        }}
                    >
                        <View style={styles.itemMenu}>
                            <ConfigSVG />
                            <Text style={styles.itemMenuText}>Configurações</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.containerNameMenu}>
                        <Text style={styles.nameApp}>{Globals.APP_NAME1}</Text>
                        <Text style={styles.nameApp}>{Globals.APP_NAME2}</Text>
                    </View>
                </ScrollView>
            )}
        >
            <TouchableOpacity
                style={styles.menuButton}
                onPress={() => setOpenClose(true)}
            >
                <MenuSVG />
            </TouchableOpacity>
            {screenElement}
        </Drawer>
    );
};

const styles = StyleSheet.create({
    menu: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 100,
    },
    drawerContent: {
        width: '100%',
        height: '100%',
        backgroundColor: Globals.COLOR.LIGHT.COLOR5,
    },
    dadosMenu: {
        fontFamily: Globals.FONT_FAMILY.REGULAR,
        fontWeight: '500',
        fontSize: 14,
        color: '#FFFFFF',
        lineHeight: 20,
    },
    imagemUser: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        backgroundColor: Globals.COLOR.LIGHT.COLOR1,
        borderColor: Globals.COLOR.LIGHT.COLOR4,
        borderRadius: Globals.WIDTH * 0.2,
        borderWidth: 4,
        marginTop: 40,
        marginBottom: 10,
    },
    imagemUserContent: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    userIcon: {
        marginTop: 10,
    },
    userImage: {
        width: '100%',
        height: '100%',
        borderRadius: 75,
    },
    userInfo: {
        marginLeft: 20,
        marginBottom: 30,
    },
    userName: {
        fontWeight: '300',
        fontSize: 20,
        color: '#FFFFFF',
    },
    userNameBold: {
        fontWeight: '700',
    },
    itemMenu: {
        width: '90%',
        backgroundColor: '#E3E3E3',
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        height: 48,
        paddingTop: 13,
        paddingBottom: 13,
        paddingLeft: 12,
        paddingRight: 10,
        flexDirection: 'row',
        marginBottom: 15,
    },
    itemMenuText: {
        fontWeight: '500',
        fontSize: 16,
        color: Globals.COLOR.LIGHT.COLOR4,
        marginLeft: 15,
        lineHeight: 24,
    },
    containerNameMenu: {
        position: 'absolute',
        bottom: 15,
        alignSelf: 'center',
    },
    nameApp: {
        width: '100%',
        textAlign: 'center',
        fontFamily: Globals.FONT_FAMILY_NAME_APP.REGULAR,
        fontWeight: '500',
        fontSize: 17,
        lineHeight: 25,
        color: Globals.COLOR.BRANCO,
    },
    menuButton: {
        position: 'absolute',
        top: 27,
        left: 15,
        zIndex: 1000,
    },
    menuIcon: {
        width: 30,
    },
});

export default Menu;

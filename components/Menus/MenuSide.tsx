import React, { useState } from 'react';
import {
    StyleSheet,
    StatusBar,
} from 'react-native';
import Globals from "@/Globals"
import { Drawer } from 'react-native-drawer-layout';
import { Menu, Home, User, Cog, BarChart } from '@tamagui/lucide-icons'
import { useUser } from '@/context/UserProvider';
import { useRouter } from 'expo-router';
import {
    Avatar, View,
    Text,
} from 'tamagui';
import ButtonMenuSide from '../Buttons/ButtonMenuSide';
import NameApp from '../UI/NameApp';

export const MenuSide: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [openClose, setOpenClose] = useState(false);
    const router = useRouter()
    const { user } = useUser();
    return (
        <Drawer
            drawerStyle={{ width: '90%' }}
            open={openClose}
            onOpen={() => setOpenClose(true)}
            onClose={() => setOpenClose(false)}
            renderDrawerContent={() => (
                <View bg={'$purple6'} flex={1}>
                    {openClose && <StatusBar backgroundColor={Globals.COLOR.COLOR5} />}
                    <View borderColor={'$purple8'} style={styles.imagemUser}
                        borderTopLeftRadius={100}
                        borderBottomRightRadius={100}
                        borderEndStartRadius={100}
                        borderStartEndRadius={100}>
                        <Avatar circular size="$12">
                            {user?.image == null || user?.image === "" ? (
                                <User size={100} color={'$purple8'} />
                            ) : (
                                <Avatar.Image
                                    accessibilityLabel="Cam"
                                    src={user?.image}
                                />
                            )}
                        </Avatar>
                    </View>

                    <View flexDirection='column' p={15}>
                        <Text fontSize={20}>
                            {user?.name !== null && user?.name !== undefined && user?.name.replaceAll(" ", "") !== "" && <Text fontWeight={700} >Olá, {`${user?.name} ${user?.surname}`}</Text>}
                        </Text>
                        <Text fontSize={16}>{user?.email}</Text>
                    </View>

                    <View gap={10}>
                        <ButtonMenuSide onPress={() => {
                            setOpenClose(false);
                            setTimeout(() => {
                                router.navigate("/")
                            }, 400);
                        }} text='Home'
                            Icon={Home} />
                        <ButtonMenuSide onPress={() => {
                            setOpenClose(false);
                            setTimeout(() => {
                                router.navigate("/revenueSpend/listRevenueSpend")
                            }, 400);
                        }} text='Finanças'
                            Icon={BarChart} />
                        <ButtonMenuSide onPress={() => {
                            setOpenClose(false);
                            setTimeout(() => {
                                router.navigate("/profile")
                            }, 400);
                        }} text='Configurações'
                            Icon={Cog} />
                    </View>

                    <NameApp />
                </View>
            )} >

            <Menu onPress={() => setOpenClose(true)} marginStart={10} scale={1.3} />

            {children}
        </Drawer>
    );
};

const styles = StyleSheet.create({

    imagemUser: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        borderWidth: 4,
        marginTop: 40,
        marginBottom: 10,
    },
    containerNameMenu: {
        position: 'absolute',
        bottom: 15,
        alignSelf: 'center',
    },

});

export default MenuSide;

import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    SafeAreaView,
    Image
} from 'react-native';

import Globals from '../Globals';
import { Drawer } from 'react-native-drawer-layout';
import UserSVG from './SVGComponentes/userSVG';
import ConfigSVG from './SVGComponentes/configSVG';
import FineSVG from './SVGComponentes/fineSVG';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingScreen from '../views/LoadingScreen';
import HomeSVG from './SVGComponentes/homeSVG';
import MenuSVG from './SVGComponentes/menuSVG';

function Menu({ route, screenElement, navigation }: any): JSX.Element {
    const [email, setEmail] = useState("")
    const [nome, setNome] = useState("")
    const [profileImage, setProfileImage] = useState(null)
    const [openClose, setOpenClose] = useState(false);

    const [isLoading, setIsLoading] = useState(false)

    const { setUserToken } = route.params

    const removeData = async () => {
        await AsyncStorage.getItem('token', (_, result) => {
            setIsLoading(true)
            fetch(Globals.BASE_URL_API + 'auth/logout', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + result
                },
            }).then(response => {
                if (response.status == 200 || response.status === 401 || response.status === 403) {
                    AsyncStorage.clear().then(() => { setUserToken(null) })
                }
            }).finally(() => {
                setIsLoading(false)
            })
        })
    };

    const getData = async () => {
        await AsyncStorage.getItem('token', (_, result) => {
            fetch(Globals.BASE_URL_API + 'user/profile', {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + result
                },
            }).then(response => {

                if (response.status == 401 || response.status == 403) { removeData() };
                response.json().then((json) => {
                    setProfileImage(json.image)
                    setNome(json.name + ' ' + json.surname)
                    setEmail(json.email)
                })
            }).catch(error => {
                if (error.toString() == "TypeError: Network request failed") {
                }
            })
        })
    }
    useEffect(() => {
        getData()
    }, [nome])
    return (
        <SafeAreaView style={styles.body}>
            {
                isLoading ? <LoadingScreen /> : (<></>)
            }
            <Drawer style={styles.menu}
                drawerStyle={{
                    width: '90%'
                }}
                open={openClose}
                onOpen={() => setOpenClose(true)}
                onClose={() => setOpenClose(false)}
                renderDrawerContent={() => {
                    return <View style={{
                        width: '100%', height: '100%', backgroundColor: Globals.COLOR.LIGHT.COLOR5,
                    }}>

                        <View style={styles.imagemUser}>
                            <View style={{
                                alignSelf: 'center', width: '100%',
                                height: '100%'
                            }}>
                                {profileImage == null ? <UserSVG style={{ marginTop: 10 }} /> : <Image
                                    source={{ uri: Globals.BASE_URL + profileImage }}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: 75
                                    }}
                                />}
                            </View>
                        </View>
                        <View style={{ marginLeft: 20, marginBottom: 30 }}>
                            <Text style={{
                                fontWeight: '300',
                                fontSize: 20,
                                color: '#FFFFFF'
                            }}>
                                <Text style={{ fontWeight: '700' }}>Olá</Text>, {nome}
                            </Text>
                            <Text style={styles.dadosMenu}>{email}</Text>
                        </View>
                        <TouchableOpacity onPress={() => {
                            setOpenClose(false); setTimeout(() => {
                                navigation.navigate('Home')
                            }, 400);
                        }}>
                            <View style={styles.itemMenu}>
                                <HomeSVG style={{ width: 30 }} />
                                <Text style={styles.itemMenuText}>Home</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            setOpenClose(false); setTimeout(() => {
                                navigation.navigate('DashBoard')
                            }, 400);
                        }}>
                            <View style={styles.itemMenu}>
                                <FineSVG />
                                <Text style={styles.itemMenuText}>Finanças</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            setOpenClose(false);
                            setTimeout(() => {
                                navigation.navigate('ProfileEdit')
                            }, 400);
                        }}>

                            <View style={styles.itemMenu}>
                                <ConfigSVG />
                                <Text style={styles.itemMenuText}>Configurações</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.containerNomeMenu}>
                            <Text style={styles.nomeApp}>{Globals.APP_NAME1}</Text>
                            <Text style={styles.nomeApp}>{Globals.APP_NAME2}</Text>
                        </View>
                    </View>;
                }}>
                <TouchableOpacity style={{ position: 'absolute', top: 20, left: 15, zIndex: 1000 }} onPress={() => {
                    setOpenClose(true)
                }}>
                    <MenuSVG />
                </TouchableOpacity>
                {screenElement}

            </Drawer>

        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    body: {
        backgroundColor: Globals.COLOR.LIGHT.COLOR4,
        flex: 1
    },
    menu: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 100
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
        borderRadius: Globals.WIDTH * 0.20,
        borderWidth: 4,
        marginTop: 40,
        marginBottom: 10
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
        marginBottom: 15
    },
    itemMenuText: {
        fontWeight: '500',
        fontSize: 16,
        color: Globals.COLOR.LIGHT.COLOR4,
        marginLeft: 15,
        lineHeight: 24
    },
    containerNomeMenu: {
        position: 'absolute',
        bottom: 15,
        alignSelf: 'center'
    },
    nomeApp: {
        width: '100%',
        textAlign: 'center',
        fontFamily: Globals.FONT_FAMILY_NAME_APP.REGULAR,
        fontWeight: '500',
        fontSize: 17,
        lineHeight: 25,
        color: Globals.COLOR.BRANCO,
    }
});

export default Menu;
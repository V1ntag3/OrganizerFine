import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    SafeAreaView
} from 'react-native';

import Globals from '../../Globals';
import { Drawer } from 'react-native-drawer-layout';
import UserSVG from '../../componentes/SVGComponentes/userSVG';
import ConfigSVG from '../../componentes/SVGComponentes/configSVG';
import LogoutSVG from '../../componentes/SVGComponentes/logoutSVG';
import FineSVG from '../../componentes/SVGComponentes/fineSVG';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from './ModalGeneric';
import LogoutSadSVG from '../../componentes/SVGComponentes/logoutSadSVG';
import LoadingScreen from '../LoadingScreen';

function Menu({ route, screenElement, navigation, openClose, setOpenClose }: any): JSX.Element {
    const [email, setEmail] = useState("")
    const [nome, setNome] = useState("")

    const [modalVisible, setModalVisible] = useState(false)

    const [isLoading, setIsLoading] = useState(false)

    const { setUserToken } = route.params

    const removeData = async () => {
        await AsyncStorage.getItem('token', (_, result) => {
            setIsLoading(true)
            fetch(Globals.BASE_URL_API + 'logout/', {
                method: 'POST',
                headers: {
                    'Authorization': 'Token ' + result
                },
            }).then(response => {
                if (response.status == 204) {
                    AsyncStorage.clear().then(() => { setUserToken(null) })
                }
            }).finally(() => {
                setIsLoading(false)
            })
        })
    };

    const getData = async () => {
        await AsyncStorage.getItem('token', (_, result) => {
            fetch(Globals.BASE_URL_API + 'profile/', {
                method: 'GET',
                headers: {
                    'Authorization': 'Token ' + result
                },
            }).then(response => {
                if (response.status == 401 || response.status == 403) { removeData() };
                response.json().then((json) => {
                    setNome(json.first_name + ' ' + json.last_name)
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
    }, [email, nome])
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
                            <View style={{ alignSelf: 'center', marginTop: 10 }}>
                                <UserSVG />
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
                                navigation.navigate('Configuracao')
                            }, 400);
                        }}>

                            <View style={styles.itemMenu}>
                                <ConfigSVG />
                                <Text style={styles.itemMenuText}>Configurações</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            setOpenClose(false);
                            setModalVisible(true)
                        }}>
                            <View style={[styles.itemMenu, { paddingLeft: 17 }]}>
                                <LogoutSVG />
                                <Text style={styles.itemMenuText}>Sair</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.containerNomeMenu}>
                            <Text style={styles.nomeApp}>{Globals.APP_NAME1}</Text>
                            <Text style={styles.nomeApp}>{Globals.APP_NAME2}</Text>
                        </View>
                    </View>;
                }}>
                {screenElement}

                <Modal image={(style: any) => {
                    return <LogoutSadSVG style={style} />
                }} affirmFunc={removeData}
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                    title="Isso não é um adeus"
                    paragraph={Globals.TEXT_LOGOUT}
                    textAffirmButton="Sair..."
                    textNegButton="Não agora"
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                />

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
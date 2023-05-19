/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    TextInput,
} from 'react-native';
import Globals from '../Globals';
import { useEffect, useState } from 'react';
import { Drawer } from 'react-native-drawer-layout';
import FineSVG from '../componentes/SVGComponentes/fineSVG';
import ConfigSVG from '../componentes/SVGComponentes/configSVG';
import LogoutSVG from '../componentes/SVGComponentes/logoutSVG';
import MenuSVG from '../componentes/SVGComponentes/menuSVG';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingScreen from './LoadingScreen';
import UserSVG from '../componentes/SVGComponentes/userSVG';
import EditarSVG from '../componentes/SVGComponentes/editarSVG';
import SaveSVG from '../componentes/SVGComponentes/saveSVG';
import { set } from 'react-native-reanimated';

function Conguracao({ route, navigation }: any): JSX.Element {
    // Variáveis
    const { setUserToken } = route.params
    const [isEditable, setIsEditable] = useState(true)
    const [openClose, setOpenClose] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [token, setToken] = useState('')
    const [nome, setNome] = useState()
    const [email, setEmail] = useState()

    const [nomeNew, setNomeNew] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [emailNew, setEmailNew] = useState('');
    const [senha, setSenha] = useState('');
    const [confirm_senha, setConfSenha] = useState('');

    const [nomeError, setNomeError] = useState(false);
    const [sobreNomeError, setsobreNomeError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [senhaError, setSenhaError] = useState(false);
    const [confirmSenhaError, setConfirmSenhaError] = useState(false);

    const removeData = () => {
        setIsLoading(true)
        fetch(Globals.BASE_URL_API + 'logout/', {
            method: 'POST',
            headers: {
                'Authorization': 'Token ' + token
            },
        }).then(response => {
            if (response.status == 204) {
                AsyncStorage.clear().then(() => { setUserToken(null) })
            }
        }).catch(error => {

        }).finally(() => {
            setIsLoading(false)
        })
    };

    const moveMenu = () => {
        setOpenClose(openClose ? false : true)
    };

    const readData = async () => {
        try {
            const value = await AsyncStorage.getItem('token', (err, result) => {

                fetch(Globals.BASE_URL_API + 'profile/', {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Token ' + result
                    },
                }).then(response => {
                    if (response.status == 401 || response.status == 403) { removeData() };
                    return response.json();
                }).then((json) => {
                    setNome(json.first_name + ' ' + json.last_name)
                    setEmail(json.email)

                    setNomeNew(json.first_name)
                    setSobrenome(json.last_name)
                    setEmailNew(json.email)

                }).catch(error => {
                    if (error.toString() == "TypeError: Network request failed") {
                    }
                }).finally(() => {
                })

            })

            if (value !== null) {
                setToken(value);
            }
        } catch (e) {
            navigation.navigate('Welcome')
        }
    };
    const isEmail = (email: String) => {
        const emailRegex = /^([a-zA-Z][^<>\"!@[\]#$%¨&*()~^:;ç,\-´`=+{}º\|/\\?]{1,})@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return emailRegex.test(String(email).toLowerCase())
    }
    const mandarDados = () => {
        setNomeError(nome == "" ? true : false)
        setsobreNomeError(sobrenome == "" ? true : false)
        setEmailError(email == "" || !isEmail(emailNew) ? true : false)
        setSenhaError(senha == "" || (senha != confirm_senha) ? true : false)
        setConfirmSenhaError(confirm_senha == "" || (senha != confirm_senha) ? true : false)

        if (nome != "" && sobrenome != "" && email != "" && senha != "" && confirm_senha != "" && (senha == confirm_senha) && isEmail(email)) {
            setIsLoading(true)
            fetch(Globals.BASE_URL_API + 'profile/', {
                method: 'PUT',
                headers: {
                        'Authorization': 'Token ' + token,
                        "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    'username': email,
                    'first_name': nome,
                    'last_name': sobrenome,
                    'email': email,
                    'password': senha
                })
            }).then(response => {
                if(response.status == 200){
                    removeData()
                }
                return response.json();
            }
            ).catch(error => {
                console.log(error)
            });

        }
    }

    useEffect(() => {
        readData();
    }, []);

    const renderLoad = () => {
        return (<>
            <LoadingScreen />
        </>)
    }

    const renderTela = () => {
        return (
            <Drawer style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                zIndex: 100
            }}
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

                        <TouchableOpacity onPress={() => { setOpenClose(false); removeData() }}>
                            <View style={[styles.itemMenu, { paddingLeft: 17 }]}>
                                <LogoutSVG />
                                <Text style={styles.itemMenuText}>Sair</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.containerNomeMenu}>
                            <Text style={styles.nomeApp}>{Globals.APP_NAME1}</Text>
                            <Text style={styles.nomeApp}>{Globals.APP_NAME2}</Text>
                        </View>
                    </View>
                }} >
                <ScrollView showsVerticalScrollIndicator={false} style={{ maxHeight: Globals.HEIGHT }}>
                    <View style={{ height: Globals.HEIGHT - 25 }}>
                        <TouchableOpacity style={{ position: 'absolute', top: 20, left: 15, zIndex: 1000 }} onPress={moveMenu}>
                            <MenuSVG />
                        </TouchableOpacity>
                        {
                            isEditable ? (<TouchableOpacity style={{ position: 'absolute', top: 20, right: 15, zIndex: 1000 }} onPress={() => setIsEditable(false)}>
                                <EditarSVG />
                            </TouchableOpacity>) : (<TouchableOpacity style={{ position: 'absolute', top: 20, right: 15, zIndex: 1000 }} onPress={() => mandarDados()}>
                                <SaveSVG />
                            </TouchableOpacity>)
                        }
                        <Text style={styles.tituloView}>Configuração</Text>

                        <TextInput style={[styles.inputStyle, isEditable ? { backgroundColor: Globals.COLOR.LIGHT.COLOR5 } : { backgroundColor: Globals.COLOR.LIGHT.COLOR1 }, {marginTop:Globals.HEIGHT * 0.10}]}
                            value={nomeNew}
                            selectionColor="white"
                            maxLength={20}
                            placeholderTextColor={nomeError ? Globals.COLOR_ERROR : 'white'}
                            onChangeText={text => { setNomeNew(text) }}
                            placeholder="Nome" />
                        <Text style={[styles.errorStyle, { display: nomeError ? 'flex' : 'none' }]} >Campo inválido</Text>

                        <TextInput style={[styles.inputStyle, isEditable ? { backgroundColor: Globals.COLOR.LIGHT.COLOR5 } : { backgroundColor: Globals.COLOR.LIGHT.COLOR1 }]}
                            value={sobrenome}
                            selectionColor="white"
                            maxLength={20}
                            placeholderTextColor={sobreNomeError ? Globals.COLOR_ERROR : 'white'}
                            onChangeText={text => { setSobrenome(text) }}
                            placeholder="Sobrenome" />
                        <Text style={[styles.errorStyle, { display: sobreNomeError ? 'flex' : 'none' }]} >Campo inválido</Text>

                        <TextInput style={[styles.inputStyle, isEditable ? { backgroundColor: Globals.COLOR.LIGHT.COLOR5 } : { backgroundColor: Globals.COLOR.LIGHT.COLOR1 }]}
                            value={emailNew}
                            selectionColor="white"
                            maxLength={20}
                            placeholderTextColor={emailError ? Globals.COLOR_ERROR : 'white'}
                            onChangeText={text => { setEmailNew(text) }}
                            placeholder="Email" />
                        <Text style={[styles.errorStyle, { display: emailError ? 'flex' : 'none' }]}  >Campo inválido</Text>
                        {
                            !isEditable && (
                                <>
                                    <TextInput style={[styles.inputStyle, isEditable ? { backgroundColor: Globals.COLOR.LIGHT.COLOR5 } : { backgroundColor: Globals.COLOR.LIGHT.COLOR1 }]}
                                        selectionColor="white"
                                        maxLength={20}
                                        placeholderTextColor={senhaError ? Globals.COLOR_ERROR : 'white'}
                                        onChangeText={text => { setSenha(text); }}
                                        placeholder="Senha" />
                                    <Text style={[styles.errorStyle, { display: senhaError ? 'flex' : 'none' }]}>Campo inválido</Text>
                                    <TextInput style={[styles.inputStyle, isEditable ? { backgroundColor: Globals.COLOR.LIGHT.COLOR5 } : { backgroundColor: Globals.COLOR.LIGHT.COLOR1 }]}
                                        selectionColor="white"
                                        maxLength={20}
                                        placeholderTextColor={confirmSenhaError ? Globals.COLOR_ERROR : 'white'}
                                        onChangeText={text => { setConfSenha(text); }}
                                        placeholder="Confirmar senha" />
                                    <Text style={[styles.errorStyle, { display: confirmSenhaError ? 'flex' : 'none' }]}>Campo inválido</Text>
                                </>

                            )
                        }

                    </View>
                </ScrollView>
            </Drawer>
        )
    }

    return (
        <SafeAreaView style={styles.body}>
            {
                isLoading ? renderLoad() : (<></>)
            }
            {renderTela()}


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    tituloView: {
        fontFamily: Globals.FONT_FAMILY.SEMIBOLD,
        fontWeight: '600',
        fontSize: 24,
        textAlign: 'center',
        color: Globals.COLOR.BRANCO,
        marginTop: 15
    },
    body: {
        backgroundColor: Globals.COLOR.LIGHT.COLOR4,
        flex: 1
    },
    scrollView: {
        minHeight: Globals.HEIGHT,

    },
    inputStyle: {
        alignItems: 'center',
        paddingVertical: 10.75309,
        paddingHorizontal: 11.0905,
        paddingBottom: 0,
        width: '100%',
        height: 49.65,
        maxWidth: '90%',
        alignSelf: 'center',
        marginVertical: 8,
        marginBottom: 5,
        backgroundColor: Globals.COLOR.BRANCO,
        fontFamily: Globals.FONT_FAMILY.REGULAR,
        color: 'white',
        borderRadius: 6.96875,
    },
    esqueciSenha: {
        paddingLeft: 3,
        width: '100%',
        maxWidth: 338.89,
        marginLeft: 'auto',
        marginRight: 'auto',
        color: Globals.COLOR.BRANCO,
        fontSize: 13,
        lineHeight: 16,
        fontFamily: Globals.FONT_FAMILY.MEDIUM
    },
    errorStyle: {
        paddingLeft: 7,
        width: '100%',
        maxWidth: 338.89,
        marginLeft: 'auto',
        marginRight: 'auto',
        color: Globals.COLOR_ERROR,
        fontSize: 11,
        lineHeight: 12,
        fontFamily: Globals.FONT_FAMILY.MEDIUM,
    },
    containerInput: {
        paddingTop: Globals.HEIGHT * 0.3
    },
    containerNome: {
        position: 'absolute',
        bottom: 15,
        left: 25
    },
    nomeApp: {
        width: '100%',
        textAlign: 'center',
        fontFamily: Globals.FONT_FAMILY_NAME_APP.REGULAR,
        fontWeight: '500',
        fontSize: 17,
        lineHeight: 25,
        color: Globals.COLOR.BRANCO,
    },
    imagemOffice: {
        width: 300,
        height: 300,
        position: 'absolute',
        right: -45,
        bottom: -20
    },
    containerBotoes: {
        width: '100%',
        marginBottom: 100
    },
    botaoGrande: {
        alignItems: 'center',
        paddingVertical: 10.75309,
        paddingHorizontal: 11.0905,
        width: '100%',
        height: 49.65,
        borderRadius: 6.96875,
        maxWidth: 338.89,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginVertical: 8
    },
    textoBotaoGrande: {
        fontFamily: Globals.FONT_FAMILY.REGULAR,
        fontWeight: '500',
        fontSize: 25.3498,
        lineHeight: 30
    },
    botaoVerdeClaro: {
        backgroundColor: Globals.COLOR.LIGHT.COLOR3,
    },
    textBotaoVerdeClaro: {
        color: Globals.COLOR.BRANCO,
    },
    botaoBranco: {
        backgroundColor: Globals.COLOR.BRANCO,
    },
    textBotaoBranco: {
        color: Globals.COLOR.LIGHT.COLOR3,
    },
    pastaSVGStyle: {
        position: 'absolute',
        right: 0,
        bottom: -20
    },
    notebookSVGStyle: {
        position: 'absolute',
        right: 0,
        top: 0,
    }, dadosMenu: {
        fontFamily: Globals.FONT_FAMILY.REGULAR,
        fontWeight: '500',
        fontSize: 14,
        color: '#FFFFFF',
        lineHeight: 20,
    },
    imagemUser: {
        width: Globals.WIDTH * 0.4,
        height: Globals.WIDTH * 0.4,
        backgroundColor: Globals.COLOR.LIGHT.COLOR1,
        borderColor: Globals.COLOR.LIGHT.COLOR4,
        borderRadius: Globals.WIDTH * 0.20,
        borderWidth: 4,
        marginHorizontal: Globals.WIDTH * 0.25,
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
    }
});

export default Conguracao;

import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
    ScrollView,
}
    from 'react-native';
import React from 'react';
import ButtonGeneric from '../componentes/ButtonGeneric'
import TituloPagina from '../componentes/TituloPaginaLoginRegistrar'
import PastaSVG from '../componentes/SVGComponentes/pastaSVG'
import NotebookSVG from '../componentes/SVGComponentes/notebookSVG'
import { useState } from 'react';
import FundoPagina from '../componentes/FundoPaginaLoginRegistrar';
import Globals from '../Globals';
import fetch from 'cross-fetch';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingScreen from './LoadingScreen';

function Login({ route, navigation }: any): JSX.Element {
    const [isLoading, setIsLoading] = useState(false)
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [senhaError, setSenhaError] = useState(false);

    const isEmail = (email: String) => {
        const emailRegex = /^([a-zA-Z][^<>\"!@[\]#$%¨&*()~^:;ç,\-´`=+{}º\|/\\?]{1,})@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return emailRegex.test(String(email).toLowerCase())
    }

    const logar = () => {

        setEmailError(email == "" || !isEmail(email) ? true : false)
        setSenhaError(senha == "" ? true : false)

        if (senha != "" && email != "" && isEmail(email)) {
            setIsLoading(true)
            fetch(Globals.BASE_URL_API + 'login/', {
                method: 'POST',
                body: JSON.stringify({
                    username: email,
                    password: senha
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }).then((response) => {
                if (response.status == 400) {
                    setSenhaError(true)
                    setEmailError(true)
                }
                if (response.status == 200) {
                    setSenhaError(false)
                    setEmailError(false)
                    response.json().then(json => {
                        AsyncStorage.setItem('token', json.token, () => {
                            const { setUserToken } = route.params
                            setUserToken(json.token)
                        });
                    })
                }
            }).catch((error) => { }).finally(() => {
                setIsLoading(false)
            });
        }
    }

    const renderLoad = () => {
        return (<><LoadingScreen /></>)
    }

    const renderTela = () => {

        return (
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
                <TituloPagina title='Login' navigation={navigation} />
                <FundoPagina />
                <View style={[styles.containerInput, { zIndex: 0 }]}>
                    <TextInput style={styles.inputStyle}
                        selectionColor="black"
                        maxLength={20}
                        placeholderTextColor={emailError ? Globals.COLOR_ERROR : '#323941'}
                        onChangeText={(text) => setEmail(text)}
                        placeholder="Email" />
                    <TextInput style={styles.inputStyle}
                        secureTextEntry={true}

                        placeholderTextColor={senhaError ? Globals.COLOR_ERROR : '#323941'}
                        selectionColor="black"
                        onChangeText={(text) => setSenha(text)}
                        placeholder="Senha" />
                    <Text style={[styles.errorStyle, { display: senhaError || emailError ? 'flex' : 'none' }]}  >Email e/ou Senha inválido(s)</Text>
                    {/* <TouchableOpacity onPress={() => navigation.navigate('EsqueciSenha')} >
                        <View>
                            <Text style={[styles.esqueciSenha]} >esqueci a senha</Text>
                        </View>
                    </TouchableOpacity> */}
                    <View style={styles.containerBotoes}>
                        <ButtonGeneric styleButton={[styles.botaoVerdeClaro, styles.botaoGrande]} styleText={[styles.textBotaoVerdeClaro, styles.textoBotaoGrande]} onPress={logar} title={"Login"} />
                    </View>
                </View>
                <NotebookSVG style={styles.notebookSVGStyle} width={103} height={103} />
                <View style={styles.containerNome}>
                    <Text style={styles.nomeApp}>{Globals.APP_NAME1}</Text>
                    <Text style={styles.nomeApp}>{Globals.APP_NAME2}</Text>
                </View>
                <PastaSVG style={styles.pastaSVGStyle} width={143} height={143} />
            </ScrollView>)
    }
    return (
        <SafeAreaView style={styles.body}>
            {
                isLoading == true ? renderLoad() : (<></>)
            }
            {renderTela()}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: Globals.COLOR.LIGHT.COLOR2,
        flex: 1,
        height: Globals.HEIGHT
    },
    scrollView: {
        minHeight: Globals.HEIGHT,
    },
    inputStyle: {
        alignItems: 'center',
        paddingVertical: 10.75309,
        paddingHorizontal: 11.0905,
        width: '100%',
        height: 49.65,
        borderRadius: 6.96875,
        maxWidth: 338.89,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginVertical: 8,
        marginBottom: 4,
        backgroundColor: Globals.COLOR.BRANCO,
        fontFamily: Globals.FONT_FAMILY.REGULAR,
        color: '#323941'
    },
    esqueciSenha: {
        marginTop: 10,
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
        paddingLeft: 3,
        width: '100%',
        maxWidth: 338.89,
        marginLeft: 'auto',
        marginRight: 'auto',
        color: Globals.COLOR_ERROR,
        fontSize: 11,
        lineHeight: 12,
        fontFamily: Globals.FONT_FAMILY.MEDIUM
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
    }
});

export default Login;

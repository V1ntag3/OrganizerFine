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
import ButtonGeneric from '../components/ButtonGeneric'
import TituloPagina from '../components/TituloPaginaLoginRegistrar'
import PastaSVG from '../components/SVGComponentes/pastaSVG'
import NotebookSVG from '../components/SVGComponentes/notebookSVG'
import { useState } from 'react';
import FundoPagina from '../components/FundoPaginaLoginRegistrar';
import Globals from '../Globals';
import fetch from 'cross-fetch';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingScreen from './LoadingScreen';
import * as Animatable from 'react-native-animatable'

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
            fetch(Globals.BASE_URL_API + 'auth/login', {
                method: 'POST',
                body: JSON.stringify({
                    email: email,
                    password: senha
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }).then((response) => {
                if (response.status == 404) {
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
                response.text().then(text => {
                }
                )
            }).catch((error) => {
                console.log(error)
            }).finally(() => {
                setIsLoading(false)
            });
        }
    }

    const screen =
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
            <TituloPagina title='Login' navigation={navigation} />
            <FundoPagina />
            <View style={[styles.containerInput, { zIndex: 0 }]}>
                <Animatable.View delay={100}
                    useNativeDriver={true} animation='fadeInLeft' duration={300}>
                    <TextInput
                        style={styles.inputStyle}
                        selectionColor="black"
                        placeholderTextColor={emailError ? Globals.COLOR_ERROR : '#323941'}
                        onChangeText={(text) => setEmail(text)}
                        placeholder="Email" />
                </Animatable.View>
                <Animatable.View delay={300}
                    useNativeDriver={true} animation='fadeInLeft' duration={300}>
                    <TextInput style={styles.inputStyle}
                        secureTextEntry={true}
                        placeholderTextColor={senhaError ? Globals.COLOR_ERROR : '#323941'}
                        selectionColor="black"
                        onChangeText={(text) => setSenha(text)}
                        placeholder="Senha" />
                </Animatable.View>
                <Text style={[styles.errorStyle, { display: senhaError || emailError ? 'flex' : 'none' }]}  >Email e/ou Senha inválido(s)</Text>
                {/* <TouchableOpacity onPress={() => navigation.navigate('EsqueciSenha')} >
                        <View>
                            <Text style={[styles.esqueciSenha]} >esqueci a senha</Text>
                        </View>
                    </TouchableOpacity> */}
                <Animatable.View delay={500} useNativeDriver={true} animation='fadeInLeft' duration={300} style={styles.containerBotoes}>
                    <ButtonGeneric styleButton={[styles.botaoVerdeClaro, styles.botaoGrande]} styleText={[styles.textBotaoVerdeClaro, styles.textoBotaoGrande]} onPress={logar} title={"Login"} />
                </Animatable.View>
            </View>
            <NotebookSVG style={styles.notebookSVGStyle} width={103} height={103} />
            <View style={styles.containerNome}>
                <Text style={styles.nomeApp}>{Globals.APP_NAME1}</Text>
                <Text style={styles.nomeApp}>{Globals.APP_NAME2}</Text>
            </View>
            <PastaSVG style={styles.pastaSVGStyle} width={143} height={143} />
        </ScrollView>

    return (
        <SafeAreaView style={styles.body}>
            {
                isLoading == true ? <LoadingScreen /> : (<></>)
            }
            {screen}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: Globals.COLOR.LIGHT.COLOR2,
        height: Globals.HEIGHT,
        maxHeight: Globals.HEIGHT
    },
    scrollView: {
        minHeight: Globals.HEIGHT - 24,
        maxHeight: Globals.HEIGHT
    },
    inputStyle: {
        alignItems: 'center',
        paddingVertical: 10.75309,
        paddingHorizontal: 11.0905,
        width: '100%',
        height: 49.65,
        borderRadius: 6.96875,
        maxWidth: '90%',
        alignSelf: 'center',
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
        maxWidth: '90%',
        alignSelf: 'center',
        color: Globals.COLOR.BRANCO,
        fontSize: 13,
        lineHeight: 16,
        fontFamily: Globals.FONT_FAMILY.MEDIUM
    },
    errorStyle: {
        paddingLeft: 3,
        width: '100%',
        maxWidth: '90%',
        alignSelf: 'center',
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
        maxWidth: '90%',
        alignSelf: 'center',
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

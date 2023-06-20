import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
} from 'react-native';

import Globals from '../../Globals';
import { useState } from 'react';
import ButtonGeneric from '../../componentes/ButtonGeneric';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable'

function FormRegister({ load, token }: any): JSX.Element {

    const { setUserToken } = token
    const { setIsLoading } = load
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirm_senha, setConfSenha] = useState('');

    const [nomeError, setNomeError] = useState(false);
    const [sobreNomeError, setsobreNomeError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [senhaError, setSenhaError] = useState(false);
    const [confirmSenhaError, setConfirmSenhaError] = useState(false);
    const [cadastradoError, setCadastradoError] = useState(false)

    const isEmail = (email: String) => {
        const emailRegex = /^([a-zA-Z][^<>\"!@[\]#$%¨&*()~^:;ç,\-´`=+{}º\|/\\?]{1,})@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return emailRegex.test(String(email).toLowerCase())
    }
    const validarRegistrar = () => {
        setNomeError(nome == "" ? true : false)
        setsobreNomeError(sobrenome == "" ? true : false)
        setEmailError(email == "" || !isEmail(email) ? true : false)
        setSenhaError(senha == "" || (senha != confirm_senha) ? true : false)
        setConfirmSenhaError(confirm_senha == "" || (senha != confirm_senha) ? true : false)
        setCadastradoError(false)

        if (nome != "" && sobrenome != "" && email != "" && senha != "" && confirm_senha != "" && (senha == confirm_senha) && isEmail(email)) {
            setIsLoading(true)
            fetch(Globals.BASE_URL_API + 'register/', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    'username': email.toLowerCase(),
                    'first_name': nome,
                    'last_name': sobrenome,
                    'email': email.toLowerCase(),
                    'password': senha
                })
            }).then(response => {
                response.json().then((json) => {
                    if (json.token) {
                        AsyncStorage.setItem('token', json.token, () => {
                            setUserToken(json.token)
                        });
                    } else {
                        if (json.username == "Um usuário com este nome de usuário já existe.") {
                            setCadastradoError(true)

                        }

                    }

                }
                );
            }).finally(() => {
                setIsLoading(false)
            });

        }
    }
    return (

        <SafeAreaView style={styles.body}>
            <View style={styles.containerInput}>
                <Animatable.View delay={100}
                    useNativeDriver={true} animation='fadeInLeft' duration={300}>
                    <TextInput style={styles.inputStyle}
                        value={nome}
                        placeholderTextColor={nomeError ? Globals.COLOR_ERROR : '#323941'}
                        selectionColor="black"
                        placeholder="Nome"
                        onChangeText={text => { setNome(text) }}

                    />
                    <Text style={[styles.errorStyle, { display: nomeError ? 'flex' : 'none' }]}>Campo inválido</Text>
                </Animatable.View>
                <Animatable.View delay={300}
                    useNativeDriver={true} animation='fadeInLeft' duration={300}>
                    <TextInput style={styles.inputStyle}
                        value={sobrenome}
                        placeholderTextColor={sobreNomeError ? Globals.COLOR_ERROR : '#323941'}
                        selectionColor="black"
                        placeholder="Sobrenome"
                        onChangeText={text => { setSobrenome(text) }}

                    />
                    <Text style={[styles.errorStyle, { display: sobreNomeError ? 'flex' : 'none' }]} >Campo inválido</Text>
                </Animatable.View>
                <Animatable.View delay={500}
                    useNativeDriver={true} animation='fadeInLeft' duration={300}>
                    <TextInput style={styles.inputStyle}

                        value={email}
                        placeholderTextColor={emailError ? Globals.COLOR_ERROR : '#323941'}
                        selectionColor="black"
                        placeholder="Email"
                        inputMode='email'
                        onChangeText={text => { setEmail(text) }}

                    />
                    <Text style={[styles.errorStyle, { display: emailError ? 'flex' : 'none' }]}  >Campo inválido</Text>
                    <Text style={[styles.errorStyle, { display: cadastradoError ? 'flex' : 'none' }]}  >Email já cadastrado</Text>
                </Animatable.View>
                <Animatable.View delay={700}
                    useNativeDriver={true} animation='fadeInLeft' duration={300}>
                    <TextInput style={styles.inputStyle}
                        value={senha}
                        placeholderTextColor={senhaError ? Globals.COLOR_ERROR : '#323941'}
                        selectionColor="black"
                        placeholder="Senha"
                        secureTextEntry={true}
                        onChangeText={text => { setSenha(text) }}

                    />
                    <Text style={[styles.errorStyle, { display: senhaError ? 'flex' : 'none' }]}  >Campo inválido</Text>
                </Animatable.View>
                <Animatable.View delay={900}
                    useNativeDriver={true} animation='fadeInLeft' duration={300}>
                    <TextInput style={styles.inputStyle}
                        value={confirm_senha}
                        placeholderTextColor={confirmSenhaError ? Globals.COLOR_ERROR : '#323941'}
                        selectionColor="black"
                        placeholder="Confirmar Senha"
                        onChangeText={text => { setConfSenha(text) }}
                        secureTextEntry={true}


                    />
                    <Text style={[styles.errorStyle, { display: confirmSenhaError ? 'flex' : 'none' }]}  >Campo inválido</Text>
                </Animatable.View>
                <Animatable.View delay={1100}
                    useNativeDriver={true} animation='fadeInLeft' duration={300} style={styles.containerBotoes}>
                    <ButtonGeneric styleButton={[styles.botaoVerdeClaro, styles.botaoGrande]} styleText={[styles.textBotaoVerdeClaro, styles.textoBotaoGrande]} onPress={validarRegistrar} title={"Registrar"} />
                </Animatable.View>
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    inputStyle: {
        alignItems: 'center',
        paddingVertical: 10.75309,
        paddingHorizontal: 11.0905,
        width: '100%',
        height: 49.65,
        borderRadius: 6.96875,
        maxWidth: '90%',
        alignSelf:'center',
        marginVertical: 8,
        marginBottom: 4,
        backgroundColor: Globals.COLOR.BRANCO,
        fontFamily: Globals.FONT_FAMILY.REGULAR,
        color: '#323941'
    },
    errorStyle: {
        paddingLeft: 3,
        width: '100%',
        maxWidth: '90%',
        alignSelf:'center',
        color: Globals.COLOR_ERROR,
        fontSize: 11,
        lineHeight: 12,
        fontFamily: Globals.FONT_FAMILY.MEDIUM
    },
    containerInput: {
        marginTop: Globals.HEIGHT * 0.25
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
        alignSelf:'center',
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
    }
});

export default FormRegister;

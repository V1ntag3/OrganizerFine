import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
} from 'react-native';

import Globals from '../Globals';
import { useState } from 'react';
import ButtonGeneric from './ButtonGeneric';
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
    const [mobile, setMobile] = useState('');

    // Controlar erros
    const [errors, setErrors] = useState(
        {
            nome: false,
            sobrenome: false,
            email: false,
            mobile:false,
            senha: false,
            confirm_senha: false,
            cadastrado:false
        }
    )

    const isEmail = (email: String) => {
        const emailRegex = /^([a-zA-Z][^<>\"!@[\]#$%¨&*()~^:;ç,\-´`=+{}º\|/\\?]{1,})@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return emailRegex.test(String(email).toLowerCase())
    }
    const validarRegistrar = () => {
        var obj_error = {
            nome: nome == "" ? true : false,
            sobrenome: sobrenome == "" ? true : false,
            email: email == "" || !isEmail(email) ? true : false,
            mobile:mobile.length != 15 ? true : false,
            senha: senha == "" || (senha != confirm_senha) ? true : false,
            confirm_senha: confirm_senha == "" || (senha != confirm_senha) ? true : false,
            cadastrado:false
        }
        const hasError = Object.values(obj_error).some(value => value);

        if (!hasError) {
            setIsLoading(true)
            fetch(Globals.BASE_URL_API + 'register/', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    'username': email.toLowerCase(),
                    'name': nome,
                    'surname': sobrenome,
                    'email': email.toLowerCase(),
                    'password': senha,
                    'mobile': mobile,
                    'app': "ORGANIZERFINE"
                })
            }).then(response => {
                response.json().then((json) => {
                    if (json.token) {
                        AsyncStorage.setItem('token', json.token, () => {
                            setUserToken(json.token)
                        });
                    } else {
                        if (json.username == "Um usuário com este nome de usuário já existe.") {
                            setErrors({...obj_error,cadastrado:true})
                        }

                    }

                }
                );
            }).finally(() => {
                setIsLoading(false)
            });

        }else{
            setErrors(obj_error)
        }
    }
    return (

        <SafeAreaView style={styles.body}>
            <View style={styles.containerInput}>
                <Animatable.View delay={100}
                    useNativeDriver={true} animation='fadeInLeft' duration={300}>
                    <TextInput style={styles.inputStyle}
                        value={nome}
                        placeholderTextColor={errors.nome ? Globals.COLOR_ERROR : '#323941'}
                        selectionColor="black"
                        placeholder="Nome"
                        onChangeText={text => { setNome(text) }}

                    />
                    <Text style={[styles.errorStyle, { display: errors.nome ? 'flex' : 'none' }]}>Campo inválido</Text>
                </Animatable.View>
                <Animatable.View delay={300}
                    useNativeDriver={true} animation='fadeInLeft' duration={300}>
                    <TextInput style={styles.inputStyle}
                        value={sobrenome}
                        placeholderTextColor={errors.sobrenome ? Globals.COLOR_ERROR : '#323941'}
                        selectionColor="black"
                        placeholder="Sobrenome"
                        onChangeText={text => { setSobrenome(text) }}

                    />
                    <Text style={[styles.errorStyle, { display: errors.sobrenome ? 'flex' : 'none' }]} >Campo inválido</Text>
                </Animatable.View>
                <Animatable.View delay={500}
                    useNativeDriver={true} animation='fadeInLeft' duration={300}>
                    <TextInput style={styles.inputStyle}

                        value={email}
                        placeholderTextColor={errors.email ? Globals.COLOR_ERROR : '#323941'}
                        selectionColor="black"
                        placeholder="Email"
                        inputMode='email'
                        onChangeText={text => { setEmail(text) }}

                    />
                    <Text style={[styles.errorStyle, { display: errors.email ? 'flex' : 'none' }]}  >Campo inválido</Text>
                    <Text style={[styles.errorStyle, { display: errors.cadastrado ? 'flex' : 'none' }]}  >Email já cadastrado</Text>
                </Animatable.View>
                <Animatable.View delay={700}
                    useNativeDriver={true} animation='fadeInLeft' duration={300}>
                    <TextInput style={styles.inputStyle}
                        maxLength={15}
                        value={mobile}
                        placeholderTextColor={errors.mobile ? Globals.COLOR_ERROR : '#323941'}
                        selectionColor="black"
                        placeholder="Celular"
                        inputMode='tel'
                        onChangeText={text => {
                            const cleanedText = text.replace(/\D/g, '');

                            // Aplica a máscara dinamicamente enquanto o usuário digita
                            let formattedText = '';
                            if (cleanedText.length <= 2) {
                              formattedText = `(${cleanedText}`;
                            } else if (cleanedText.length <= 7) {
                              formattedText = `(${cleanedText.slice(0, 2)}) ${cleanedText.slice(2)}`;
                            } else {
                              formattedText = `(${cleanedText.slice(0, 2)}) ${cleanedText.slice(2, 7)}-${cleanedText.slice(7)}`;
                            }
                        
                            setMobile(formattedText);                            setMobile(formattedText)
                        }}

                    />
                    <Text style={[styles.errorStyle, { display: errors.email ? 'flex' : 'none' }]}  >Campo inválido</Text>
                    <Text style={[styles.errorStyle, { display: errors.cadastrado ? 'flex' : 'none' }]}  >Email já cadastrado</Text>
                </Animatable.View>
                <Animatable.View delay={900}
                    useNativeDriver={true} animation='fadeInLeft' duration={300}>
                    <TextInput style={styles.inputStyle}
                        value={senha}
                        placeholderTextColor={errors.senha ? Globals.COLOR_ERROR : '#323941'}
                        selectionColor="black"
                        placeholder="Senha"
                        secureTextEntry={true}
                        onChangeText={text => { setSenha(text) }}

                    />
                    <Text style={[styles.errorStyle, { display: errors.senha ? 'flex' : 'none' }]}  >Campo inválido</Text>
                </Animatable.View>
                <Animatable.View delay={1100}
                    useNativeDriver={true} animation='fadeInLeft' duration={300}>
                    <TextInput style={styles.inputStyle}
                        value={confirm_senha}
                        placeholderTextColor={errors.confirm_senha ? Globals.COLOR_ERROR : '#323941'}
                        selectionColor="black"
                        placeholder="Confirmar Senha"
                        onChangeText={text => { setConfSenha(text) }}
                        secureTextEntry={true}


                    />
                    <Text style={[styles.errorStyle, { display: errors.confirm_senha  ? 'flex' : 'none' }]}  >Campo inválido</Text>
                </Animatable.View>
                <Animatable.View delay={1300}
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
        alignSelf: 'center',
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
        alignSelf: 'center',
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
    }
});

export default FormRegister;

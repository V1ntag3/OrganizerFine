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
    TextInput,
    ScrollView,
} from 'react-native';
import ButtonGeneric from '../componentes/ButtonGeneric'
import TituloPagina from '../componentes/TituloPaginaLoginRegistrar'
import PastaSVG from '../componentes/SVGComponentes/pastaSVG'
import NotebookSVG from '../componentes/SVGComponentes/notebookSVG'
import { useState } from 'react';
import FundoPagina from '../componentes/FundoPaginaLoginRegistrar';
import Globals from '../Globals';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingScreen from './LoadingScreen';

type registrarProps = {
    navigation: any;
    route: any
}


function Registrar({ route, navigation }: any): JSX.Element {
    const [isLoading, setIsLoading] = useState(false)
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

    const { setUserToken } = route.params

    const validarRegistrar = () => {
        setNomeError(nome == "" ? true : false)
        setsobreNomeError(sobrenome == "" ? true : false)
        setEmailError(email == "" ? true : false)
        setSenhaError(senha == "" || (senha != confirm_senha) ? true : false)
        setConfirmSenhaError(confirm_senha == "" ? true : false)


        if (nome != "" && sobrenome != "" && email != "" && senha != "" && confirm_senha != "" && (senha == confirm_senha)) {

            fetch(Globals.BASE_URL_API + 'register/', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    'username': email,
                    'first_name': nome,
                    'last_name': sobrenome,
                    'email': email,
                    'password': senha
                })
            }).then(response => {
                return response.json();
            }
            ).then((json) => {
                AsyncStorage.setItem('token', json.token, () => {
                    setUserToken(json.token)
                });


            });

        }
    }
    const renderLoad = () => {
        return (<><LoadingScreen /></>)
    }
    const renderTela = () => {
        return (<ScrollView contentContainerStyle={styles.scrollView}>
            <FundoPagina />
            <TituloPagina title='Registrar' navigation={navigation} />
            <View style={styles.containerInput}>
                <TextInput style={styles.inputStyle}
                    value={nome}
                    placeholderTextColor={nomeError ? '#FD6161' : '#323941'}
                    selectionColor="black"
                    placeholder="Nome"
                    onChangeText={text => { setNome(text) }}

                />
                <Text style={[styles.errorStyle, { display: nomeError ? 'flex' : 'none' }]} >Campo inválido</Text>
                <TextInput style={styles.inputStyle}
                    value={sobrenome}
                    placeholderTextColor={sobreNomeError ? '#FD6161' : '#323941'}
                    selectionColor="black"
                    placeholder="Sobrenome"
                    onChangeText={text => { setSobrenome(text) }}

                />
                <Text style={[styles.errorStyle, { display: sobreNomeError ? 'flex' : 'none' }]} >Campo inválido</Text>

                <TextInput style={styles.inputStyle}

                    value={email}
                    placeholderTextColor={emailError ? '#FD6161' : '#323941'}
                    selectionColor="black"
                    placeholder="Email"
                    inputMode='email'
                    onChangeText={text => { setEmail(text) }}

                />
                <Text style={[styles.errorStyle, { display: emailError ? 'flex' : 'none' }]}  >Campo inválido</Text>

                <TextInput style={styles.inputStyle}
                    value={senha}
                    placeholderTextColor={senhaError ? '#FD6161' : '#323941'}
                    selectionColor="black"
                    placeholder="Senha"
                    secureTextEntry={true}
                    onChangeText={text => { setSenha(text) }}

                />
                <Text style={[styles.errorStyle, { display: senhaError ? 'flex' : 'none' }]}  >Campo inválido</Text>
                <TextInput style={styles.inputStyle}
                    value={confirm_senha}
                    placeholderTextColor={confirmSenhaError ? '#FD6161' : '#323941'}
                    selectionColor="black"
                    placeholder="Confirmar Senha"
                    onChangeText={text => { setConfSenha(text) }}
                    secureTextEntry={true}


                />
                <Text style={[styles.errorStyle, { display: confirmSenhaError ? 'flex' : 'none' }]}  >Campo inválido</Text>
                <View style={styles.containerBotoes}>
                    <ButtonGeneric styleButton={[styles.botaoVerdeClaro, styles.botaoGrande]} styleText={[styles.textBotaoVerdeClaro, styles.textoBotaoGrande]} onPress={() => validarRegistrar()} title={"Registrar"} />
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
    },
    scrollView: {
        minHeight: Globals.HEIGHT
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
    errorStyle: {
        paddingLeft: 3,
        width: '100%',
        maxWidth: 338.89,
        marginLeft: 'auto',
        marginRight: 'auto',
        color: '#FD6161',
        fontSize: 11,
        lineHeight: 12,
        fontFamily: Globals.FONT_FAMILY.MEDIUM
    },
    containerInput: {
        marginTop: Globals.HEIGHT * 0.25
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

export default Registrar;

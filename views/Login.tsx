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
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import ButtonGeneric from '../componentes/ButtonGeneric'
import TituloPagina from '../componentes/TituloPaginaLoginRegistrar'
import PastaSVG from '../componentes/SVGComponentes/pastaSVG'
import NotebookSVG from '../componentes/SVGComponentes/notebookSVG'
import { useState } from 'react';
import FundoPagina from '../componentes/FundoPaginaLoginRegistrar';
import Globals from '../Globals';

type props = {
    navigation: any;
}
var login = {
    email: "",
    senha: ""
}

function Login({ navigation }: props["navigation"]): JSX.Element {

    const [emailError, setEmailError] = useState(false);
    const [senhaError, setSenhaError] = useState(false);

    const logar = () => {
        setEmailError(login.email == "" ? true : false)
        setSenhaError(login.senha == "" ? true : false)

        if (emailError && senhaError) {
            navigation.navigate('DashBoard')
            console.log('awdaw')
        }
    }
    return (
        <SafeAreaView style={styles.body}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <TituloPagina title='Login' navigation={navigation} />
                <FundoPagina />
                <View style={[styles.containerInput, { zIndex: 0 }]}>
                    <TextInput style={styles.inputStyle}
                        selectionColor="black"
                        placeholderTextColor={emailError ? '#FD6161' : '#323941'}
                        onChangeText={(text) => login.email = text}
                        placeholder="Email" />
                    <TextInput style={styles.inputStyle}
                        placeholderTextColor={senhaError ? '#FD6161' : '#323941'}
                        selectionColor="black"
                        onChangeText={(text) => login.senha = text}
                        placeholder="Senha" />
                    <Text style={[styles.errorStyle, { display: senhaError ? 'flex' : 'none' }]}  >Email e/ou Senha inválido(s)</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('EsqueciSenha')} >
                        <View>
                            <Text style={[styles.esqueciSenha]}  >esqueci a senha</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.containerBotoes}>
                        <ButtonGeneric styleButton={[styles.botaoVerdeClaro, styles.botaoGrande]} styleText={[styles.textBotaoVerdeClaro, styles.textoBotaoGrande]} onPress={() => logar()} title={"Login"} />
                    </View>
                </View>
                <NotebookSVG style={styles.notebookSVGStyle} width={103} height={103} />
                <View style={styles.containerNome}>
                    <Text style={styles.nomeApp}>ORGANIZER</Text>
                    <Text style={styles.nomeApp}>FINE</Text>
                </View>
                <PastaSVG style={styles.pastaSVGStyle} width={143} height={143} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: Globals.COLOR.LIGHT.COLOR2,
        flex: 1
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
        fontFamily: 'ABSTER',
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

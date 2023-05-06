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

type registrarProps = {
    navigation: any;
}
var registrar = {
    nome: "",
    sobrenome: "",
    email: "",
    celular: "",
    senha: "",
    confirm_senha: ""
}

function Registrar({ navigation }: registrarProps["navigation"]): JSX.Element {

    const [nomeError, setNomeError] = useState(false);
    const [sobreNomeError, setsobreNomeError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [celularError, setCelularError] = useState(false);
    const [senhaError, setSenhaError] = useState(false);
    const [confirmSenhaError, setConfirmSenhaError] = useState(false);

    const validarRegistrar = () => {
        setNomeError(registrar.nome == "" ? true : false)
        setsobreNomeError(registrar.sobrenome == "" ? true : false)
        setEmailError(registrar.email == "" ? true : false)
        setCelularError(registrar.celular == "" ? true : false)
        setSenhaError(registrar.senha == "" || (registrar.senha != registrar.confirm_senha) ? true : false)
        setConfirmSenhaError(registrar.confirm_senha == "" ? true : false)

        if (nomeError && sobreNomeError && emailError && celularError && senhaError && confirmSenhaError) {
            navigation.goBack()
        }
    }
    return (
        <SafeAreaView style={styles.body}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <FundoPagina />
                <TituloPagina title='Registrar' navigation={navigation} />
                <View style={styles.containerInput}>
                    <TextInput style={styles.inputStyle}
                        placeholderTextColor={nomeError ? '#FD6161' : '#323941'}
                        selectionColor="black"
                        onChangeText={(text) => registrar.nome = text}
                        placeholder="Nome" />
                    <Text style={[styles.errorStyle, { display: nomeError ? 'flex' : 'none' }]} >Campo inválido</Text>
                    <TextInput style={styles.inputStyle}
                        placeholderTextColor={sobreNomeError ? '#FD6161' : '#323941'}
                        selectionColor="black"
                        onChangeText={(text) => registrar.sobrenome = text}
                        placeholder="Sobrenome" />
                    <Text style={[styles.errorStyle, { display: sobreNomeError ? 'flex' : 'none' }]} >Campo inválido</Text>

                    <TextInput style={styles.inputStyle}
                        placeholderTextColor={emailError ? '#FD6161' : '#323941'}
                        selectionColor="black"
                        onChangeText={(text) => registrar.email = text}
                        placeholder="Email" />
                    <Text style={[styles.errorStyle, { display: emailError ? 'flex' : 'none' }]}  >Campo inválido</Text>

                    <TextInput style={styles.inputStyle}
                        placeholderTextColor={celularError ? '#FD6161' : '#323941'}
                        selectionColor="black"
                        onChangeText={(text) => registrar.celular = text}
                        placeholder="Celular"
                        keyboardType="numeric" />
                    <Text style={[styles.errorStyle, { display: celularError ? 'flex' : 'none' }]}  >Campo inválido</Text>

                    <TextInput style={styles.inputStyle}
                        placeholderTextColor={senhaError ? '#FD6161' : '#323941'}
                        selectionColor="black"
                        onChangeText={(text) => registrar.senha = text}
                        placeholder="Senha" />
                    <Text style={[styles.errorStyle, { display: senhaError ? 'flex' : 'none' }]}  >Campo inválido</Text>
                    <TextInput style={styles.inputStyle}
                        placeholderTextColor={confirmSenhaError ? '#FD6161' : '#323941'}
                        selectionColor="black"
                        onChangeText={(text) => registrar.confirm_senha = text}
                        placeholder="Confirmar Senha" />
                    <Text style={[styles.errorStyle, { display: confirmSenhaError ? 'flex' : 'none' }]}  >Campo inválido</Text>
                    <View style={styles.containerBotoes}>
                        <ButtonGeneric styleButton={[styles.botaoVerdeClaro, styles.botaoGrande]} styleText={[styles.textBotaoVerdeClaro, styles.textoBotaoGrande]} onPress={() => validarRegistrar()} title={"Registrar"} />
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

export default Registrar;

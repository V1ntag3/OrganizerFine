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
    Dimensions,
    TextInput,
    ScrollView,
} from 'react-native';
import ButtonGeneric from '../componentes/ButtonGeneric'
import TituloPagina from '../componentes/TituloPaginaLoginRegistrar'
import PastaSVG from '../componentes/SVGComponentes/pastaSVG'
import NotebookSVG from '../componentes/SVGComponentes/notebookSVG'
import { useState } from 'react';
import FundoPagina from '../componentes/FundoPaginaLoginRegistrar';

// Dimensoes
type props = {
    navigation: any;
}
var login = {
    email: "",
    senha: ""
}

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

function Login({ navigation }: props["navigation"]): JSX.Element {


    const [emailError, setEmailError] = useState(false);
    const [senhaError, setSenhaError] = useState(false);

    const logar = () => {
        setEmailError(login.email == "" ? true : false)
        setSenhaError(login.senha == "" ? true : false)

        if (emailError && senhaError) {
            navigation.goBack()
        }
    }
    return (
        <SafeAreaView style={styles.body}>
            <ScrollView contentContainerStyle={styles.scrollView} >
                <TituloPagina title='Login' navigation={navigation} />
                <FundoPagina />
                <View style={[styles.containerInput, { zIndex: 0 }]}>

                    <TextInput style={styles.inputStyle}
                        placeholderTextColor="#323941"
                        selectionColor="black"
                        onChangeText={(text) => login.email = text}
                        placeholder="Email" />
                    <Text style={[styles.errorStyle, { display: emailError ? 'flex' : 'none' }]}  >Campo inválido</Text>

                    <TextInput style={styles.inputStyle}
                        placeholderTextColor="#323941"
                        selectionColor="black"
                        onChangeText={(text) => login.senha = text}
                        placeholder="Senha" />
                    <Text style={[styles.errorStyle, { display: senhaError ? 'flex' : 'none' }]}  >Campo inválido</Text>

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
        backgroundColor: '#8EBDB6',
        flex: 1,
    },
    scrollView: {
        height:height
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
        backgroundColor: 'white',
        fontFamily: 'Poppins-Regular',
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
        fontFamily: 'Poppins-Medium'
    },
    containerInput: {
        paddingVertical: height * 0.3,
        paddingTop: height * 0.4,
        paddingBottom: height * 0.2
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
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 17,
        lineHeight: 25,
        color: '#FFFFFF',
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
        fontFamily: 'Poppins-Regular',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 25.3498,
        lineHeight: 30
    },
    botaoVerdeClaro: {
        backgroundColor: '#3E838C',
    },
    textBotaoVerdeClaro: {
        color: 'white',
    },
    botaoBranco: {
        backgroundColor: 'white',
    },
    textBotaoBranco: {
        color: '#3E838C',
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

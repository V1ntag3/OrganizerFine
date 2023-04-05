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
import TituloPagina from '../componentes/TituloPaginaEsqueci'
import { useState } from 'react';
import FundoPagina from '../componentes/FundoPaginaEsqueci';
import EsqueciSVG from '../componentes/SVGComponentes/esqueciSVG';

// Dimensoes
type props = {
    navigation: any;
}
var esqueciSenha = {
    email: "",
}

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

function EsqueciSenha({ navigation }: props["navigation"]): JSX.Element {


    const [emailError, setEmailError] = useState(false);

    const mandarEmail = () => {
        setEmailError(esqueciSenha.email == "" ? true : false)

        if (emailError ) {
            navigation.goBack()
        }
    }
    return (
        <SafeAreaView style={styles.body}>
            <ScrollView contentContainerStyle={styles.scrollView} >
                <TituloPagina title='Esqueceu sua Senha?' navigation={navigation} />
                <FundoPagina />
                <View style={[styles.containerInput, { zIndex: 0 }]}>
                    <Text style={styles.textEsqueci}>
                        Não se preocupe basta digitar o email utilizado no cadastro que lhe enviaremos uma nova senha
                    </Text>
                    <TextInput style={styles.inputStyle}
                        placeholderTextColor="#323941"
                        selectionColor="black"
                        onChangeText={(text) => esqueciSenha.email = text}
                        placeholder="Email" />
                
                    <Text style={[styles.errorStyle, { display: emailError ? 'flex' : 'none' }]}  >Email não cadastrado</Text>

                    <View style={styles.containerBotoes}>
                        <ButtonGeneric styleButton={[styles.botaoVerdeClaro, styles.botaoGrande]} styleText={[styles.textBotaoVerdeClaro, styles.textoBotaoGrande]} onPress={() => mandarEmail()} title={"Enviar"} />
                    </View>
                </View>

                <View style={styles.containerNome}>
                    <Text style={styles.nomeApp}>ORGANIZER</Text>
                    <Text style={styles.nomeApp}>FINE</Text>
                </View>

                <EsqueciSVG style={styles.footerSVGStyle} width={200} height={200} />

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
        color: '#323941',
        marginTop:40
    },
    esqueciSenha:{
        paddingLeft: 3,
        width: '100%',
        maxWidth: 338.89,
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'white',
        fontSize: 13,
        lineHeight: 16,
        fontFamily: 'Poppins-Medium'
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
        paddingTop: height * 0.25,
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
    textEsqueci:{
        textAlign:'justify',
        width: '100%',
        maxWidth: 338.89,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginVertical: 8,
        fontFamily:'Poppins-Regular',
        fontSize:22,
        fontWeight:'400',
        lineHeight:30,
        color:'white'
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
    footerSVGStyle: {
        position: 'absolute',
        right: -20,
        bottom: 0,
    },
    notebookSVGStyle: {
        position: 'absolute',
        right: 0,
        top: 0,
    }
});

export default EsqueciSenha;

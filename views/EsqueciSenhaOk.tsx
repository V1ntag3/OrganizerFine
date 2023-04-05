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
import { useState } from 'react';

import OkSVG from '../componentes/SVGComponentes/okSVG';

// Dimensoes
type props = {
    navigation: any;
}
var esqueciSenha = {
    email: "",
}
var width = Dimensions.get('window').width
var height = Dimensions.get('window').height;

function EsqueciSenhaOk({ navigation }: props["navigation"]): JSX.Element {


  
    return (
        <SafeAreaView style={styles.body}>
            <ScrollView contentContainerStyle={styles.scrollView} >
              
                <View style={[styles.containerInput, { zIndex: 0 }]}>
                    <Text style={styles.textEsqueci}>
                    Sua senha foi enviada com sucesso                  
                      </Text>

                      <OkSVG style={styles.okSVGStyle} width={300} height={300} />


                    <View style={styles.containerBotoes}>
                        <ButtonGeneric styleButton={[styles.botaoVerdeClaro, styles.botaoGrande]} styleText={[styles.textBotaoVerdeClaro, styles.textoBotaoGrande]} onPress={() => navigation.navigate('Login')} title={"Logar"} />
                    </View>
                </View>

                <View style={styles.containerNome}>
                    <Text style={styles.nomeApp}>ORGANIZER</Text>
                    <Text style={styles.nomeApp}>FINE</Text>
                </View>


            </ScrollView>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#195E63',
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
        paddingTop: 10,
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
        textAlign:'left',
        width: '100%',
        maxWidth: 338.89,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginVertical: 8,
        fontFamily:'Poppins-Regular',
        fontSize:34,
        fontWeight:'700',
        lineHeight:52,
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
    okSVGStyle: {
       marginLeft: width * 0.25,
       marginVertical:height * 0.084 
    },
    notebookSVGStyle: {
        position: 'absolute',
        right: 0,
        top: 0,
    }
});

export default EsqueciSenhaOk;

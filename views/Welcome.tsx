/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Dimensions,
  Alert
} from 'react-native';

import OfficeSVG from '../componentes/SVGComponentes/officeSVG';
import ButtonGeneric from '../componentes/ButtonGeneric'
// Dimensoes
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

function Welcome(): JSX.Element {

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.retangulo}></View>

      <View style={styles.caixaTitulos}>
        <Text style={styles.titulo1}>SEJA BEM VINDO(A),</Text>
        <Text style={styles.titulo2}>ORGANIZE SUAS FINANÇAS CONOSCO</Text>
      </View>

      <View style={styles.containerNome}>
        <Text style={styles.nomeApp}>ORGANIZER</Text>
        <Text style={styles.nomeApp}>FINE</Text>
      </View>

      <View style={styles.containerBotoes}>
        <ButtonGeneric styleButton={[styles.botaoVerdeClaro, styles.botaoGrande]} styleText={[styles.textBotaoVerdeClaro,styles.textoBotaoGrande]} onPress={() => Alert.alert('aqui')} title={"Login"}/>
        <ButtonGeneric styleButton={[styles.botaoBranco, styles.botaoGrande]} styleText={[styles.textBotaoBranco,styles.textoBotaoGrande]} onPress={() => Alert.alert('aqui')} title={"Registrar"}/>
      </View>
      <OfficeSVG style={styles.officeSVGStyle} width={height*0.29} height={height*0.29} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#8EBDB6',
    flex: 1
  },
  retangulo: {
    backgroundColor: '#195E63',
    position: 'absolute',
    width: width * 1.53,
    height: height * 0.80,
    left: width / 2 - (width * 1.53 / 2) + width * 0.03,
    top: width / 2 - (height * 0.71 / 2) - (height * 0.04),
    transform: [{ rotate: '-26.71deg' }],
  },
  caixaTitulos: {
    marginTop: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 338.89,
  },
  titulo1: {
    fontStyle: 'normal',
    fontSize: 30,
    lineHeight: 47,
    fontWeight: '600',
    color: '#3E838C',
    fontFamily: 'Poppins-Bold'
  },
  titulo2: {
    fontStyle: 'normal',
    fontSize: 18,
    lineHeight: 27,
    fontWeight: '400',
    color: '#fff',
    fontFamily: 'Poppins-Regular'

  },
  containerNome: {
    marginVertical: height * 0.1,
    marginBottom: height * 0.03
  },
  nomeApp: {
    width: '100%',
    textAlign: 'center',
    fontFamily: 'ABSTER',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 38.5417,
    lineHeight: 45,
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
    width: '100%'
  },
  botaoGrande:{
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
  textoBotaoGrande:{
    fontFamily: 'Poppins-Regular',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 25.3498,
    lineHeight: 30
  },
  botaoVerdeClaro: {
      backgroundColor: '#3E838C',
  },
  textBotaoVerdeClaro:{
   color: 'white',
  },
  botaoBranco: {
      backgroundColor: 'white',
  },
  textBotaoBranco:{
    color: '#3E838C',
  },
  officeSVGStyle:{
    position:'absolute',
    right: -0.03 * width,
    bottom: -0.010 * height
  }
});

export default Welcome;

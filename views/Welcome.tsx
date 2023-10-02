import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import OfficeSVG from '../componentes/SVGComponentes/officeSVG';
import ButtonGeneric from '../componentes/ButtonGeneric'
import Globals from '../Globals';
import * as Animatable from 'react-native-animatable'
function Welcome({ navigation }: any): JSX.Element {

  return (

    <SafeAreaView style={styles.body}>
      <Animatable.View useNativeDriver={true} animation={{
        from: {
          transform: [{ translateX: -(Globals.WIDTH / 2 - (Globals.WIDTH * 1.53 / 2) + Globals.WIDTH * 0.03) }, { translateY: -(Globals.WIDTH / 2 - (Globals.HEIGHT * 0.71 / 2) - (Globals.HEIGHT * 0.04)) }, { rotate: '-26.71deg' }],
        },
        to: {
          transform: [{ translateX: (Globals.WIDTH / 2 - (Globals.WIDTH * 1.53 / 2) + Globals.WIDTH * 0.03) }, { translateY: Globals.WIDTH / 2 - (Globals.HEIGHT * 0.71 / 2) - (Globals.HEIGHT * 0.04) }, { rotate: '-26.71deg' }],
        },
      }} delay={100} duration={2000} style={styles.retangulo}></Animatable.View>
      <Animatable.View delay={1000} useNativeDriver={true} animation='fadeInDown' duration={1000} style={styles.caixaTitulos}>
        <Text style={styles.titulo1}>SEJA BEM VINDO(A),</Text>
        <Text style={styles.titulo2}>ORGANIZE SUAS FINANÇAS CONOSCO</Text>
      </Animatable.View>
      <Animatable.View delay={100} useNativeDriver={true} animation='flipInY' duration={1000} style={styles.containerNome}>
        <Text style={styles.nomeApp}>{Globals.APP_NAME1}</Text>
        <Text style={Globals.APP_NAME_STYLE}></Text>
        <Text style={styles.nomeApp}>{Globals.APP_NAME2}</Text>
      </Animatable.View>
      <Animatable.View delay={100} useNativeDriver={true} animation='fadeInDown' duration={1000} style={styles.containerBotoes}>
        <ButtonGeneric onPress={() => navigation.navigate('Login')} styleButton={[styles.botaoVerdeClaro, styles.botaoGrande]} styleText={[styles.textBotaoVerdeClaro, styles.textoBotaoGrande]} title={"Login"} />
        <ButtonGeneric onPress={() => navigation.navigate('Registrar')} styleButton={[styles.botaoBranco, styles.botaoGrande]} styleText={[styles.textBotaoBranco, styles.textoBotaoGrande]} title={"Registrar"} />
      </Animatable.View>
      <OfficeSVG style={styles.officeSVGStyle} width={Globals.HEIGHT * 0.29} height={Globals.HEIGHT * 0.29} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: Globals.COLOR.LIGHT.COLOR2,
    flex: 1
  },
  retangulo: {
    backgroundColor: Globals.COLOR.LIGHT.COLOR4,
    position: 'absolute',
    width: Globals.WIDTH * 1.53,
    height: Globals.HEIGHT * 0.80,
  },
  caixaTitulos: {
    marginTop: 15,
    alignSelf: 'center'
  },
  titulo1: {
    fontSize: 30,
    lineHeight: 47,
    fontWeight: '600',
    color: Globals.COLOR.LIGHT.COLOR3,
    fontFamily: Globals.FONT_FAMILY.BOLD
  },
  titulo2: {
    fontSize: 18,
    lineHeight: 27,
    fontWeight: '400',
    color: Globals.COLOR.BRANCO,
    fontFamily: Globals.FONT_FAMILY.REGULAR

  },
  containerNome: {
    marginVertical: Globals.HEIGHT * 0.1,
    marginBottom: Globals.HEIGHT * 0.03
  },
  nomeApp: {
    width: '100%',
    textAlign: 'center',
    fontFamily: Globals.FONT_FAMILY_NAME_APP.REGULAR,
    fontWeight: '500',
    fontSize: 38.5417,
    lineHeight: 45,
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
    zIndex: 1000
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
  officeSVGStyle: {
    position: 'absolute',
    right: -0.03 * Globals.WIDTH,
    bottom: -0.010 * Globals.HEIGHT
  }
});

export default Welcome;
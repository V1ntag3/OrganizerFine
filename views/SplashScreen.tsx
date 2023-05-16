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
} from 'react-native';
import OfficeSVG from '../componentes/SVGComponentes/officeSVG';
import ButtonGeneric from '../componentes/ButtonGeneric'
import Globals from '../Globals';
import AsyncStorage from '@react-native-async-storage/async-storage';


function SplashScreen(): JSX.Element {


  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.containerNome}>
        <Text style={styles.nomeApp}>{Globals.APP_NAME1}</Text>
        <Text style={Globals.APP_NAME_STYLE}></Text>
        <Text style={styles.nomeApp}>{Globals.APP_NAME2}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: Globals.COLOR.LIGHT.COLOR5,
    flex: 1
  },
  containerNome: {
    marginVertical: Globals.HEIGHT * 0.4,
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
});

export default SplashScreen;

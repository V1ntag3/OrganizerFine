import { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Animated,

} from 'react-native';

import Globals from '../Globals';

function LoadingScreen(): JSX.Element {
  const animatedValue = new Animated.Value(0)

  useEffect(() => {
    _start()
  }, [animatedValue])



  function _start() {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true
        })]),
      {
        iterations: 6
      }
    ).start()
  }
  return (
    <SafeAreaView style={styles.body}>

      <Animated.View style={[styles.containerNome, { opacity: animatedValue }]}>
        <Text style={styles.nomeApp}>{Globals.APP_NAME1}</Text>
        <Text style={Globals.APP_NAME_STYLE}></Text>
        <Text style={styles.nomeApp}>{Globals.APP_NAME2}</Text>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    opacity: 0.7,
    backgroundColor: Globals.COLOR.LIGHT.COLOR5,
    flex: 1,
    height: Globals.HEIGHT,
    width: Globals.WIDTH,
    zIndex: 1000000, position: 'absolute', top: 0, left: 0
  },
  containerNome: {
    marginVertical: Globals.HEIGHT * 0.4,
    marginBottom: Globals.HEIGHT * 0.03,
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

export default LoadingScreen;

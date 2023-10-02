import {
  SafeAreaView,
  StyleSheet,
  Text,
  Animated,

} from 'react-native';

import Globals from '../Globals';

function SplashScreen(): JSX.Element {
  return (
    <SafeAreaView style={styles.body}>
      <Animated.View style={[styles.containerNome]}>
        <Text style={styles.nomeApp}>{Globals.APP_NAME1}</Text>
        <Text style={Globals.APP_NAME_STYLE}></Text>
        <Text style={styles.nomeApp}>{Globals.APP_NAME2}</Text>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: Globals.COLOR.LIGHT.COLOR5,
    flex: 1,
    zIndex: 10000
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

export default SplashScreen;
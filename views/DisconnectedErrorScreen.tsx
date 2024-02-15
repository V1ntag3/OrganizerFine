import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Globals from '../Globals';
import NoConnectSVG from '../components/SVGComponentes/noConnectSVG';

function DisconnectedErrorScreen(): JSX.Element {
    return (
        <SafeAreaView style={styles.body}>
            <View style={styles.container}>
                <Text style={styles.text1}>Ops...</Text>
                <Text style={styles.text2}>Parece que você está sem conexão com a internet. Verifique sua conexão e tente novamente.</Text>
            </View>
            <NoConnectSVG style={{ alignSelf: 'center' }} width={300} height={300} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: Globals.COLOR.LIGHT.COLOR4,
        flex: 1,
        zIndex: 10000
    },
    container: {
        paddingHorizontal: 30,
        paddingTop: 40,
        marginBottom: 30
    },
    text1: {
        fontFamily: Globals.FONT_FAMILY.BOLD,
        color: Globals.COLOR.BRANCO,
        fontSize: 30
    },
    text2: {
        fontFamily: Globals.FONT_FAMILY.REGULAR,
        color: Globals.COLOR.BRANCO,
        fontSize: 15
    }
});

export default DisconnectedErrorScreen;

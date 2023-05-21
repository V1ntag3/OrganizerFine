import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,

} from 'react-native';

import Globals from '../Globals';
import NoConnectSVG from '../componentes/SVGComponentes/noConnectSVG';

function DisconnectedErrorScreen(): JSX.Element {
    return (
        <SafeAreaView style={styles.body}>
            <View style={{ paddingHorizontal: 30, paddingTop: 40, marginBottom: 30 }}>
                <Text style={{ fontFamily: Globals.FONT_FAMILY.BOLD, color: Globals.COLOR.BRANCO, fontSize: 30 }}>Ops...</Text>
                <Text style={{ fontFamily: Globals.FONT_FAMILY.REGULAR, color: Globals.COLOR.BRANCO, fontSize: 15 }}>Parece que você está sem conexão com a internet. Verifique sua conexão e tente novamente.</Text>
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


});

export default DisconnectedErrorScreen;

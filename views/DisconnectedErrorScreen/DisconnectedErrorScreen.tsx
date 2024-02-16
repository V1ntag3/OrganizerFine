import {
    SafeAreaView,
    Text,
    View,
} from 'react-native';
import styles from './DisconnectedErrorScreenStyles';
import NoConnectSVG from '../../components/SVGComponentes/noConnectSVG';

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

export default DisconnectedErrorScreen;

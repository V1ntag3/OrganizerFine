import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
} from 'react-native';
import Globals from '../Globals';
import Menu from './components/Menu';

function GestaoDeEmprestimos({route, navigation }: any): JSX.Element {
    const screen = <></>
    return (
        <SafeAreaView style={styles.body}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollView} >
            <Menu route={route} screenElement={screen} navigation={navigation} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: Globals.COLOR.LIGHT.COLOR4,
        flex: 1,
    },
    scrollView: {
        height: Globals.HEIGHT
    }
});

export default GestaoDeEmprestimos;

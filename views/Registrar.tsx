import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    ScrollView,
} from 'react-native';
import TituloPagina from '../components/TituloPaginaLoginRegistrar'
import PastaSVG from '../components/SVGComponentes/pastaSVG'
import NotebookSVG from '../components/SVGComponentes/notebookSVG'
import FundoPagina from '../components/FundoPaginaLoginRegistrar';
import Globals from '../Globals';
import LoadingScreen from './LoadingScreen';
import FormRegister from '../components/FormRegister';
import { useState } from 'react';

function Registrar({ route, navigation }: any): JSX.Element {

    const { setUserToken } = route.params
    const [isLoading, setIsLoading] = useState(false)

    const renderTela = () => {
        return (
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
                <FundoPagina />
                <TituloPagina title='Registrar' navigation={navigation} />
                <NotebookSVG style={styles.notebookSVGStyle} width={103} height={103} />
                <FormRegister load={{ setIsLoading }} token={{ setUserToken }} />
                <View style={styles.containerNome}>
                    <Text style={styles.nomeApp}>{Globals.APP_NAME1}</Text>
                    <Text style={styles.nomeApp}>{Globals.APP_NAME2}</Text>
                </View>
                <PastaSVG style={styles.pastaSVGStyle} width={143} height={143} />
            </ScrollView>
        )
    }
    return (
        <SafeAreaView style={styles.body}>
            {
                isLoading == true ? <LoadingScreen /> : (<></>)
            }
            {renderTela()}

        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: Globals.COLOR.LIGHT.COLOR2,
        flex: 1,
    },
    scrollView: {
        minHeight: Globals.HEIGHT
    },
    containerNome: {
        position: 'absolute',
        bottom: 15,
        left: 25
    },
    nomeApp: {
        width: '100%',
        textAlign: 'center',
        fontFamily: Globals.FONT_FAMILY_NAME_APP.REGULAR,
        fontWeight: '500',
        fontSize: 17,
        lineHeight: 25,
        color: Globals.COLOR.BRANCO,
    },
    pastaSVGStyle: {
        position: 'absolute',
        right: 0,
        bottom: -20
    },
    notebookSVGStyle: {
        position: 'absolute',
        right: 0,
        top: 0,
    }
});

export default Registrar;
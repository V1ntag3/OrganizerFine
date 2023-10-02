import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    ScrollView,
} from 'react-native';
import ButtonGeneric from '../componentes/ButtonGeneric'
import OkSVG from '../componentes/SVGComponentes/okSVG';
import Globals from '../Globals';

function EsqueciSenhaOk({ navigation }: any): JSX.Element {
    return (
        <SafeAreaView style={styles.body}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollView} >
                <View style={[styles.containerInput, { zIndex: 0 }]}>
                    <Text style={styles.textEsqueci}>
                        Sua senha foi enviada com sucesso
                    </Text>
                    <OkSVG style={styles.okSVGStyle} width={300} height={300} />
                    <View style={styles.containerBotoes}>
                        <ButtonGeneric styleButton={[styles.botaoVerdeClaro, styles.botaoGrande]} styleText={[styles.textBotaoVerdeClaro, styles.textoBotaoGrande]} onPress={() => navigation.navigate('Login')} title={"Logar"} />
                    </View>
                </View>
                <View style={styles.containerNome}>
                    <Text style={styles.nomeApp}>{Globals.APP_NAME1}</Text>
                    <Text style={styles.nomeApp}>{Globals.APP_NAME2}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#195E63',
        flex: 1,
    },
    scrollView: {
        height: Globals.HEIGHT
    },
    containerInput: {
        paddingVertical: Globals.HEIGHT * 0.3,
        paddingTop: 10,
        paddingBottom: Globals.HEIGHT * 0.2
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
    containerBotoes: {
        width: '100%',
        marginBottom: 100
    },
    textEsqueci: {
        textAlign: 'left',
        width: '100%',
        maxWidth: 338.89,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginVertical: 8,
        fontFamily: Globals.FONT_FAMILY.REGULAR,
        fontSize: 34,
        fontWeight: '700',
        lineHeight: 52,
        color: Globals.COLOR.BRANCO
    },
    botaoGrande: {
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
    okSVGStyle: {
        marginLeft: Globals.WIDTH * 0.25,
        marginVertical: Globals.HEIGHT * 0.084
    }
});

export default EsqueciSenhaOk;

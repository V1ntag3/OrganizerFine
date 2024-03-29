import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
    ScrollView,
} from 'react-native';
import ButtonGeneric from '../components/ButtonGeneric'
import TituloPagina from '../components/TituloPaginaEsqueci'
import { useState } from 'react';
import FundoPagina from '../components/FundoPaginaEsqueci';
import EsqueciSVG from '../components/SVGComponentes/esqueciSVG';
import Globals from '../Globals';

function EsqueciSenha({ navigation }: any): JSX.Element {

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);

    const mandarEmail = () => {
        setEmailError(email == "" ? true : false)

        if (!emailError) {
            navigation.navigate('EsqueciSenhaOk')
        }
    }
    return (
        <SafeAreaView style={styles.body}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollView} >
                <TituloPagina title='Esqueceu sua Senha?' navigation={navigation} />
                <FundoPagina />
                <View style={[styles.containerInput, { zIndex: 0 }]}>
                    <Text style={styles.textEsqueci}>
                        Não se preocupe basta digitar o email utilizado no cadastro que lhe enviaremos uma nova senha
                    </Text>
                    <TextInput style={styles.inputStyle}
                        placeholderTextColor="#323941"
                        selectionColor="black"
                        onChangeText={(text) => setEmail(text)}
                        placeholder="Email" />

                    <Text style={[styles.errorStyle, { display: emailError ? 'flex' : 'none' }]}  >Email não cadastrado</Text>

                    <View style={styles.containerBotoes}>
                        <ButtonGeneric styleButton={[styles.botaoVerdeClaro, styles.botaoGrande]} styleText={[styles.textBotaoVerdeClaro, styles.textoBotaoGrande]} onPress={() => mandarEmail()} title={"Enviar"} />
                    </View>
                </View>

                <View style={styles.containerNome}>
                    <Text style={styles.nomeApp}>{Globals.APP_NAME1}</Text>
                    <Text style={styles.nomeApp}>{Globals.APP_NAME2}</Text>
                </View>

                <EsqueciSVG style={styles.footerSVGStyle} width={0.25 * Globals.HEIGHT} height={0.25 * Globals.HEIGHT} />

            </ScrollView>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: Globals.COLOR.LIGHT.COLOR2,
        flex: 1,
    },
    scrollView: {
        height: Globals.HEIGHT
    },
    inputStyle: {
        alignItems: 'center',
        paddingVertical: 10.75309,
        paddingHorizontal: 11.0905,
        width: '100%',
        height: 49.65,
        borderRadius: 6.96875,
        maxWidth: 338.89,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 4,
        backgroundColor: Globals.COLOR.BRANCO,
        fontFamily: Globals.FONT_FAMILY.REGULAR,
        color: '#323941',
        marginTop: 40
    },
    errorStyle: {
        paddingLeft: 3,
        width: '100%',
        maxWidth: 338.89,
        marginLeft: 'auto',
        marginRight: 'auto',
        color: Globals.COLOR_ERROR,
        fontSize: 11,
        lineHeight: 12,
        fontFamily: Globals.FONT_FAMILY.MEDIUM
    },
    containerInput: {
        paddingVertical: Globals.HEIGHT * 0.3,
        paddingTop: Globals.HEIGHT * 0.25,
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
        textAlign: 'justify',
        width: '100%',
        maxWidth: 338.89,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginVertical: 8,
        fontFamily: Globals.FONT_FAMILY.REGULAR,
        fontSize: 22,
        fontWeight: '400',
        lineHeight: 30,
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
        color: Globals.COLOR.BRANCO
    },
    footerSVGStyle: {
        position: 'absolute',
        right: -20,
        bottom: 0,
    }
});

export default EsqueciSenha;
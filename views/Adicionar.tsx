/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import Globals from '../Globals';
import Menu from '../componentes/Menu';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import AddSVG from '../componentes/SVGComponentes/addSVG';

type props = {
    navigation: any;
}

function Adicionar({ navigation }: props["navigation"]): JSX.Element {
    const renderPicker = () => {
        const [selectedValue, setSelectedValue] = useState('');
        return (
            <View style={{}}>
                <Picker
                    placeholder={'Categoria'}
                    numberOfLines={3}
                    dropdownIconColor={'white'}
                    mode='dropdown'
                    selectedValue={selectedValue}
                    style={{
                        marginTop: 10,
                        color: 'white',
                        marginLeft: 9,
                        fontSize: 1
                    }}
                    onValueChange={(itemValue: any, itemIndex: any) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Alimentação" value="0" />
                    <Picker.Item label="Serviço" value="1" />
                    <Picker.Item label="Eletrônico" value="2" />
                    <Picker.Item label="Vestuário" value="3" />
                    <Picker.Item label="Entretenimento" value="4" />
                    <Picker.Item label="Outros" value="5" />

                </Picker>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.body}>
            <Menu navigation={navigation} />
            <ScrollView style={styles.scrollView}>
                <Text style={styles.tituloView}>Adicionar</Text>

                <TextInput style={[styles.inputStyle, { marginTop: 20 }]}
                    selectionColor="white"
                    placeholderTextColor={false ? '#FD6161' : Globals.COLOR.BRANCO}
                    // onChangeText={(text) => login.email = text}
                    placeholder="Descrição" />

                {
                    renderPicker()
                }
                <TextInput style={styles.inputStyle}
                    selectionColor="white"
                    placeholderTextColor={false ? '#FD6161' : Globals.COLOR.BRANCO}
                    // onChangeText={(text) => login.email = text}
                    placeholder="Valor" />

                <TouchableOpacity>
                    <View style={
                        {
                            width: 60,
                            height: 60,
                            borderRadius: 30,
                            marginTop: (Globals.HEIGHT - 360),
                            alignSelf: 'center', alignContent: 'flex-end',
                            backgroundColor: Globals.COLOR.LIGHT.COLOR5
                        }
                    }>
                        <View style={
                            {
                                marginTop: 13,
                                marginLeft: 13
                            }
                        }>
                            <AddSVG />

                        </View>
                    </View>
                </TouchableOpacity>

            </ScrollView>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    tituloView: {
        fontWeight: '600',
        fontSize: 24,
        textAlign: 'center',
        color: Globals.COLOR.BRANCO,
        marginTop: 15
    },
    body: {
        backgroundColor: Globals.COLOR.LIGHT.COLOR4,
        flex: 1
    },
    scrollView: {
        minHeight: Globals.HEIGHT,

    },
    inputStyle: {
        alignItems: 'center',
        paddingVertical: 10.75309,
        paddingHorizontal: 11.0905,
        paddingBottom: 0,
        width: '100%',
        height: 49.65,
        // borderRadius: 6.96875,
        maxWidth: 330,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginVertical: 8,
        marginBottom: 4,
        // backgroundColor: Globals.COLOR.BRANCO,
        fontFamily: Globals.FONT_FAMILY.REGULAR,
        color: 'white',
        borderBottomColor: 'white',
        borderBottomWidth: 3,

    },
    esqueciSenha: {
        paddingLeft: 3,
        width: '100%',
        maxWidth: 338.89,
        marginLeft: 'auto',
        marginRight: 'auto',
        color: Globals.COLOR.BRANCO,
        fontSize: 13,
        lineHeight: 16,
        fontFamily: Globals.FONT_FAMILY.MEDIUM
    },
    errorStyle: {
        paddingLeft: 3,
        width: '100%',
        maxWidth: 338.89,
        marginLeft: 'auto',
        marginRight: 'auto',
        color: '#FD6161',
        fontSize: 11,
        lineHeight: 12,
        fontFamily: Globals.FONT_FAMILY.MEDIUM
    },
    containerInput: {
        paddingTop: Globals.HEIGHT * 0.3
    },
    containerNome: {
        position: 'absolute',
        bottom: 15,
        left: 25
    },
    nomeApp: {
        width: '100%',
        textAlign: 'center',
        fontFamily: 'ABSTER',
        fontWeight: '500',
        fontSize: 17,
        lineHeight: 25,
        color: Globals.COLOR.BRANCO,
    },
    imagemOffice: {
        width: 300,
        height: 300,
        position: 'absolute',
        right: -45,
        bottom: -20
    },
    containerBotoes: {
        width: '100%',
        marginBottom: 100
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
    botaoBranco: {
        backgroundColor: Globals.COLOR.BRANCO,
    },
    textBotaoBranco: {
        color: Globals.COLOR.LIGHT.COLOR3,
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

export default Adicionar;

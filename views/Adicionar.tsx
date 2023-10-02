import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import Globals from '../Globals';
import { useState } from 'react';
import AddSVG from '../componentes/SVGComponentes/addSVG';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingScreen from './LoadingScreen';
import CurrencyInput from 'react-native-currency-input'
import * as Animatable from 'react-native-animatable'
import Menu from './components/Menu';
import { Dropdown } from 'react-native-element-dropdown';
function Adicionar({ route, navigation }: any): JSX.Element {
    const [isLoading, setIsLoading] = useState(false)
    // Valores
    const [selectedValue, setSelectedValue] = useState('');
    const [valorInicial, setValorInicial] = useState(0);
    const [descricao, setDescricao] = useState('')
    const [tipo, setTipo] = useState(1);
    // Erros
    const [valorError, setValorError] = useState(false);
    const [descricaoError, setDescricaoError] = useState(false)
    const [selectedValueError, setSelectedValueError] = useState(false);

    const { setUserToken } = route.params

    const postData = async () => {

        setDescricaoError(descricao == "" ? true : false)
        setSelectedValueError(selectedValue == "" ? true : false)
        setValorError(valorInicial <= 0 ? true : false)

        if (descricao != "" && tipo == 0 ? true : selectedValue != "" && valorInicial >= 0) {
            var tipo0 = JSON.stringify({
                'about': descricao,
                'value': valorInicial,
                'type': String(tipo)
            })
            var tipo1 = JSON.stringify({
                'about': descricao,
                'value': valorInicial,
                'type': String(tipo),
                'typeCat': selectedValue.value
            })

            setIsLoading(true)
            await AsyncStorage.getItem('token', (_, result) => {

                fetch(Globals.BASE_URL_API + 'revenue_spending/', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': 'Token ' + result
                    },
                    body: tipo == 0 ? tipo0 : tipo1
                }).then(response => {
                    if (response.status === 401 || response.status === 403) {
                        AsyncStorage.clear().then(() => { setUserToken(null) })
                    }
                    if (response.status === 200) {
                        navigation.navigate("DashBoard");
                        return response.json();
                    }
                }
                ).finally(() => {
                    setIsLoading(false)
                })
            })
        }

    }
    const renderPicker = () => {
        if (tipo != 0) {
            return (
                <Dropdown
                    style={[styles.inputStyle, tipo == 0 ? { backgroundColor: '#73E650' } : { backgroundColor: '#E65A50' }]}
                    placeholder='Categoria'
                    placeholderStyle={{ color: selectedValueError ? Globals.COLOR_ERROR : 'white', paddingBottom: 10 }}
                    selectedTextStyle={
                        {
                            fontSize: 14,
                            fontFamily: Globals.FONT_FAMILY.REGULAR,
                            color: 'white'
                        }
                    }

                    itemTextStyle={styles.dropdownText}
                    iconColor='white'
                    containerStyle={[
                        {
                            borderTopLeftRadius: 0,
                            borderTopRightRadius: 0,
                            marginTop: -7,
                            marginBottom: 20
                        },
                        tipo == 0 ? { backgroundColor: '#73E650' } : { backgroundColor: '#E65A50', borderColor: 'transparent' }
                    ]}
                    value={selectedValue}
                    data={[
                        { label: 'Alimentação', value: '0' },
                        { label: 'Serviço', value: '1' },
                        { label: 'Eletrônico', value: '2' },
                        { label: 'Vestuário', value: '3' },
                        { label: 'Entretenimento', value: '4' },
                        { label: 'Outros', value: '5' }
                    ]}
                    labelField={'label'}
                    valueField={'value'}
                    onChange={setSelectedValue}
                />

            );
        }
    }
    const screen =
        <FlatList
            nestedScrollEnabled={true}
            data={null}
            renderItem={null}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={(
                <View style={{ height: Globals.HEIGHT - 25 }}>
                    <Text style={styles.tituloView}>Adicionar</Text>
                    <Animatable.View
                        delay={200}
                        useNativeDriver={true}
                        animation='fadeInLeft'
                        duration={300}
                        style={styles.animationContainer}>
                        <TouchableOpacity
                            onPress={() => { setTipo(0); }}
                            style={[{ width: '50%', backgroundColor: Globals.COLOR_RECEITA, height: 60, opacity: tipo == 0 ? 1 : 0.5 }]}>
                            <Text style={styles.botaoGastoReceita}>Receita</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => { setTipo(1); }}
                            style={[{ width: '50%', backgroundColor: Globals.COLOR_GASTO, height: 60, opacity: tipo == 1 ? 1 : 0.5 }]}>
                            <Text style={styles.botaoGastoReceita}>Gasto</Text>
                        </TouchableOpacity>
                    </Animatable.View>
                    <Animatable.View
                        delay={400}
                        useNativeDriver={true}
                        animation='fadeInLeft'
                        duration={300}>
                        <TextInput style={[styles.inputStyle, tipo == 0 ? { backgroundColor: '#73E650' } : { backgroundColor: '#E65A50' }]}
                            selectionColor="white"
                            placeholderTextColor={descricaoError ? Globals.COLOR_ERROR : 'white'}
                            onChangeText={setDescricao}
                            placeholder="Descrição" />
                        <Text style={[styles.errorStyle, { display: descricaoError ? 'flex' : 'none' }]}>Campo inválido</Text>
                    </Animatable.View>
                    <Animatable.View
                        style={{ zIndex: 11 }}
                        delay={600}
                        useNativeDriver={true}
                        animation='fadeInLeft'
                        duration={300}>
                        {renderPicker()}
                    </Animatable.View>
                    {tipo == 1 && <Text style={[styles.errorStyle, { display: selectedValueError ? 'flex' : 'none' }]}>Campo inválido</Text>}
                    <Animatable.View
                        style={{ zIndex: 10 }}
                        delay={800}
                        useNativeDriver={true}
                        animation='fadeInLeft'
                        duration={300}>
                        <CurrencyInput
                            value={valorInicial}
                            onChangeValue={setValorInicial}
                            prefix="R$ "
                            delimiter="."
                            separator=","
                            precision={2}
                            minValue={0}
                            style={[styles.inputStyle, { color: valorError ? Globals.COLOR_ERROR : 'white' }, { marginTop: 5 }, tipo == 0 ? { backgroundColor: '#73E650' } : { backgroundColor: '#E65A50' }]}
                            selectionColor='white'
                            keyboardType="numeric" />
                        <Text style={[styles.errorStyle, { display: valorError ? 'flex' : 'none' }]}>Campo inválido</Text>
                    </Animatable.View>
                    <Animatable.View
                        style={styles.addBotao}
                        delay={1200}
                        useNativeDriver={true}
                        animation='fadeIn'
                        duration={300}>
                        <TouchableOpacity onPress={postData}>
                            <View style={styles.touchBotao}>
                                <View style={styles.svgAdd}>
                                    <AddSVG />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </Animatable.View>
                    <Animatable.View
                        useNativeDriver={true}
                        animation={{
                            from: {
                                transform: [{ translateX: -150 }, { translateY: -150 }, { rotateZ: '60deg' }]
                            },
                            to: {
                                transform: [{ translateX: -100 }, { translateY: -95 }, { rotateZ: '60deg' }]
                            },
                        }}
                        delay={100}
                        duration={2000}
                        style={{
                            width: Globals.WIDTH * 1.5, height: 0.8 * Globals.HEIGHT, backgroundColor: tipo == 0 ? Globals.COLOR_RECEITA : Globals.COLOR_GASTO, position: 'absolute', zIndex: -1,
                        }}>
                    </Animatable.View>
                </View>
            )} />

    return (
        <SafeAreaView style={styles.body}>
            {
                isLoading ? <LoadingScreen /> : (<></>)
            }
            <Menu route={route} screenElement={screen} navigation={navigation} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    tituloView: {
        fontFamily: Globals.FONT_FAMILY.SEMIBOLD,
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
    inputStyle: {
        alignSelf: 'center',
        padding: 10.75309,
        paddingBottom: 0,
        width: '100%',
        height: 49.65,
        maxWidth: '90%',
        marginVertical: 8,
        marginBottom: 5,
        backgroundColor: Globals.COLOR.BRANCO,
        fontFamily: Globals.FONT_FAMILY.REGULAR,
        color: 'white',
        borderRadius: 6.96875,
    },
    errorStyle: {
        paddingLeft: 7,
        width: '100%',
        maxWidth: '90%',
        alignSelf: 'center',
        marginLeft: -15,
        color: Globals.COLOR_ERROR,
        fontSize: 11,
        lineHeight: 12,
        fontFamily: Globals.FONT_FAMILY.MEDIUM,
    },
    dropDownPickerText: {
        fontFamily: Globals.FONT_FAMILY.REGULAR,
        fontSize: 14,
        color: 'white'
    },
    animationContainer: {
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: 30
    },
    botaoGastoReceita: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        paddingVertical: 16,
        fontFamily: Globals.FONT_FAMILY.BOLD
    },
    addBotao: {
        width: 60,
        height: 60,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 30
    },
    touchBotao: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: Globals.COLOR.LIGHT.COLOR5
    },
    svgAdd: {
        marginTop: 13,
        marginLeft: 13
    },
    dropdownText: {
        color: 'white',
        fontFamily: Globals.FONT_FAMILY.REGULAR,
        fontSize: 14
    }
});

export default Adicionar;

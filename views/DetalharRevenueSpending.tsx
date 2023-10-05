import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    ScrollView,
} from 'react-native';
import Globals from '../Globals';
import { useState } from 'react';
import LixeiraSVG from '../componentes/SVGComponentes/lixeiraSVG';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingScreen from './LoadingScreen';
import EditarSVG from '../componentes/SVGComponentes/editarSVG';
import SaveSVG from '../componentes/SVGComponentes/saveSVG';
import EditSVG from '../componentes/SVGComponentes/editSVG';
import CurrencyInput from 'react-native-currency-input';
import * as Animatable from 'react-native-animatable'
import Menu from './components/Menu';
import DeleteTrashSVG from '../componentes/SVGComponentes/deleteTrashSVG';
import ModalGeneric from './components/ModalGeneric';
import DatePickerGen from './components/DatePickerGen';
import { Dropdown } from 'react-native-element-dropdown';
function DetalharRevenueSpending({ route, navigation }: any): JSX.Element {
    const { setUserToken, element } = route.params

    const [isLoading, setIsLoading] = useState(false)
    // Dados
    const [isEditable, setIsEditable] = useState(true)
    const [selectedValue, setSelectedValue] = useState(element.typeCat);
    const [valor, setValor] = useState(element.value.replaceAll('R', '').replaceAll('$', '').replaceAll('.', '').replaceAll(',', '').replaceAll(' ', '') / 100);
    const [descricao, setDescricao] = useState(element.about)

    const renderPicker = () => {
        if (element.type != 0) {
            return (
                <Dropdown
                    style={[styles.inputStyle, element.type == 0 ? { backgroundColor: isEditable ? '#2FAD09' : '#73E650' } : { backgroundColor: isEditable ? '#AD1909' : '#E65A50' }]}
                    placeholder='Categoria'
                    placeholderStyle={{ color: selectedValueError ? Globals.COLOR_ERROR : 'white', paddingBottom: 10 }}
                    disable={isEditable}
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
                        element.type == 0 ? { backgroundColor: isEditable ? '#2FAD09' : '#73E650' } : { backgroundColor: isEditable ? '#AD1909' : '#E65A50', borderColor: 'transparent' }
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

    const [valorError, setValorError] = useState(false);
    const [descricaoError, setDescricaoError] = useState(false)
    const [selectedValueError, setSelectedValueError] = useState(false);

    const removeData = async () => {
        setModalVisibleD(false)
        setIsLoading(true)
        await AsyncStorage.getItem('token', (_, result) => {

            fetch(Globals.BASE_URL_API + 'revenue_spending/' + String(element['id']) + '/', {
                method: 'DELETE',
                headers: {
                    'Authorization': 'Token ' + result
                }
            }).then(response => {
                if (response.status === 401 || response.status === 403) {
                    AsyncStorage.clear().then(() => { setUserToken(null) })
                }
                if (response.status == 204) {
                    navigation.navigate("DashBoard");
                    return response.json();
                }
            }
            ).finally(() => {
                setIsLoading(false)
            })
        })
    }

    const postData = async () => {
        setModalVisibleE(false)

        setDescricaoError(descricao == "" ? true : false)
        setSelectedValueError(selectedValue == "" ? true : false)
        setValorError(valor <= 0 ? true : false)

        if (descricao != "" && element.type == 0 ? true : selectedValue != "" && valor >= 0) {
            var tipo0 = JSON.stringify({
                'about': descricao,
                'value': valor
            })
            var tipo1 = JSON.stringify({
                'about': descricao,
                'value': valor,
                'typeCat': selectedValue.value
            })
            console.log(tipo1)
            setIsLoading(true)
            await AsyncStorage.getItem('token', (_, result) => {

                fetch(Globals.BASE_URL_API + 'revenue_spending/' + String(element['id']) + '/', {
                    method: 'PUT',
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': 'Token ' + result
                    },
                    body: element.type == 0 ? tipo0 : tipo1
                }).then(response => {
                    if (response.status === 401 || response.status === 403) {
                        AsyncStorage.clear().then(() => { setUserToken(null) })
                    } if (response.status == 200) {
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

    const [modalVisibleE, setModalVisibleE] = useState(false)
    const [modalVisibleD, setModalVisibleD] = useState(false)

    const screen =
        <FlatList
            nestedScrollEnabled={false}
            data={null}
            renderItem={null}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={(
                <ScrollView style={styles.scrollView}>
                    <View style={[styles.body, { backgroundColor: element.type == 0 ? Globals.COLOR_RECEITA : Globals.COLOR_GASTO, }]}>
                        {
                            isEditable ? (<TouchableOpacity style={{ position: 'absolute', top: 20, right: 15, zIndex: 1000 }} onPress={() => setIsEditable(false)}>
                                <EditarSVG />
                            </TouchableOpacity>) : (<TouchableOpacity style={{ position: 'absolute', top: 20, right: 15, zIndex: 1000 }} onPress={() => setModalVisibleE(true)}>
                                <SaveSVG />
                            </TouchableOpacity>)
                        }

                        <Text style={styles.tituloView}>Detalhar</Text>
                        <Text style={styles.subtitleView}> {element.type == 0 ? 'Receita' : 'Gasto'}</Text>

                        <Animatable.View delay={200}
                            useNativeDriver={true} animation='fadeInLeft' duration={300} >

                            <DatePickerGen type={element.type} realDate={element.realDate} />

                        </Animatable.View>
                        <Animatable.View delay={200}
                            useNativeDriver={true} animation='fadeInLeft' duration={300} >
                            <TextInput style={[styles.inputStyle, element.type == 0 ? { backgroundColor: isEditable ? '#2FAD09' : '#73E650' } : { backgroundColor: isEditable ? '#AD1909' : '#E65A50' }]}
                                editable={!isEditable}
                                value={descricao}
                                selectionColor="white"
                                placeholderTextColor={descricaoError ? Globals.COLOR_ERROR : 'white'}
                                onChangeText={(text) => setDescricao(text)}
                                placeholder="Descrição" />
                            <Text style={[styles.errorStyle, { display: descricaoError ? 'flex' : 'none' }]}>Campo inválido</Text>
                        </Animatable.View>
                        <Animatable.View style={{ zIndex: 11 }} delay={400}
                            useNativeDriver={true} animation='fadeInLeft' duration={300} >
                            {
                                renderPicker()
                            }

                            <Text style={[styles.errorStyle, { display: selectedValueError ? 'flex' : 'none' }]}  >Campo inválido</Text>
                        </Animatable.View>
                        <Animatable.View style={{ zIndex: 10 }} delay={600}
                            useNativeDriver={true} animation='fadeInLeft' duration={300} >
                            <CurrencyInput
                                editable={!isEditable}
                                value={valor}
                                onChangeValue={setValor}
                                prefix="R$ "
                                delimiter="."
                                separator=","
                                precision={2}
                                minValue={0}
                                style={[styles.inputStyle, { color: valorError ? Globals.COLOR_ERROR : 'white' }, { marginTop: 5 }, element.type == 0 ? { backgroundColor: isEditable ? '#2FAD09' : '#73E650' } : { backgroundColor: isEditable ? '#AD1909' : '#E65A50' }]}
                                selectionColor='white'
                                keyboardType="numeric"
                            />
                            <Text style={[styles.errorStyle, { display: valorError ? 'flex' : 'none' }]}  >Campo inválido</Text>
                        </Animatable.View>
                        <Animatable.View
                            style={styles.addBotao}
                            useNativeDriver={true}
                            animation='fadeIn'
                            duration={300} >
                            <TouchableOpacity onPress={() => setModalVisibleD(true)} style={{ width: 60, height: 60, alignSelf: 'center', position: 'absolute', bottom: 30 }}>
                                <View
                                    style={
                                        [styles.touchBotao, {
                                            backgroundColor: element.type == 0 ? '#2FAD09' : '#AD1909'
                                        }]}
                                >
                                    <View style={
                                        styles.svgAdd
                                    }>
                                        <LixeiraSVG />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </Animatable.View>
                    </View>
                </ScrollView>
            )} />


    return (
        <>
            {
                isLoading ? <LoadingScreen /> : (<></>)
            }
            <Menu route={route} screenElement={screen} navigation={navigation} />
            <ModalGeneric image={(style: any) => {
                return <EditSVG style={style} />
            }} affirmFunc={postData}
                modalVisible={modalVisibleE}
                setModalVisible={setModalVisibleE}
                title={"Editar " + element.type == '0' ? 'receita' : 'gasto'}
                paragraph={"Tem certeza que deseja alterar as informações?"}
                textAffirmButton="Sim"
                textNegButton="Não agora"
                isLoading={isLoading}
                setIsLoading={setIsLoading}
            />

            <ModalGeneric image={(style: any) => {
                return <DeleteTrashSVG style={style} />
            }} affirmFunc={removeData}
                modalVisible={modalVisibleD}
                setModalVisible={setModalVisibleD}
                title={"Deletar " + element.type == '0' ? 'receita' : 'gasto'}
                paragraph={"Tem certeza que deseja deletar as informações?"}
                textAffirmButton="Sim"
                textNegButton="Não agora"
                isLoading={isLoading}
                setIsLoading={setIsLoading}
            />
        </>
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
        flex: 1,
        minHeight: Globals.HEIGHT,
        height:'auto'

    },
    scrollView: {
    },
    inputStyle: {
        alignItems: 'center',
        paddingVertical: 10.75309,
        paddingHorizontal: 11.0905,
        paddingBottom: 0,
        width: '100%',
        height: 49.65,
        maxWidth: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
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
        alignSelf: 'center',
        width: 60,
        height: 60,
        marginTop:50
    },
    touchBotao: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: Globals.COLOR.LIGHT.COLOR5
    },
    svgAdd: {
        marginTop: 15,
        marginLeft: 15
    },
    subtitleView: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        fontFamily: Globals.FONT_FAMILY.SEMIBOLD,
        marginTop: -10
    },
    dropdownText: {
        color: 'white',
        fontFamily: Globals.FONT_FAMILY.REGULAR,
        fontSize: 14
    }
});

export default DetalharRevenueSpending;

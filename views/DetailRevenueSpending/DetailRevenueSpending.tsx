import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    ScrollView,
} from 'react-native';
import Globals from '../../Globals';
import { useState } from 'react';
import LixeiraSVG from '../../components/SVGComponentes/lixeiraSVG';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingScreen from '../LoadingScreen';
import EditarSVG from '../../components/SVGComponentes/editarSVG';
import SaveSVG from '../../components/SVGComponentes/saveSVG';
import EditSVG from '../../components/SVGComponentes/editSVG';
import CurrencyInput from 'react-native-currency-input';
import * as Animatable from 'react-native-animatable'
import Menu from '../../components/Menu';
import DeleteTrashSVG from '../../components/SVGComponentes/deleteTrashSVG';
import ModalGeneric from '../../components/ModalGeneric';
import DatePickerGen from '../../components/DatePickerGen';
import { Dropdown } from 'react-native-element-dropdown';
import styles from './DetailRevenueSpendingStyle';
import Validations from '../../Validations';

function DetailRevenueSpending({ route, navigation }: any): JSX.Element {
    const { setUserToken, element } = route.params

    const [isLoading, setIsLoading] = useState(false)
    // Dados
    const [isEditable, setIsEditable] = useState(true)
    const [selectedValue, setSelectedValue] = useState({
        label: "",
        value: element.category
    });
    const [value, setValue] = useState<any>(element.value.replaceAll('R', '').replaceAll('$', '').replaceAll('.', '').replaceAll(',', '').replaceAll(' ', '') / 100);
    const [about, setAbout] = useState(element.about)

    const [errors, setErrors] = useState({
        value: false,
        about: false,
        selectedValue: false
    });

    const renderPicker = () => {
        if (element.type != 0) {
            return (
                <Dropdown
                    style={[styles.inputStyle, element.type == 0 ? { backgroundColor: isEditable ? '#2FAD09' : '#73E650' } : { backgroundColor: isEditable ? '#AD1909' : '#E65A50' }]}
                    placeholder='Categoria'
                    placeholderStyle={{ color: errors.selectedValue ? Globals.COLOR_ERROR : 'white', paddingBottom: 10 }}
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
                        { label: 'Alimentação', value: 0 },
                        { label: 'Serviço', value: 1 },
                        { label: 'Eletrônico', value: 2 },
                        { label: 'Vestuário', value: 3 },
                        { label: 'Entretenimento', value: 4 },
                        { label: 'Outros', value: 5 }
                    ]}
                    labelField={'label'}
                    valueField={'value'}
                    onChange={setSelectedValue}
                />
            );
        }
    }

    const removeData = async () => {
        setModalVisibleD(false)
        setIsLoading(true)
        await AsyncStorage.getItem('token', (_, result) => {

            fetch(Globals.BASE_URL_API + 'revenueSpending/' + String(element['id']), {
                method: 'DELETE',
                headers: {
                    'Authorization': 'Bearer ' + result
                }
            }).then(response => {
                if (response.status === 401 || response.status === 403) {
                    AsyncStorage.clear().then(() => { setUserToken(null) })
                }
                if (response.status == 200) {
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

        var obj_errors = {
            about: about == "" ? true : false,
            selectedValue: selectedValue.value == null ? true : false,
            value: value <= 0 ? true : false
        }
        setErrors(obj_errors)

        if (!Validations.hasTruthyValue(obj_errors)) {
            var tipo0 = JSON.stringify({
                id: element['id'],
                about: about,
                value: value
            })
            var tipo1 = JSON.stringify({
                id: element['id'],
                about: about,
                value: value,
                category: selectedValue.value
            })
            setIsLoading(true)
            await AsyncStorage.getItem('token', (_, result) => {

                fetch(Globals.BASE_URL_API + 'revenueSpending/update', {
                    method: 'PUT',
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': 'Bearer ' + result
                    },
                    body: element.type == 0 ? tipo0 : tipo1
                }).then(response => {
                    if (response.status === 401 || response.status === 403) {
                        AsyncStorage.clear().then(() => { setUserToken(null) })
                    }

                    if (response.status == 200) {
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

                        <Text style={styles.titleView}>Detalhar</Text>
                        <Text style={styles.subtitleView}> {element.type == 0 ? 'Receita' : 'Gasto'}</Text>

                        <Animatable.View delay={200}
                            useNativeDriver={true} animation='fadeInLeft' duration={300} >

                            <DatePickerGen type={element.type} realDate={element.realDate} />

                        </Animatable.View>
                        <Animatable.View delay={200}
                            useNativeDriver={true} animation='fadeInLeft' duration={300} >
                            <TextInput style={[styles.inputStyle, element.type == 0 ? { backgroundColor: isEditable ? '#2FAD09' : '#73E650' } : { backgroundColor: isEditable ? '#AD1909' : '#E65A50' }]}
                                editable={!isEditable}
                                value={about}
                                selectionColor="white"
                                placeholderTextColor={errors.about ? Globals.COLOR_ERROR : 'white'}
                                onChangeText={(text) => setAbout(text)}
                                placeholder="Descrição" />
                            <Text style={[styles.errorStyle, { display: errors.about ? 'flex' : 'none' }]}>Campo inválido</Text>
                        </Animatable.View>
                        <Animatable.View style={{ zIndex: 11 }} delay={400}
                            useNativeDriver={true} animation='fadeInLeft' duration={300} >
                            {
                                renderPicker()
                            }

                            <Text style={[styles.errorStyle, { display: errors.selectedValue ? 'flex' : 'none' }]}  >Campo inválido</Text>
                        </Animatable.View>
                        <Animatable.View style={{ zIndex: 10 }} delay={600}
                            useNativeDriver={true} animation='fadeInLeft' duration={300} >
                            <CurrencyInput
                                editable={!isEditable}
                                value={value}
                                onChangeValue={setValue}
                                prefix="R$ "
                                delimiter="."
                                separator=","
                                precision={2}
                                minValue={0}
                                style={[styles.inputStyle, { color: errors.value ? Globals.COLOR_ERROR : 'white' }, { marginTop: 5 }, element.type == 0 ? { backgroundColor: isEditable ? '#2FAD09' : '#73E650' } : { backgroundColor: isEditable ? '#AD1909' : '#E65A50' }]}
                                selectionColor='white'
                                keyboardType="numeric"
                            />
                            <Text style={[styles.errorStyle, { display: errors.value ? 'flex' : 'none' }]}  >Campo inválido</Text>
                        </Animatable.View>
                        <Animatable.View
                            style={styles.addButton}
                            useNativeDriver={true}
                            animation='fadeIn'
                            duration={300} >
                            <TouchableOpacity onPress={() => setModalVisibleD(true)} style={{ width: 60, height: 60, alignSelf: 'center', position: 'absolute', bottom: 30 }}>
                                <View
                                    style={
                                        [styles.touchButton, {
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

export default DetailRevenueSpending;

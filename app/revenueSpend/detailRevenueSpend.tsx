import {

    TextInput,
    TouchableOpacity,
    ScrollView,
    StyleSheet
} from 'react-native';
import Globals from '@/Globals';
import { useState } from 'react';
import {
    View,
    Text
} from 'tamagui'
import CurrencyInput from 'react-native-currency-input';
import * as Animatable from 'react-native-animatable'
import Menu from '@/components/Menus/MenuSide';
import DeleteTrashSVG from '@/assets/svgs/deleteTrashSVG';
import ModalGeneric from '@/components/UI/ModalGeneric';
import DatePickerGeneric from '@/components/UI/DatePickerGeneric';
import { Dropdown } from 'react-native-element-dropdown';
import Validations from '@/utils/Validations';
import { deleteRevenueSpending, updateRevenueSpending } from '@/server/database/services/RevenueSpendingService';
import { FileEdit, Save, Trash } from '@tamagui/lucide-icons';
import { router, UnknownOutputParams, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
function DetailRevenueSpending({ navigation }: any): JSX.Element {
    const item: UnknownOutputParams = useLocalSearchParams();
    const element = {
        id: String(item.id),
        value: String(item.value),
        about: String(item.about),
        category:Number(item.category),
        type: Number(item.type),
        realDate: String(item.realDate)
    };
    // Dados
    const [isEditable, setIsEditable] = useState(true)
    const [selectedValue, setSelectedValue] = useState({
        label: "",
        value: element.category
    });
    console.log(element.value)
    const [value, setValue] = useState<any>( Number(element.value.replaceAll('R', '').replaceAll('$', '').replaceAll('.', '').replaceAll(',', '').replaceAll(' ', '')) / 100);
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
        deleteRevenueSpending(element.id).then(() => {
            router.navigate("/revenueSpend/listRevenueSpend");
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
            var tipo0 = {
                id: element['id'],
                about: about,
                value: value,
                category: null,
                type: 0
            }
            var tipo1 = {
                id: element['id'],
                about: about,
                value: value,
                category: selectedValue.value,
                type: 1
            }
            var obj = element.type == 0 ? tipo0 : tipo1
            updateRevenueSpending(obj).then(() => {
                navigation.navigate("DashBoard");
            })
        }

    }

    const [modalVisibleE, setModalVisibleE] = useState(false)
    const [modalVisibleD, setModalVisibleD] = useState(false)



    return (
        <>
            <View style={{ flex: 1 }}>
                <SafeAreaView edges={['top']} style={{ flex: 1 }}>
                    <Menu>

                        <ScrollView>
                            <View>
                                <TouchableOpacity style={{ position: 'absolute', top: 20, right: 15, zIndex: 1000 }} onPress={() => setIsEditable(!isEditable)}>
                                    {
                                        isEditable ? <FileEdit /> : <Save />
                                    }
                                </TouchableOpacity>


                                <Text style={styles.titleView}>Detalhar</Text>
                                <Text style={styles.subtitleView}> {element.type == 0 ? 'Receita' : 'Gasto'}</Text>

                                <Animatable.View delay={200}
                                    useNativeDriver={true} animation='fadeInLeft' duration={300} >

                                    <DatePickerGeneric type={element.type} realDate={element.realDate} />

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
                                            <View justify={"center"} items={"center"} flex={1}>

                                                <Trash />
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </Animatable.View>
                            </View>
                        </ScrollView>

                    </Menu>
                    <ModalGeneric image={(style: any) => {
                        return <FileEdit style={style} />
                    }} affirmFunc={postData}
                        modalVisible={modalVisibleE}
                        setModalVisible={setModalVisibleE}
                        title={"Editar " + element.type == '0' ? 'receita' : 'gasto'}
                        paragraph={"Tem certeza que deseja alterar as informações?"}
                        textAffirmButton="Sim"
                        textNegButton="Não agora"
                    />

                    <ModalGeneric image={(style: any) => {
                        return <DeleteTrashSVG style={style} tvParallaxProperties={undefined} />
                    }} affirmFunc={removeData}
                        modalVisible={modalVisibleD}
                        setModalVisible={setModalVisibleD}
                        title={"Deletar " + element.type == '0' ? 'receita' : 'gasto'}
                        paragraph={"Tem certeza que deseja deletar as informações?"}
                        textAffirmButton="Sim"
                        textNegButton="Não agora"
                    />
                </SafeAreaView>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    titleView: {
        fontWeight: '600',
        fontSize: 24,
        textAlign: 'center',

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
        backgroundColor: 'white',
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
    },
    addButton: {
        alignSelf: 'center',
        width: 60,
        height: 60,
        marginTop: 50
    },
    touchButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: Globals.COLOR.COLOR5
    },
    subtitleView: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    },
    dropdownText: {
        color: 'white',
        fontSize: 14
    }
});

export default DetailRevenueSpending;

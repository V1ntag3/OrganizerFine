import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList
} from 'react-native';

import Globals from '@/Globals';
import Validations from '@/utils/Validations';
import { useState } from 'react';
import AddSVG from '@/assets/svgs/addSVG';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingScreen from '@/views/LoadingScreen';
import CurrencyInput from 'react-native-currency-input'
import * as Animatable from 'react-native-animatable'
import Menu from '@/components/Menus/Menu';
import { Dropdown } from 'react-native-element-dropdown';
import styles from './AddRevenueSpendingStyles';
import { createRevenueSpending } from '@/server/database/services/revenueSpendingService';

function AddRevenueSpending({ route, navigation }: any): JSX.Element {
    const [loading, setLoading] = useState(false)
    // Valores
    const [selectedValue, setSelectedValue] = useState<any>({
        label: "",
        value: null
    });
    const [portion, setPortion] = useState<any>(1);
    const [value, setValue] = useState<any>(0);
    const [about, setAbout] = useState('')
    const [type, setType] = useState(1);
    // Erros
    const [errors, setErrors] = useState({
        value: false,
        about: false,
        selectedValue: false,
        portion: false
    })


    const postData = async () => {
        var errors = {
            about: about == "" ? true : false,
            selectedValue: type === 1 && selectedValue.value == null ? true : false,
            value: value <= 0 ? true : false,
            portion: type === 1 && portion <= 0 ? true : false,
        }
        setErrors(errors)


        if (!Validations.hasTruthyValue(errors)) {
            var data = {
                about: about,
                value: value,
                type: type,
                category: type === 1 ? selectedValue.value : -1,
                portion: type === 1 ? portion : 1
            };

            setLoading(true);

            createRevenueSpending(data).then(response => {
                navigation.navigate("DashBoard");
            }).catch(error => {
                console.log(error);
            }).finally(() => {
                setLoading(false);
            });
        }

    }

    const renderPicker = () => {
        if (type != 0) {
            return (
                <Dropdown
                    style={[styles.inputStyle, type == 0 ? { backgroundColor: '#73E650' } : { backgroundColor: '#E65A50' }]}
                    placeholder='Categoria'
                    placeholderStyle={{ color: errors.selectedValue ? Globals.COLOR_ERROR : 'white', paddingBottom: 10 }}
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
                        type == 0 ? { backgroundColor: '#73E650' } : { backgroundColor: '#E65A50', borderColor: 'transparent' }
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
    const screen =
        <FlatList
            nestedScrollEnabled={true}
            data={null}
            renderItem={null}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={(
                <View style={{ height: Globals.HEIGHT - 25 }}>
                    <Text style={styles.titleView}>Adicionar</Text>
                    <Animatable.View
                        delay={200}
                        useNativeDriver={true}
                        animation='fadeInLeft'
                        duration={300}
                        style={styles.animationContainer}>
                        <TouchableOpacity
                            onPress={() => { setType(0); }}
                            style={[{ width: '50%', backgroundColor: Globals.COLOR_RECEITA, height: 60, opacity: type == 0 ? 1 : 0.5 }]}>
                            <Text style={styles.buttonRevenueSpending}>Receita</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => { setType(1); }}
                            style={[{ width: '50%', backgroundColor: Globals.COLOR_GASTO, height: 60, opacity: type == 1 ? 1 : 0.5 }]}>
                            <Text style={styles.buttonRevenueSpending}>Gasto</Text>
                        </TouchableOpacity>
                    </Animatable.View>
                    <Animatable.View
                        delay={400}
                        useNativeDriver={true}
                        animation='fadeInLeft'
                        duration={300}>
                        <TextInput style={[styles.inputStyle, type == 0 ? { backgroundColor: '#73E650' } : { backgroundColor: '#E65A50' }]}
                            selectionColor="white"
                            placeholderTextColor={errors.about ? Globals.COLOR_ERROR : 'white'}
                            onChangeText={setAbout}
                            placeholder="Descrição" />
                        <Text style={[styles.errorStyle, { display: errors.about ? 'flex' : 'none' }]}>Campo inválido</Text>
                    </Animatable.View>
                    <Animatable.View
                        style={{ zIndex: 11 }}
                        delay={600}
                        useNativeDriver={true}
                        animation='fadeInLeft'
                        duration={300}>
                        {renderPicker()}
                    </Animatable.View>
                    {type == 1 && <Text style={[styles.errorStyle, { display: errors.selectedValue ? 'flex' : 'none' }]}>Campo inválido</Text>}
                    <Animatable.View
                        style={{ zIndex: 10 }}
                        delay={800}
                        useNativeDriver={true}
                        animation='fadeInLeft'
                        duration={300}>
                        {type === 1 && <CurrencyInput
                            value={portion}
                            onChangeValue={setPortion}
                            suffix=" X"
                            precision={0}
                            minValue={1}
                            style={[styles.inputStyle, { color: errors.portion ? Globals.COLOR_ERROR : 'white' }, { marginTop: 5 }, { backgroundColor: '#E65A50' }]}
                            selectionColor='white'
                            keyboardType="numeric" />}
                        {type == 1 && <Text style={[styles.errorStyle, { display: errors.portion ? 'flex' : 'none' }]}>Campo inválido</Text>}
                    </Animatable.View>
                    <Animatable.View
                        style={{ zIndex: 10 }}
                        delay={1000}
                        useNativeDriver={true}
                        animation='fadeInLeft'
                        duration={300}>
                        <CurrencyInput
                            value={value}
                            onChangeValue={setValue}
                            prefix="R$ "
                            delimiter="."
                            separator=","
                            precision={2}
                            minValue={0}
                            style={[styles.inputStyle, { color: errors.value ? Globals.COLOR_ERROR : 'white' }, { marginTop: 5 }, type == 0 ? { backgroundColor: '#73E650' } : { backgroundColor: '#E65A50' }]}
                            selectionColor='white'
                            keyboardType="numeric" />
                        <Text style={[styles.errorStyle, { display: errors.value ? 'flex' : 'none' }]}>Campo inválido</Text>
                    </Animatable.View>
                    <Animatable.View
                        style={styles.addButton}
                        delay={1200}
                        useNativeDriver={true}
                        animation='fadeIn'
                        duration={300}>
                        <TouchableOpacity onPress={postData}>
                            <View style={styles.touchButton}>
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
                            width: Globals.WIDTH * 1.5, height: 0.8 * Globals.HEIGHT, backgroundColor: type == 0 ? Globals.COLOR_RECEITA : Globals.COLOR_GASTO, position: 'absolute', zIndex: -1,
                        }}>
                    </Animatable.View>
                </View>
            )} />

    return (
        <View style={styles.body}>
            {
                loading ? <LoadingScreen /> : (<></>)
            }
            <Menu route={route} screenElement={screen} navigation={navigation} />
        </View>
    );
}
export default AddRevenueSpending;
import {
    SafeAreaView,
    Text,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native';
import * as Animatable from 'react-native-animatable'

import Globals from '../../Globals';
import Menu from '../../components/Menu';
import styles from './AddTransactionStyles';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BackBestSVG from '../../components/SVGComponentes/backBest'
import PaySVG from '../../components/SVGComponentes/paySVG';
import CurrencyInput from 'react-native-currency-input';
import Validations from '../../Validations';
import { createTransaction } from '../../server/database/services/TransactionService';
function AddTransaction({ route, navigation }: any): JSX.Element {
    const { item } = route.params



    const [value, setValue] = useState<any>(0)
    const [about, setAbout] = useState("")

    const [errors, setErrors] = useState({
        value: false,
        about: false
    })

    const postData = async () => {

        var obj_errors = {
            value: value == 0 ? true : false,
            about: about == "" ? true : false
        }
        setErrors(obj_errors)

        if (!Validations.hasTruthyValue(obj_errors)) {

            var obj = {
                value: value,
                about: about,
                loan_id: item.id
            }
            createTransaction(obj).then(() => {
                navigation.navigate("DetailLoan", {
                    item
                })
            })
        }
    }

    const screen = <>

        <Text style={styles.tituloView}>Realizar Pagamento</Text>

        <View style={{ paddingHorizontal: 15 }}>
            <Animatable.View
                delay={400}
                useNativeDriver={true}
                animation='fadeInLeft'
                duration={300}>
                <TextInput style={[styles.inputStyle,]}
                    selectionColor="white"
                    placeholderTextColor={errors.about ? Globals.COLOR_ERROR : 'white'}
                    onChangeText={setAbout}
                    placeholder="Descrição" />
                <Text style={[styles.errorStyle, { display: errors.about ? 'flex' : 'none' }]}>Campo inválido</Text>
            </Animatable.View>

            <Animatable.View
                style={{ zIndex: 10 }}
                delay={800}
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
                    style={[styles.inputStyle, { color: errors.value ? Globals.COLOR_ERROR : 'white' }, { marginTop: 5 }]}
                    selectionColor='white'
                    keyboardType="numeric" />
                <Text style={[styles.errorStyle, { display: errors.value ? 'flex' : 'none' }]}>Campo inválido</Text>
            </Animatable.View>
        </View>

        <View style={[styles.menuBottom, { position: 'absolute', bottom: 0 }]}>
            <TouchableOpacity onPress={() => {
                navigation.navigate("DetailLoan", { item });
            }} style={styles.menuBottomButton}>
                <BackBestSVG width={30} height={30} />
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', gap: 10 }}>

                <TouchableOpacity onPress={postData} style={[styles.menuBottomButton]}>
                    <PaySVG width={35} fill={'white'} height={35} />
                </TouchableOpacity>

            </View>

        </View>


    </>
    return (
        <SafeAreaView style={styles.body}>
            <Menu route={route} screenElement={screen} navigation={navigation} />
        </SafeAreaView>
    );
}



export default AddTransaction;

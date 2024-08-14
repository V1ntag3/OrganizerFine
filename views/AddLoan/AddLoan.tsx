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
import styles from './AddLoanStyles';
import React, { useState } from 'react';
import BackBestSVG from '../../components/SVGComponentes/backBest'
import PaySVG from '../../components/SVGComponentes/paySVG';
import CurrencyInput from 'react-native-currency-input';
import Validations from '../../Validations';
import { createLoan } from '../../server/database/services/LoansService';
function AddLoan({ route, navigation }: any): JSX.Element {

    const [value, setValue] = useState<any>(0)
    const [about, setAbout] = useState("")
    const [name, setName] = useState("")

    const [errors, setErrors] = useState({
        value: false,
        about: false,
        name: false
    })

    const postData = async () => {
        
            var obj_errors = {
                value: value == 0 ? true : false,
                about: Validations.onlyBlankSpaces(about),
                name: Validations.onlyBlankSpaces(name) ? true : false

            }
            setErrors(obj_errors)

            if (!Validations.hasTruthyValue(obj_errors)) {

                var obj = {
                    value: parseFloat(value),
                    about: about,
                    name: name
                }

                createLoan(obj).then((data) => {
                    navigation.navigate("ManagerLoan")
                })

            }
    }

    const screen = <>

        <Text style={styles.tituloView}>Realizar Pagamento</Text>

        <View style={{ paddingHorizontal: 15 }}>
            <Animatable.View
                delay={300}
                useNativeDriver={true}
                animation='fadeInLeft'
                duration={300}>
                <TextInput style={[styles.inputStyle,]}
                    selectionColor="white"
                    placeholderTextColor={errors.about ? Globals.COLOR_ERROR : 'white'}
                    onChangeText={setName}
                    placeholder="Nome" />
                <Text style={[styles.errorStyle, { display: errors.name ? 'flex' : 'none' }]}>Campo inválido</Text>
            </Animatable.View>

            <Animatable.View
                delay={500}
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
                delay={700}
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
                navigation.navigate("ManagerLoan");
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



export default AddLoan;

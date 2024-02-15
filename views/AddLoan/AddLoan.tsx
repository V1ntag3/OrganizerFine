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
import AsyncStorage from '@react-native-async-storage/async-storage';
import BackBestSVG from '../../components/SVGComponentes/backBest'
import PaySVG from '../../components/SVGComponentes/paySVG';
import CurrencyInput from 'react-native-currency-input';
import Validations from '../../Validations';
function AddLoan({ route, navigation }: any): JSX.Element {
    const { setUserToken, item } = route.params



    const [value, setValue] = useState<any>(0)
    const [about, setAbout] = useState("")
    const [name, setName] = useState("")

    const [errors, setErrors] = useState({
        value: false,
        about: false,
        name: false
    })

    const postData = async () => {
        await AsyncStorage.getItem('token', (_, result) => {
            var obj_errors = {
                value: value == 0 ? true : false,
                about: Validations.onlyBlankSpaces(about),
                name: Validations.onlyBlankSpaces(name) ? true : false

            }
            setErrors(obj_errors)

            if (!Validations.hasTruthyValue(obj_errors)) {

                var obj = JSON.stringify({
                    value: value,
                    about: about,
                    name: name
                })
                fetch(Globals.BASE_URL_API + 'loan/create', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                        'Authorization': 'Bearer ' + result
                    },
                    body: obj
                }).then(response => {
                    console.log(response)
                    if (response.status === 401 || response.status === 403) {
                        AsyncStorage.clear().then(() => { setUserToken(null) })
                    }
                    console.log(response.status)
                    if (response.status == 200) {
                        navigation.navigate("ManagerLoan")
                    }

                }).catch((err)=>{
                    console.log(err)
                }).finally(() => {

                })
            }


        })
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
                    <PaySVG width={35} fill={'white'} height={35}/>
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

import Menu from '@/components/Menus/Menu';
import React, { useState } from 'react';
import PaySVG from '@/assets/svgs/paySVG';
import Validations from '@/utils/Validations';
import { createTransaction } from '@/server/database/services/TransactionService';
import InputAnimation from '@/components/InputAnimation';
import BottomMenu from '@/components/Menus/BottomMenu';
import Title from '@/components/Title';
import { Text, View } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import Globals from '@/Globals';
import * as Animatable from 'react-native-animatable';
import styles from '@/views/ProfileEdit/ProfileEditStyles';

function AddTransaction({ route, navigation }: any): JSX.Element {
    const { item } = route.params

    const [value, setValue] = useState<number>(0)
    const [about, setAbout] = useState<string>("")
    const [type, setType] = useState<boolean>(false)

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
            const multiple = type == true ? -1 : 1
            var obj = {
                value: value * multiple,
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

    const screen = <View style={styles.body}>
        <Title text='Realizar Pagamento' />

        <InputAnimation animation={{
            delay: 300,
            duration: 300
        }} error={errors.about} placeholder='Descrição' setValue={setAbout} />

        <InputAnimation value={value} type={'currency'} animation={{
            delay: 600,
            duration: 300
        }} error={errors.value} setValue={setValue} />

        <BottomMenu onNavigateBack={() => {
            navigation.goBack()
        }} onConfirm={postData} ConfirmIcon={<PaySVG width={35} fill="white" height={35} />} />

        <Animatable.View
            delay={900}
            useNativeDriver={true}
            animation="fadeInLeft"
            duration={300}
            style={{
                width: '100%',
                maxWidth: '90%', alignSelf: 'center', justifyContent: 'space-between', flexDirection: 'row', marginTop: 10,
            }}>
            <Text style={{
                fontFamily: Globals.FONT_FAMILY.BOLD,
                fontSize: 13,
                color: Globals.COLOR.BRANCO,
                lineHeight: 16
            }}>Pagamento / Empréstimo</Text>

            <Switch
                trackColor={{ false: Globals.COLOR.LIGHT.COLOR3, true: Globals.COLOR.LIGHT.COLOR2 }}
                thumbColor={type ? Globals.COLOR.LIGHT.COLOR5 : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={(value) => {
                    setType(value)
                }}
                value={type}
            />
        </Animatable.View>
    </View>
    return (
        <Menu route={route} screenElement={screen} navigation={navigation} />
    );
}



export default AddTransaction;

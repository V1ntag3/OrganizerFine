import { useState } from 'react';
import Validations from '@/utils/Validations';
import { createTransaction } from '@/server/database/services/TransactionService';
import { Text, View } from 'tamagui';
import { Switch } from 'react-native-gesture-handler';
import Globals from '@/Globals';
import * as Animatable from 'react-native-animatable';
import Title from '@/components/UI/Title';
import InputAnimated from '@/components/Inputs/InputAnimated';
import { router, UnknownOutputParams, useLocalSearchParams } from 'expo-router';
import MenuBottom from '@/components/Menus/MenuBottom';
import { HandCoins } from '@tamagui/lucide-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import MenuSide from '@/components/Menus/MenuSide';

type Transaction = {
    type: boolean;
    about: string;
    value: number;
}

function AddTransaction(): JSX.Element {
    const item: UnknownOutputParams = useLocalSearchParams();

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
            createTransaction(obj as { value: number; about: string; loan_id: string; }).then(() => {
                router.navigate(
                    {
                        pathname: "/loan/detailLoan",
                        params: item
                    }
                )
            })
        }
    }

    return (<View style={{ flex: 1, }}>
        <SafeAreaView edges={['top']} style={{ flex: 1 }}>
            <MenuSide>
                <View style={{ flex: 1, paddingHorizontal: 10 }}>
                    <Title text='Realizar Pagamento' />
                    <View gap={10}>
                        <InputAnimated
                            value={about}
                            delay={300}
                            duration={300}
                            error={errors.about}
                            placeholder='Descrição'
                            setValue={setAbout} />

                        <InputAnimated
                            value={value}
                            type={'currency'}
                            delay={600}
                            duration={300}
                            error={errors.value}
                            setValue={setValue} />



                        <Animatable.View
                            delay={900}
                            useNativeDriver={true}
                            animation="fadeInLeft"
                            duration={300}
                            style={{
                                width: '100%',
                                alignSelf: 'center',
                                justifyContent: 'space-between',
                                flexDirection: 'row',
                                marginTop: 10,
                            }}>
                            <Text
                                fontWeight={'bold'}
                                style={{
                                    fontSize: 13,
                                }}>Pagamento / Empréstimo</Text>

                            <Switch
                                trackColor={{ false: Globals.COLOR.COLOR3, true: Globals.COLOR.COLOR2 }}
                                thumbColor={type ? Globals.COLOR.COLOR5 : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={(value) => {
                                    setType(value)
                                }}
                                value={type}
                            />
                        </Animatable.View>
                    </View>
                    <MenuBottom onNavigateBack={() => {
                        router.back()
                    }} onConfirm={postData} ConfirmIcon={<HandCoins size={25} />} />
                </View>
            </MenuSide>
        </SafeAreaView>
    </View >
    );
}



export default AddTransaction;

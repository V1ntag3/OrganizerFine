import { useState } from 'react';
import { View } from 'tamagui';

import Validations from '@/utils/Validations';
import { updateLoan } from '@/server/database/services/LoansService';
import InputAnimated from '@/components/Inputs/InputAnimated';
import Title from '@/components/UI/Title';
import MenuBottom from '@/components/Menus/MenuBottom';
import { HandCoins } from '@tamagui/lucide-icons';
import MenuSide from '@/components/Menus/MenuSide';
import { router, UnknownOutputParams, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';


type Loan = {
    id: string;
    name: string;
    about: string;
    value: number;
    amount_paid: number;
};
const UpdateLoan = () => {

    const item: UnknownOutputParams = useLocalSearchParams();
    const [loan, setLoan] = useState<Loan>({
        id: String(item.id),
        about: String(item.about),
        name: String(item.name),
        value: Number(item.value),
        amount_paid: Number(item.amount_paid)
    })
    const [value, setValue] = useState<number>(loan.value);
    const [about, setAbout] = useState<string>(loan.about);
    const [name, setName] = useState<string>(loan.name);

    const [errors, setErrors] = useState({
        value: false,
        about: false,
        name: false
    });

    const postData = async () => {
        const objErrors = {
            value: value === 0,
            about: Validations.onlyBlankSpaces(about),
            name: Validations.onlyBlankSpaces(name)
        };

        setErrors(objErrors);

        if (!Validations.hasTruthyValue(objErrors)) {
            const loanData = {
                id: item.id,
                value: parseFloat(value.toString()),
                about,
                name
            };

            try {
                await updateLoan(loanData as Loan);
                router.back()
            } catch (error) {
                console.error("Error creating loan:", error);
            }
        }
    };

    return <View style={{ flex: 1, }} >
        <SafeAreaView edges={['top']} style={{ flex: 1 }}>
            <MenuSide>
                <View style={{ paddingHorizontal: 10, flex: 1 }}>
                    <Title text='Editar Empréstimo' />
                    <View gap={10}>
                        <InputAnimated
                            value={name}
                            delay={300}
                            duration={300}
                            error={errors.name}
                            setValue={setName}
                            placeholder="Nome"
                        />
                        <InputAnimated
                            value={about}
                            delay={500}
                            duration={300}
                            error={errors.about}
                            setValue={setAbout}
                            placeholder="Descrição"
                        />
                        <InputAnimated
                            value={value}
                            delay={700}
                            duration={300}
                            error={errors.value}
                            setValue={setValue}
                            type="currency"
                            isEditable={false}
                        />
                    </View>

                </View>
                <MenuBottom onNavigateBack={() => {
                    router.back()
                }} onConfirm={postData} ConfirmIcon={<HandCoins size={25} />
                } />
            </MenuSide>
        </SafeAreaView>
    </View>
        ;
};

export default UpdateLoan;

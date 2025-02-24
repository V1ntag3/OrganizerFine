import { useState } from 'react';
import { View } from 'tamagui';
import Validations from '@/utils/Validations';
import { createLoan } from '@/server/database/services/LoansService';
import MenuBottom from '@/components/Menus/MenuBottom';
import Title from '@/components/UI/Title';
import MenuSide from '@/components/Menus/MenuSide';
import { router } from 'expo-router';
import InputAnimated from '@/components/Inputs/InputAnimated';
import { HandCoins } from '@tamagui/lucide-icons';
import { SafeAreaView } from 'react-native-safe-area-context';


const AddLoan = () => {
    const [value, setValue] = useState<number>(0);
    const [about, setAbout] = useState<string>("");
    const [name, setName] = useState<string>("");

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
                value: parseFloat(value.toString()),
                about,
                name
            };

            try {
                await createLoan(loanData);
                router.navigate("/loan/listLoan")

            } catch (error) {
                console.error("Error creating loan:", error);
            }
        }
    };

    return <View style={{ flex: 1, }}>
        <SafeAreaView edges={['top']} style={{ flex: 1 }}>
            <MenuSide>
                <View style={{ flex: 1, paddingHorizontal: 10 }}>

                    <Title text='Criar Empréstimo' />
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
                            type="currency" />
                    </View>
                </View>
                <MenuBottom onNavigateBack={() => {
                    router.back()
                }} onConfirm={postData} ConfirmIcon={<HandCoins size={35} strokeWidth={1} />
                } />
            </MenuSide>
        </SafeAreaView>
    </View>;
};

export default AddLoan;

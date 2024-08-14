import React, { useState } from 'react';
import { Text, View } from 'react-native';

import Menu from '../../components/Menu';
import styles from './AddLoanStyles';
import PaySVG from '../../assets/svgs/paySVG';
import Validations from '../../Validations';
import { createLoan } from '../../server/database/services/LoansService';
import InputAnimation from '../../components/InputAnimation';
import BottomMenu from '../../components/BottomMenu';
import Title from '../../components/Title';

interface AddLoanProps {
    route: any;
    navigation: any;
}

const AddLoan: React.FC<AddLoanProps> = ({ route, navigation }) => {
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
                navigation.navigate("ManagerLoan");
            } catch (error) {
                console.error("Error creating loan:", error);
            }
        }
    };

    const screen = (
        <>
            <Title text='Criar Empréstimo' />
            <View>
                <InputAnimation
                    animation={{ delay: 300, duration: 300 }}
                    error={errors.name}
                    setValue={setName}
                    placeholder="Nome"
                />
                <InputAnimation
                    animation={{ delay: 500, duration: 300 }}
                    error={errors.about}
                    setValue={setAbout}
                    placeholder="Descrição"
                />
                <InputAnimation
                    value={value}
                    animation={{ delay: 700, duration: 300 }}
                    error={errors.value}
                    setValue={setValue}
                    type="currency"
                />
            </View>
            <BottomMenu onNavigateBack={() => {
                navigation.goBack()
            }} onConfirm={postData} ConfirmIcon={<PaySVG width={35} fill="white" height={35} />
            } />
        </>
    );

    return <Menu route={route} screenElement={screen} navigation={navigation} />;
};

export default AddLoan;

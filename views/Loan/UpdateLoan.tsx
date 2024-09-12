import React, { useState } from 'react';
import { View } from 'react-native';

import Menu from '../../components/Menus/Menu';
import PaySVG from '../../assets/svgs/paySVG';
import Validations from '../../utils/Validations';
import { createLoan, updateLoan } from '../../server/database/services/LoansService';
import InputAnimation from '../../components/InputAnimation';
import BottomMenu from '../../components/Menus/BottomMenu';
import Title from '../../components/Title';
import Globals from '../../Globals';

interface UpdateLoanProps {
    route: any;
    navigation: any;
}

const UpdateLoan: React.FC<UpdateLoanProps> = ({ route, navigation }) => {

    const { item } = route.params
    const [value, setValue] = useState<number>(item.value);
    const [about, setAbout] = useState<string>(item.about);
    const [name, setName] = useState<string>(item.name);

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
                await updateLoan(loanData);
                navigation.navigate("ListLoan");
            } catch (error) {
                console.error("Error creating loan:", error);
            }
        }
    };

    const screen = (
        <>
            <Title text='Editar Empréstimo' />
            <View>
                <InputAnimation
                    value={name}

                    animation={{ delay: 300, duration: 300 }}
                    error={errors.name}
                    setValue={setName}
                    placeholder="Nome"
                />
                <InputAnimation
                    value={about}
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
                    editable={false}
                />
            </View>
            <BottomMenu onNavigateBack={() => {
                navigation.goBack()
            }} onConfirm={postData} ConfirmIcon={<PaySVG width={35} fill="white" height={35} />
            } />
        </>
    );

    return <View style={{
        backgroundColor: Globals.COLOR.LIGHT.COLOR4,
        flex: 1
    }}><Menu route={route} screenElement={screen} navigation={navigation} /></View>;
};

export default UpdateLoan;

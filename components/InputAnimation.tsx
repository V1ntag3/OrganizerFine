import React from 'react';
import { TextInput, StyleSheet, Text, View, TextStyle } from 'react-native';
import * as Animatable from 'react-native-animatable';
import CurrencyInput from 'react-native-currency-input';
import Globals from '../Globals';

interface InputProps {
    animation?: {
      delay: number;
      duration: number;
    };
    error?: boolean;
    value?: string | number | null; 
    setValue?: (value: string | number | any) => void; 
    placeholder?: string;
    type?: 'text' | 'currency' | null;
  }

const styles = StyleSheet.create({
    inputStyle: {
        alignSelf: 'center',
        padding: 10.75,
        paddingBottom: 0,
        width: '100%',
        height: 49.65,
        maxWidth: '90%',
        marginVertical: 8,
        marginBottom: 5,
        backgroundColor: Globals.COLOR.LIGHT.COLOR1,
        fontFamily: Globals.FONT_FAMILY.REGULAR,
        color: 'white',
        borderRadius: 6.97,
    } as TextStyle,
    errorStyle: {
        paddingLeft: 7,
        width: '100%',
        maxWidth: '90%',
        alignSelf: 'center',
        marginLeft: -15,
        color: Globals.COLOR_ERROR,
        fontSize: 11,
        lineHeight: 12,
        fontFamily: Globals.FONT_FAMILY.MEDIUM,
    } as TextStyle,
});

const InputComponent: React.FC<InputProps> = ({
    animation,
    error = false,
    value,
    setValue,
    placeholder = '',
    type = 'text',
}) => {

    const InputGeneric = type === 'currency' ? (
        <CurrencyInput
            value={typeof value === 'number' ? value : null}
            onChangeValue={setValue}
            prefix="R$ "
            delimiter="."
            separator=","
            precision={2}
            minValue={0}
            style={[styles.inputStyle, { color: error ? Globals.COLOR_ERROR : 'white' }, { marginTop: 5 }]}
            selectionColor='white'
            keyboardType="numeric"
        />
    ) : (
        <TextInput
            style={[styles.inputStyle]}
            selectionColor="white"
            placeholderTextColor={error ? Globals.COLOR_ERROR : 'white'}
            onChangeText={setValue}
            placeholder={placeholder}
        />
    );

    return (
        <View>
            {animation ? (
                <Animatable.View
                    delay={animation.delay}
                    useNativeDriver={true}
                    animation="fadeInLeft"
                    duration={animation.duration}
                >
                    {InputGeneric}
                    {error && <Text style={styles.errorStyle}>Campo inválido</Text>}
                </Animatable.View>
            ) : (
                <>
                    {InputGeneric}
                    {error && <Text style={styles.errorStyle}>Campo inválido</Text>}
                </>
            )}
        </View>
    );
};

export default InputComponent;

import Globals from '@/Globals';
import * as Animatable from 'react-native-animatable'
import { Text, Input } from 'tamagui'
import { StyleSheet } from 'react-native'
import CurrencyInput from 'react-native-currency-input';

interface InputAnimatedProps<T extends string | number> {
    delay: number;
    duration: number;
    error?: boolean;
    value: T;
    setValue?: (value: T) => void;
    placeholder?: string;
    type?: 'text' | 'currency' | null;
    isEditable?: boolean;
    animation?:boolean
}

export default function InputAnimated<T extends string | number>({ type = 'text', value, placeholder = "", delay, duration, isEditable = true, setValue = () => { }, error = false, animation=true }: InputAnimatedProps<T>) {
    return <Animatable.View
        style={{
            width: '100%'
        }}
        delay={delay}
        useNativeDriver={true}
        animation={animation ? "fadeInLeft" : ""}
        duration={duration}>
        {type === 'currency' ? (
            <CurrencyInput
                value={typeof value === 'number' ? value : 0}
                onChangeValue={(num) => setValue(num as T)}
                prefix="R$ "
                delimiter="."
                separator=","
                precision={2}
                minValue={0}
                renderTextInput={textInputProps => <Input
                    $theme-dark={{
                        textDecorationColor: "white",
                        placeholderTextColor: "white",
                        color: "white"
                    }}
                    disabled={!isEditable}
                    placeholderTextColor={error && Globals.COLOR_ERROR} {...textInputProps} />}
                style={[styles.inputStyle, error && { color: Globals.COLOR_ERROR }]}
                keyboardType="numeric"
                editable={isEditable}

            />
        ) : (
            <Input
                $theme-dark={{
                    textDecorationColor: "white",
                    placeholderTextColor: "white",
                    color: "white"
                }}

                style={[styles.inputStyle, error && { color: Globals.COLOR_ERROR }]}
                placeholderTextColor={error && Globals.COLOR_ERROR}
                value={typeof value === 'string' ? value : ''}
                editable={isEditable}
                disabled={!isEditable}
                onChangeText={(text) => {
                    setValue(text as T)
                }}
                placeholder={placeholder} />
        )}
        <Text style={[styles.errorStyle, { display: error ? 'flex' : 'none' }]}>Campo inválido</Text>
    </Animatable.View>

}
const styles = StyleSheet.create({
    inputStyle: {
        paddingVertical: 10.75309,
        paddingHorizontal: 11.0905,
        width: '100%',
    },
    errorStyle: {
        width: '100%',
        color: Globals.COLOR_ERROR,
        fontSize: 12,
        marginTop: 2,
    },

});
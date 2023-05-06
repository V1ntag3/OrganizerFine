import React from 'react';
import { Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import Globals from '../Globals';
type ButtonProps = {
    onPress: () => void;
    title: string;
    styleButton: object;
    styleText:object;
};

export default function ButtonGeneric(props: ButtonProps) {
    const { onPress, title, styleButton, styleText} = props;

    return (
        <TouchableOpacity style={styleButton} onPress={onPress}>
            <Text style={styleText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    text: {
        fontFamily:Globals.FONT_FAMILY.REGULAR,
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: Globals.COLOR.BRANCO,
    }
});

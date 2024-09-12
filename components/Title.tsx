import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Globals from '../Globals';

interface TitleProps {
    text: string;
    style?: object;
}

const Title: React.FC<TitleProps> = ({ text, style }) => {
    return (
        <Text style={[styles.title, style]}>
            {text}
        </Text>
    );
};

const styles = StyleSheet.create({
    title: {
        fontFamily: Globals.FONT_FAMILY.SEMIBOLD,
        fontWeight: '600',
        fontSize: 24,
        textAlign: 'center',
        color: Globals.COLOR.BRANCO,
        marginTop: 25,
        marginLeft:35
    },
});

export default Title;

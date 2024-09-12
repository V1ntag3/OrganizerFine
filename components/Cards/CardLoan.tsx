import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Globals from '@/Globals';

interface CardLoanProps {
    loan: {
        name: string;
        about: string;
        amount_paid: number;
        value: number;
    };
    onPress: () => void;
}

const CardLoan: React.FC<CardLoanProps> = ({ loan, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.loanContainer, { maxWidth: Globals.WIDTH * 0.9 }]}
        >
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.avatarContainer}>
                    <Text style={styles.avatarText}>{loan.name[0]}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.nameText}>{loan.name}</Text>
                    <Text numberOfLines={2} ellipsizeMode='tail' style={styles.aboutText}>{loan.about}</Text>
                </View>
            </View>
            <View style={styles.amountContainer}>
                <Text style={styles.amountPaidText}>
                    {loan.amount_paid.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                </Text>
                <Text style={styles.valueText}>
                    {loan.value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    loanContainer: {
        paddingHorizontal: 10,
        width: '90%',
        maxWidth: Globals.WIDTH * 0.9,
        backgroundColor: 'white',
        height: 58,
        alignSelf: 'center', marginTop: 10,
        borderRadius: 10,
        flexDirection: 'row', justifyContent: 'space-between'
    },
    avatarContainer: {
        backgroundColor: Globals.COLOR.LIGHT.COLOR4,
        width: 50,
        height: 50,
        borderRadius: 30,
        padding: 3,
        marginRight: 5,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatarText: {
        fontFamily: Globals.FONT_FAMILY.SEMIBOLD,
        fontSize: 30,
        textAlign: 'center',
        color: 'white'
    },
    textContainer: {
        justifyContent: 'center',
        flexDirection: 'column'
    },
    nameText: {
        fontFamily: Globals.FONT_FAMILY.BOLD,
        fontSize: 13,
        color: Globals.COLOR.LIGHT.COLOR5,
        lineHeight: 16
    },
    aboutText: {
        fontFamily: Globals.FONT_FAMILY.REGULAR,
        fontSize: 13,
        color: Globals.COLOR.LIGHT.COLOR5,
        lineHeight: 16,
        maxWidth: Globals.WIDTH * 0.9 - 150
    },
    amountContainer: {
        justifyContent: 'center',
        flexDirection: 'column'
    },
    amountPaidText: {
        fontFamily: Globals.FONT_FAMILY.BOLD,
        fontSize: 13,
        color: Globals.COLOR.LIGHT.COLOR5,
        lineHeight: 16
    },
    valueText: {
        fontFamily: Globals.FONT_FAMILY.SEMIBOLD,
        fontSize: 13,
        color: Globals.COLOR.LIGHT.COLOR5,
        lineHeight: 16
    }
});

export default CardLoan;

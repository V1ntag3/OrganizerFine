import React from 'react';
import { StyleSheet } from 'react-native';
import Globals from '@/Globals';
import { Card, View, Text } from 'tamagui';

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
        <Card
            padding={5}
            borderRadius={10}
            flexDirection='row'
            onPress={onPress}
        >
            <View flexDirection='row' gap={5} flex={1}>
                <View style={styles.avatarContainer}>
                    <Text style={styles.avatarText}>{loan.name[0]}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text fontWeight={'bold'} fontSize={14} numberOfLines={1} ellipsizeMode='tail'>{loan.name}</Text>
                    <Text fontWeight={'normal'} fontSize={14} numberOfLines={2} ellipsizeMode='tail'>{loan.about}</Text>
                </View>
            </View>
            <View width={'auto'} style={styles.textContainer}>
                <Text style={styles.amountPaidText} numberOfLines={1} fontWeight={'bold'}>
                    {loan.amount_paid.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                </Text>
                <Text style={styles.amountPaidText} numberOfLines={1} >
                    {loan.value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                </Text>
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({
    avatarContainer: {
        backgroundColor: Globals.COLOR.COLOR4,
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
        fontSize: 30,
        textAlign: 'center',
        color: 'white'
    },
    textContainer: {
        justifyContent: 'center',
        flexDirection: 'column'
    },
    amountPaidText: {
        fontSize: 14,
        textAlign: 'right'
    }
});

export default CardLoan;

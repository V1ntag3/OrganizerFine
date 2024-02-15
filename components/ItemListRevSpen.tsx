import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import Globals from '../Globals';
import VestSVG from './SVGComponentes/vestSVG';
import ComidaSVG from './SVGComponentes/comidaSVG';
import EletroSVG from './SVGComponentes/eletroSVG';
import EntreSVG from './SVGComponentes/entreSVG';
import OutrosSVG from './SVGComponentes/outrosSVG';
import ServSVG from './SVGComponentes/servSVG';
import MoneySVG from './SVGComponentes/moneySVG';

function ItemListRevSpen({navigation, element} :any): JSX.Element {
    const renderImagem = (item: any) => {
        switch (item) {
            case 0:
                return (<ComidaSVG />)
            case 1:
                return (<ServSVG />)
            case 2:
                return (<EletroSVG />)
            case 3:
                return (<VestSVG />)
            case 4:
                return (<EntreSVG />)
            case 5:
                return (<OutrosSVG />)
            case -1:
                return (<MoneySVG />)
        }
    }
    const styles = StyleSheet.create({
        valDate: {
            width: 'auto',
            display: 'flex',
            flexDirection: 'column',
            position: 'absolute',
            right: 10,
            top: 15
        },
        valDate1: {
            fontWeight: '900',
            fontSize: 13.8889,
            textAlign: 'right',
            color: element.type == 0 ? Globals.COLOR_RECEITA: Globals.COLOR_GASTO,
            marginBottom: 2
        },
        valDate2: {
            fontSize: 10.8889,
            textAlign: 'right',
            color: element.type == 0 ? Globals.COLOR_RECEITA: Globals.COLOR_GASTO,
    
        },
        decCat: {
            width: 'auto',
            display: 'flex',
            flexDirection: 'column'
        },
        decCat1: {
    
            fontSize: 15.2778,
            fontWeight: '600',
            color: element.type == 0 ? Globals.COLOR_RECEITA: Globals.COLOR_GASTO,
            marginBottom: 2
    
        },
        decCat2: {
            color: element.type == 0 ? Globals.COLOR_RECEITA: Globals.COLOR_GASTO,
            fontSize: 10.8889
        },card: {
            alignSelf: 'center',
            backgroundColor: Globals.COLOR.BRANCO,
            width: '100%',
            maxWidth: '90%',
            height: 66,
            borderRadius: 5,
            paddingHorizontal: 10,
            paddingVertical: 13,
            flexDirection: 'row',
            marginBottom: 10
        },
        iconCard: {
            width: 40,
            height: 40,
            borderRadius: 25,
            display: 'flex',
            flexDirection: 'row',
            marginRight: 5,
        },
    
    });
    
    return (
        <View key={element.id} style={{ backgroundColor: '#D9D9D9' }}>
            <TouchableOpacity onPress={() => {
                navigation.navigate('DetailRevenueSpending', { element })
            }}>
                <View style={styles.card}>
                    <View style={styles.iconCard}>
                        {
                            renderImagem(element.category)
                        }
                    </View>
                    <View style={styles.decCat}>
                        <Text style={styles.decCat1}>{element.about}</Text>
                        <Text style={styles.decCat2}>{renderNome(element.category)}</Text>
                    </View>
                    <View style={styles.valDate}>
                        <Text style={styles.valDate1}>{element.type == 0 ? '+ ' : '- ' }{element.value}</Text>
                        <Text style={styles.valDate2}>{element.created_at}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>

    );
    
};
const renderNome = (item: any) => {
    switch (item) {
        case 0:
            return 'Alimentação'
        case 1:
            return 'Serviço'
        case 2:
            return 'Eletrônicos'
        case 3:
            return 'Vestuário'
        case 4:
            return 'Entretenimento'
        case 5:
            return 'Outros'
        case -1:
            return 'Receita'
    }
}


export default ItemListRevSpen;

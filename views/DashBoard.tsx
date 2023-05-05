/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Dimensions,
    TextInput,
    ScrollView,
} from 'react-native';

import { useState } from 'react';
import Menu from '../componentes/Menu';
import { PieChart } from "react-native-gifted-charts";
import DateTimePicker from '@react-native-community/datetimepicker';

// Dimensoes
type props = {
    navigation: any;
}


var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;


function DashBoard({ navigation }: props["navigation"]): JSX.Element {
    const renderLegend = (text: any, color: any) => {
        return (
            <View style={{ flexDirection: 'row', marginBottom: 12 }}>
                <View
                    style={{
                        height: 18,
                        width: 18,
                        marginRight: 10,
                        borderRadius: 4,
                        backgroundColor: color || 'white',
                    }}
                />
                <Text style={{ color: 'white', fontSize: 16 }}>{text || ''}</Text>
            </View>
        );
    };
    const [gastos, setGastos] = useState('200.000.000,00');
    const [receitas, setReceitas] = useState('200.000.000,00');
    const [item, setItems] = useState([
        {
            id: 0,
            descricao: 'Gastos com roupas',
            tipo: 0,
            catTipo: 0,
            valor: '100.000,00',
            data: '4d atrás'
        },
        {
            id: 1,
            descricao: 'Gastos com casa',
            tipo: 0,
            catTipo: 0,
            valor: '100.000,00',
            data: '4d atrás'
        }
    ])
    const pieData = [
        {
            value: 47,
            color: '#323131',
            gradientCenterColor: '#323131',
            focused: true,
        },
        { value: 40, color: '#474747', gradientCenterColor: '#474747' },
        { value: 16, color: '#FFFFFF', gradientCenterColor: '#FFFFFF' },
        { value: 3, color: '#ECE1C3', gradientCenterColor: '#ECE1C3' },
        { value: 16, color: '#8EBDB6', gradientCenterColor: '#8EBDB6' },
        { value: 3, color: '#60625F', gradientCenterColor: '#60625F' },
    ];
    var dataNow = new Date
    const [data, setData] = useState(dataNow);

    return (
        <SafeAreaView style={styles.body}>
            <Menu />

            <ScrollView contentContainerStyle={styles.scrollView} >
            <DateTimePicker mode="time" value={data}/>

                <Text style={
                    {
                        fontWeight: '600',
                        fontSize: 24,
                        textAlign: 'center',
                        color: '#FFFFFF',
                        marginTop:15

                    }
                }>Finanças</Text>
                <View style={
                    {
                        margin: 'auto',
                        width: '100%',
                        paddingHorizontal: (width * 0.5) - 90,
                        marginTop: 70
                    }
                }>
                    <PieChart
                        data={pieData}
                        donut
                        showGradient
                        sectionAutoFocus
                        radius={90}
                        innerRadius={50}
                        innerCircleColor={'#195E63'}
                        centerLabelComponent={() => {
                            return (
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Text
                                        style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>
                                        47%
                                    </Text>
                                    <Text style={{ fontSize: 14, color: 'white' }}>Roupas</Text>
                                </View>
                            );
                        }}
                    />
                    <View
                        style={{
                            width: '100%',
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            marginTop: 20,
                        }}>
                        {renderLegend('Comida', 'rgb(84,219,234)')}
                        {renderLegend('Roupa', 'lightgreen')}
                        {renderLegend('Mar', 'orange')}
                        {renderLegend('Comida', 'rgb(84,219,234)')}
                        {renderLegend('Feb', 'lightgreen')}
                        {renderLegend('Mar', 'orange')}
                    </View>
                    
                </View>

                <View style={styles.fundosGastos} >
                    <View style={styles.dados}>
                        <View style={styles.totalizadores}>
                            <Text style={styles.textTotalizadores}>Gastos</Text>
                            <Text style={styles.textTotalizadores}>R$ {gastos}</Text>
                        </View>
                        <View style={styles.linha}></View>
                        <View style={styles.totalizadores}>
                            <Text style={styles.textTotalizadores}>Receitas</Text>
                            <Text style={styles.textTotalizadores}>R$ {receitas}</Text>
                        </View>
                    </View>
                    {
                        item.map(element => (
                            <View style={styles.card}>
                                <View style={styles.iconCard}>

                                </View>
                                <View style={styles.decCat}>
                                    <Text style={styles.decCat1}>{element.descricao}</Text>
                                    <Text style={styles.decCat2}>Categoria</Text>
                                </View>
                                <View style={styles.valDate}>
                                    <Text style={styles.valDate1}>R$ {element.valor}</Text>
                                    <Text style={styles.valDate2}>{element.data}</Text>
                                </View>
                            </View>
                        ))
                    }

                </View>
            </ScrollView >
        </SafeAreaView >

    );
}
var cor1 = '#323941'
var cor2 = '#195E63'
const styles = StyleSheet.create({
    body: {
        backgroundColor: cor2,
        flex: 1,
    },
    scrollView: {
        height: height
    },
    fundosGastos: {
        backgroundColor: "#D9D9D9",
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        minHeight: 0.5 * height,
        marginTop: 0.4 * height,
        width: width,
        position: 'absolute',
        bottom: 0,
    },
    dados: {
        justifyContent: "space-between",
        flexDirection: "row",
        // paddingHorizontal:20,
        paddingVertical: 20,
    },
    totalizadores: {
        display: 'flex',
        width: (width - 10) / 2,
    },
    textTotalizadores: {
        fontFamily: 'Poppins-Regular',
        color: cor1,
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 23,
        textAlign: 'center'

    }
    ,
    linha: {
        width: 2,
        borderWidth: 1,
        borderColor: cor1,
        height: 50,
        rotation: 90
    }
    ,
    card: {
        backgroundColor: 'white',
        width: '100%',
        maxWidth: 338.89,
        height: 66,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 5,
        padding: 5,
        paddingVertical: 13,
        flexDirection: 'row',
        marginBottom: 10
    },
    iconCard: {
        width: 40,
        height: 40,
        backgroundColor: 'black',
        borderRadius: 25,
        display: 'flex',
        flexDirection: 'row',
        marginRight: 3
    },
    decCat: {
        width: 'auto',
        display: 'flex',
        flexDirection: 'column'
    },
    decCat1: {

        fontSize: 15.2778,
        fontWeight: '600',
        color: '#063940',
        marginBottom: 2

    },
    decCat2: {
        fontSize: 10.8889
    },
    valDate: {
        width: 'auto',
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        right: 5,
        top: 15
    },
    valDate1: {
        fontWeight: '900',
        fontSize: 13.8889,
        textAlign: 'right',
        color: '#063940',
        marginBottom: 2
    },
    valDate2: {
        fontSize: 10.8889,
        textAlign: 'right'
    }
});

export default DashBoard;

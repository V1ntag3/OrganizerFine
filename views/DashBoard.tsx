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
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import React, { useCallback, useState } from 'react';
import Menu from '../componentes/Menu';
import { PieChart } from "react-native-gifted-charts";
import Globals from '../Globals';
import DatePicker from 'react-native-modern-datepicker';
import BackRotSVG from '../componentes/SVGComponentes/backRotSVG'
import ComidaSVG from '../componentes/SVGComponentes/comidaSVG';
import ServSVG from '../componentes/SVGComponentes/servSVG';
import EletroSVG from '../componentes/SVGComponentes/eletroSVG';
import EntreSVG from '../componentes/SVGComponentes/entreSVG';
import OutrosSVG from '../componentes/SVGComponentes/outrosSVG';
import VestSVG from '../componentes/SVGComponentes/vestSVG';
type dashboradProps = {
    navigation: any;
}

function DashBoard({ navigation }: dashboradProps["navigation"]): JSX.Element {
    const rederImagem = (item: any) => {
        switch (item) {
            case 0:
                return (
                    <>
                        <ComidaSVG />
                    </>
                )
            case 1:
                return (
                    <>
                        <ServSVG />
                    </>
                )
            case 2:
                return (
                    <>
                        <EletroSVG />
                    </>
                )
            case 3:
                return (
                    <>
                        <VestSVG />
                    </>
                )
            case 4:
                return (
                    <>
                        <EntreSVG />
                    </>
                )
            case 5:
                return (
                    <>
                        <OutrosSVG />
                    </>
                )
        }
    }
    // Renderizar Legenda
    const renderLegend = (text: any, color: any) => {
        return (
            <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                <View
                    style={{
                        height: 11,
                        width: 11,
                        marginRight: 10,
                        borderRadius: 9,
                        backgroundColor: color || Globals.COLOR.BRANCO,
                    }}
                />
                <Text style={{ color: Globals.COLOR.BRANCO, fontSize: 11, marginRight: 20, fontFamily: Globals.FONT_FAMILY.REGULAR, marginTop: -3 }}>{text || ''}</Text>
            </View>
        );
    };

    // Dados
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
            catTipo: 1,
            valor: '100.000,00',
            data: '4d atrás'
        },
        {
            id: 0,
            descricao: 'Gastos com roupas',
            tipo: 0,
            catTipo: 2,
            valor: '100.000,00',
            data: '4d atrás'
        },
        {
            id: 1,
            descricao: 'Gastos com casa',
            tipo: 0,
            catTipo: 3,
            valor: '100.000,00',
            data: '4d atrás'
        },
        {
            id: 0,
            descricao: 'Gastos com roupas',
            tipo: 0,
            catTipo: 4,
            valor: '100.000,00',
            data: '4d atrás'
        },
        {
            id: 1,
            descricao: 'Gastos com casa',
            tipo: 0,
            catTipo: 5,
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

    const [mes, setMes] = useState(Globals.MONTH.slice((parseInt(new Date().getMonth().toString()) - 1), (new Date().getMonth())));
    const [ano, setAno] = useState(String(new Date().getFullYear()));


    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const showPicker = useCallback((value: boolean | ((prevState: boolean) => boolean)) => setShow(value), []);

    const handleDateSelect = (selectedDate: String) => {
        setDate(new Date(selectedDate.toString()));
        setAno(selectedDate.slice(0, 4).toString())
        setShow(false);
        var valor = Globals.MONTH.slice((parseInt(selectedDate.toString().slice(4, 7)) - 1), (parseInt(selectedDate.toString().slice(4, 7))))
        setMes(valor)
    }
    return (
        <SafeAreaView style={styles.body}>
            <Menu navigation={navigation} />
            {show && (
                <DatePicker
                    mode="monthYear"
                    isGregorian={true}
                    selectorStartingYear={2000}
                    onMonthYearChange={handleDateSelect}
                    selectorEndingYear={3000}
                    style={{
                        position: 'absolute',
                        top: 50,
                        zIndex: 10000,
                        width: Globals.WIDTH * 0.9,
                        borderRadius: 25,
                        left: Globals.WIDTH * 0.05
                    }}
                    options={
                        {
                            backgroundColor: Globals.COLOR.LIGHT.COLOR3,
                            textHeaderColor: Globals.COLOR.BRANCO,
                            textDefaultColor: Globals.COLOR.BRANCO,
                            selectedTextColor: Globals.COLOR.BRANCO,
                            mainColor: Globals.COLOR.LIGHT.COLOR2,
                            defaultFont: Globals.FONT_FAMILY.REGULAR,
                            textFontSize: 13,

                        }
                    }
                />
            )}
            <ScrollView contentContainerStyle={styles.scrollView} >

                <TouchableOpacity onPress={() => showPicker(true)}>

                    <View style={
                        {
                            position: 'absolute',
                            flexDirection: 'row',
                            top: 45,
                            marginRight: 'auto',
                            marginLeft: 'auto',
                            alignSelf: 'center'
                        }
                    }>
                        <View>
                            <Text style={styles.selectData}>{mes}</Text>
                            <Text style={styles.selectData}>{ano}</Text>
                        </View>
                        <View style={{ marginTop: 3, marginLeft: 3 }}>
                            <BackRotSVG />
                        </View>
                    </View>
                </TouchableOpacity>

                <Text style={styles.tituloView}>Finanças</Text>
                <View style={
                    {
                        margin: 'auto',
                        width: '100%',
                        paddingHorizontal: (Globals.WIDTH * 0.5) - 90,
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
                        innerCircleColor={Globals.COLOR.LIGHT.COLOR4}
                        centerLabelComponent={() => {
                            return (
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Text
                                        style={{ fontSize: 22, color: Globals.COLOR.BRANCO, fontWeight: 'bold' }}>
                                        47%
                                    </Text>
                                    <Text style={{ fontSize: 14, color: Globals.COLOR.BRANCO }}>Roupas</Text>
                                </View>
                            );
                        }}
                    />
                    <View
                        style={{

                            flexDirection: 'row',
                            marginHorizontal: -Globals.WIDTH * 0.20
                        }}>
                        <View style={{
                            flexDirection: 'column',

                        }}>
                            {renderLegend('Alimentação', '#FFFFFF')}
                            {renderLegend('Vestuário', '#ECE1C3')}


                        </View>
                        <View style={{
                            flexDirection: 'column',
                        }}>
                            {renderLegend('Serviços', '#60625F')}
                            {renderLegend('Entretenimento', '#3E838C')}
                        </View>
                        <View style={{
                            flexDirection: 'column',
                        }}>

                            {renderLegend('Eletrônicos', '#474747')}
                            {renderLegend('Outros', '#323131')}
                        </View>
                    </View>

                </View>
                <View style={styles.fundosGastos} >
                    <View style={styles.dados}>
                        <View style={styles.totalizadores}>
                            <Text style={[styles.textTotalizadores,{color:'#F44336'}]}>Gastos</Text>
                            <Text style={[styles.textTotalizadores,{color:'#F44336'}]}>R$ {gastos}</Text>
                        </View>
                        <View style={styles.linha}></View>
                        <View style={styles.totalizadores}>
                            <Text style={[styles.textTotalizadores,{color:'#0BBC5F'}]}>Receitas</Text>
                            <Text style={[styles.textTotalizadores,{color:'#0BBC5F'}]}>R$ {receitas}</Text>
                        </View>
                    </View>
                    {
                        item.map(element => (
                            <View style={styles.card}>
                                <View style={styles.iconCard}>
                                    {
                                        rederImagem(element.catTipo)

                                    }
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


const styles = StyleSheet.create({
    body: {
        backgroundColor: Globals.COLOR.LIGHT.COLOR4,
        flex: 1
    },
    scrollView: {
        minHeight: Globals.HEIGHT
    },
    tituloView: {
        fontWeight: '600',
        fontSize: 24,
        textAlign: 'center',
        color: Globals.COLOR.BRANCO,
        marginTop: 15
    },
    selectData: {
        color: Globals.COLOR.BRANCO,
        fontSize: 12,
        lineHeight: 15,
        fontFamily: Globals.FONT_FAMILY.BOLD,
        fontWeight: '600',
        textAlign: 'center'
    }
    ,
    fundosGastos: {
        backgroundColor: "#D9D9D9",
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        minHeight: 0.4 * Globals.HEIGHT,
        width: Globals.WIDTH,
        marginTop: 20
    },
    dados: {
        justifyContent: "space-between",
        flexDirection: "row",
        paddingVertical: 20,
    },
    totalizadores: {
        display: 'flex',
        width: (Globals.WIDTH - 10) / 2,
    },
    textTotalizadores: {
        fontFamily: Globals.FONT_FAMILY.REGULAR,
        color: Globals.COLOR.LIGHT.COLOR5,
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 23,
        textAlign: 'center'

    }
    ,
    linha: {
        width: 2,
        borderWidth: 1,
        borderColor: Globals.COLOR.LIGHT.COLOR5,
        height: 50,
        rotation: 90
    }
    ,
    card: {
        backgroundColor: Globals.COLOR.BRANCO,
        width: '100%',
        maxWidth: 338.89,
        height: 66,
        marginLeft: 'auto',
        marginRight: 'auto',
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
    decCat: {
        width: 'auto',
        display: 'flex',
        flexDirection: 'column'
    },
    decCat1: {

        fontSize: 15.2778,
        fontWeight: '600',
        color: Globals.COLOR.LIGHT.COLOR5,
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
        right: 10,
        top: 15
    },
    valDate1: {
        fontWeight: '900',
        fontSize: 13.8889,
        textAlign: 'right',
        color: Globals.COLOR.LIGHT.COLOR5,
        marginBottom: 2
    },
    valDate2: {
        fontSize: 10.8889,
        textAlign: 'right'
    }
});

export default DashBoard;
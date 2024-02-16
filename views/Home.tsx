import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
}
    from 'react-native';
import React from 'react';
import BarChartSVG from '../components/SVGComponentes/barChartSVG'
import Globals from '../Globals';
import Svg, { Path } from 'react-native-svg';
import AddSVG from '../components/SVGComponentes/addSVG';
import GestaoSVG from '../components/SVGComponentes/gestaoSVG';
import Menu from '../components/Menu';

function Home({ route, navigation }: any): JSX.Element {

    const screen = <SafeAreaView style={styles.body}>
        <View style={styles.boxUp} >
            <Text style={styles.tituloView}>Home</Text>
            <View style={styles.boxUpDados}>
                <Text style={styles.boxUpDadosText1}>Balanço Geral</Text>
                <Text style={styles.boxUpDadosText2}>+ R$ 999.999,00</Text>
            </View>
        </View>
        <View style={styles.boxDown} >
            <View style={{ flexDirection: 'row' }}>
                <View onTouchStart={() => {
                    navigation.navigate('DashBoard')
                }} style={[styles.boxClick, styles.boxClick1]}>
                    <BarChartSVG width={'88%'} style={{ marginTop: 30, alignSelf: 'center', marginBottom: 10 }} />
                    <Text style={styles.textBox}  >Finanças</Text>
                </View>
                <View onTouchStart={() => {
                    navigation.navigate('AddRevenueSpending')
                }} style={[styles.boxClick, styles.boxClick2]}>
                    <View style={{
                        borderRadius: 30
                    }}>
                        <View
                            style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: 25, // Raio de borda de 30px
                                overflow: 'hidden', // Isso garante que o SVG fique dentro dos limites arredondados
                            }}
                        >
                            <Svg width="100%" height="100%">
                                <Path d="M0 0 L178 0 L0 200 Z" fill={Globals.COLOR_GASTO} />
                                <Path d="M0 200 L200 200 L200 -27 Z " fill={Globals.COLOR_RECEITA} />
                            </Svg>
                        </View>
                        <View style={styles.gastoCorte}></View>
                    </View>
                    <Text style={[styles.textBox, { position: 'absolute', left: 10, top: 10 }]} >Gasto</Text>
                    <Text style={[styles.textBox, { position: 'absolute', bottom: 10, right: 10 }]} >Receita</Text>
                    <AddSVG width={100} height={100} style={{ position: 'absolute', alignSelf: 'center', top: 37 }} />
                </View>
            </View>

            <View onTouchEnd={() => {
                navigation.navigate('ManagerLoan')
            }} style={[styles.boxClick, styles.boxClick3]}>
                <GestaoSVG />
                <Text style={styles.textBox}  >Gestão de Empréstimos</Text>
            </View>
        </View>

    </SafeAreaView>
    return (
        <Menu route={route} screenElement={screen} navigation={navigation} />
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: Globals.COLOR.LIGHT.COLOR4,
        flex: 1,
        height: Globals.HEIGHT
    },
    boxUp: {
        backgroundColor: '#AC8BEE',
        width: '100%',
        height: 155,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    boxUpDados: {
        position: 'absolute',
        bottom: 10,
        alignSelf: 'center'
    },
    boxUpDadosText1: {
        color: Globals.COLOR.BRANCO,
        textAlign: 'center',
        fontSize: 16,
        fontFamily: Globals.FONT_FAMILY.REGULAR,
    },
    boxUpDadosText2: {
        color: Globals.COLOR.BRANCO,
        textAlign: 'center',
        fontSize: 30,
        fontFamily: Globals.FONT_FAMILY.BOLD,
        lineHeight: 35

    },
    boxDown: {
        display: 'flex',
        flexDirection: 'column',
        marginHorizontal: 14,
        marginVertical: 14
    },
    textBox: {
        fontFamily: Globals.FONT_FAMILY.REGULAR,
        textAlign: 'center',
        fontSize: 18,
        color: Globals.COLOR.BRANCO,
    },
    boxClick: {
        height: 178,
        borderRadius: 25,
        marginBottom: 15,

    },
    boxClick1: {
        width: '55%',
        backgroundColor: '#AC8BEE'
    },
    boxClick2: {
        width: Globals.WIDTH * 0.45 - 25,
        backgroundColor: '#AC8BEE',
        marginLeft: 10
    },
    boxClick3: {
        width: '100%',
        height: 120,
        backgroundColor: '#AC8BEE',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    receitaCorte: {
        backgroundColor: Globals.COLOR_RECEITA,
        width: '100%',
        height: '100%',
    },
    gastoCorte: {

    },
    tituloView: {
        fontWeight: '600',
        fontSize: 24,
        textAlign: 'center',
        color: Globals.COLOR.BRANCO,
        marginTop: 15
    },
});

export default Home;

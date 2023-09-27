import {
    SafeAreaView,
    StyleSheet,
    View,
    Text
}
    from 'react-native';
import React from 'react';
import BarChartSVG from '../componentes/SVGComponentes/barChartSVG'
import Globals from '../Globals';
import Svg, { Path } from 'react-native-svg';
import AddSVG from '../componentes/SVGComponentes/addSVG';
import GestaoSVG from '../componentes/SVGComponentes/gestaoSVG';


function Login({ route, navigation }: any): JSX.Element {

    return (
        <SafeAreaView style={styles.body}>
            <View style={styles.boxUp} >
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
                        navigation.navigate('Adicionar')

                    }}  style={[styles.boxClick, styles.boxClick2]}>
                        <View style={{
                            borderRadius: 30

                        }}>
                            <View style={{


                            }} >
                                <Svg style={{ position: 'absolute', borderRadius: 30, borderColor:'white', borderWidth:2 }} width="100%" height="100%" >
                                    <Path 
                                        d="M0 0 L178 0 L0 200 Z" fill={Globals.COLOR_GASTO}
                                    />
                                  
                                </Svg>
                                <Svg width="100%" height="100%" >
                                    
                                    <Path   

                                        d="M0 200 L200 200 L200 -27 Z " fill={Globals.COLOR_RECEITA}
                                    />
                                </Svg>

                            </View>
                            <View style={styles.gastoCorte}></View>
                        </View>
                        <Text style={[styles.textBox,{position:'absolute', left:10, top:10}]} >Gasto</Text>
                                 <Text style={[styles.textBox,{position:'absolute', bottom:10, right:10}]} >Receita</Text>
                        <AddSVG width={100} height={100} style={{ position:'absolute', alignSelf:'center', top:50}}/>
                    </View>
                </View>

                <View style={[styles.boxClick, styles.boxClick3]}>
                    <GestaoSVG />
                    <Text style={styles.textBox} onPress={() => {
                        navigation.navigate('DashBoard')

                    }} >Gestão de Empréstimos</Text>
                </View>
            </View>

        </SafeAreaView>
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
        height: 200,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50
    },
    boxUpDados: {
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center'
    },
    boxUpDadosText1: {
        color: Globals.COLOR.BRANCO,
        textAlign: 'center',
        fontSize: 20,
        fontFamily: Globals.FONT_FAMILY.REGULAR,
    },
    boxUpDadosText2: {
        color: Globals.COLOR.BRANCO,
        textAlign: 'center',
        fontSize: 38,
        fontFamily: Globals.FONT_FAMILY.BOLD,
        lineHeight: 45

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
        fontSize: 20,
        color: Globals.COLOR.BRANCO,
    },
    boxClick: {
        height: 200,
        borderRadius: 25,
        marginBottom: 15,
        
    },
    boxClick1: {
        width: '60%',
        backgroundColor: '#AC8BEE'

    },
    boxClick2: {
        width: '38%',
        backgroundColor: '#AC8BEE',
        marginLeft: 10

    },
    boxClick3: {
        width: '100%',
        height:120,
        backgroundColor: '#AC8BEE',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
        

    },
    receitaCorte: {
        backgroundColor: Globals.COLOR_RECEITA,
        width: '100%',
        height: '100%',
    },
    gastoCorte: {

    },

});

export default Login;

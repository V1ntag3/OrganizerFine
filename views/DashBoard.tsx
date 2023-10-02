import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    RefreshControl,
    Pressable,
    FlatList,
} from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Globals from '../Globals';
import DatePicker from 'react-native-modern-datepicker';
import BackRotSVG from '../componentes/SVGComponentes/backRotSVG'
import AddSVG from '../componentes/SVGComponentes/addSVG';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingScreen from './LoadingScreen';
import * as Animatable from 'react-native-animatable'
import Menu from './components/Menu';
import PieChartComp from './components/PieChartComp';
import ItemListRevSpen from './components/ItemListRevSpen';

function DashBoard({ route, navigation }: any): JSX.Element {

    const [mes, setMes] = useState(Globals.MONTH[parseInt(new Date().getMonth().toString())])
    const [ano, setAno] = useState(String(new Date().getFullYear()));

    const mesReal = useRef(Globals.MONTH[parseInt(new Date().getMonth().toString())])
    const anoReal = useRef(String(new Date().getFullYear()));

    const [isLoading, setIsLoading] = useState(false)
    const [gastos, setGastos] = useState('R$ 0,00');
    const [receitas, setReceitas] = useState('R$ 0,00');
    const [item, setItems] = useState([])

    const [show, setShow] = useState(false);

    const [valorMaiorPorc, setValorMaiorPorc] = useState('0%')
    const [valorMaiorNome, setValorMaiorNome] = useState('')
    const [selectedDateSe, _] = useState(new Date().toISOString().slice(0, 10));

    const renderHeaderFlat = () => {
        return (
            <>
                <TouchableOpacity onPressIn={() => { setShow(show == true ? false : true) }}>
                    <View style={
                        {
                            position: 'absolute',
                            flexDirection: 'row',
                            top: 45,
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
                <PieChartComp pieData={pieData} valorMaiorPorc={valorMaiorPorc} valorMaiorNome={valorMaiorNome} />
                <Animatable.View useNativeDriver={true} animation='fadeInUp' style={[styles.fundosGastos, item.length <= 0 ? { maxHeight: 'auto', height: '100%', minHeight: Globals.HEIGHT * 0.38 } : {}]} >
                    <View style={styles.dados}>
                        <View style={styles.totalizadores}>
                            <Text style={[styles.textTotalizadores, { color: Globals.COLOR_GASTO }]}>Gastos</Text>
                            <Text style={[styles.textTotalizadores, { color: Globals.COLOR_GASTO }]}>{gastos}</Text>
                        </View>
                        <View style={styles.linha}></View>
                        <View style={styles.totalizadores}>
                            <Text style={[styles.textTotalizadores, { color: Globals.COLOR_RECEITA }]}>Receitas</Text>
                            <Text style={[styles.textTotalizadores, { color: Globals.COLOR_RECEITA }]}>{receitas}</Text>
                        </View>
                    </View>

                </Animatable.View>
            </>)

    }
    const renderItens = () => {
        return (
            <FlatList
                refreshControl={<RefreshControl progressBackgroundColor={Globals.COLOR.LIGHT.COLOR1} colors={[Globals.COLOR.LIGHT.COLOR3]} refreshing={refreshing}
                    onRefresh={onRefresh} />}
                contentContainerStyle={{
                    minHeight: Globals.HEIGHT * 0.4, backgroundColor: Globals.COLOR.LIGHT.COLOR4
                }}
                disableVirtualization={false}

                style={{ backgroundColor: '#D9D9D9' }}
                data={item}
                renderItem={({ item }) => <ItemListRevSpen navigation={navigation} element={item} />}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={renderHeaderFlat()}
                keyExtractor={(item: { id: any; }) => item.id}
            />
        )
    }
    const pieData = useRef([
        { value: 0, color: '#323131', gradientCenterColor: '#323131' },
        { value: 0, color: '#474747', gradientCenterColor: '#474747' },
        { value: 0, color: '#FFFFFF', gradientCenterColor: '#FFFFFF' },
        { value: 0, color: Globals.COLOR.LIGHT.COLOR1, gradientCenterColor: Globals.COLOR.LIGHT.COLOR1 },
        { value: 0, color: Globals.COLOR.LIGHT.COLOR3, gradientCenterColor: Globals.COLOR.LIGHT.COLOR3 },
        { value: 0, color: '#60625F', gradientCenterColor: '#60625F' },
    ]);
    const getData = async (isPageReload = false, anoR = null, mesR = null) => {
        try {
            await AsyncStorage.getItem('token', (_, result) => {

                var mesRealM = mesR == null ? mesReal.current : mesR
                var anoRealM = anoR == null ? anoReal.current : anoR

                fetch(Globals.BASE_URL_API + 'revenue_spending/?month=' + mesRealM + '&year=' + anoRealM, {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Token ' + result
                    },
                }).then(response => {
                    if (response.status === 401 || response.status === 403) {
                        AsyncStorage.clear().then(() => { setUserToken(null) })
                    }
                    if (response.status == 200) {
                        response.json().then((json) => {
                            setShow(false)
                            if (json != 0 && json.detail == null) {
                                var array: any = []
                                var gastos: number = 0
                                var receitas: number = 0
                                var item0 = 0, item1 = 0, item2 = 0, item3 = 0, item4 = 0, item5 = 0
                                for (var item in json) {
                                    switch (json[item].typeCat) {
                                        case '0':
                                            item0 = + json[item].value
                                            break
                                        case '1':
                                            item1 = + json[item].value
                                            break
                                        case '2':
                                            item2 = + json[item].value
                                            break
                                        case '3':
                                            item3 = + json[item].value
                                            break
                                        case '4':
                                            item4 = + json[item].value
                                            break
                                        case '5':
                                            item5 = + json[item].value
                                            break
                                    }

                                    if (json[item].type == '0') {
                                        receitas += json[item].value
                                    }

                                    if (json[item].type == '1') {
                                        gastos += json[item].value
                                    }
                                    json[item].value = json[item].value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

                                    var valor = parseInt(new Date() - new Date(json[item].date))
                                    json[item].realDate = json[item].date
                                    json[item].date = String(parseInt(valor / (1000 * 60 * 60 * 24))) + ' dias atrás'

                                    array.push(json[item])


                                }

                                setGastos(gastos.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }))
                                setReceitas(receitas.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }))
                                var arrayValores = [item0, item1, item2, item3, item4, item5]
                                pieData.current = [
                                    { value: item0, color: '#323131', gradientCenterColor: '#323131' },
                                    { value: item1, color: '#474747', gradientCenterColor: '#474747' },
                                    { value: item2, color: '#FFFFFF', gradientCenterColor: '#FFFFFF' },
                                    { value: item3, color: Globals.COLOR.LIGHT.COLOR1, gradientCenterColor: Globals.COLOR.LIGHT.COLOR1 },
                                    { value: item4, color: Globals.COLOR.LIGHT.COLOR3, gradientCenterColor: Globals.COLOR.LIGHT.COLOR3 },
                                    { value: item5, color: '#60625F', gradientCenterColor: '#60625F' },
                                ]
                                if (item0 == 0 && item1 == 0 && item2 == 0 && item3 == 0 && item4 == 0 && item5 == 0) {
                                    setItems([])
                                    setValorMaiorPorc('0%')
                                    setValorMaiorNome('')
                                }
                                else {
                                    setItems(array)
                                    setValorMaiorPorc(String(parseInt((Math.max(...arrayValores) / gastos) * 100)) + '%')
                                    setValorMaiorNome(renderNome(String(arrayValores.indexOf(Math.max(...arrayValores)))))
                                }

                            } else {
                                pieData.current = [
                                    { value: 0, color: '#323131', gradientCenterColor: '#323131' },
                                    { value: 0, color: '#474747', gradientCenterColor: '#474747' },
                                    { value: 0, color: '#FFFFFF', gradientCenterColor: '#FFFFFF' },
                                    { value: 0, color: Globals.COLOR.LIGHT.COLOR1, gradientCenterColor: Globals.COLOR.LIGHT.COLOR1 },
                                    { value: 0, color: Globals.COLOR.LIGHT.COLOR3, gradientCenterColor: Globals.COLOR.LIGHT.COLOR3 },
                                    { value: 0, color: '#60625F', gradientCenterColor: '#60625F' },
                                ]
                                setItems([]);
                                setGastos('R$ 0,00');
                                setReceitas('R$ 0,00');
                                setValorMaiorPorc('0%')
                                setValorMaiorNome('')
                            }

                        })
                    }

                }).catch(error => {
                    if (error.toString() == "TypeError: Network request failed") {
                    }
                }).finally(() => {
                    if (isPageReload) setRefreshing(false)
                    setIsLoading(false)
                })
            })
        } catch (e) {
        }
    }
    const { setUserToken } = route.params

    const handleDateSelect = (selectedDate: String) => {

        setMes(Globals.MONTH[parseInt(selectedDate.toString().slice(4, 7)) - 1])
        setAno(selectedDate.slice(0, 4).toString())
        mesReal.current = Globals.MONTH[parseInt(selectedDate.toString().slice(4, 7)) - 1]
        anoReal.current = selectedDate.slice(0, 4).toString()
        getData(false, selectedDate.slice(0, 4).toString(), Globals.MONTH[parseInt(selectedDate.toString().slice(4, 7)) - 1])
        setShow(false)

    }

    useEffect(() => {
        navigation.addListener('focus', () => {
            getData();
        });
    }, [navigation]);


    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        getData(true)
    }, []);

    const screen = <>
        {show && (

            <><DatePicker
                mode="monthYear"
                isGregorian={true}
                selectorStartingYear={2000}
                minimumDate='2023-04-01'
                maximumDate={selectedDateSe}
                current={selectedDateSe}
                selected={selectedDateSe}
                onMonthYearChange={selectedDate => handleDateSelect(selectedDate)}
                selectorEndingYear={new Date().getFullYear()}
                style={{
                    position: 'absolute',
                    top: 50,
                    zIndex: 10001,
                    width: 330,
                    borderRadius: 25,
                    alignSelf: 'center'
                }}
                options={{
                    backgroundColor: Globals.COLOR.LIGHT.COLOR3,
                    textHeaderColor: Globals.COLOR.BRANCO,
                    textDefaultColor: Globals.COLOR.BRANCO,
                    selectedTextColor: Globals.COLOR.BRANCO,
                    mainColor: Globals.COLOR.LIGHT.COLOR2,
                    defaultFont: Globals.FONT_FAMILY.REGULAR,
                    textFontSize: 13,
                }} />
                <Pressable style={{ height: Globals.HEIGHT, width: Globals.WIDTH, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 10000, position: 'absolute', top: 0 }} onPress={() => {
                    setShow(false)
                }}>
                </Pressable>
            </>
        )}
        <TouchableOpacity style={{ zIndex: 9999, position: 'absolute', top: 20, right: 0 }} onPress={() => {
            navigation.navigate('Adicionar', {

            })
        }}>
            <Animatable.View
                useNativeDriver={true}
                animation={{
                    from: {
                        transform: [{ translateX: 20 }],
                    },
                    to: {
                        transform: [{ translateX: 0 }],
                    }
                }}
                easing='ease-in-out'
                delay={0}
                duration={1000}
                style={
                    {
                        width: 50,
                        height: 40,
                        borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 10,
                        backgroundColor: Globals.COLOR.LIGHT.COLOR2,
                        zIndex: 100
                    }
                }>
                <View style={{
                    marginTop: 3.5,
                    marginLeft: 6
                }}>
                    <AddSVG />
                </View>

            </Animatable.View>
        </TouchableOpacity>
        {renderItens()}
        {
            item.length <= 0 && (
                <Animatable.View useNativeDriver={true} animation='fadeInUp' style={{ position: 'absolute', bottom: Globals.HEIGHT * 0.13, alignSelf: 'center' }}>
                    <Text style={{ color: Globals.COLOR.LIGHT.COLOR4, textAlign: 'center', fontFamily: Globals.FONT_FAMILY.BOLD, }}>Gastos não encontrados</Text>
                </Animatable.View>)
        }
    </>
    useEffect(() => {
        getData();
    }, [mes]);

    return (
        <SafeAreaView style={styles.body}>
            {
                isLoading ? <LoadingScreen /> : (<></>)
            }
            <Menu route={route} screenElement={screen} navigation={navigation} />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    body: {
        backgroundColor: Globals.COLOR.LIGHT.COLOR4,
        flex: 1
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
        maxHeight: 80,
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
    },
    linha: {
        width: 2,
        borderWidth: 1,
        borderColor: Globals.COLOR.LIGHT.COLOR5,
        height: 50,
        rotation: 90
    }

});

const renderNome = (item: any) => {
    switch (item) {
        case '0':
            return 'Alimentação'
        case '1':
            return 'Serviço'
        case '2':
            return 'Eletrônicos'
        case '3':
            return 'Vestuário'
        case '4':
            return 'Entretenimento'
        case '5':
            return 'Outros'
    }
}

export default DashBoard;
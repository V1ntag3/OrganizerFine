import {
    StyleSheet,
    TouchableOpacity,
    Pressable,
    FlatList,
} from 'react-native';
import { useEffect, useRef, useState } from 'react';
import Globals from '@/Globals';
import DatePicker from 'react-native-modern-datepicker';
import * as Animatable from 'react-native-animatable'
import MenuSide from '@/components/Menus/MenuSide';
import PieChart from '@/components/UI/PieChart';
import { listRevenueSpendings, paramsRevenueSpendings } from '@/server/database/services/RevenueSpendingService';
import moment from 'moment';
import { ChevronLeft, PlusCircle } from '@tamagui/lucide-icons';
import { router, useNavigation } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    View,
    Text
} from 'tamagui'
import Title from '@/components/UI/Title';
import CardRevenueSpending from '@/components/Cards/CardRevenueSpend';


function DashBoard(): JSX.Element {
    const navigate = useNavigation()
    const [params, setParams] = useState({
        minDate: moment().format('YYYY-MM'),
        maxDate: moment().format('YYYY-MM')
    })
    const [month, setMonth] = useState(new Date().getMonth() + 1)
    const [year, setYear] = useState(new Date().getFullYear());

    const [spending, setSpending] = useState('R$ 0,00');
    const [revenue, setRevenue] = useState('R$ 0,00');
    const [item, setItems] = useState([])

    const [show, setShow] = useState(false);

    const [valorMaiorPorc, setValorMaiorPorc] = useState('0%')
    const [valorMaiorNome, setValorMaiorNome] = useState<any>('')
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
                            <Text style={styles.selectData}>{Globals.MONTH[month - 1]}</Text>
                            <Text style={styles.selectData}>{year}</Text>
                        </View>
                        <View style={{ marginTop: 3, marginLeft: 3, transform: [{ rotateZ: '-90deg' }] }}>
                            <ChevronLeft />
                        </View>
                    </View>
                </TouchableOpacity>
                    <Title text='Finanças' />
               
                <PieChart pieData={pieData} valorMaiorPorc={valorMaiorPorc} valorMaiorNome={valorMaiorNome} />
                <View style={[styles.fundosGastos, {}, item.length <= 0 ? { maxHeight: 'auto', height: '100%', minHeight: Globals.HEIGHT * 0.38 } : {}]} >
                    <View style={styles.dados}>
                        <View style={styles.totalizadores}>
                            <Text style={[styles.textTotalizadores, { color: Globals.COLOR_GASTO }]}>Gastos</Text>
                            <Text style={[styles.textTotalizadores, { color: Globals.COLOR_GASTO }]}>{spending}</Text>
                        </View>
                        <View style={styles.linha}></View>
                        <View style={styles.totalizadores}>
                            <Text style={[styles.textTotalizadores, { color: Globals.COLOR_RECEITA }]}>Receitas</Text>
                            <Text style={[styles.textTotalizadores, { color: Globals.COLOR_RECEITA }]}>{revenue}</Text>
                        </View>
                    </View>

                </View>
            </>)

    }

    const pieData = useRef([
        { value: 0, color: '#323131', gradientCenterColor: '#323131' },
        { value: 0, color: '#474747', gradientCenterColor: '#474747' },
        { value: 0, color: '#CD3CFA', gradientCenterColor: '#CD3CFA' },
        { value: 0, color: Globals.COLOR.COLOR1, gradientCenterColor: Globals.COLOR.COLOR1 },
        { value: 0, color: Globals.COLOR.COLOR3, gradientCenterColor: Globals.COLOR.COLOR3 },
        { value: 0, color: '#60625F', gradientCenterColor: '#60625F' },
    ]);

    const getData = async () => {

        const paramsResult = await paramsRevenueSpendings()

        setParams({
            minDate: paramsResult.minMonth,
            maxDate: paramsResult.maxMonth
        })

        listRevenueSpendings(month, year).then((json: any) => {
            setShow(false)
            if (json.length != 0) {
                var array: any = []
                var gastos: number = 0
                var receitas: number = 0
                var item0 = 0, item1 = 0, item2 = 0, item3 = 0, item4 = 0, item5 = 0
                for (var item in json) {

                    switch (json[item].category) {
                        case 0:
                            item0 += json[item].value
                            break
                        case 1:
                            item1 += json[item].value
                            break
                        case 2:
                            item2 += json[item].value
                            break
                        case 3:
                            item3 += json[item].value
                            break
                        case 4:
                            item4 += json[item].value
                            break
                        case 5:
                            item5 += json[item].value
                            break
                    }

                    if (json[item].type == 0) {
                        receitas += json[item].value
                    }

                    if (json[item].type == 1) {
                        gastos += json[item].value
                    }
                    json[item].realDate = json[item].created_at
                    json[item].value = json[item].value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

                    array.push(json[item])


                }

                setRevenue(receitas.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }))
                setSpending(gastos.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }))

                var arrayValores = [item0, item1, item2, item3, item4, item5]
                pieData.current = [
                    { value: item0, color: '#323131', gradientCenterColor: '#323131' },
                    { value: item1, color: '#474747', gradientCenterColor: '#474747' },
                    { value: item2, color: '#CD3CFA', gradientCenterColor: '#CD3CFA' },
                    { value: item3, color: Globals.COLOR.COLOR1, gradientCenterColor: Globals.COLOR.COLOR1 },
                    { value: item4, color: Globals.COLOR.COLOR3, gradientCenterColor: Globals.COLOR.COLOR3 },
                    { value: item5, color: '#60625F', gradientCenterColor: '#60625F' },
                ]
          
                    setItems(array)
                    if(item0 == 0 && item1 == 0 && item2 == 0 && item3 == 0 && item4 == 0 && item5 == 0 ){
                        setValorMaiorPorc('0%')
                        setValorMaiorNome('')
                    }else{
                        setValorMaiorPorc(String(parseInt(String((Math.max(...arrayValores) / gastos) * 100))) + '%')
                        setValorMaiorNome(renderNome(arrayValores.indexOf(Math.max(...arrayValores))))
                    }
                   
                

            } else {

                setItems([]);
                setSpending('R$ 0,00');
                setRevenue('R$ 0,00');
                setValorMaiorPorc('0%')
                setValorMaiorNome('')
            }

        }).catch(error => {
            if (error.toString() == "TypeError: Network request failed") {
            }
        }).finally(() => {
        })

    }

    const handleDateSelect = (selectedDate: String) => {

        setMonth(parseInt(selectedDate.toString().slice(4, 7)))
        setYear(parseInt(selectedDate.slice(0, 4)))

        getData()
        setShow(false)

    }

    useEffect(() => {
        navigate.addListener('focus', () => {
            getData();
        });
    }, []);

    useEffect(() => {
        getData();
    }, [month]);

    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView edges={['top']} style={{ flex: 1 }}>
                <MenuSide>
                    {show &&
                        <>
                        <DatePicker
                            mode="monthYear"
                            isGregorian={true}
                            minimumDate={params.minDate}
                            maximumDate={params.maxDate}
                            current={selectedDateSe}
                            selected={selectedDateSe}
                            onMonthYearChange={selectedDate => handleDateSelect(selectedDate)}
                            style={{
                                position: 'absolute',
                                top: 50,
                                zIndex: 10001,
                                width: 330,
                                borderRadius: 25,
                                alignSelf: 'center'
                            }}
                            options={{
                                backgroundColor: Globals.COLOR.COLOR3,
                                textHeaderColor: 'white',
                                textDefaultColor: 'white',
                                selectedTextColor: 'white',
                                mainColor: Globals.COLOR.COLOR2,

                                textFontSize: 13,
                            }} /><Pressable style={{ height: Globals.HEIGHT, width: Globals.WIDTH, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 10000, position: 'absolute', top: 0 }} onPress={() => {
                                setShow(false);
                            }}>
                            </Pressable></>
                    }
                    <TouchableOpacity style={{ zIndex: 9999, position: 'absolute', top: 20, right: 0 }} onPress={() => {
                        router.navigate('/revenueSpend/addRevenueSpend')
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
                                    backgroundColor: Globals.COLOR.COLOR2,
                                    zIndex: 100
                                }
                            }>
                            <View style={{
                                marginTop: 3.5,
                                marginLeft: 6,
                                justifyContent: 'center'
                            }}>
                                <PlusCircle color={"white"} size={32} />
                            </View>

                        </Animatable.View>
                    </TouchableOpacity>
                    <FlatList

                        disableVirtualization={false}
                        data={item}
                        renderItem={({ item }) => <CardRevenueSpending navigation={navigate} element={item} />}
                        contentContainerStyle={{
                            gap: 10,
                            paddingHorizontal: 10
                        }}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={renderHeaderFlat}
                        keyExtractor={(item: { id: any; }) => item.id}
                    />
                    {
                        item.length <= 0 && (
                            <Animatable.View useNativeDriver={true} animation='fadeInUp' style={{ position: 'absolute', bottom: Globals.HEIGHT * 0.13, alignSelf: 'center' }}>
                                <Text fontWeight={'bold'} style={{ color: Globals.COLOR.COLOR4, textAlign: 'center' }}>Gastos ou receitas não encontrados</Text>
                            </Animatable.View>)
                    }
                </MenuSide>
            </SafeAreaView>
        </View>
    );
}
const styles = StyleSheet.create({
    selectData: {
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    fundosGastos: {
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
        color: Globals.COLOR.COLOR5,
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 23,
        textAlign: 'center'
    },
    linha: {
        width: 2,
        borderWidth: 1,
        borderColor: Globals.COLOR.COLOR5,
        height: 50,
        rotation: 90
    }

});

const renderNome = (item: number) => {
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
    }
}

export default DashBoard;
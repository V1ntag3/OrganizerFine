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

import React, { useEffect, useState } from 'react';
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
import AddSVG from '../componentes/SVGComponentes/addSVG';
import MenuSVG from '../componentes/SVGComponentes/menuSVG';
import { Drawer } from 'react-native-drawer-layout';
import LogoutSVG from '../componentes/SVGComponentes/logoutSVG';
import ConfigSVG from '../componentes/SVGComponentes/configSVG';
import FineSVG from '../componentes/SVGComponentes/fineSVG';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingScreen from './LoadingScreen';

type props = {
    navigation: any;
    route: any
}

function DashBoard({ route, navigation }: any): JSX.Element {
    const [isLoading, setIsLoading] = useState(false)
    const [token, setToken] = useState('')
    const [gastos, setGastos] = useState('R$ 0,00');
    const [receitas, setReceitas] = useState('R$ 0,00');
    const [item, setItems] = useState([])
    const [nome, setNome] = useState('Marquin');
    const [email, setEmail] = useState('marcos@gmail.com');
    const [mes, setMes] = useState(Globals.MONTH[parseInt(new Date().getMonth().toString())])
    const [ano, setAno] = useState(String(new Date().getFullYear()));
    const [show, setShow] = useState(false);
    const [pieData, setPieData] = useState([
        { value: 0, color: '#323131', gradientCenterColor: '#323131' },
        { value: 0, color: '#474747', gradientCenterColor: '#474747' },
        { value: 0, color: '#FFFFFF', gradientCenterColor: '#FFFFFF' },
        { value: 0, color: Globals.COLOR.LIGHT.COLOR1, gradientCenterColor: Globals.COLOR.LIGHT.COLOR1 },
        { value: 0, color: Globals.COLOR.LIGHT.COLOR3, gradientCenterColor: Globals.COLOR.LIGHT.COLOR3 },
        { value: 0, color: '#60625F', gradientCenterColor: '#60625F' },
    ]);
    const [openClose, setOpenClose] = useState(false);
    const [valorMaiorPorc, setValorMaiorPorc] = useState('0%')
    const [valorMaiorNome, setValorMaiorNome] = useState('')

    const renderItens = (itemRend: { id: React.Key | null | undefined; typeCat: any; about: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; value: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; date: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }[]) => {

        if (itemRend.length > 0) {
            return item.map((element: { id: React.Key | null | undefined; typeCat: any; about: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; value: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; date: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
                <View key={element.id} style={styles.card}>
                    <View style={styles.iconCard}>
                        {
                            renderImagem(element.typeCat)

                        }
                    </View>
                    <View style={styles.decCat}>
                        <Text style={styles.decCat1}>{element.about}</Text>
                        <Text style={styles.decCat2}>{renderNome(element.typeCat)}</Text>
                    </View>
                    <View style={styles.valDate}>
                        <Text style={styles.valDate1}>{element.value}</Text>
                        <Text style={styles.valDate2}>{element.date}</Text>
                    </View>
                </View>
            ))
        } else {
            return (<Text style={{ color: 'black', textAlign: 'center', fontFamily: Globals.FONT_FAMILY.BOLD, marginTop: 40 }}>Gastos não encontrados</Text>)
        }
    }
    const readData = async () => {
        try {

            const value = await AsyncStorage.getItem('token', (err, result) => {
                fetch(Globals.BASE_URL_API + 'profile/', {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Token ' + result
                    },
                }).then(response => {
                    if (response.status == 401 || response.status == 403) { removeData() };
                    return response.json();
                }).then((json) => {
                    setNome(json.first_name + ' ' + json.last_name)
                    setEmail(json.email)
                }).catch(error => {
                    if (error.toString() == "TypeError: Network request failed") {
                    }
                }).finally(() => {
                })

                setIsLoading(true)

                fetch(Globals.BASE_URL_API + 'revenue_spending/?month=' + mes + '&year=' + ano, {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Token ' + result
                    },
                }).then(response => {
                    if (response.status == 401 || response.status == 403) { removeData() };
                    return response.json();
                }).then((json) => {
                    setShow(false)
                    if (json != 0 && json.detail == null) {
                        var array: any = []
                        var gastos: number = 0
                        var receitas: number = 0
                        var item0 = 0, item1 = 0, item2 = 0, item3 = 0, item4 = 0, item5 = 0
                        for (var item in json) {
                            switch (json[item].typeCat) {
                                case '0':
                                    item0++
                                    break
                                case '1':
                                    item1++
                                    break
                                case '2':
                                    item2++
                                    break
                                case '3':
                                    item3++
                                    break
                                case '4':
                                    item4++
                                    break
                                case '5':
                                    item5++
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

                            json[item].date = String(parseInt(valor / (1000 * 60 * 60 * 24))) + ' dias atrás'

                            if (json[item].typeCat != '') {
                                array.push(json[item])
                            }


                        }

                        setGastos(gastos.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }))
                        setReceitas(receitas.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }))


                        setItems(array)

                        setPieData([
                            { value: (item5 / array.length), color: '#323131', gradientCenterColor: '#323131' },
                            { value: (item2 / array.length), color: '#474747', gradientCenterColor: '#474747' },
                            { value: (item0 / array.length), color: '#FFFFFF', gradientCenterColor: '#FFFFFF' },
                            { value: (item3 / array.length), color: Globals.COLOR.LIGHT.COLOR1, gradientCenterColor: Globals.COLOR.LIGHT.COLOR1 },
                            { value: (item4 / array.length), color: Globals.COLOR.LIGHT.COLOR3, gradientCenterColor: Globals.COLOR.LIGHT.COLOR3 },
                            { value: (item1 / array.length), color: '#60625F', gradientCenterColor: '#60625F' },
                        ])
                        var arrayValores = [item0, item1, item2, item3, item4, item5]
                        setValorMaiorPorc(String(parseInt((Math.max(...arrayValores) / array.length) * 100)) + '%')
                        setValorMaiorNome(renderNome(String(arrayValores.indexOf(Math.max(...arrayValores)))))
                    } else {
                        setPieData([
                            { value: 0, color: '#323131', gradientCenterColor: '#323131' },
                            { value: 0, color: '#474747', gradientCenterColor: '#474747' },
                            { value: 0, color: '#FFFFFF', gradientCenterColor: '#FFFFFF' },
                            { value: 0, color: Globals.COLOR.LIGHT.COLOR1, gradientCenterColor: Globals.COLOR.LIGHT.COLOR1 },
                            { value: 0, color: Globals.COLOR.LIGHT.COLOR3, gradientCenterColor: Globals.COLOR.LIGHT.COLOR3 },
                            { value: 0, color: '#60625F', gradientCenterColor: '#60625F' },
                        ])
                        setItems([]);
                        setGastos('R$ 0,00');
                        setReceitas('R$ 0,00');
                        setValorMaiorPorc('0%')
                        setValorMaiorNome('')
                        setItems([]);
                    }
                }).catch(error => {
                    if (error.toString() == "TypeError: Network request failed") {
                    }
                }).finally(() => {
                    setIsLoading(false)
                })
            })

            if (value !== null) {
                setToken(value);
            }
        } catch (e) {
        }
    };
    const { setUserToken } = route.params

    const removeData = async () => {
        await AsyncStorage.clear().then(() => { setUserToken(null) })
    };

    const handleDateSelect = (selectedDate: String) => {
        var anoItem = selectedDate.slice(0, 4).toString()
        setAno(selectedDate.slice(0, 4).toString())
        var mesItem = Globals.MONTH[parseInt(selectedDate.toString().slice(4, 7)) - 1]
        setMes(mesItem)
        setShow(false)
        setIsLoading(true)
        fetch(Globals.BASE_URL_API + 'revenue_spending/?month=' + mesItem + '&year=' + anoItem, {
            method: 'GET',
            headers: {
                'Authorization': 'Token ' + token
            },
        }).then(response => response.json()).then((json) => {
            if (json != 0) {
                var array: any = []
                var gastos: number = 0
                var receitas: number = 0
                var item0 = 0, item1 = 0, item2 = 0, item3 = 0, item4 = 0, item5 = 0
                for (var item in json) {
                    switch (json[item].typeCat) {
                        case '0':
                            item0++
                            break
                        case '1':
                            item1++
                            break
                        case '2':
                            item2++
                            break
                        case '3':
                            item3++
                            break
                        case '4':
                            item4++
                            break
                        case '5':
                            item5++
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

                    json[item].date = String(parseInt(valor / (1000 * 60 * 60 * 24))) + ' dias atrás'

                    if (json[item].typeCat != '') {
                        array.push(json[item])
                    }

                }

                setGastos(gastos.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }))
                setReceitas(receitas.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }))


                setItems(array)

                setPieData([
                    { value: (item5 / array.length), color: '#323131', gradientCenterColor: '#323131' },
                    { value: (item2 / array.length), color: '#474747', gradientCenterColor: '#474747' },
                    { value: (item0 / array.length), color: '#FFFFFF', gradientCenterColor: '#FFFFFF' },
                    { value: (item3 / array.length), color: Globals.COLOR.LIGHT.COLOR1, gradientCenterColor: Globals.COLOR.LIGHT.COLOR1 },
                    { value: (item4 / array.length), color: Globals.COLOR.LIGHT.COLOR3, gradientCenterColor: Globals.COLOR.LIGHT.COLOR3 },
                    { value: (item1 / array.length), color: '#60625F', gradientCenterColor: '#60625F' },
                ])
                var arrayValores = [item0, item1, item2, item3, item4, item5]
                setValorMaiorPorc(String(parseInt((Math.max(...arrayValores) / array.length) * 100)) + '%')
                setValorMaiorNome(renderNome(String(arrayValores.indexOf(Math.max(...arrayValores)))))
            } else {
                setPieData([
                    { value: 0, color: '#323131', gradientCenterColor: '#323131' },
                    { value: 0, color: '#474747', gradientCenterColor: '#474747' },
                    { value: 0, color: '#FFFFFF', gradientCenterColor: '#FFFFFF' },
                    { value: 0, color: Globals.COLOR.LIGHT.COLOR1, gradientCenterColor: Globals.COLOR.LIGHT.COLOR1 },
                    { value: 0, color: Globals.COLOR.LIGHT.COLOR3, gradientCenterColor: Globals.COLOR.LIGHT.COLOR3 },
                    { value: 0, color: '#60625F', gradientCenterColor: '#60625F' },
                ])
                setItems([]);
                setGastos('R$ 0,00');
                setReceitas('R$ 0,00');
                setValorMaiorPorc('0%')
                setValorMaiorNome('')
                setItems([]);
            }
        }).catch(error => {
            if (error.toString() == "TypeError: Network request failed") {
                setShow(false)
            }
        }).finally(() => {
            setIsLoading(false)
        })
    }

    const moveMenu = () => {
        setOpenClose(openClose ? false : true)
    };


    useEffect(() => {
        readData();

        navigation.addListener('focus', () => {
            readData();
        });

    }, [navigation]);

    const renderTela = () => {
        return (<Drawer style={{

            width: '100%',
            height: '100%',
            position: 'absolute',
            zIndex: 100
        }}
            drawerStyle={{
                width: '90%'
            }}
            open={openClose}
            onOpen={() => setOpenClose(true)}
            onClose={() => setOpenClose(false)}
            renderDrawerContent={() => {
                return <View style={{
                    width: '100%', height: '100%', backgroundColor: Globals.COLOR.LIGHT.COLOR5,
                }}>
                    <View style={styles.imagemUser}>
                    </View>
                    <View style={{ marginLeft: 20, marginBottom: 30 }}>
                        <Text style={{
                            fontWeight: '300',
                            fontSize: 20,
                            color: '#FFFFFF'
                        }}>
                            <Text style={{ fontWeight: '700' }}>Olá</Text>, {nome}
                        </Text>
                        <Text style={styles.dadosMenu}>{email}</Text>
                    </View>

                    <TouchableOpacity onPress={() => { setOpenClose(false); navigation.navigate('DashBoard') }}>
                        <View style={styles.itemMenu}>
                            <FineSVG />
                            <Text style={styles.itemMenuText}>Finanças</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.itemMenu}>
                        <ConfigSVG />
                        <Text style={styles.itemMenuText}>Configurações</Text>
                    </View>

                    <TouchableOpacity onPress={() => { setOpenClose(false); removeData() }}>
                        <View style={[styles.itemMenu, { paddingLeft: 17 }]}>
                            <LogoutSVG />
                            <Text style={styles.itemMenuText}>Sair</Text>
                        </View>
                    </TouchableOpacity>

                <View style={styles.containerNome}>
                <Text style={styles.nomeApp}>{Globals.APP_NAME1}</Text>
                <Text style={styles.nomeApp}>{Globals.APP_NAME2}</Text>
                </View>

                </View>;
            }}
        >

            {show && (
                <DatePicker
                    mode="monthYear"
                    isGregorian={true}
                    selectorStartingYear={2000}
                    onMonthYearChange={(selectedDate) => {
                        handleDateSelect(selectedDate)
                    }
                    }
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
            <TouchableOpacity style={{ zIndex: 10000, position: 'absolute', top: 20, right: 0 }} onPress={() => { navigation.navigate('Adicionar') }}>
                <View style={
                    {
                        width: 50,
                        height: 40,
                        borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 10,
                        backgroundColor: Globals.COLOR.LIGHT.COLOR2,
                        zIndex: 1000
                    }
                }>
                    <View style={{
                        marginTop: 3.5,
                        marginLeft: 6
                    }}>
                        <AddSVG />
                    </View>

                </View>
            </TouchableOpacity>

            <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>

                <TouchableOpacity style={{ position: 'absolute', top: 20, left: 15, zIndex: 1000 }} onPress={moveMenu}>
                    <MenuSVG />
                </TouchableOpacity>
                <TouchableOpacity onPressIn={() => { setShow(show == true ? false : true) }}>

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
                                        style={{ fontSize: 22, color: Globals.COLOR.BRANCO, fontWeight: 'bold', fontFamily: Globals.FONT_FAMILY.BOLD }}>
                                        {valorMaiorPorc}
                                    </Text>
                                    <Text style={{ fontSize: 14, color: Globals.COLOR.BRANCO, fontFamily: Globals.FONT_FAMILY.REGULAR }}>{valorMaiorNome}</Text>
                                </View>
                            );
                        }}
                    />
                    <View
                        style={{

                            flexDirection: 'row',
                            marginHorizontal: -Globals.WIDTH * 0.20,
                            zIndex: 10

                        }}>
                        <View style={{
                            flexDirection: 'column',

                        }}>
                            {renderLegend('Alimentação', '#FFFFFF')}
                            {renderLegend('Vestuário', Globals.COLOR.LIGHT.COLOR1)}


                        </View>
                        <View style={{
                            flexDirection: 'column',
                        }}>
                            {renderLegend('Serviços', '#60625F')}
                            {renderLegend('Entretenimento', Globals.COLOR.LIGHT.COLOR3)}
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
                            <Text style={[styles.textTotalizadores, { color: '#F44336' }]}>Gastos</Text>
                            <Text style={[styles.textTotalizadores, { color: '#F44336' }]}>{gastos}</Text>
                        </View>
                        <View style={styles.linha}></View>
                        <View style={styles.totalizadores}>
                            <Text style={[styles.textTotalizadores, { color: '#0BBC5F' }]}>Receitas</Text>
                            <Text style={[styles.textTotalizadores, { color: '#0BBC5F' }]}>{receitas}</Text>
                        </View>
                    </View>
                    {renderItens(item)}

                </View>
            </ScrollView>

        </Drawer>)
    }
    const renderLoad = () => {
        return (<>

            <LoadingScreen />

        </>)
    }
    return (
        <SafeAreaView style={styles.body}>
            {
                isLoading ? renderLoad() : (<></>)
            }
            {renderTela()}
        </SafeAreaView>
    );

}


const styles = StyleSheet.create({
    body: {
        backgroundColor: Globals.COLOR.LIGHT.COLOR4,
        flex: 1
    },
    scrollView: {
        minHeight: Globals.HEIGHT,
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
        // backgroundColor: "#fff",
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        minHeight: 0.40 * Globals.HEIGHT + 95,
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
        color: Globals.COLOR.LIGHT.COLOR4,
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
        textAlign: 'right',
        color: Globals.COLOR.LIGHT.COLOR4,

    }, dadosMenu: {
        fontFamily: Globals.FONT_FAMILY.REGULAR,
        fontWeight: '500',
        fontSize: 14,
        color: '#FFFFFF',
        lineHeight: 20,
    },
    imagemUser: {
        width: Globals.WIDTH * 0.4,
        height: Globals.WIDTH * 0.4,
        backgroundColor: "black",
        borderColor: Globals.COLOR.LIGHT.COLOR4,
        borderRadius: Globals.WIDTH * 0.20,
        borderWidth: 4,
        marginHorizontal: Globals.WIDTH * 0.25,
        marginTop: 40,
        marginBottom: 10
    },
    itemMenu: {
        width: '90%',
        backgroundColor: '#E3E3E3',
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        height: 48,
        paddingTop: 13,
        paddingBottom: 13,
        paddingLeft: 12,
        paddingRight: 10,
        flexDirection: 'row',
        marginBottom: 15
    },
    itemMenuText: {
        fontWeight: '500',
        fontSize: 16,
        color: Globals.COLOR.LIGHT.COLOR4,
        marginLeft: 15,
        lineHeight: 24
    },
    containerNome: {
        position: 'absolute',
        bottom: 15,
        alignSelf:'center'
    },
    nomeApp: {
        width: '100%',
        textAlign: 'center',
        fontFamily: Globals.FONT_FAMILY_NAME_APP,
        fontWeight: '500',
        fontSize: 17,
        lineHeight: 25,
        color: Globals.COLOR.BRANCO,
    },
});
const renderImagem = (item: any) => {
    switch (item) {
        case '0':
            return (
                <>
                    <ComidaSVG />
                </>
            )
        case '1':
            return (
                <>
                    <ServSVG />
                </>
            )
        case '2':
            return (
                <>
                    <EletroSVG />
                </>
            )
        case '3':
            return (
                <>
                    <VestSVG />
                </>
            )
        case '4':
            return (
                <>
                    <EntreSVG />
                </>
            )
        case '5':
            return (
                <>
                    <OutrosSVG />
                </>
            )
    }
}

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
export default DashBoard;
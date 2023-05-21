import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    RefreshControl,
    Pressable,
    FlatList,
    Modal,
} from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
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
import UserSVG from '../componentes/SVGComponentes/userSVG';
import * as Animatable from 'react-native-animatable'
import LogoutSadSVG from '../componentes/SVGComponentes/logoutSadSVG';

function DashBoard({ route, navigation }: any): JSX.Element {
    const [isLoading, setIsLoading] = useState(false)
    const token = useRef('')
    const [gastos, setGastos] = useState('R$ 0,00');
    const [receitas, setReceitas] = useState('R$ 0,00');
    const [item, setItems] = useState([])
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    const [show, setShow] = useState(false);

    const [openClose, setOpenClose] = useState(false);
    const [valorMaiorPorc, setValorMaiorPorc] = useState('0%')
    const [valorMaiorNome, setValorMaiorNome] = useState('')
    const [selectedDateSe, setSelectedDateSe] = useState(new Date().toISOString().slice(0, 10));

    const [modalVisible, setModalVisible] = useState(false)

    const pieData = useRef([
        { value: 0, color: '#323131', gradientCenterColor: '#323131' },
        { value: 0, color: '#474747', gradientCenterColor: '#474747' },
        { value: 0, color: '#FFFFFF', gradientCenterColor: '#FFFFFF' },
        { value: 0, color: Globals.COLOR.LIGHT.COLOR1, gradientCenterColor: Globals.COLOR.LIGHT.COLOR1 },
        { value: 0, color: Globals.COLOR.LIGHT.COLOR3, gradientCenterColor: Globals.COLOR.LIGHT.COLOR3 },
        { value: 0, color: '#60625F', gradientCenterColor: '#60625F' },
    ]);
    const Item = (element: { id: any, typeCat: any; about: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; value: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; date: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
        <View key={element.id} style={{ backgroundColor: '#D9D9D9' }}>
            <TouchableOpacity onPress={() => {
                navigation.navigate('DetalharRevenueSpending', { element })
            }}>
                <View style={styles.card}>
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
            </TouchableOpacity>
        </View>
    );

    const renderHeaderFlat = () => {
        return (<>
            <TouchableOpacity style={{ position: 'absolute', top: 20, left: 15, zIndex: 1000 }} onPress={moveMenu}>
                <MenuSVG />
            </TouchableOpacity>
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
            <View style={
                {
                    marginTop: 70,
                }
            }>
                <View style={{  alignSelf:'center',marginLeft:20 }}>
                    <PieChart
                        data={pieData.current}
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
                                    <Text style={{ fontSize: 11, color: Globals.COLOR.BRANCO, fontFamily: Globals.FONT_FAMILY.REGULAR }}>{valorMaiorNome}</Text>
                                </View>
                            );
                        }}
                    />
                </View>
                <View
                    style={{

                        flexDirection: 'row',
                        zIndex: 10,
                        alignSelf:'center',
                        marginLeft:20

                    }}>
                    <View style={{
                        flexDirection: 'column',

                    }}>
                        {renderLegend('Alimentação', '#323131')}
                        {renderLegend('Vestuário', Globals.COLOR.LIGHT.COLOR1)}


                    </View>
                    <View style={{
                        flexDirection: 'column',
                    }}>
                        {renderLegend('Serviços', '#474747')}
                        {renderLegend('Entretenimento', Globals.COLOR.LIGHT.COLOR3)}
                    </View>
                    <View style={{
                        flexDirection: 'column',
                    }}>

                        {renderLegend('Eletrônicos','#FFFFFF' )}
                        {renderLegend('Outros', '#60625F')}
                    </View>
                </View>
            </View>
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
    const renderItens = (itemRend: { id: React.Key | null | undefined; typeCat: any; about: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; value: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; date: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }[]) => {
        return (<FlatList
            refreshControl={<RefreshControl progressBackgroundColor={Globals.COLOR.LIGHT.COLOR1} colors={[Globals.COLOR.LIGHT.COLOR3]} refreshing={refreshing}
                onRefresh={onRefresh} />}
            contentContainerStyle={{
                minHeight: Globals.HEIGHT * 0.4, backgroundColor: Globals.COLOR.LIGHT.COLOR4
            }}
            disableVirtualization={false}

            style={{ backgroundColor: '#D9D9D9' }}
            data={item}
            renderItem={({ item }) => <Item id={item.id} about={item.about} date={item.date} typeCat={item.typeCat} value={item.value} />}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={renderHeaderFlat()}
            keyExtractor={(item: { id: any; }) => item.id}


        />
        )
    }
    const readData = async (isPageReload = false, anoR = null, mesR = null) => {
        try {
            const value = await AsyncStorage.getItem('token', (err, result) => {
                if (!isPageReload) {
                    fetch(Globals.BASE_URL_API + 'profile/', {
                        method: 'GET',
                        headers: {
                            'Authorization': 'Token ' + result
                        },
                    }).then(response => {
                        if (response.status == 401 || response.status == 403) { removeData() };
                        response.json().then((json) => {
                            setNome(json.first_name + ' ' + json.last_name)
                            setEmail(json.email)
                        })
                    }).catch(error => {
                        if (error.toString() == "TypeError: Network request failed") {
                        }
                    }).finally(() => {

                    })
                    setIsLoading(true)
                }

                var mesRealM = mesR == null ? mesReal.current : mesR
                var anoRealM = anoR == null ? anoReal.current : anoR

                fetch(Globals.BASE_URL_API + 'revenue_spending/?month=' + mesRealM + '&year=' + anoRealM, {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Token ' + result
                    },
                }).then(response => {
                    if (response.status == 401 || response.status == 403) { removeData() }
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
                                    setValorMaiorPorc(String(parseInt((Math.max(...arrayValores) / array.length) * 100)) + '%')
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
            if (value !== null) {
                token.current = value
            }
        } catch (e) {
        }
    }
    const { setUserToken } = route.params

    const removeData = () => {
        setIsLoading(true)
        fetch(Globals.BASE_URL_API + 'logout/', {
            method: 'POST',
            headers: {
                'Authorization': 'Token ' + token.current
            },
        }).then(response => {
            if (response.status == 204) {
                AsyncStorage.clear().then(() => { setUserToken(null) })
            }
        }).catch(error => {

        }).finally(() => {
            setIsLoading(false)
        })

    };
    const handleDateSelect = (selectedDate: String) => {

        setMes(Globals.MONTH[parseInt(selectedDate.toString().slice(4, 7)) - 1])
        setAno(selectedDate.slice(0, 4).toString())
        mesReal.current = Globals.MONTH[parseInt(selectedDate.toString().slice(4, 7)) - 1]
        anoReal.current = selectedDate.slice(0, 4).toString()
        readData(false, selectedDate.slice(0, 4).toString(), Globals.MONTH[parseInt(selectedDate.toString().slice(4, 7)) - 1])
        setShow(false)

    }

    const moveMenu = () => {
        setOpenClose(openClose ? false : true)
    };


    useEffect(() => {
        navigation.addListener('focus', () => {
            readData();
        });
    }, [navigation]);


    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        readData(true)
    }, []);

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
                        <View style={{ alignSelf: 'center', marginTop: 10 }}>
                            <UserSVG />
                        </View>
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

                    <TouchableOpacity onPress={() => {
                        setOpenClose(false); setTimeout(() => {
                            navigation.navigate('DashBoard')
                        }, 400);
                    }}>
                        <View style={styles.itemMenu}>
                            <FineSVG />
                            <Text style={styles.itemMenuText}>Finanças</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setOpenClose(false);
                        setTimeout(() => {
                            navigation.navigate('Configuracao')
                        }, 400);
                    }}>

                        <View style={styles.itemMenu}>
                            <ConfigSVG />
                            <Text style={styles.itemMenuText}>Configurações</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setOpenClose(false); setModalVisible(true) }}>
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
                        alignSelf:'center'                    }}
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
            {renderItens(item)}
            {
                item.length <= 0 && (<Animatable.View useNativeDriver={true} animation='fadeInUp' style={{ position: 'absolute', bottom: Globals.HEIGHT * 0.13, alignSelf: 'center' }}>
                    <Text style={{ color: Globals.COLOR.LIGHT.COLOR4, textAlign: 'center', fontFamily: Globals.FONT_FAMILY.BOLD, }}>Gastos não encontrados</Text>

                </Animatable.View>)
            }
            <Modal
                animationType="fade"
                transparent={true}

                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={{
                    backgroundColor: Globals.COLOR.LIGHT.COLOR2,
                    paddingHorizontal: 20,
                    paddingVertical: 20,
                    width: 320,
                    alignSelf: 'center',
                    marginTop: 40,
                    borderRadius: 15,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 12,
                    },
                    shadowOpacity: 0.58,
                    shadowRadius: 16.00,

                    elevation: 24,
                }}>
                    <Text style={{ color: 'white', fontFamily: Globals.FONT_FAMILY.BOLD, fontSize: 20 }}>Isso não é um adeus</Text>
                    <LogoutSadSVG style={{ width: 250, height: 250, alignSelf: 'center' }} />

                    <Text style={{ color: 'white', fontFamily: Globals.FONT_FAMILY.REGULAR, fontSize: 16, marginBottom: 30 }}>{Globals.TEXT_LOGOUT}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity style={{ backgroundColor: Globals.COLOR.LIGHT.COLOR4, paddingHorizontal: 5, paddingVertical: 10, width: '45%', borderRadius: 20 }} onPress={removeData}>
                            <Text style={{ color: 'white', fontFamily: Globals.FONT_FAMILY.SEMIBOLD, textAlign: 'center' }}>Sair...</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ backgroundColor: Globals.COLOR.LIGHT.COLOR3, paddingHorizontal: 5, paddingVertical: 10, width: '45%', borderRadius: 20 }} onPress={() => setModalVisible(false)}>
                            <Text style={{ color: 'white', fontFamily: Globals.FONT_FAMILY.SEMIBOLD, textAlign: 'center' }} >Não agora</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </Modal>
        </Drawer>)
    }
    const [mes, setMes] = useState(Globals.MONTH[parseInt(new Date().getMonth().toString())])
    const [ano, setAno] = useState(String(new Date().getFullYear()));

    const mesReal = useRef(Globals.MONTH[parseInt(new Date().getMonth().toString())])
    const anoReal = useRef(String(new Date().getFullYear()));
    useEffect(() => {
        readData();
    }, [mes]);
    return (
        <SafeAreaView style={styles.body}>
            {
                isLoading ? <LoadingScreen /> : (<></>)
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
    ,
    card: {
        alignSelf:'center',
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

    },
    dadosMenu: {
        fontFamily: Globals.FONT_FAMILY.REGULAR,
        fontWeight: '500',
        fontSize: 14,
        color: '#FFFFFF',
        lineHeight: 20,
    },
    imagemUser: {
        width: 150,
        height: 150,
        alignSelf:'center',
        backgroundColor: Globals.COLOR.LIGHT.COLOR1,
        borderColor: Globals.COLOR.LIGHT.COLOR4,
        borderRadius: Globals.WIDTH * 0.20,
        borderWidth: 4,
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
        alignSelf: 'center'
    },
    nomeApp: {
        width: '100%',
        textAlign: 'center',
        fontFamily: Globals.FONT_FAMILY_NAME_APP.REGULAR,
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
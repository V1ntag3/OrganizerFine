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
    TextInput,
    TouchableOpacity,
} from 'react-native';
import Globals from '../Globals';
import { Picker } from '@react-native-picker/picker';
import { useEffect, useState } from 'react';
import LixeiraSVG from '../componentes/SVGComponentes/lixeiraSVG';
import { Drawer } from 'react-native-drawer-layout';
import FineSVG from '../componentes/SVGComponentes/fineSVG';
import ConfigSVG from '../componentes/SVGComponentes/configSVG';
import LogoutSVG from '../componentes/SVGComponentes/logoutSVG';
import MenuSVG from '../componentes/SVGComponentes/menuSVG';
import MaskInput, { Masks } from 'react-native-mask-input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingScreen from './LoadingScreen';
import UserSVG from '../componentes/SVGComponentes/userSVG';
import { ScrollView } from 'react-native-gesture-handler';
import EditarSVG from '../componentes/SVGComponentes/editarSVG';
import SaveSVG from '../componentes/SVGComponentes/saveSVG';
import DropDownPicker from 'react-native-dropdown-picker';

type props = {
    navigation: any;
    route: any

}

function DetalharRevenueSpending({ route, navigation }: any): JSX.Element {

    const [isEditable, setIsEditable] = useState(true)
    const { setUserToken, element } = route.params

    const [selectedValue, setSelectedValue] = useState(element.typeCat);
    const [valor, setValor] = useState(element.value);
    const [descricao, setDescricao] = useState(element.about)
    const [tipo, setTipo] = useState(parseInt(element.type));
    const removeData = () => {
        setIsLoading(true)
        fetch(Globals.BASE_URL_API + 'logout/', {
            method: 'POST',
            headers: {
                'Authorization': 'Token ' + token
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
    const [open, setOpen] = useState(false);

    const [items, setItems] = useState([
        { label: 'Alimentação', value: '0' },
        { label: 'Serviço', value: '1' },
        { label: 'Eletrônico', value: '2' },
        { label: 'Vestuário', value: '3' },
        { label: 'Entretenimento', value: '4' },
        { label: 'Outros', value: '5' }
    ]);

    const renderPicker = () => {

        if (tipo != 0) {
            return (
                <><View style={{ borderRadius: 6.9, maxWidth: '90%', marginLeft: '5%', height: 49.65, marginTop: 4, marginBottom: 5, zIndex: 100000 }}>
                    <DropDownPicker
                        placeholder='Categoria'
                        disabled={isEditable}
                        arrowIconStyle={{
                            borderColor: 'white'
                        }}
                        dropDownContainerStyle={
                            tipo == 0 ? { backgroundColor: isEditable ? '#2FAD09' : '#73E650' } : { backgroundColor: isEditable ? '#AD1909' : '#E65A50' , borderColor:'transparent'}                         
                         }
                        textStyle={{
                            fontFamily: Globals.FONT_FAMILY.REGULAR,
                            fontSize: 14,
                            color: 'white'
                        }}
                        style={[{
                            shadowColor: 'rgba(0,0,0,0.5)',
                            shadowOffset: {
                                width: 10,
                                height: -10,
                            },
                            width: '100%',
                            borderColor: 'transparent'
                        }, tipo == 0 ? { backgroundColor: isEditable ? '#2FAD09' : '#73E650' } : { backgroundColor: isEditable ? '#AD1909' : '#E65A50' }]}
                        containerStyle={{
                            borderColor: 'transparent'
                        }}
                        open={open}
                        value={selectedValue}
                        items={items}
                        setOpen={setOpen}
                        setValue={setSelectedValue}
                        setItems={setItems} />

                </View></>
            );
        }

    }
    const [openClose, setOpenClose] = useState(false);

    const [isLoading, setIsLoading] = useState(false)

    const moveMenu = () => {
        setOpenClose(openClose ? false : true)
    };
    // Dados
    const [token, setToken] = useState('')

    const [nome, setNome] = useState();
    const [email, setEmail] = useState();


    const [valorError, setValorError] = useState(false);
    const [descricaoError, setDescricaoError] = useState(false)
    const [selectedValueError, setSelectedValueError] = useState(false);

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

            })

            if (value !== null) {
                setToken(value);
            }
        } catch (e) {
            navigation.navigate('Welcome')
        }
    };

    useEffect(() => {
        readData();
    }, []);

    const deleteDados = () => {

        setIsLoading(true)
        fetch(Globals.BASE_URL_API + 'revenue_spending/' + element.id + '/', {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Token ' + token
            }
        }).then(response => {
            if (response.status == 401 || response.status == 403) { removeData() };
            if (response.status == 200) {
                navigation.navigate("DashBoard");
                return response.json();
            }
        }
        ).finally(() => {
            setIsLoading(false)
        })


    }

    const mandarDados = () => {

        setDescricaoError(descricao == "" ? true : false)
        setSelectedValueError(selectedValue == "" ? true : false)
        setValorError(valor == 0 ? true : false)

        if (!descricaoError && !selectedValueError && !valorError) {
            var tipo0 = JSON.stringify({
                'about': descricao,
                'value': (valor / 100),
                'type': String(tipo)
            })
            var tipo1 = JSON.stringify({
                'about': descricao,
                'value': (valor / 100),
                'type': String(tipo),
                'typeCat': selectedValue
            })
            setIsLoading(true)
            fetch(Globals.BASE_URL_API + 'revenue_spending/' + element.id + '/', {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': 'Token ' + token
                },
                body: tipo == 0 ? tipo0 : tipo1
            }).then(response => {

                if (response.status == 401 || response.status == 403) { removeData() };
                if (response.status == 200) {
                    navigation.navigate("DashBoard");
                    return response.json();
                }
            }
            ).finally(() => {
                setIsLoading(false)
            })
        }

    }
    const renderLoad = () => {
        return (<>
            <LoadingScreen />
        </>)
    }
    const renderTela = () => {
        return (<>

            <Drawer style={{
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
                        <View style={styles.containerNomeMenu}>
                            <Text style={styles.nomeApp}>{Globals.APP_NAME1}</Text>
                            <Text style={styles.nomeApp}>{Globals.APP_NAME2}</Text>
                        </View>
                    </View>;

                }}
            >
                   <ScrollView showsVerticalScrollIndicator={false} style={{maxHeight:Globals.HEIGHT }}>
                    <View style={{height:Globals.HEIGHT-25}}>
                <TouchableOpacity style={{ position: 'absolute', top: 20, left: 15, zIndex: 1000 }} onPress={moveMenu}>
                    <MenuSVG />
                </TouchableOpacity>
                {
                    isEditable ? (<TouchableOpacity style={{ position: 'absolute', top: 20, right: 15, zIndex: 1000 }} onPress={() => setIsEditable(false)}>
                        <EditarSVG />
                    </TouchableOpacity>) : (<TouchableOpacity style={{ position: 'absolute', top: 20, right: 15, zIndex: 1000 }} onPress={() => mandarDados()}>
                        <SaveSVG />
                    </TouchableOpacity>)
                }

                <Text style={styles.tituloView}>Detalhar</Text>
                <Text style={{ color: 'white', fontSize: 18, textAlign: 'center', fontFamily: Globals.FONT_FAMILY.SEMIBOLD, marginTop: -10 }}>Gasto</Text>





                <TextInput style={[styles.inputStyle,  , tipo == 0 ? { backgroundColor: isEditable ? '#2FAD09' : '#73E650' } : { backgroundColor: isEditable ? '#AD1909' : '#E65A50' }]}
                    editable={!isEditable}
                    value={descricao}
                    selectionColor="white"
                    placeholderTextColor={descricaoError ? Globals.COLOR_ERROR : 'white'}
                    onChangeText={(text) => setDescricao(text)}
                    placeholder="Descrição" />
                <Text style={[styles.errorStyle, { display: descricaoError ? 'flex' : 'none' }]}>Campo inválido</Text>

                {
                    renderPicker()
                }

                <Text style={[styles.errorStyle, { display: selectedValueError ? 'flex' : 'none' }]}  >Campo inválido</Text>

                <MaskInput
                    editable={!isEditable}
                    value={valor}
                    style={[styles.inputStyle, { zIndex: 100, marginTop: 5 }, tipo == 0 ? { backgroundColor: isEditable ? '#2FAD09' : '#73E650' } : { backgroundColor: isEditable ? '#AD1909' : '#E65A50' }]}
                    placeholderTextColor={false ? Globals.COLOR_ERROR : 'white'}
                    selectionColor='white'
                    onChangeText={(masked, unmasked) => {
                        setValor(unmasked);
                    }}
                    keyboardType="numeric"
                    mask={Masks.BRL_CURRENCY}
                />
                <Text style={[styles.errorStyle, { display: valorError ? 'flex' : 'none' }]}  >Campo inválido</Text>

                <TouchableOpacity onPress={() => deleteDados()} style={{ width: 60, height: 60, alignSelf: 'center', position: 'absolute', bottom: 30 }}>
                    <View style={
                        {
                            width: 60,
                            height: 60,
                            borderRadius: 30,
                            backgroundColor: tipo == 0 ? Globals.COLOR_RECEITA : Globals.COLOR_GASTO
                        }
                    }>
                        <View style={
                            {
                                alignSelf: 'center', marginTop: 15
                            }
                        }>
                            <LixeiraSVG />

                        </View>
                    </View>
                </TouchableOpacity>

                <View style={{ width: Globals.WIDTH * 1.2, height: 0.7 * Globals.HEIGHT, backgroundColor: tipo == 0 ? Globals.COLOR_RECEITA : Globals.COLOR_GASTO, position: 'absolute', zIndex: -1, transform: [{ translateX: -50 }, { translateY: -100 }, { rotateZ: '45deg' }] }}>

                </View>
                </View>
                </ScrollView >

            </Drawer>
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
    tituloView: {
        fontFamily: Globals.FONT_FAMILY.SEMIBOLD,
        fontWeight: '600',
        fontSize: 24,
        textAlign: 'center',
        color: Globals.COLOR.BRANCO,
        marginTop: 15
    },
    body: {
        backgroundColor: Globals.COLOR.LIGHT.COLOR4,
        flex: 1
    },
    scrollView: {
        minHeight: Globals.HEIGHT,

    },
    inputStyle: {
        
        alignItems: 'center',
        paddingVertical: 10.75309,
        paddingHorizontal: 11.0905,
        paddingBottom: 0,
        width: '100%',
        height: 49.65,
        maxWidth: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginVertical: 8,
        marginBottom: 5,
        backgroundColor: Globals.COLOR.BRANCO,
        fontFamily: Globals.FONT_FAMILY.REGULAR,
        color: 'white',
        borderRadius: 6.96875,
    },
    errorStyle: {
        paddingLeft: 7,
        width: '100%',
        maxWidth: 338.89,
        marginLeft: 'auto',
        marginRight: 'auto',
        color: Globals.COLOR_ERROR,
        fontSize: 11,
        lineHeight: 12,
        fontFamily: Globals.FONT_FAMILY.MEDIUM,
    },
    containerInput: {
        paddingTop: Globals.HEIGHT * 0.3
    },
    containerNome: {
        position: 'absolute',
        bottom: 15,
        left: 25
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
    imagemOffice: {
        width: 300,
        height: 300,
        position: 'absolute',
        right: -45,
        bottom: -20
    },
    containerBotoes: {
        width: '100%',
        marginBottom: 100
    },
    botaoGrande: {
        alignItems: 'center',
        paddingVertical: 10.75309,
        paddingHorizontal: 11.0905,
        width: '100%',
        height: 49.65,
        borderRadius: 6.96875,
        maxWidth: 338.89,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginVertical: 8
    },
    textoBotaoGrande: {
        fontFamily: Globals.FONT_FAMILY.REGULAR,
        fontWeight: '500',
        fontSize: 25.3498,
        lineHeight: 30
    },
    botaoVerdeClaro: {
        backgroundColor: Globals.COLOR.LIGHT.COLOR3,
    },
    textBotaoVerdeClaro: {
        color: Globals.COLOR.BRANCO,
    },
    botaoBranco: {
        backgroundColor: Globals.COLOR.BRANCO,
    },
    textBotaoBranco: {
        color: Globals.COLOR.LIGHT.COLOR3,
    },
    pastaSVGStyle: {
        position: 'absolute',
        right: 0,
        bottom: -20
    },
    notebookSVGStyle: {
        position: 'absolute',
        right: 0,
        top: 0,
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
        backgroundColor: Globals.COLOR.LIGHT.COLOR1,
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
    containerNomeMenu: {
        position: 'absolute',
        bottom: 15,
        alignSelf: 'center'
    }
});

export default DetalharRevenueSpending;

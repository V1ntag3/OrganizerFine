import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    TextInput,
} from 'react-native';
import Globals from '../../Globals';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingScreen from '../LoadingScreen';
import UserSVG from '../../components/SVGComponentes/userSVG';
import EditarSVG from '../../components/SVGComponentes/editarSVG';
import SaveSVG from '../../components/SVGComponentes/saveSVG';
import ConfigurationSVG from '../../components/SVGComponentes/configurationSVG';
import * as Animatable from 'react-native-animatable'
import Menu from '../../components/Menu';
import Modal from '../../components/ModalGeneric';
function Configuracao({ route, navigation }: any): JSX.Element {

    const { setUserToken } = route.params
    const [isEditable, setIsEditable] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

    const [nomeNew, setNomeNew] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [emailNew, setEmailNew] = useState('');
    // const [senha, setSenha] = useState('');
    // const [confirm_senha, setConfSenha] = useState('');

    const [nomeError, setNomeError] = useState(false);
    const [sobreNomeError, setsobreNomeError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    // const [senhaError, setSenhaError] = useState(false);
    // const [confirmSenhaError, setConfirmSenhaError] = useState(false);

    const readData = async () => {
        try {
            const value = await AsyncStorage.getItem('token', (_, result) => {

                fetch(Globals.BASE_URL_API + 'profile/', {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Token ' + result
                    },
                }).then(response => {
                    if (response.status === 401 || response.status === 403) {
                        AsyncStorage.clear().then(() => { setUserToken(null) })
                    }
                    return response.json();
                }).then((json) => {
                    setNomeNew(json.first_name)
                    setSobrenome(json.last_name)
                    setEmailNew(json.email)
                }).catch(error => {
                    if (error.toString() == "TypeError: Network request failed") {
                    }
                }).finally(() => {
                })

            })

        } catch (e) {
            navigation.navigate('Welcome')
        }
    };
    const isEmail = (emailM: String) => {
        const emailRegex = /^([a-zA-Z][^<>\"!@[\]#$%¨&*()~^:;ç,\-´`=+{}º\|/\\?]{1,})@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return emailRegex.test(String(emailM).toLowerCase())
    }
    const mandarDados = async () => {
        setModalVisible(false)
        setNomeError(nomeNew == "" ? true : false)
        setsobreNomeError(sobrenome == "" ? true : false)
        setEmailError(emailNew == "" || !isEmail(emailNew) ? true : false)
        // setSenhaError(senha == "" || (senha != confirm_senha) ? true : false)
        // setConfirmewSenhaError(confirm_senha == "" || (senha != confirm_senha) ? true : false)

        if (nomeNew != "" && sobrenome != "" && isEmail(emailNew)) {
            setIsLoading(true)
            await AsyncStorage.getItem('token', (_, result) => {

                fetch(Globals.BASE_URL_API + 'profile/', {
                    method: 'PUT',
                    headers: {
                        'Authorization': 'Token ' + result,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        'username': emailNew,
                        'first_name': nomeNew,
                        'last_name': sobrenome,
                        'email': emailNew,
                        // 'password': senha
                    })
                }).then(response => {
                    if (response.status === 401 || response.status === 403) {
                        AsyncStorage.clear().then(() => { setUserToken(null) })
                    }
                    if (response.status == 200) {
                        navigation.navigate('DashBoard')
                    }
                }
                ).catch(error => {
                    console.log(error)
                }).finally(() => {
                    setIsLoading(false)
                });
            })

        }
    }

    useEffect(() => {
        readData();
    }, []);

    const [modalVisible, setModalVisible] = useState(false)

    const screen =
        <>
            <Modal
                image={(style: any) => {
                    return <ConfigurationSVG style={style} />
                }}
                affirmFunc={mandarDados}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                title="Alterar configurações"
                paragraph={"Tem certeza que deseja alterar as configurações?"}
                textAffirmButton="Sim"
                textNegButton="Não agora"
                isLoading={isLoading}
                setIsLoading={setIsLoading}
            />
            <ScrollView showsVerticalScrollIndicator={false} style={{ maxHeight: Globals.HEIGHT }}>
                <View style={{ height: Globals.HEIGHT - 25 }}>
                    {isEditable ? (<TouchableOpacity style={{ position: 'absolute', top: 20, right: 15, zIndex: 1000 }} onPress={() => setIsEditable(false)}>
                        <EditarSVG />
                    </TouchableOpacity>) : (<TouchableOpacity style={{ position: 'absolute', top: 20, right: 15, zIndex: 1000 }} onPress={() => setModalVisible(true)}>
                        <SaveSVG />
                    </TouchableOpacity>)}
                    <Text style={styles.tituloView}>Configuração</Text>
                    <Animatable.View animation='flipInY' duration={1000} style={{
                        width: 150,
                        height: 150,
                        backgroundColor: Globals.COLOR.LIGHT.COLOR1,
                        borderColor: Globals.COLOR.LIGHT.COLOR5,
                        borderRadius: Globals.WIDTH * 0.20,
                        borderWidth: 4,
                        alignSelf: 'center',
                        marginTop: 20,
                    }}>
                        <View style={{ alignSelf: 'center', marginTop: 10 }}>
                            <UserSVG />
                        </View>
                    </Animatable.View>
                    <Animatable.View style={{ zIndex: 10 }} delay={100}
                        useNativeDriver={true} animation='fadeInLeft' duration={300}>
                        <TextInput style={[styles.inputStyle, isEditable ? { backgroundColor: Globals.COLOR.LIGHT.COLOR5 } : { backgroundColor: Globals.COLOR.LIGHT.COLOR1, color: Globals.COLOR.LIGHT.COLOR5 }, { marginTop: Globals.HEIGHT * 0.05 }]}
                            value={nomeNew}
                            editable={!isEditable}
                            selectionColor="white"
                            placeholderTextColor={nomeError ? Globals.COLOR_ERROR : (isEditable ? 'white' : Globals.COLOR.LIGHT.COLOR5)}
                            onChangeText={text => { setNomeNew(text); }}
                            placeholder="Nome" />
                        <Text style={[styles.errorStyle, { display: nomeError ? 'flex' : 'none' }]}>Campo inválido</Text>
                    </Animatable.View>
                    <Animatable.View style={{ zIndex: 10 }} delay={300}
                        useNativeDriver={true} animation='fadeInLeft' duration={300}>
                        <TextInput style={[styles.inputStyle, isEditable ? { backgroundColor: Globals.COLOR.LIGHT.COLOR5 } : { backgroundColor: Globals.COLOR.LIGHT.COLOR1, color: Globals.COLOR.LIGHT.COLOR5 }]}
                            value={sobrenome}
                            editable={!isEditable}
                            selectionColor="white"
                            placeholderTextColor={sobreNomeError ? Globals.COLOR_ERROR : isEditable ? 'white' : Globals.COLOR.LIGHT.COLOR5}
                            onChangeText={text => { setSobrenome(text); }}
                            placeholder="Sobrenome" />
                        <Text style={[styles.errorStyle, { display: sobreNomeError ? 'flex' : 'none' }]}>Campo inválido</Text>
                    </Animatable.View>
                    <Animatable.View style={{ zIndex: 10 }} delay={500}
                        useNativeDriver={true} animation='fadeInLeft' duration={300}>
                        <TextInput style={[styles.inputStyle, isEditable ? { backgroundColor: Globals.COLOR.LIGHT.COLOR5 } : { backgroundColor: Globals.COLOR.LIGHT.COLOR1, color: Globals.COLOR.LIGHT.COLOR5 }]}
                            value={emailNew}
                            editable={!isEditable}
                            selectionColor="white"
                            placeholderTextColor={emailError ? Globals.COLOR_ERROR : (isEditable ? 'white' : Globals.COLOR.LIGHT.COLOR5)}
                            onChangeText={text => { setEmailNew(text); }}
                            placeholder="Email" />
                        <Text style={[styles.errorStyle, { display: emailError ? 'flex' : 'none' }]}>Campo inválido</Text>
                    </Animatable.View>
                    {/* {
        !isEditable && (
            <>
                <TextInput style={[styles.inputStyle, isEditable ? { backgroundColor: Globals.COLOR.LIGHT.COLOR5 } : { backgroundColor: Globals.COLOR.LIGHT.COLOR1, color: Globals.COLOR.LIGHT.COLOR5 }]}
                    selectionColor="white"
                    placeholderTextColor={senhaError ? Globals.COLOR_ERROR : isEditable ? 'white' : Globals.COLOR.LIGHT.COLOR5}
                    onChangeText={text => { setSenha(text); }}
                    placeholder="Senha" />
                <Text style={[styles.errorStyle, { display: senhaError ? 'flex' : 'none' }]}>Campo inválido</Text>
                <TextInput style={[styles.inputStyle, isEditable ? { backgroundColor: Globals.COLOR.LIGHT.COLOR5 } : { backgroundColor: Globals.COLOR.LIGHT.COLOR1, color: Globals.COLOR.LIGHT.COLOR5 }]}
                    selectionColor="white"
                    placeholderTextColor={confirmSenhaError ? Globals.COLOR_ERROR : isEditable ? 'white' : Globals.COLOR.LIGHT.COLOR5}
                    onChangeText={text => { setConfSenha(text); }}
                    placeholder="Confirmar senha" />
                <Text style={[styles.errorStyle, { display: confirmSenhaError ? 'flex' : 'none' }]}>Campo inválido</Text>
            </>

        )
    } */}
                </View>
            </ScrollView></>

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
        alignSelf: 'center',
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
        maxWidth: '90%',
        alignSelf: 'center',
        marginLeft: -15,
        color: Globals.COLOR_ERROR,
        fontSize: 11,
        lineHeight: 12,
        fontFamily: Globals.FONT_FAMILY.MEDIUM,
    },

});

export default Configuracao;

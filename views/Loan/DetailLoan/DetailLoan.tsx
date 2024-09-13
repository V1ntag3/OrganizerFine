import {
    Text,
    View,
    FlatList,
    TouchableOpacity
} from 'react-native';
import Globals from '@/Globals';
import Menu from '@/components/Menus/Menu';
import styles from './DetailLoanStyles';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EditSVG from '@/assets/svgs/editarSVG';
import BackBestSVG from '@/assets/svgs/backBest'
import * as Progress from 'react-native-progress';
import Validations from '@/utils/Validations';
import PDFSVG from '@/assets/svgs/pdfSVG'
import TrashSVG from '@/assets/svgs/lixeiraSVG'
import PaySVG from '@/assets/svgs/paySVG';
import * as Animatable from 'react-native-animatable'
import ModalGeneric from '@/components/ModalGeneric';
import EditStorySVG from '@/assets/svgs/deleteTrashSVG'
function DetailLoan({ route, navigation }: any): JSX.Element {
    const { item } = route.params

    const [loan, setLoan] = useState({
        name: "",
        value: 0,
        amount_paid: 0
    })
    const [page, setPage] = useState(1)
    const [transactions, setTransactions] = useState([])
    const [isFinalPage, setIsFinalPage] = useState(false)
    const [modalRemove, setModalRemove] = useState(false)
    const [loading, setLoading] = useState(false)

    const getData = async () => {
        await AsyncStorage.getItem('token', (_, result) => {

            fetch(Globals.BASE_URL_API + 'loan/' + item.id, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + result
                },
            }).then(response => {
              
                if (response.status == 200) {
                    response.json().then((json) => {
                        setLoan(json)
                    })
                }

            }).finally(() => {

            })

        })
    }
    const removeLoan = async () => {
        await AsyncStorage.getItem('token', (_, result) => {

            fetch(Globals.BASE_URL_API + 'loan/' + item.id, {
                method: 'DELETE',
                headers: {
                    'Authorization': 'Bearer ' + result
                },
            }).then(response => {
                console.log(response.status)


                if (response.status == 200) {
                    navigation.navigate("ListLoan")
                }

            }).catch((err) => {
                console.log(err)

            }).finally(() => {

            })
        })
    }
    const getDataTransactions = async () => {
        await AsyncStorage.getItem('token', (_, result) => {
            if (isFinalPage == false) {
                fetch(Globals.BASE_URL_API + 'transaction/list?page=' + page + '&limit=12&loan=' + item.id, {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer ' + result
                    },
                }).then(response => {

                    if (response.status === 401 || response.status === 403) {
                    }

                    if (response.status == 200) {
                        response.json().then((json) => {
                            setPage(page + 1)
                            setTransactions(transactions.concat(json))

                            if (json.length == 0) {
                                setIsFinalPage(true)
                            }
                        })
                    }

                }).finally(() => {

                })
            }


        })
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            if (item != undefined) {
                getData()
                getDataTransactions()
            }
        });

        return unsubscribe;

    }, [navigation, item])

    const screen = <>

        <Text style={styles.tituloView}>Gestão de Empréstimos</Text>
        <FlatList
            style={{ paddingHorizontal: 15 }}
            disableVirtualization={false}
            data={transactions}
            ListHeaderComponent={(
                <>
                    <View style={styles.containerInfo}>
                        <View style={styles.subContainerInfo}>
                            <Text style={styles.textCollum1}>Devedor</Text>
                            <Text style={styles.textCollum2}>{loan.name}</Text>
                        </View>

                        <View style={styles.subContainerInfo}>
                            <Text style={styles.textCollum1}>Pago</Text>
                            <Text style={styles.textCollum2}>{loan.amount_paid.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Text>
                        </View>

                        <View style={styles.subContainerInfo}>
                            <Text style={styles.textCollum1}>Total</Text>
                            <Text style={styles.textCollum2}>{loan.value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Text>
                        </View>
                    </View>
                    <View style={{ marginBottom: 40 }}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.porcent}>
                                {loan.amount_paid == 0 ? 0 : parseInt(String((100 * loan.amount_paid) / loan.value))}%
                            </Text>

                            <Progress.Bar style={{ marginTop: -8 }} progress={loan.amount_paid == 0 ? 0 : (loan.amount_paid) / loan.value} width={Globals.WIDTH - 30} height={20} borderRadius={20} color={Globals.COLOR.LIGHT.COLOR2} unfilledColor='white' />
                        </View>

                    </View>
                    <Text style={styles.subTitle}>Pagamentos</Text>
                </>
            )}

            renderItem={({ item }) => (
                <><View style={styles.itemContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: 'white' }}>{item.about}</Text>
                    </View>
                    <View style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', }}>
                        <Text style={{ textAlign: 'right', fontFamily: Globals.FONT_FAMILY.BOLD, fontSize: 13, color: 'white', lineHeight: 16 }}>{Validations.formatDateDDMMYYYYHHMM(item.created_at)}</Text>
                        <Text style={{ textAlign: 'right', fontFamily: Globals.FONT_FAMILY.SEMIBOLD, fontSize: 13, color: 'white', lineHeight: 16 }}>{item.value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Text>
                    </View>
                </View><View style={styles.separator}></View></>

            )}
            onEndReached={() => { getDataTransactions() }}
            onEndReachedThreshold={0.2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item: { about: string; id: string; created_at: string; value: number; }) => item.id}
        />
        {
            transactions.length == 0 && (
                <Animatable.View useNativeDriver={true} animation='fadeInUp' style={{ position: 'absolute', top: Globals.HEIGHT * 0.4, alignSelf: 'center' }}>
                    <Text style={{ color: Globals.COLOR.BRANCO, textAlign: 'center', fontFamily: Globals.FONT_FAMILY.BOLD, }}>Pagamentos não encontrados</Text>
                </Animatable.View>)
        }
        <View style={styles.menuBottom}>
            <TouchableOpacity onPress={() => {
                navigation.navigate("ListLoan");
            }} style={styles.menuBottomButton}>
                <BackBestSVG width={30} height={30} />
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', gap: 10 }}>
                {/* <TouchableOpacity style={styles.menuBottomButton}>
                    <PDFSVG width={40} height={34} />
                </TouchableOpacity> */}

                <TouchableOpacity onPress={()=>{
                    navigation.navigate("UpdateLoan",{
                        item
                    })
                }} style={styles.menuBottomButton}>
                    <EditSVG />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    navigation.navigate("AddTransaction", {
                        item
                    })
                }} style={[styles.menuBottomButton]}>
                    <PaySVG width={35} fill={'white'} height={35} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    setModalRemove(true)
                }} style={[styles.menuBottomButton, { backgroundColor: Globals.COLOR_GASTO }]}>
                    <TrashSVG />
                </TouchableOpacity>

            </View>

        </View>
        <ModalGeneric image={(style: any) => {
            return <EditStorySVG style={style} />
        }} affirmFunc={removeLoan}
            modalVisible={modalRemove}
            setModalVisible={setModalRemove}
            title={"Remover Empréstimo"}
            paragraph={"Tem certeza que deseja remover o empréstimo?"}
            textAffirmButton="Sim"
            textNegButton="Não agora"
            isLoading={loading}
            setIsLoading={setLoading}
        />

    </>
    return (
        <View style={styles.body}>
            <Menu route={route} screenElement={screen} navigation={navigation} />
        </View>
    );
}



export default DetailLoan;

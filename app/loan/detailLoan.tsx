import {
    FlatList,
    StyleSheet
} from 'react-native';
import Globals from '@/Globals';
import MenuSide from '@/components/Menus/MenuSide';
import { useEffect, useState } from 'react';
import {
    Progress, Text,
    View
} from 'tamagui';
import Validations from '@/utils/Validations';
import * as Animatable from 'react-native-animatable'
import { listTransactions } from '@/server/database/services/TransactionService';
import { UnknownOutputParams, useLocalSearchParams, useNavigation } from 'expo-router';
import { getLoanById } from '@/server/database/services/LoansService';
import MenuBottomDetail from '@/components/Menus/MenuBottomDetail';
import Title from '@/components/UI/Title';
import { SafeAreaView } from 'react-native-safe-area-context';

type Loan = {
    id: string;
    name: string;
    value: number;
    amount_paid: number;
};

function DetailLoan(): JSX.Element {
    const item: UnknownOutputParams = useLocalSearchParams();
    const navigate = useNavigation()
    const [loan, setLoan] = useState<Loan>({
        id: String(item.id),
        name: String(item.name),
        value: Number(item.value),
        amount_paid: Number(item.amount_paid)
    })
    const [page, setPage] = useState(1)
    const [transactions, setTransactions] = useState([])
    const [isFinalPage, setIsFinalPage] = useState(false)

    const getDataTransactions = async () => {
        if (isFinalPage == false) {
            listTransactions(loan.id, page, 10).then((json: any) => {

                setPage(page + 1)
                setTransactions(transactions.concat(json))

                if (json.length == 0) {
                    setIsFinalPage(true)
                }


            }).finally(() => {

            })
        }


    }
    const getData = async () => {

        getLoanById(String(item.id)).then((json) => {
            setLoan(json as Loan)

        }).finally(() => {

        })

    }
    useEffect(() => {

        navigate.addListener('focus', () => {
            if (item != undefined) {
                getData()
                getDataTransactions()
            }
        });
    }, [])

    return (
        <View style={{ flex: 1, }}>
            <SafeAreaView edges={['top']} style={{ flex: 1 }}>
                <MenuSide>
                    <View style={{ paddingHorizontal: 10, flex: 1 }}>
                        <Title text='Gestão de Empréstimos' />

                        <FlatList
                            disableVirtualization={false}
                            data={transactions}
                            ListHeaderComponent={(
                                <>
                                    <View style={styles.containerInfo}>
                                        <View style={styles.subContainerInfo}>
                                            <Text style={styles.textCollum1}>Devedor</Text>
                                            <Text ellipsizeMode='tail' numberOfLines={1} style={styles.textCollum2}>{loan.name}</Text>
                                        </View>

                                        <View style={styles.subContainerInfo}>
                                            <Text style={styles.textCollum1}>Pago</Text>
                                            <Text style={styles.textCollum2}>{loan.amount_paid.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Text>
                                        </View>

                                        <View style={styles.subContainerInfo}>
                                            <Text style={styles.textCollum1}>Devendo</Text>
                                            <Text style={styles.textCollum2}>{(loan.value - loan.amount_paid).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Text>
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

                                            <Progress key={0} max={100} value={loan.amount_paid == 0 ? 0 : parseInt(String((100 * loan.amount_paid) / loan.value))} height={20}   >
                                                <Progress.Indicator animation="medium" />
                                            </Progress>
                                        </View>

                                    </View>
                                    <Text style={styles.subTitle}>Pagamentos</Text>
                                </>
                            )}

                            renderItem={({ item }) => (

                                <View style={styles.itemContainer} borderBottomWidth={1} borderColor={'$purple10'}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text >{item.about}</Text>
                                    </View>
                                    <View style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', }}>
                                        <Text style={{ textAlign: 'right', fontWeight: 'bold', fontSize: 13 }}>{Validations.formatDateDDMMYYYYHHMM(item.created_at)}</Text>
                                        <Text style={{ textAlign: 'right', fontWeight: 700, fontSize: 13 }}>{item.value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Text>
                                    </View>
                                </View>


                            )}
                            onEndReached={() => { getDataTransactions() }}
                            onEndReachedThreshold={0.2}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(item: { about: string; id: string; created_at: string; value: number; }) => item.id}
                        />
                        {
                            transactions.length == 0 && (
                                <Animatable.View useNativeDriver={true} animation='fadeInUp' style={{ position: 'absolute', top: Globals.HEIGHT * 0.4, alignSelf: 'center' }}>
                                    <Text fontWeight={'bold'} style={{ textAlign: 'center' }}>Pagamentos não encontrados</Text>
                                </Animatable.View>)
                        }
                    </View>
                    <MenuBottomDetail item={item} />
                </MenuSide>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    containerInfo: {
        flexDirection: 'column',
        marginTop: 20
    },
    subContainerInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textCollum1: {
        fontSize: 14,
        flex: 1,
        fontWeight: '700'
    },
    textCollum2: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    itemContainer: {
        paddingHorizontal: 10,
        width: '100%',
        height: 58,
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 10,
        flexDirection: 'row', justifyContent: 'space-between',
    },
    porcent: {
        fontSize: 28,
        marginBottom: 10,
        fontWeight: 'bold'
    },
    subTitle: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    }

});

export default DetailLoan;

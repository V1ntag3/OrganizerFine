import {
    SafeAreaView,
    Text,
    View,
    FlatList,
    RefreshControl
} from 'react-native';
import Globals from '../../Globals';
import Menu from '../../components/Menu';
import styles from './ManagerLoanStyles';
import { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AddSVG from '../../components/SVGComponentes/addSVG';
import BackSvg from '../../components/SVGComponentes/backBest'
import { listLoans } from '../../server/database/services/LoansService';
function ManagerLoan({ route, navigation }: any): JSX.Element {
    const [refreshing, setRefreshing] = useState(false);

    const [loans, setLoans] = useState([])
    const [page, setPage] = useState(1)
    const [isFinalPage, setIsFinalPage] = useState(false)

    const getData = async (isPageReload = false) => {
        var realPage = isPageReload == true ? 1 : page
        if ((isFinalPage == false && isPageReload == false) || (isFinalPage == true && isPageReload == true) || isPageReload == true) {


            listLoans(page, 12).then((data: any) => {
                console.log(data)
                if (isPageReload) {
                    setLoans(data)
                } else {
                    setPage(page + 1)
                    setLoans(loans.concat(data))

                    if (data.length == 0) {
                        setIsFinalPage(true)
                    }

                }
            }).finally(() => {
                if (isPageReload) {
                    setIsFinalPage(false)
                    setRefreshing(false)
                    setPage(1)
                }
            })
        }

    }

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        getData(true)
    }, []);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getData()
        });

        return unsubscribe;
    }, [navigation])

    const screen = <>
        <Text style={styles.titleView}>Gestão de Emprestimos</Text>
        <FlatList
            refreshControl={<RefreshControl progressBackgroundColor={Globals.COLOR.LIGHT.COLOR1} colors={[Globals.COLOR.LIGHT.COLOR3]} refreshing={refreshing}
                onRefresh={onRefresh} />}
            disableVirtualization={false}
            style={{
                paddingBottom: 10
            }}
            data={loans}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => { navigation.navigate("DetailLoan", { item }) }} style={[styles.itemContainer, { maxWidth: Globals.WIDTH * 0.9 }]} >
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ backgroundColor: Globals.COLOR.LIGHT.COLOR4, width: 50, height: 50, borderRadius: 30, padding: 3, marginRight: 5, alignSelf: 'center' }}>
                            <Text style={{ fontFamily: Globals.FONT_FAMILY.SEMIBOLD, fontSize: 30, textAlign: 'center', color: 'white' }}>{item.name[0]}</Text>
                        </View>
                        <View style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column' }} >

                            <Text style={{ fontFamily: Globals.FONT_FAMILY.BOLD, fontSize: 13, color: Globals.COLOR.LIGHT.COLOR5, lineHeight: 16 }}>{item.name}</Text>
                            <Text style={{ fontFamily: Globals.FONT_FAMILY.REGULAR, fontSize: 13, color: Globals.COLOR.LIGHT.COLOR5, lineHeight: 16 }}>{item.about}</Text>

                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
                        <Text style={{ fontFamily: Globals.FONT_FAMILY.BOLD, fontSize: 13, color: Globals.COLOR.LIGHT.COLOR5, lineHeight: 16 }}>{item.amount_paid.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Text>
                        <Text style={{ fontFamily: Globals.FONT_FAMILY.SEMIBOLD, fontSize: 13, color: Globals.COLOR.LIGHT.COLOR5, lineHeight: 16 }}>{item.value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Text>
                    </View>
                </TouchableOpacity>
            )}
            onEndReached={() => { getData(false) }}
            onEndReachedThreshold={0.1}

            showsVerticalScrollIndicator={false}
            keyExtractor={(item: { id: string; amount_paid: number; value: number; name: string; about: string; }) => item.id}

        />
        <View style={styles.menuBottom}>
            <TouchableOpacity onPress={() => {
                navigation.navigate("Home")
            }} style={styles.menuBottomButton}>
                <BackSvg style={{}} width={40} height={34} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigation.navigate("AddLoan")
            }} style={styles.menuBottomButton}>
                <AddSVG />
            </TouchableOpacity>
        </View>

    </>

    return (
        <SafeAreaView style={styles.body}>
            <Menu route={route} screenElement={screen} navigation={navigation} />
        </SafeAreaView>
    );
}



export default ManagerLoan;

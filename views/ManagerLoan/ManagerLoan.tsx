import {
    Text,
    View,
    FlatList,
    RefreshControl,
    StatusBar
} from 'react-native';
import Globals from '../../Globals';
import Menu from '../../components/Menu';
import styles from './ManagerLoanStyles';
import { useCallback, useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AddSVG from '../../assets/svgs/addSVG';
import BackSvg from '../../assets/svgs/backBest'
import { listLoans } from '../../server/database/services/LoansService';
import BottomMenu from '../../components/BottomMenu';
import CardLoan from '../../components/Cards/CardLoan';
import Title from '../../components/Title';
function ManagerLoan({ route, navigation }: any): JSX.Element {
    const [refreshing, setRefreshing] = useState(false);

    const [loans, setLoans] = useState([])
    const [page, setPage] = useState(1)
    const [isFinalPage, setIsFinalPage] = useState(false)


    const getLoans = async (currentPage: number, currentSchedulings: never[]) => {
        listLoans(currentPage, 12).then((data: any) => {
            setPage(page + 1)
            setLoans(currentSchedulings.concat(data))
            if (data.length == 0) {
                setIsFinalPage(true)
            }
        }).finally(() => {
            setRefreshing(false)
        })
    }

    const onRefresh = useCallback(() => {
        setRefreshing(false);
        getLoans(1, [])
    }, []);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getLoans(1, [])
        });
        return unsubscribe;
    }, [navigation])

    const screen = <>
        <Title text='Gestão de Emprestimos' />
        <FlatList
            refreshControl={<RefreshControl progressBackgroundColor={Globals.COLOR.LIGHT.COLOR1} colors={[Globals.COLOR.LIGHT.COLOR3]} refreshing={refreshing}
                onRefresh={onRefresh} />}
            disableVirtualization={false}
            style={{ paddingBottom: 10 }}
            data={loans}
            renderItem={({ item }) => (
                <CardLoan loan={item} onPress={() => { navigation.navigate("DetailLoan", { item }) }} />
            )}
            onEndReached={() => { if (isFinalPage !== true) getLoans(page, loans) }}
            onEndReachedThreshold={0.1}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item: { id: string; amount_paid: number; value: number; name: string; about: string; }) => item.id}
        />

        <BottomMenu onNavigateBack={() => {
            navigation.goBack()
        }} onConfirm={() => { navigation.navigate("AddLoan") }} ConfirmIcon={<AddSVG />} />
    </>

    return (
        <>
            <StatusBar backgroundColor={Globals.COLOR.LIGHT.COLOR4} />
            <Menu route={route} screenElement={screen} navigation={navigation} />
        </>
    );
}



export default ManagerLoan;

import {
    View,
    FlatList,
} from 'react-native';
import NotFound from '@/assets/svgs/notFoundSVG'

import MenuSide from '@/components/Menus/MenuSide';
import { useEffect, useState } from 'react';
import { listLoans } from '@/server/database/services/LoansService';
import MenuBottom from '@/components/Menus/MenuBottom';
import CardLoan from '@/components/Cards/CardLoan';
import { PlusCircle } from '@tamagui/lucide-icons';
import Title from '@/components/UI/Title';
import { router, useNavigation } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import ImageText from '@/components/UI/ImageText';
export default function ListLoan() {
    const navigation = useNavigation()
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
        })
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getLoans(1, [])
        });
        return unsubscribe;
    }, [navigation])


    return (
        <View style={{ flex: 1, }} >
            <SafeAreaView edges={['top']} style={{ flex: 1 }}>
                <MenuSide>
                    <View style={{ paddingHorizontal: 10, flex: 1 }}>
                        <Title text='Gestão de Empréstimos' />

                        <FlatList
                            disableVirtualization={false}
                            contentContainerStyle={{
                                gap: 10,
                            }}
                            data={loans}
                            renderItem={({ item }) => (
                                <CardLoan loan={item} onPress={() => {
                                    router.navigate({
                                        pathname: "/loan/detailLoan",
                                        params: item
                                    })
                                }} />
                            )}
                            onEndReached={() => { if (isFinalPage !== true) getLoans(page, loans) }}
                            onEndReachedThreshold={0.1}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(item: { id: string; amount_paid: number; value: number; name: string; about: string; }) => item.id}
                            ListEmptyComponent={<ImageText text="Sem empréstimos cadastrados" Image={NotFound} />}
                        />
                    </View>
                    <MenuBottom onNavigateBack={() => {
                        router.navigate("/")

                    }} onConfirm={() => { router.navigate("/loan/addLoan") }} ConfirmIcon={<PlusCircle size={35} />} />
                </MenuSide>

            </SafeAreaView>
        </View >
    );
}

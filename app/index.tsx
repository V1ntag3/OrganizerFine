import { MenuSide } from '@/components/Menus/MenuSide';
import { useEffect } from 'react';
import { useState } from 'react';
import { getTotalRevenueSpendings } from '@/server/database/services/RevenueSpendingService';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRouter } from 'expo-router';
import { Button, H2, Text, View } from 'tamagui';
import { ChartBar, HandCoins } from '@tamagui/lucide-icons';
import CardBalance from '@/components/Cards/CardBalance';
import ButtonRevenueSpend from '@/components/Buttons/ButtonRevenueSpend';
import { useUser } from '@/context/UserProvider';

export default function Home() {
  const navigate = useNavigation()
  const router = useRouter();
  const [total, setTotal] = useState(0)
  const { user } = useUser()

  const getTotal = () => {
    getTotalRevenueSpendings().then((data) => {
      setTotal(data)
    })
  }

  useEffect(() => {
    navigate.addListener('focus', () => {
      getTotal()
    });
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView edges={['top']} style={{ flex: 1 }}>
        <MenuSide>
          <View flexDirection='column' gap={10} p={10}>
            <H2 fontWeight={900}>Olá{user?.name && ', ' + user?.name.split(" ")[0]}</H2>

            <CardBalance width={"100%"} value={total} />

            <View width={"100%"} flexDirection='row' gap={10}>
              <Button onPress={() => {
                router.navigate("/revenueSpend/listRevenueSpend")
              }}
                style={{
                  borderRadius: 10
                }}
                scaleSpace={0.3} bordered icon={<ChartBar strokeWidth={1} />} size={150} flexDirection='column' height={180} flex={1}>
                <Text fontSize={20} fontWeight={700}>Finanças</Text>
              </Button>
              <ButtonRevenueSpend onPress={() => {
                router.navigate("/revenueSpend/addRevenueSpend")
              }} />
            </View>

            <Button style={{
              borderRadius: 10
            }} scaleSpace={0.3} bordered onTouchEnd={() => {
              router.navigate("/loan/listLoan")
            }} borderTopEndRadius={10} height={110} icon={<HandCoins strokeWidth={1} />} size={120} >
              <Text fontSize={20} fontWeight={700}>Gestão de Empréstimos</Text>
            </Button>

          </View>
        </MenuSide>
      </SafeAreaView>
    </View>
  );
}
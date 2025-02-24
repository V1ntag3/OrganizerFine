import Globals from "@/Globals"
import Svg, { Path } from "react-native-svg"
import { View, Text, Button } from "tamagui"
import { StyleSheet } from 'react-native'
import { PlusCircle } from '@tamagui/lucide-icons';

export default function ButtonRevenueSpend({ onPress }) {

  return (
    <Button p={0} position='relative' onPress={onPress} style={styles.container}>

      <View
        style={{
          width: "100%",
          borderRadius: 10,
          overflow: 'hidden',
          marginLeft:28
        }}>
        <Svg width="100%" height="100%">
          <Path d="M0 0 L178 0 L0 200 Z" fill={Globals.COLOR_GASTO} />
          <Path d="M0 200 L200 200 L200 -27 Z " fill={Globals.COLOR_RECEITA} />
        </Svg>
      </View>

      <Text style={[styles.textBox, { position: 'absolute', left: 10, top: 10 }]} >Gasto</Text>
      <Text style={[styles.textBox, { position: 'absolute', bottom: 10, right: 10 }]} >Receita</Text>
      <PlusCircle position='absolute' scale={4} color={'white'} t={80} l={60} />
    </Button>
  )
}

const styles = StyleSheet.create({
  textBox: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 800,
    color: 'white',
  },
  container: {
    height: 180,
    width: 140,
  }
});


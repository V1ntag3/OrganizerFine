import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Text,
    View
} from 'react-native';
import Globals from '../Globals';
import Menu from './components/Menu';

function GestaoDeEmprestimos({ route, navigation }: any): JSX.Element {
    const screen = <>

        <Text style={styles.tituloView}>Gestão de Emprestimos</Text>

        <View style={styles.itemContainer} >
            <View style={{flexDirection:'row'}}>
                <View style={{backgroundColor:Globals.COLOR.LIGHT.COLOR4, width:50, height:50, borderRadius:30,padding:3, marginRight:5, alignSelf:'center'}}>
                    <Text style={{fontFamily: Globals.FONT_FAMILY.SEMIBOLD, fontSize:30, textAlign:'center', color:'white'}}>M</Text>
                </View>
                <View style={{justifyContent:'center', display:'flex', flexDirection:'column'}} >

                    <Text style={{fontFamily:Globals.FONT_FAMILY.BOLD, fontSize:13,color:Globals.COLOR.LIGHT.COLOR5,lineHeight:16}}>Emprestimo do Carro</Text>
                    <Text style={{fontFamily:Globals.FONT_FAMILY.REGULAR, fontSize:13,color:Globals.COLOR.LIGHT.COLOR5,lineHeight:16}}>Marcos Vinicis</Text>

                </View>
            </View>
            <View  style={{justifyContent:'center', display:'flex', flexDirection:'column'}}>
                <Text style={{fontFamily:Globals.FONT_FAMILY.BOLD, fontSize:13,color:Globals.COLOR.LIGHT.COLOR5,lineHeight:16}}>R$ 500,00</Text>
                <Text style={{fontFamily:Globals.FONT_FAMILY.SEMIBOLD, fontSize:13,color:Globals.COLOR.LIGHT.COLOR5, lineHeight:16}}>R$ 1000,00 </Text>
            </View>
        </View>
    </>
    return (
        <SafeAreaView style={styles.body}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollView} >

                <Menu route={route} screenElement={screen} navigation={navigation} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: Globals.COLOR.LIGHT.COLOR4,
        flex: 1,
    },
    scrollView: {
        height: Globals.HEIGHT
    },
    tituloView: {
        fontFamily: Globals.FONT_FAMILY.SEMIBOLD,
        fontWeight: '600',
        fontSize: 24,
        textAlign: 'center',
        color: Globals.COLOR.BRANCO,
        marginTop: 15
    },
    itemContainer: {
    
        paddingHorizontal: 10,
        width: '90%',
        backgroundColor: 'white',
        height: 58,
        alignSelf: 'center', marginTop: 10,
        borderRadius: 10,
        flexDirection:'row', justifyContent:'space-between'
    }

});


export default GestaoDeEmprestimos;

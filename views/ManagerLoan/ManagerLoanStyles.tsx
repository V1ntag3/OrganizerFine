import Globals from '../../Globals';
import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    body: {
        backgroundColor: Globals.COLOR.LIGHT.COLOR4,
        flex: 1,
    },
    titleView: {
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
        flexDirection: 'row', justifyContent: 'space-between'
    },
    menuBottom:{
        height:72,
        width:'100%',
        backgroundColor:Globals.COLOR.LIGHT.COLOR1,
        zIndex:10000,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:15
    },
    menuBottomButton:{
   
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:15,
        height:55,
        width:55,
        borderRadius:30,
        backgroundColor:Globals.COLOR.LIGHT.COLOR2
    }

});

export default styles

import {
    StyleSheet,
} from 'react-native';
import Globals from '../../Globals';
const styles = StyleSheet.create({
    body: {
        backgroundColor: Globals.COLOR.LIGHT.COLOR4,
        flex: 1,
        zIndex: 10000
    },
    container: {
        paddingHorizontal: 30,
        paddingTop: 40,
        marginBottom: 30
    },
    text1: {
        fontFamily: Globals.FONT_FAMILY.BOLD,
        color: Globals.COLOR.BRANCO,
        fontSize: 30
    },
    text2: {
        fontFamily: Globals.FONT_FAMILY.REGULAR,
        color: Globals.COLOR.BRANCO,
        fontSize: 15
    }
});
export default styles

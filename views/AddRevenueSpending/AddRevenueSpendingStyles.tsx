import { StyleSheet } from 'react-native';
import Globals from '../../Globals';
const Styles = StyleSheet.create({
    titleView: {
        fontFamily: Globals.FONT_FAMILY.SEMIBOLD,
        fontWeight: '600',
        fontSize: 24,
        textAlign: 'center',
        color: Globals.COLOR.BRANCO,
        marginTop: 15
    },
    body: {
        backgroundColor: Globals.COLOR.LIGHT.COLOR4,
        flex: 1
    },
    inputStyle: {
        alignSelf: 'center',
        padding: 10.75309,
        paddingBottom: 0,
        width: '100%',
        height: 49.65,
        maxWidth: '90%',
        marginVertical: 8,
        marginBottom: 5,
        backgroundColor: Globals.COLOR.BRANCO,
        fontFamily: Globals.FONT_FAMILY.REGULAR,
        color: 'white',
        borderRadius: 6.96875,
    },
    errorStyle: {
        paddingLeft: 7,
        width: '100%',
        maxWidth: '90%',
        alignSelf: 'center',
        marginLeft: -15,
        color: Globals.COLOR_ERROR,
        fontSize: 11,
        lineHeight: 12,
        fontFamily: Globals.FONT_FAMILY.MEDIUM,
    },
    dropDownPickerText: {
        fontFamily: Globals.FONT_FAMILY.REGULAR,
        fontSize: 14,
        color: 'white'
    },
    animationContainer: {
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: 30
    },
    buttonRevenueSpending: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        paddingVertical: 16,
        fontFamily: Globals.FONT_FAMILY.BOLD
    },
    addButton: {
        width: 60,
        height: 60,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 30
    },
    touchButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: Globals.COLOR.LIGHT.COLOR5
    },
    svgAdd: {
        marginTop: 13,
        marginLeft: 13
    },
    dropdownText: {
        color: 'white',
        fontFamily: Globals.FONT_FAMILY.REGULAR,
        fontSize: 14
    }
});

export default Styles;
import { StyleSheet } from 'react-native'
import Globals from "@/Globals";
const styles = StyleSheet.create({
    titleView: {
        fontFamily: Globals.FONT_FAMILY.SEMIBOLD,
        fontWeight: '600',
        fontSize: 24,
        textAlign: 'center',
        color: Globals.COLOR.BRANCO,
        marginTop: 15
    },
    body: {
        flex: 1,
        minHeight: Globals.HEIGHT,
        height: 'auto'

    },
    scrollView: {
    },
    inputStyle: {
        alignItems: 'center',
        paddingVertical: 10.75309,
        paddingHorizontal: 11.0905,
        paddingBottom: 0,
        width: '100%',
        height: 49.65,
        maxWidth: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
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
    addButton: {
        alignSelf: 'center',
        width: 60,
        height: 60,
        marginTop: 50
    },
    touchButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: Globals.COLOR.LIGHT.COLOR5
    },
    svgAdd: {
        marginTop: 15,
        marginLeft: 15
    },
    subtitleView: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        fontFamily: Globals.FONT_FAMILY.SEMIBOLD,
        marginTop: -10
    },
    dropdownText: {
        color: 'white',
        fontFamily: Globals.FONT_FAMILY.REGULAR,
        fontSize: 14
    }
});

export default styles
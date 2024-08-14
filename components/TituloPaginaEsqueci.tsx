import React from 'react';
import { Text, StyleSheet, Pressable, View, Dimensions} from 'react-native';
import BackSVG from '../assets/svgs/backSVG';
import Globals from '../Globals';
type tituloPaginaProps = {
    title: string;
    navigation: any;
};

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default function tituloPagina(props: tituloPaginaProps) {
    const { title, navigation } = props;

    return (
        <View style={{zIndex:0}}>
            <View style={styles.circulo1}></View>

            <Pressable style={{width:50, height:50,}} onPress={()=> navigation.goBack()}>
                <BackSVG style={styles.backSVGStyle} width={47} height={47} />
            </Pressable>
            
            <Text style={styles.tituloPagina}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    circulo1: {
        position: 'absolute',
        height: height * 0.570,
        width: width * 1.237,
        top: height * -0.39,
        left: width * -0.06,
        borderRadius: width * 2 / 2,
        backgroundColor: Globals.COLOR.LIGHT.COLOR4

    },
    backSVGStyle: {
        position: 'absolute',
        top: 10,
        left: -5
    },
    tituloPagina: {
        fontSize: 30,
        lineHeight: 47,
        fontWeight: '700',
        color: Globals.COLOR.BRANCO,
        fontFamily: Globals.FONT_FAMILY.SEMIBOLD,
        position: 'absolute',
        left: 50,
        top: 10
    },
});
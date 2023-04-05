import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default function FundoPagina() {

    return (

            <><View style={styles.retangulo}></View><View style={styles.circulo2}></View><View style={styles.circulo3}></View></>

    );
}

const styles = StyleSheet.create({
    retangulo: {
        backgroundColor: '#195E63',
        position: 'absolute',
        width: width,
        height: height * 0.65,
        left: 0,
        bottom: -10
    },
    circulo2: {
        backgroundColor: '#195E63',
        position: 'absolute',
        top: height * 0.25,
        left: width * -0.15,
        width: width * 0.77,
        borderRadius: width * 0.77 / 2,
        height: height * 0.45
    },
    circulo3: {
        backgroundColor: '#195E63',
        position: 'absolute',
        top: height * 0.14,
        left: width * 0.3,
        width: width * 0.90,
        borderRadius: width * 0.94 / 2,
        height: height * 0.5
    },
});

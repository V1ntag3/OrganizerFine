import React, { useRef, useState } from 'react';
import { Text, StyleSheet, Pressable, TouchableOpacity, View, Alert, Animated, Easing, Dimensions } from 'react-native';
import MenuSVG from '../componentes/SVGComponentes/menuSVG'
import FineSVG from './SVGComponentes/fineSVG';
import ConfigSVG from '../componentes/SVGComponentes/configSVG'
import LogoutSVG from '../componentes/SVGComponentes/logoutSVG'
var width = Dimensions.get('window').width;

export default function ButtonGeneric() {
    const startValue = useRef(new Animated.Value(-0.9 * width)).current;
    const [openClose, setOpenClose] = useState(true);

    const moveMenu = () => {
        startValue.setValue(openClose ? (-0.9 * width) : 0);

        Animated.timing(startValue, {
            toValue: openClose ? 0 : (-0.9 * width),
            duration: 500,
            easing: Easing.ease,
            useNativeDriver: true,
        }).start();

        setOpenClose(openClose ? false : true)

    };
    // Dados
    const [nome, setNome] = useState('Marquin');
    const [email, setEmail] = useState('marcos@gmail.com');
    const [telefone, setTelefone] = useState('(86) 9 9 9851 4018');

    return (
        <><TouchableOpacity style={{ zIndex: 10000, position: 'absolute', top: 20, left: 15 }} onPress={moveMenu}>
            <MenuSVG />
        </TouchableOpacity>
            <Animated.View style={{
                width: '90%',
                height: '100%',
                backgroundColor: '#063940',
                position: 'absolute',
                zIndex: 100,
                transform: [{ translateX: startValue, }],

            }}>
                <View style={{ width: '100%' }}>
                    <View style={styles.imagemUser}>
                    </View>
                    <View style={{ marginLeft: 20, marginBottom: 30 }}>
                        <Text style={{
                            fontWeight: '300',
                            fontSize: 20,
                            color: '#FFFFFF'
                        }}>
                            <Text style={{ fontWeight: '700' }}>Olá</Text>, {nome}
                        </Text>
                        <Text style={styles.dados}>{telefone}</Text>
                        <Text style={styles.dados}>{email}</Text>
                    </View>
                    <View style={styles.itemMenu}>
                        <FineSVG />
                        <Text style={styles.itemMenuText}>Finanças</Text>
                    </View>

                    <View style={styles.itemMenu}>
                        <ConfigSVG />
                        <Text style={styles.itemMenuText}>Configurações</Text>
                    </View>

                    <View style={[styles.itemMenu, { paddingLeft: 17 }]}>
                        <LogoutSVG />
                        <Text style={styles.itemMenuText}>Sair</Text>
                    </View>

                </View>
            </Animated.View>
        </>
    );
}

const styles = StyleSheet.create({
    dados: {
        fontFamily: 'Poppins-Regular',
        fontWeight: '500',
        fontSize: 14,
        color: '#FFFFFF',
        lineHeight: 20,
    },
    imagemUser: {
        width: width * 0.4,
        height: width * 0.4,
        backgroundColor: "black",
        borderColor: '#195E63',
        borderRadius: width * 0.20,
        borderWidth: 4,
        marginHorizontal: width * 0.25,
        marginTop: 40,
        marginBottom: 10
    },
    itemMenu: {
        width: '90%',
        backgroundColor: '#E3E3E3',
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        height: 48,
        paddingTop: 13,
        paddingBottom: 13,
        paddingLeft: 12,
        paddingRight: 10,
        flexDirection: 'row',
        marginBottom: 15
    },
    itemMenuText: {
        fontWeight: '500',
        fontSize: 16,
        color: '#195E63',
        marginLeft: 15,
        lineHeight: 24
    }
});

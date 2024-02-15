import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    Modal,
    Pressable
} from 'react-native';

import Globals from '../Globals';

function ModalGeneric({ modalVisible, setModalVisible, image, affirmFunc, title, paragraph, textAffirmButton, textNegButton }: any): JSX.Element {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}>
            <Pressable
                style={styles.modalContainer}
                onPress={() => {
                    setModalVisible(false)
                }}>
            </Pressable>
            <View style={styles.modal}>
                <Text style={styles.tittle}>{title}</Text>
                {image(styles.image)}
                <Text style={styles.paragraph}>{paragraph}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={styles.affirmButton} onPress={affirmFunc}>
                        <Text style={styles.textAffirmButton}>{textAffirmButton}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.negButton} onPress={() => setModalVisible(false)}>
                        <Text style={styles.textNegButton} >{textNegButton}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    },
    modal: {
        position: 'absolute',
        zIndex: 1000,
        backgroundColor: Globals.COLOR.LIGHT.COLOR2,
        paddingHorizontal: 20,
        paddingVertical: 20,
        width: 320,
        alignSelf: 'center',
        marginTop: 40,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    image: {
        width: 250,
        height: 250,
        alignSelf: 'center'
    },
    tittle: {
        color: 'white',
        fontFamily: Globals.FONT_FAMILY.BOLD,
        fontSize: 20
    },
    paragraph:
    {
        color: 'white',
        fontFamily: Globals.FONT_FAMILY.REGULAR,
        fontSize: 16,
        marginBottom: 30
    },
    affirmButton:
    {
        backgroundColor: Globals.COLOR.LIGHT.COLOR4,
        paddingHorizontal: 5,
        paddingVertical: 10,
        width: '45%',
        borderRadius: 20
    }
    ,
    negButton: {
        backgroundColor: Globals.COLOR.LIGHT.COLOR3,
        paddingHorizontal: 5,
        paddingVertical: 10,
        width: '45%',
        borderRadius: 20
    },
    textAffirmButton: {
        color: 'white',
        fontFamily: Globals.FONT_FAMILY.SEMIBOLD,
        textAlign: 'center'
    },
    textNegButton: {
        color: 'white',
        fontFamily: Globals.FONT_FAMILY.SEMIBOLD,
        textAlign: 'center'
    }

});

export default ModalGeneric; 
import React, { ReactElement } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    Modal,
    Pressable,
    StyleProp,
    ImageStyle
} from 'react-native';

import Globals from '@/Globals';

interface ModalGenericProps {
    modalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
    image: (style: StyleProp<ImageStyle>) => ReactElement;
    affirmFunc: () => void;
    title: string;
    paragraph: string;
    textAffirmButton: string;
    textNegButton: string;
}

function ModalGeneric({
    modalVisible,
    setModalVisible,
    image,
    affirmFunc,
    title,
    paragraph,
    textAffirmButton,
    textNegButton
}: ModalGenericProps): JSX.Element {
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
                    setModalVisible(false);
                }}
            />
            <View style={styles.modal}>
                <Text style={styles.tittle}>{title}</Text>
                {image(styles.image)}
                <Text style={styles.paragraph}>{paragraph}</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.affirmButton} onPress={affirmFunc}>
                        <Text style={styles.textAffirmButton}>{textAffirmButton}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.negButton} onPress={() => setModalVisible(false)}>
                        <Text style={styles.textNegButton}>{textNegButton}</Text>
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
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16,
        elevation: 24,
    },
    image: {
        width: 250,
        height: 250,
        alignSelf: 'center',
    },
    tittle: {
        color: 'white',
        fontFamily: Globals.FONT_FAMILY.BOLD,
        fontSize: 20,
    },
    paragraph: {
        color: 'white',
        fontFamily: Globals.FONT_FAMILY.REGULAR,
        fontSize: 16,
        marginBottom: 30,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    affirmButton: {
        backgroundColor: Globals.COLOR.LIGHT.COLOR4,
        paddingHorizontal: 5,
        paddingVertical: 10,
        width: '45%',
        borderRadius: 20,
    },
    negButton: {
        backgroundColor: Globals.COLOR.LIGHT.COLOR3,
        paddingHorizontal: 5,
        paddingVertical: 10,
        width: '45%',
        borderRadius: 20,
    },
    textAffirmButton: {
        color: 'white',
        fontFamily: Globals.FONT_FAMILY.SEMIBOLD,
        textAlign: 'center',
    },
    textNegButton: {
        color: 'white',
        fontFamily: Globals.FONT_FAMILY.SEMIBOLD,
        textAlign: 'center',
    },
});

export default ModalGeneric;

import React, { ReactElement } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
  
    Modal,
    Pressable,
    StyleProp,
    ImageStyle
} from 'react-native';
import {  View,
    Text,} from 'tamagui'
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
                <Text fontWeight={800} style={styles.tittle}>{title}</Text>
                {image(styles.image)}
                <Text fontWeight={500} style={styles.paragraph}>{paragraph}</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.affirmButton} onPress={affirmFunc}>
                        <Text fontWeight={800} style={styles.textAffirmButton}>{textAffirmButton}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.negButton} onPress={() => setModalVisible(false)}>
                       <Text fontWeight={800} style={styles.textNegButton}>{textNegButton}</Text>
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
        backgroundColor: Globals.COLOR.COLOR2,
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
        fontSize: 20,
    },
    paragraph: {
        color: 'white',
        fontSize: 16,
        marginBottom: 30,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    affirmButton: {
        backgroundColor: Globals.COLOR.COLOR4,
        paddingHorizontal: 5,
        paddingVertical: 10,
        width: '45%',
        borderRadius: 20,
    },
    negButton: {
        backgroundColor: Globals.COLOR.COLOR3,
        paddingHorizontal: 5,
        paddingVertical: 10,
        width: '45%',
        borderRadius: 20,
    },
    textAffirmButton: {
        color: 'white',
        textAlign: 'center',
    },
    textNegButton: {
        color: 'white',
        textAlign: 'center',
    },
});

export default ModalGeneric;

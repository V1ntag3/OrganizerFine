import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import BackBestSVG from '../assets/svgs/backBest';
import Globals from '../Globals';

interface BottomMenuProps {
    onNavigateBack: () => void;
    onConfirm: () => void;
    ConfirmIcon: React.ReactNode;
}

const BottomMenu: React.FC<BottomMenuProps> = ({ onNavigateBack, onConfirm, ConfirmIcon }) => {
    return (
        <View style={styles.menuBottom}>
            <TouchableOpacity
                onPress={onNavigateBack}
                style={styles.menuBottomButton}
            >
                <BackBestSVG width={30} height={30} />
            </TouchableOpacity>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={onConfirm} style={styles.menuBottomButton}>
                    {
                        ConfirmIcon
                    }
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    menuBottom: {
        height: 72,
        width: '100%',
        backgroundColor: Globals.COLOR.LIGHT.COLOR1,
        zIndex: 10000,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        position: 'absolute',
        bottom: 0
    },
    menuBottomButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        height: 55,
        width: 55,
        maxWidth: 55,
        maxHeight: 55,
        borderRadius: 30,
        backgroundColor: Globals.COLOR.LIGHT.COLOR2
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 10,
    },
});

export default BottomMenu;
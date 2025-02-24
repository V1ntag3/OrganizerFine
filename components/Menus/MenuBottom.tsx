import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Globals from '@/Globals';
import { ArrowLeft } from '@tamagui/lucide-icons';

interface MenuBottomProps {
    onNavigateBack: () => void;
    onConfirm: () => void;
    ConfirmIcon: React.ReactNode;
}

const MenuBottom: React.FC<MenuBottomProps> = ({ onNavigateBack, onConfirm, ConfirmIcon }) => {
    return (
        <View style={styles.menuBottom}>
            <TouchableOpacity
                onPress={onNavigateBack}
                style={styles.menuBottomButton}
            >
                <ArrowLeft size={25}/>
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
        width: '100%',
        backgroundColor: Globals.COLOR.COLOR1,
        zIndex: 10000,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        position: 'absolute',
        bottom: 0,
        paddingVertical:10,
        paddingBottom:20
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
        backgroundColor: Globals.COLOR.COLOR2
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 10,
    },
});

export default MenuBottom;
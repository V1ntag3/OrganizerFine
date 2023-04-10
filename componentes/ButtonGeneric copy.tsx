import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import App from '../App';

export default function Menu() {
    const Drawer = createDrawerNavigator()
    return (
        <NavigationContainer >
            <Drawer.Navigator  >
                <Drawer.Screen name="App" component={App}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
});

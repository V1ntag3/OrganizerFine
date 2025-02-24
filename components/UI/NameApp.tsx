import { View, Text } from "tamagui";
import { StyleSheet } from 'react-native'
function NameApp() {
    return (
        <View position="absolute" b={15} width={"100%"} m={'auto'} justify={"center"}>
            <Text style={styles.nameApp}>ORGANIZER</Text>
            <Text style={styles.nameApp}>FINE</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    nameApp: {
        fontFamily:"ABSTER",
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 17,
        lineHeight: 25,
    },

});

export default NameApp
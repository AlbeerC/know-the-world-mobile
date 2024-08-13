import { View, Text, StyleSheet } from "react-native"

export default function Navbar () {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Know the world</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        borderBottomColor: '#ffffff',
        borderBottomWidth: 1,
    },
    text: {
        fontSize: 25,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold',
        color: '#ffffff',
    },
})
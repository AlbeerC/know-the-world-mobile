import { View, Text, StyleSheet, Pressable } from "react-native";

export function HomeButtons () {

    return (
        <View style={styles.container}>
            <Pressable style={styles.button}>
                <Text style={styles.text}>Mapa interactivo</Text>
            </Pressable>
            <Pressable style={styles.button}>
                <Text style={styles.text}>Aprender</Text>
            </Pressable>
            <Pressable style={styles.button}>
                <Text style={styles.text}>Quiz</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        gap: 50,
        zIndex: 1
    },
    button: {
        padding: 10,
        backgroundColor: "#000000",
        width: 250,
        borderColor: "#ffffff",
        borderWidth: 1,
        borderRadius: 10,
    },
    text: {
        fontSize: 20,
        padding: 10,
        fontWeight: 'bold',
        color: '#ffffff',
        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign: "center",
    }
})
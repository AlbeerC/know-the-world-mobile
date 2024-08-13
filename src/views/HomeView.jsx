import { View, Text, ImageBackground, StyleSheet, Dimensions } from "react-native"
import { HomeButtons } from "../components/HomeButtons"

export default function HomeView () {

    const bgImage = require("../../assets/map-bg.jpg")

    return (
        <View style={styles.container}>
            <ImageBackground source={bgImage} style={styles.image}>
                <View style={styles.overlay} />
                <HomeButtons />
            </ImageBackground>
        </View>
    )
}

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        justifyContent: 'center',
        resizeMode: 'cover',
        width: width,
        height: height,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject, // Cubre toda el área de ImageBackground
        backgroundColor: '#00000099',
    },
})
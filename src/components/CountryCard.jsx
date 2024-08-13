import { View, Image, StyleSheet, Text, Dimensions } from "react-native"
import numeral from "numeral";

export default function CountryCard ( {flag, name, alt, population, languages, currencies, capital, area} ) {

    return (
        <View style={styles.container}>
            <Image source={{uri: flag}} alt={alt} style={styles.image} />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.text}>
                Capital: <Text style={styles.boldText}>{capital}</Text>
            </Text>
            <Text style={styles.text}>
                Idioma: <Text style={styles.boldText}>{languages}</Text>
            </Text>
            <Text style={styles.text}>
                Población: <Text style={styles.boldText}>{numeral(population).format(0.0)}</Text>
            </Text>
            <Text style={styles.text}>
                Área: <Text style={styles.boldText}>{numeral(area).format(0,0)} km²</Text>
            </Text>
            <Text style={styles.text}>
                Moneda: <Text style={styles.boldText}>{currencies[0].name} {currencies[0].symbol}</Text>
            </Text>
        </View>
    )
}

// Obtenemos el ancho de la pantalla para calcular el tamaño de las tarjetas
const { width } = Dimensions.get('window');
const cardWidth = width / 2 - 20; // 20 es el margen entre las tarjetas

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#eee",
        width: cardWidth,
        borderColor: "#000000",
        borderWidth: 1,
        margin: 10,
        padding: 5,
    },
    image: {
        width: 150,
        height: 100,
        objectFit: "contain",
        marginHorizontal: "auto",
        marginTop: "10"
    },
    name: {
        fontSize: 22,
        textAlign: "center",
        marginBottom: 10,
        fontWeight: "bold",
        marginVertical: 5,
    },
    text: {
        fontSize: 13,
        padding: 3,
    },
    boldText: {
        fontWeight: "bold"
    }
}) 
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native"

export default function CountryFilters ( { search,setSearch, originalData, data, setData, activeFilter, setActiveFilter } ) {

    const handleSearch = (text) => {
        setSearch(text)
        filter(text)
    }

    const filter = (searchTerm) => {
        const searchResults = originalData.filter((element) => {
            if(element.name.common.toString().toLowerCase().includes(searchTerm.toLowerCase())) {
                return element
            }
        })
        setData(searchResults)
    }

    const sortByPopulation = () => {
        const sortedData = [...data].sort((a, b) => b.population - a.population)
        setData(sortedData)
        setActiveFilter("population")
    }
    
    const sortByArea = () => {
        const sortedData = [...data].sort((a, b) => b.area - a.area)
        setData(sortedData)
        setActiveFilter("area")
    }

    const sortByName = () => {
        setData(originalData)
        setActiveFilter("name")
    }

    const buttonStyle = (key) => {
        return activeFilter === key ? styles.active : null
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Buscar país..." value={search} onChangeText={handleSearch}>
            </TextInput>
            <View style={styles.buttonContainer}>
                <Pressable onPress={sortByName} style={[buttonStyle("name"), styles.button]}>
                    <Text style={styles.text}>Nombre</Text>
                </Pressable>
                <Pressable onPress={sortByArea} style={[buttonStyle("area"), styles.button]}>
                    <Text style={styles.text}>Área (km²)</Text>
                </Pressable>
                <Pressable onPress={sortByPopulation} style={[buttonStyle("population"), styles.button]}>
                    <Text style={styles.text}>Población</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        borderBottomColor: "#000000",
        borderBottomWidth: 1,
    },
    input: {
        borderColor: "#000000",
        borderWidth: 1,
        padding: 5,
        margin: 5,
        width: "72%",
        marginHorizontal: "auto"
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: "auto",
        gap: 15,
        marginVertical: 10,
    },
    button: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        margin: 5,
        borderColor: "#000000",
        borderWidth: 1,
    },
    active: {
        backgroundColor: "#1a1a1a31"
    },
    text: {
        fontWeight: "bold"
    }
})
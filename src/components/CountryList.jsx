import { View, FlatList, StyleSheet } from "react-native"
import CountryCard from "./CountryCard"
import { getCapital, getCurrencies, getLanguages } from "../helpers/countryProperties"

export default function CountryList ( {data} ) {

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.name.common}
            numColumns={2}
            columnWrapperStyle={styles.columnWrapper}
            renderItem={({ item }) => (
            <CountryCard
                name={item.name.common}
                capital={getCapital(item)}
                currencies={getCurrencies(item)}
                languages={getLanguages(item)}
                flag={item.flags.png}
                alt={item.flags.alt}
                population={item.population}
                area={item.area} 
                /> 
            )}
        />  
    )
}

const styles = StyleSheet.create({
    columnWrapper: {
        justifyContent: "center",
    }
})
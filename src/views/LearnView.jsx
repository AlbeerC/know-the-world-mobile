import { useEffect, useState } from "react"
import { View, Text, FlatList } from "react-native"
import CountryList from "../components/CountryList"
import CountryFilters from "../components/CountryFilters"

export default function LearnView () {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [originalData, setOriginalData] = useState([])
    const [search, setSearch] = useState("")
    const [activeFilter, setActiveFilter] = useState("name")

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((response) => response.json())
            .then((data) => {
                const sortedData = data.sort((a, b) => a.name.common.localeCompare(b.name.common))
                setData(sortedData)
                setOriginalData(sortedData)
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [])

    if (loading) { return <Text>Loading...</Text> }

    return (
        <View>
            <CountryFilters 
                search={search}
                setSearch={setSearch}
                originalData={originalData}
                data={data}
                setData={setData}
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
            />
            <CountryList data={data} />
        </View>
    )
}
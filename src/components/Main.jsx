import { View } from "react-native"
import Navbar from "./Navbar"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import HomeView from "../views/HomeView"
import LearnView from "../views/LearnView"


export default function Main () {

    const insets = useSafeAreaInsets()
    
    return (
        <View style={{paddingTop: insets.top, paddingBottom: insets.bottom}}>
            <Navbar />
            <HomeView />
{/*             <LearnView /> */}
        </View>
    )
}
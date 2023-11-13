import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constant";


const style = StyleSheet.create({
    container:{
        width:"100%",
        backgroundColor:COLORS.fortary,
        // shadowRadius:5,
        // shadowColor:COLORS.secondary
        borderBottomWidth: 2,
        borderColor:COLORS.secondary
    },
    wrapName:{
        backgroundColor:COLORS.fortary,
        padding: 10,
    },
    name: {
        fontWeight: "bold",
        fontSize: SIZES.large,
        color:COLORS.white
    },
    title: {
        fontWeight: "bold",
        color:COLORS.white,
        fontSize:18
    },
    username:{
        fontSize:SIZES.medium,
        color:COLORS.white
    },
    wrapPost:{
        margin: 5,
        padding: 10,
    },
    post: {
       color:COLORS.white,
        marginVertical:10
    },
})

export default style
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../../constant";



const style = StyleSheet.create({
    container:{
        width:"100%",
        backgroundColor:COLORS.secondary
    },
    wrapName:{
        backgroundColor:COLORS.secondary,
        padding: 10,
        borderTopRightRadius:SIZES.medium,
        borderTopLeftRadius:SIZES.medium
    },
    name: {
        fontWeight: "bold",
        fontSize: SIZES.large,
        color:COLORS.white
    },
    username:{
        fontSize:SIZES.medium,
        color:COLORS.white
    },
})

export default style
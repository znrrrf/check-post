import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constant";


const style = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: COLORS.fortary,
        paddingVertical: 30
    },
    title: {
        color: COLORS.white,
        fontWeight: "bold",
        fontSize: SIZES.large
    },
    contactWrap:{
        width:"100%",
        padding:10
    },
    contact:{
        color:COLORS.white
    },
    contactCon:{
        padding: 10,
        borderColor:COLORS.primary,
        borderWidth:1,
        borderRadius:SIZES.large,
        justifyContent:"center",
        alignItems:"center"
    }
})

export default style
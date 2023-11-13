import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constant";


const style = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: COLORS.fortary,
        paddingTop: 30
    },
    textTitle: {
        color: COLORS.white,
        fontWeight: "bold",
        fontSize: SIZES.large
    },
    wrap: {
        width: "100%",
        padding: 5,
        justifyContent:"center",
        alignItems:"center"
    },
})

export default style
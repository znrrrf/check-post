import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constant";

const style = StyleSheet.create({
    container: {
        width: '100%',
        gap:10
    },
    cardsContainer: {
        marginTop: SIZES.medium,
        gap: SIZES.small,
    },
    title:{
        fontWeight:"bold",
        fontSize:SIZES.large
    },
    showMore:{
        backgroundColor:COLORS.fortary,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:SIZES.medium,
        padding:10,
    },
    showMoreText:{
        color:COLORS.white,
        fontWeight:"bold"
    }
})

export default style
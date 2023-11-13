import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constant";


const style = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: COLORS.fortary,
        borderTopStartRadius: SIZES.large,
        borderTopEndRadius: SIZES.large
    },
    wrap: {
        padding: 10,
    },
    textTitle: {
        color: COLORS.white,
        fontWeight: "bold",
        fontSize: SIZES.large
    },
    head: {
        color: COLORS.white,
        fontWeight: "bold",
        fontSize: 15
    },
    description: {
        color: COLORS.white,
        textAlign: 'justify'
    },
    skillWrap: {
        flexDirection: "row"
    },
    skillContainer: {

        paddingHorizontal: 8,
        paddingVertical:5,
        borderRadius:SIZES.large,
        borderColor:COLORS.secondary,
        borderWidth:2
        // borderWidth: 1,
        // borderColor: COLORS.white,
        // padding: 2,
        // borderRadius:SIZES.large
    },
    skill: {
        color: COLORS.white
    }
})

export default style
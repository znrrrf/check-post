import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constant";

const style = StyleSheet.create({
    btnContainer: {
        width: 40,
        height: 40,
        backgroundColor: COLORS.fortary,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        margin:SIZES.xSmall
    },
    btnImage: { 
        width: '60%',
        height: "60%",
        borderRadius: 10
    }
})

export default style
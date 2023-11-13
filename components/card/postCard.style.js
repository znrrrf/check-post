import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constant";


const style = StyleSheet.create({
    container: {
        width: "100%",
    },
    cardContainer: {
        width: "100%",
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.medium,
        // shadowRadius: 5,
        // shadowColor:COLORS.secondary
        borderWidth:1,
        borderColor:COLORS.secondary
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
    },
    title:{
        fontWeight: "bold",
    },
    username:{
        fontSize:SIZES.medium,
    },
    wrapPost:{
        margin: 5,
        padding: 10,
    },
    post: {
        height:60,
        marginVertical:10,
    },
    detail: {
        width:"100%",
        height:"auto",
        justifyContent:"start",
        alignItems:"center",
        flexDirection:"row",
        padding: 10,
    },
    commentImg:{
        height:"90%",
    }
})

export default style
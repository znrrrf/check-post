import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../../constant";


const style = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        padding: 10,
        width:200,
       
        borderRadius:SIZES.large
    },
    titleWrap: {
        alignItems: "center",
        padding: 5
    },
    title: {
        fontWeight: "bold"
    },
    imgWrap: {
        borderWidth: 1,
        borderRadius: SIZES.medium,
        borderColor:COLORS.secondary,
        justifyContent:"center",
        alignItems:"center"
    },
    img: {
        borderRadius: SIZES.medium,
        width: 150,
    },
    description:{

    },
    wrapDescription:{
        marginTop:5,
        padding: 5,
    },
    visitBtn:{
        backgroundColor:COLORS.fortary,
        justifyContent:"center",
        alignItems:"center",
        padding:5,
        borderRadius:SIZES.large
    },
    visit:{
        color:COLORS.white
    }
})

export default style
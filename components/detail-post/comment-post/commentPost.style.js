import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constant";



const style = StyleSheet.create({
    container:{
        width:"100%"
    },
    commentCount:{
        marginTop:5,
        marginHorizontal:5
    },
    commentWrap:{
        padding:10,
        marginTop:10,
        marginHorizontal:10,
        backgroundColor:COLORS.white,
        gap:5,
        borderRadius:SIZES.small
        
    },
    name:{
        fontWeight:"bold"
    }
})

export default style
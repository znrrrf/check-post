import { StyleSheet } from "react-native";
import { COLORS } from "../../../constant";


const style = StyleSheet.create({
    btnContainer:{
        width: 40,
        height: 40,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:COLORS.fortary,
        borderRadius:10
    },
    imgBtn:{
        width:'70%',
        height:'70%',
        tintColor:COLORS.white
    }
})

export default style
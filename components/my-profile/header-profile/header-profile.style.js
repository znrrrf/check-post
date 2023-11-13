import { StyleSheet } from "react-native";
import { COLORS } from "../../../constant";


const style = StyleSheet.create({
    container: {
        width:'100%',
        padding:5,
        gap:10,
        alignItems:"center",
        marginTop: 20
    },
    imgProfile: {
        width:120,
        height: 120,
        borderRadius:100
    },
    wrapDetail:{
        // backgroundColor: COLORS.secondary,
        width:"100%",
        flex: 1,
        alignItems:"center"
    },
    name:{
        fontWeight:"bold",
        fontSize: 20
    }
})

export default style
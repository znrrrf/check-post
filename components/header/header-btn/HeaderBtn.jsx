import { View, Text, Image, TouchableOpacity } from "react-native"
import style from "./header-btn"


const HeaderBtn = ({ iconUrl, handlePress }) => {
    return(
        <TouchableOpacity style={style.btnContainer} onPress={handlePress}>
            <Image source={iconUrl} style={style.imgBtn} />
        </TouchableOpacity>
    )
}

export default HeaderBtn
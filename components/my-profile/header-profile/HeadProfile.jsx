import { View, Text, Image } from "react-native"

import style from "./header-profile.style"
const HeadProfile = ({ profilePic }) => {
    return (
        <View style={style.container}>

            <Image source={profilePic} resizeMode="contain" style={style.imgProfile} />
            <View style={style.wrapDetail} >
                <Text style={style.name}>
                    Zainur Rouf
                </Text>
                <Text>
                   Full-Stack Web Developer
                </Text>
            </View>

        </View>
    )
}

export default HeadProfile
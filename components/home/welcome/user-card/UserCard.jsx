import { View, Text, TouchableOpacity } from "react-native"

import style from "./userCard.style"
const UserCard = ({ item }) => {

    console.log(item);

    return(
        <TouchableOpacity style={style.container}>
            <Text>
                {item?.item?.username ?? "no data"}
            </Text>
        </TouchableOpacity>
    )
}

export default UserCard
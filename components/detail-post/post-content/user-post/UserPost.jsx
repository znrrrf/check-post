import { View, Text } from "react-native"

import style from "../postContent.style"
import useFetch from "../../../../hook/useFetch"
const UserPost = ({ dataProps }) => {

    const { data, error, isLoading, refetch } = useFetch('users', dataProps, null)
    console.log({dataProps});

    return (
        <View style={style.wrapName}>
            <Text style={style.name}>{data?.name ?? "no data"}</Text>
            <Text style={style.username}>@{data?.username ?? 'no data'}</Text>
        </View>
    )
}

export default UserPost
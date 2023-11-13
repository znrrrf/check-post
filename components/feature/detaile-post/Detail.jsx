import { View, Text, Image } from "react-native"
import { icons } from "../../../constant"

import style from "./detail.style"
import useFetch from "../../../hook/useFetch"

const Detail = ({ post }) => {

    const { data, error, isLoading, refetch } = useFetch(`posts/${post.id}/comments`, null, null)


    return (
        <View style={style.detail}>
            <Image source={icons.comment} style={style.commentImg} resizeMode="contain" />
            <Text>
                {data.length ?? 0}
            </Text>
        </View>
    )
}

export default Detail
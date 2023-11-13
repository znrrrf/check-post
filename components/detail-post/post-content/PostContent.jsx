import { View, Text, RefreshControl, } from "react-native"
import useFetch from "../../../hook/useFetch"

import style from "./postContent.style"
import UserPost from "./user-post/UserPost"
import { useCallback, useState } from "react"
const PostContent = ({ id, dataProps }) => {

    const [refreshing, setRefreshing] = useState(false)
    const { data, isLoading, error, refetch } = useFetch(`users`, dataProps?.userId, null)
    console.log({ dataProps });

    const onRefresh = useCallback(() => {
        setRefreshing(true)
        refetch()
        setRefreshing(false)
    }, [])
    return (
        <View
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            style={style.container}
        >
            <View style={style.wrapName}>
                <Text style={style.name}>{data?.name ?? "no data"}</Text>
                <Text style={style.username}>@{data?.username ?? 'no data'}</Text>
            </View>
            <View style={style.wrapPost}>

                <Text style={style.title}>
                    {dataProps.title}
                </Text>
                <Text style={style.post} >
                    {dataProps.body}
                </Text>
            </View>

        </View>
    )
}

export default PostContent
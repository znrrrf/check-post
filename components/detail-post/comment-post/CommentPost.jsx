import { View, Text, ActivityIndicator } from "react-native"
import useFetch from "../../../hook/useFetch"

import style from "./commentPost.style"
import OneComment from "./one-comment/OneComment"
import { COLORS } from "../../../constant"
const CommentPost = ({ id, dataProps }) => {


    const { data, error, isloading, refetch } = useFetch(`posts/${id}/comments`)
    console.log({ data });

    return (
        <View style={style.container}>
            {/* <Text style={style.commentCount}>
                Comment {data?.length ?? 0}
            </Text> */}
            {!data || data.length === 0 || isloading ? (
                <ActivityIndicator size='large' color={COLORS.tertiary} />
            ) : error ? (
                <Text>Error</Text>
            ) : data?.map((comment) => (
                <OneComment key={comment.id} comment={comment} dataProps={data} />
            ))}
        </View>
    )
}

export default CommentPost
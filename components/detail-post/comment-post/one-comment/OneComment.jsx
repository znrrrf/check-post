import { View, Text } from "react-native"
import style from "../commentPost.style"
import useFetch from "../../../../hook/useFetch"


const OneComment = ({ comment, dataProps }) => {
    console.log({comment});
    const {data, error, isLoading, refetch} = useFetch(`users?email=${comment.email}`, null, null)
    console.log({data});

    return (
        <View style={style.commentWrap}>
            <Text style={style.name}>{data.name ?? comment.email}</Text>
            <Text>
                {comment.body}
            </Text>

        </View>
    )
}

export default OneComment
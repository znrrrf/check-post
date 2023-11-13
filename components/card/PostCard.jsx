import { View, Text, TouchableOpacity, Image } from "react-native"
import style from './postCard.style'
import useFetch from "../../hook/useFetch"
import { icons } from "../../constant"
import Detail from "../feature/detaile-post/Detail"
const PostCard = ({ post, handleNavigate }) => {
    const { data, error, isLoading, refetch } = useFetch('users', post.userId, null)

    return (
        <TouchableOpacity style={style.container} onPress={handleNavigate}>
            <View style={style.cardContainer}>
                <View style={style.wrapName}>
                    <Text style={style.name}>{data.name ?? "no data"}</Text>
                    <Text style={style.username}>@{data.username ?? "no data"}</Text>
                </View>

                <View style={style.wrapPost}>
                   
                    <Text style={style.title}>
                      {post.title}
                    </Text>
                    <Text style={style.post} numberOfLines={3} >
                        {post.body}
                    </Text>
                </View>

                <Detail post={post}  />

            </View>
        </TouchableOpacity>
    )
}

export default PostCard
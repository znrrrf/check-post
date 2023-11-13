import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native"
import style from "./post.style"
import useFetch from "../../../hook/useFetch"
import PostCard from "../../card/PostCard"
import { useRouter } from "expo-router"
import { COLORS } from "../../../constant"
import { useEffect, useState } from "react"
import { FlatList } from "react-native-gesture-handler"
import axios from "axios"

const Post = () => {

    const [page, setPage] = useState({
        start: 0,
        end: 5
    })

    const [dataLength, setDataLength] = useState(0)
    const [load, setLoad] = useState(false)
    const [dataPost, setDataPost] = useState([])

    const { data, error, isLoading, refetch } = useFetch('posts', null, { start: 0, end: 5 })
    const router = useRouter()

    const count = useFetch(`posts`, null, null)

    const infinitTrigger = async (e) => {
        e.preventDefault()
        const start = page.start + 5
        const end = page.end
        const options = {
            method: 'GET',
            url: `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${end}`,
        }
        try {
            setLoad(true)

            const response = await axios.request(options)
            const data = response.data
            console.log(data);
            setDataPost((prev) => [...prev, ...data])
            setPage({
                start: dataPost.length + 5,
                end: 5
            })
            setLoad(false)

        } catch (error) {
            console.log(error);
        }




    }


    useEffect(() => {
        if (data) {
            setPage({
                start: 0,
                end: 5
            })
            setDataPost(data)
            console.log({ data });
        }


        console.log({ start: dataLength, end: page.end });

    }, [data])

    useEffect(() => {
        console.log({ dataPost, dataLength });
    }, [dataPost, dataLength])

    return (
        <View style={style.container}>
            {dataPost.length === 0 || !dataPost ? (
                <ActivityIndicator size="large" color={COLORS.fortary} />
            ) : error === true ? (
                <Text>Something went wrong</Text>
            ) : dataPost.length > 0 ? (
                dataPost?.map(post => (
                    <PostCard key={post.id} post={post} handleNavigate={() => router.push(`detaile-post/${post.id}`)} />
                ))
                // <FlatList
                //     data={dataPost}
                //     renderItem={({ item }) => (
                //         <PostCard post={item} handleNavigate={() => router.push(`detaile-post/${item.id}`)} />
                //     )}
                //     keyExtractor={(item, index) => index}
                // // contentContainerStyle={{ padding: SIZES.medium, rowGap: SIZES.medium }}
                // />
            ) : (
                <Text>no data</Text>
            )}

            {isLoading || load ? (
                <ActivityIndicator size="large" color={COLORS.fortary} />
            ) : null}

            {count.data && count.data.length > page.end ? (
                <TouchableOpacity onPress={(e) => infinitTrigger(e)}
                    style={style.showMore}>
                    <Text style={style.showMoreText}>
                        Show More (5)
                    </Text>
                </TouchableOpacity>
            ) : null}


        </View >
    )
}

export default Post     
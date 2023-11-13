import { View, Text, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl } from "react-native"
import { COLORS, SIZES, icons } from "../../constant"
import { Stack, useRouter } from "expo-router"
import { useRoute } from '@react-navigation/native'
import useFetch from "../../hook/useFetch"
import { useCallback, useState } from "react"
import PostContent from "../../components/detail-post/post-content/PostContent"
import CommentPost from "../../components/detail-post/comment-post/CommentPost"
import HeaderBtn from "../../components/header/header-btn/HeaderBtn"

const DetailPost = () => {

    const [refreshing, setRefreshing] = useState(false)
    const router = useRouter()
    const route = useRoute()
    const { id } = route.params

    const { data, isLoading, error, refetch } = useFetch(`posts/${id}`, null, null)

    const onRefresh = useCallback(() => {
        setRefreshing(true)
        refetch()
        setRefreshing(false)
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.secondary },
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerLeft: () => (
                        <HeaderBtn iconUrl={icons.left} handlePress={() => router.back()} />
                    ),
                    headerTitle: ''
                }}
            />

            <ScrollView
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            >

                {isLoading || data.length === 0 || !data || !id ? (
                    <ActivityIndicator size='large' color={COLORS.tertiary} />
                ) : error ? (
                    <Text>Something went wrong</Text>
                ) : (
                    <View style={{ paddingBottom: 100 }} >
                        <PostContent id={id} dataProps={data} />
                        <CommentPost id={id} dataProps={data} />
                    </View>
                )}

            </ScrollView>

        </SafeAreaView>
    )
}

export default DetailPost
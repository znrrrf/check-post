import { useState } from "react"
import { View, Text } from "react-native"
import useFetch from "../../../hook/useFetch";


const Random = () => {

    const { data, error, isLoading, refetch } = useFetch('users')

    return (
        <View>
            <Text>
                random
            </Text>
        </View>
    )
}

export default Random
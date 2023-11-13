import { View, Text, Image, TextInput, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'
import style from './welcome.style'
// import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { COLORS, SIZES, icons } from '../../../constant'
import { useEffect, useState } from 'react'
import useFetch from '../../../hook/useFetch'
import UserCard from './user-card/UserCard'

const Welcome = () => {


    const { data, error, isLoading, refetch } = useFetch('users?_start=0&_limit=5', null, null)

  

    return (
        <View>
            <View style={style.container}>
                <Text>Maybe you know</Text>
            </View>

            <View style={style.cardContainer}>
                {isLoading || !data || data.length === 0 ? (
                    <ActivityIndicator size="large" color={COLORS.primary} />
                ) : error ? (
                    <Text>Error</Text>
                ) : (
                   
                    <FlatList
                        data={data}
                        renderItem={(item) => (
                            <UserCard item={item} />
                        )}
                        keyExtractor={item => item?.id}
                        horizontal
                        contentContainerStyle={{columnGap: 5, borderRadius: SIZES.large}}
                        showsHorizontalScrollIndicator={false}
                    />
                )}
            </View>

            {/* <View style={style.searchContainer}>
                <View style={style.searchWrapper}>
                    <TextInput style={style.searchInput} placeholder='search someone here ...' onChangeText={(text) => setSearch(text)} />
                </View>
                <TouchableOpacity style={style.searchBtn} onPress={() => {} }>
                    <Image
                        source={icons.search}
                        resizeMode="contain"
                        style={style.searchBtnImage}
                    />

                </TouchableOpacity>
            </View> */}


        </View>
    )
}

export default Welcome
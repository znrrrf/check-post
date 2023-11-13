import { View, Text, ScrollView, SafeAreaView } from "react-native";
import useFetch from '../hook/useFetch'
import { Stack, useRouter } from "expo-router";
import { COLORS, SIZES } from "../constant";
import ProfileBtn from "../components/header/profle-btn/ProfileBtn";
import Welcome from "../components/home/welcome/Welcome";
import { useState } from "react";
import Random from "../components/home/random/Random";
import Post from "../components/home/post/Post";

const Home = () => {
    const router = useRouter()



    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.secondary },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <View>
                            <Text style={{fontWeight:"bold", fontSize:SIZES.large}}>
                                Home
                            </Text>
                        </View>
                    ),
                    headerRight: () => (
                        <ProfileBtn />
                    ),
                    headerTitle: ''
                }}
            />


            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex: 1, padding:SIZES.medium, gap:10}}>
                    {/* <Welcome /> */}
                    <Post  />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home
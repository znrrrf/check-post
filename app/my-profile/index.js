import { Stack, useRouter } from "expo-router"
import { View, Text, SafeAreaView, ScrollView } from "react-native"
import { COLORS, SIZES, icons } from "../../constant"
import HeaderBtn from "../../components/header/header-btn/HeaderBtn"
import HeadProfile from "../../components/my-profile/header-profile/HeadProfile"
import { images } from '../../constant'
import About from "../../components/my-profile/about/About"
import Project from "../../components/my-profile/project/Project"
import Contact from "../../components/my-profile/contact/Contact"

const MyProfile = () => {

  const router = useRouter()

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

      <ScrollView showsVerticalScrollIndicator={false}>
        <HeadProfile profilePic={images.profile} />
        <About />
        <Project />
        <Contact />
      </ScrollView>


    </SafeAreaView>
  )
}

export default MyProfile
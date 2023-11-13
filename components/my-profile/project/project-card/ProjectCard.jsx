import { View, Text, Image, TouchableOpacity } from "react-native";
import style from "./projectCard.style";
import { useRouter } from "expo-router";


const ProjectCard = ({ item }) => {

    const router = useRouter()

    return (
        <View style={style.container}>
            <View style={style.titleWrap}>
                <Text style={style.title}>
                    {item.title}
                </Text>
            </View>
            <View style={style.imgWrap}>
                <Image resizeMode="contain" style={style.img} source={item.pic} />
            </View>
            <View style={style.wrapDescription}>
                <Text style={style.description}>
                    {item.description}
                </Text>
            </View>
            <TouchableOpacity style={style.visitBtn} onPress={() => router.replace("https://portofolio-website-rust.vercel.app/")}>
                <Text style={style.visit}>
                    Visit
                </Text>

            </TouchableOpacity>
        </View>
    )
}

export default ProjectCard
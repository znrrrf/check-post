import { View, Text, FlatList } from "react-native";
import { images } from "../../../constant";
import style from "./project.style";
import ProjectCard from "./project-card/ProjectCard";
const Project = () => {

    const projects = [
        {
            title: "Galaxy Web Store",
            description: "A website for a multi-warehouse store that spread across of indonesia",
            pic: images.galaxy
        }
    ]

    return (
        <View style={style.container}>
            <View style={style.wrap}>
                <Text style={style.textTitle}>
                    Project
                </Text>
            </View>
            <View style={style.wrap}>
            <ProjectCard item={projects[0]} />
                {/* <FlatList
                    data={projects}
                    renderItem={({ item }) => (
                        <ProjectCard item={item} />
                    )}
                    keyExtractor={item => item?.id}
                    horizontal
                    contentContainerStyle={{ columnGap: 5 }}
                    showsHorizontalScrollIndicator={false}
                /> */}
            </View>
        </View>
    )
}

export default Project
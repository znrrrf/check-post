import { View, Text, Image, FlatList } from "react-native";
import style from "./about.style";
import { COLORS, SIZES } from "../../../constant";


const About = () => {

    const skills = ["HTML", "CSS", "React Js", "Redux", "JavaScript", "Express Js", "Node Js", "Tailwind", "Chakra-Ui", "MySQL", "Sequelize"]

    return (
        <View style={style.container}>
            <View style={style.wrap}>
                <Text style={style.textTitle}>
                    About me
                </Text>
            </View>

            <View style={style.wrap}>
                <Text style={style.head}>
                    Halo,
                </Text>
                <Text style={style.description}>
                    I'm a web developer graduated from bootcamp of Purwadhika Digital Technology School who experienced in solving problems and creating a website to meet the requirements, with minimum bugs, and accordance with industry best practices as a team work on both frontend and backend. Ready to move, work on office or remote
                </Text>
            </View>

            <View style={style.wrap}>
                <Text style={style.head}>
                    My Skill
                </Text>
                <View style={{padding: 2, width:"100%"}}>
                    <FlatList
                        data={skills}
                        renderItem={({ item }) => (
                            <View style={style.skillContainer}>
                                <Text style={style.skill}>
                                    {item}
                                </Text>
                            </View>

                        )}
                        keyExtractor={item => item?.id}
                        horizontal
                        contentContainerStyle={{ columnGap: 5 }}
                        showsHorizontalScrollIndicator={false}
                    />

                </View>




            </View>
           


        </View >
    )
}

export default About
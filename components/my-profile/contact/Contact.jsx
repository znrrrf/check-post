import { View, Text, FlatList } from "react-native";

import style from "./contact.style";
const Contact = () => {
  const contacts = [
    {
      id: 1,
      title: "email",
      cont: "zainurrouf4@gmail.com",
    },
    {
      id: 2,
      title: "WhatsApp",
      cont: "+6281546413467",
    },
    {
      id: 3,
      title: "LinkIn",
      cont: "www.linkedin.com/in/zainur-rouf-2822a4263",
    },
  ];

  return (
    <View style={style.container}>
      <Text style={style.title}>Contact</Text>

      <View style={style.contactWrap}>
        <FlatList
          data={contacts}
          renderItem={({ item }) => (
            <View style={style.contactCon}>
              <Text style={style.contact}>{item.cont}</Text>
            </View>
          )}
          keyExtractor={(item) => item?.id}
          horizontal
          contentContainerStyle={{ columnGap: 5 }}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Contact;

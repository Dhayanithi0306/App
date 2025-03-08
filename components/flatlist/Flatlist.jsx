import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { useTheme } from "../ThemeContext";
import { styles } from "../Style";

function List() {
  const { isDarkMode } = useTheme();
  const style = styles(isDarkMode);

  const DATA = [
    { id: "1", title: "Notifications" },
    { id: "2", title: "Language" },
    { id: "3", title: "Privacy" }
  ];

  const Item = ({ title }) => (
    <>
      <TouchableOpacity>
        <View style={style.item}>
          <Text style={style.listText}>{title}</Text>
          <Text style={style.arrow}>{">"}</Text>
        </View>
      </TouchableOpacity>
      <View style={style.line}></View>
    </>
  );

  return (
    <View style={[style.box1, { height: 300 }]}> 
      <Text style={[style.text2, { marginBottom: 30 }]}>Preference</Text>
      <FlatList 
        data={DATA} 
        keyExtractor={(item) => item.id} 
        renderItem={({ item }) => <Item title={item.title} />} 
      />
    </View>
  );
}

export default List;

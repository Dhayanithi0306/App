import { SectionList, View, Text, TouchableOpacity } from "react-native";
import Datas from "./Section.json";
import { useTheme } from "../ThemeContext";
import { styles } from "../Style";

function Section() {
  const { isDarkMode } = useTheme();
  const style = styles(isDarkMode);
  
  return (
    <View style={style.box1}>
      <SectionList
        sections={Datas.data} 
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <>
            <TouchableOpacity>
              <View style={style.item}>
                <Text style={style.listText}>{item}</Text>
                <Text style={style.arrow}>{">"}</Text>      
              </View>
            </TouchableOpacity>
            <View style={style.line}></View>
          </>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={[style.text2, { marginBottom: 30 }]}>{section.Title}</Text>
        )}
      />
    </View>
  );
}

export default Section;

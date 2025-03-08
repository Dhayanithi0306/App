import { Text, TextInput, Button, View, Switch, Modal, Alert, Pressable, ActivityIndicator, Image } from "react-native";
import { styles } from "../Style.jsx";
import ProfileImage from "../image/ProfileImage.jsx";
import { useState } from "react";
import { useTheme } from "../ThemeContext.jsx"; 

export default function Profile() {
  const { isDarkMode, toggleTheme } = useTheme(); 
  const style = styles(isDarkMode); // Pass isDarkMode here
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState();

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setModalVisible(true);
    }, 2000);
  };

  return (
    <>
      <ProfileImage name={text} />
      <View style={style.box1}>
        <Text style={style.text2}>Profile Information</Text>
        <Text style={style.box1text}>Name</Text>
        <TextInput style={style.input} placeholder="Enter" placeholderTextColor={isDarkMode ? "#bbb" : "#666"} onChangeText={(text) => setText(text)} />
        <Text style={style.box1text}>Email</Text>
        <TextInput style={style.input} placeholder="Enter" placeholderTextColor={isDarkMode ? "#bbb" : "#666"} />
        <View style={style.switch}>
          <Text style={style.box1text}>Dark Mode</Text>
          <Switch value={isDarkMode} onValueChange={toggleTheme} />
        </View>
        <View style={style.line}></View>
        <Pressable android_ripple={{ color: "blue", borderless: false }} style={style.pressable} onPress={handleSubmit}>
          {loading ? <ActivityIndicator size="large" color="blue" /> : <Text style={style.presstext}>SAVE CHANGES</Text>}
        </Pressable>
      </View>
      <Modal animation="slide" transparent={true} visible={modalVisible} onRequestClose={() => { Alert.alert("Modal has been closed.!"); setModalVisible(!modalVisible); }}>
        <View style={style.overlay}>
          <View style={style.box2}>
            <Image source={require("../photos/tick.png")} style={style.modalImage} />
            <Text style={style.modaltext}>Success!</Text>
            <Text style={style.modaltext2}>Changes saved successfully!</Text>
            <Pressable android_ripple={{ color: "blue", borderless: true }} style={style.pressable2} onPress={() => setModalVisible(!modalVisible)}>
              <Text style={style.presstext}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
}

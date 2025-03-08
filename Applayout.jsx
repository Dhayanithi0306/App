import React from "react";
import { SafeAreaView, KeyboardAvoidingView, ScrollView, View, FlatList, StatusBar, Pressable, Alert, Text } from "react-native";
import { styles } from "./components/Style.jsx";
import Profile from "./components/profile/Profile.jsx";
import List from "./components/flatlist/Flatlist.jsx";
import Section from "./components/section/Section.jsx";
import { ThemeProvider, useTheme } from "./components/ThemeContext.jsx"; 

export default function Applayout() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}

function MainApp() {
  const { isDarkMode } = useTheme();
  const style = styles(isDarkMode); 

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <SafeAreaView style={{ flex: 1, backgroundColor: isDarkMode ? "#121212" : "#fff" }}>
        <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} backgroundColor={isDarkMode ? "#121212" : "#f9c2ff"} hidden={false} />
        <ScrollView style={{ flex: 1 }} keyboardShouldPersistTaps="handled">
          <View style={style.body}>
            <FlatList ListHeaderComponent={<Profile />} ListFooterComponent={<List />} data={[]} renderItem={null} />
            <Section />
            <Pressable
              style={({ pressed }) => [
                style.log,
                {
                  backgroundColor: pressed ? "rgba(245, 156, 14, 0.91)" : "rgba(14, 106, 245, 0.91)",
                  borderRadius: 5,
                },
              ]}
              onPress={() => Alert.alert("Logged Out", "Thank You")}
            >
              <Text style={style.text4}>Logout</Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

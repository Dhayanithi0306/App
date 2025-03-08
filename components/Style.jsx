import { StyleSheet } from "react-native";

export const styles = (isDarkMode) => {
    return StyleSheet.create({
        key: { flex: 1 },
        body: {
            backgroundColor: isDarkMode ? "#121212" : "#F5F5F5",
        },
        background: {
            width: 385,
            height: 210,
            alignItems: 'center',
        },
        profile: {
            width: 90,
            height: 90,
            borderRadius: 260,
            marginTop: 40
        },
        text: {
            fontSize: 25,
            fontWeight: "bold",
            marginTop: 10,
            color: isDarkMode ? "#fff" : "#000",
        },
        text2: {
            fontSize: 17,
            color: isDarkMode ? "#fff" : "#333333",
            fontWeight: "bold"
        },
        text4: {
            fontSize: 17,
            color: isDarkMode ? "#fff" : "#000",
            fontWeight: "bold"
        },
        box1: {
            backgroundColor: isDarkMode ? "#1E1E1E" : "#FFFFFF",
            margin: 15,
            padding: 15,
            borderRadius: 5,
            elevation: 5
        },
        box1text: {
            color: isDarkMode ? "#BBBBBB" : "#555555",
            marginVertical: 15,
            fontWeight: "bold",
        },
        input: {
            width: 325,
            height: 50,
            backgroundColor: isDarkMode ? "#333" : "#FFF",
            borderColor: isDarkMode ? "#555" : "#333",
            elevation: 2,
            borderRadius: 10,
            paddingHorizontal: 10,
            fontSize: 16,
            color: isDarkMode ? "#fff" : "#000"
        },
        switch: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        },
        line: {
            borderBottomWidth: 2,
            borderBottomColor: isDarkMode ? "#444" : "#EEEEEE",
            marginVertical: 8
        },
        pressable: {
            width: 325,
            height: 40,
            backgroundColor: "rgba(14, 106, 245, 0.91)",
            borderRadius: 3,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 15
        },
        presstext: {
            fontSize: 15,
            fontWeight: "bold",
            padding: 1,
            color: "#fff"
        },
        box2: {
            marginVertical: 250,
            marginHorizontal: 50,
            padding: 20,
            backgroundColor: isDarkMode ? "#222" : "white",
            alignItems: "center",
            borderRadius: 5,
            color: isDarkMode ? "#fff" : "#000",
            elevation: 3
        },
        overlay: {
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
        },
        pressable2: {
            width: 150,
            height: 40,
            backgroundColor: "rgba(14, 106, 245, 0.91)",
            borderRadius: 3,
            justifyContent: "center",
            alignItems: "center",
        },
        modaltext: {
            fontSize: 25,
            fontWeight: "bold",
            marginTop: 10,
            color: isDarkMode ? "#fff" : "#000"
        },
        modaltext2: {
            fontSize: 17,
            color: isDarkMode ? "#BBBBBB" : "#333333",
            marginVertical: 20
        },
        modalImage: {
            width: 50,
            height: 50
        },
        listText: {
            color: isDarkMode ? "#fff" : "#000",
            fontSize: 15
        },
        item: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 16,
            marginBottom: 10
        },
        arrow: {
            color: isDarkMode ? "#fff" : "#333",
            fontSize: 15,
            fontWeight: "bold",
        },
        log: {
            width: 350,
            height: 40,
            backgroundColor: "rgba(245, 149, 14, 0.91)",
            borderRadius: 3,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 15,
            marginBottom: 15,
            marginLeft: 15
        }
    })
}

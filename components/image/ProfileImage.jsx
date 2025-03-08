import { View,ImageBackground,Image,Text } from "react-native";

import {styles} from '../Style'
export default function ProfileImage({name}){
    const style=styles();
    return(
         <View>
                  <ImageBackground source={require("../photos/profilebg.jpeg")} style={style.background} >
                    <Image source={require("../photos/profile.jpeg")} style={style.profile} ></Image>
                    <Text style={[style.text,{color:"#fff"}]} >{name}</Text>
                  </ImageBackground>
                 </View>
    )
}
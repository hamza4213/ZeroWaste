import React from "react";
import { View, Text, Image } from "react-native";
const SwiperComponent = (props) => {
  const { IMAGE, text1, text2, text3 } = props;
  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "#fff" }}>
      <Image
        source={IMAGE}
        style={{
          width: "80%",
          height: "50%",
          marginTop: 30,
          alignSelf: "center",
        }}
      />

      <View
        style={{
          height: "20%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 22 }}>{text1}</Text>
        <Text style={{ top: "20%", fontSize: 14, color: "black" }}>
          {text2}
        </Text>
        <Text style={{ top: "20%", fontSize: 14, color: "black" }}>
          {text3}
        </Text>
      </View>
    </View>
  );
};
export default SwiperComponent;

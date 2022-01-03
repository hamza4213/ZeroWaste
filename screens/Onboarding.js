import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Colorstyles from "../Src/Colors/Colorstyles";
import Swiper from "react-native-swiper";
import SwiperComponent from "../Src/Components/SwiperComponent";
export default function Onboarding({ navigation }) {
  const [index, setIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <View style={styles.container}>
      {/* swiper screen */}
      <Swiper
        ref={swiperRef}
        activeDotStyle={{
          width: "12%",
          height: "100%",
          backgroundColor: Colorstyles.primaryColor,
          borderRadius: 4,
          marginLeft: 3,
          marginRight: 3,
          marginTop: 3,
          marginBottom: 3,
        }}
        paginationStyle={{ bottom: "8%" }}
        loop={false}
        onIndexChanged={(index) => {
          console.log(index);
          setIndex(index);
        }}
        dot={
          <View
            style={{
              width: "12%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,.2)",
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        }
      >
        <SwiperComponent
          IMAGE={require("../images/undraw_Time_management_re_tk5w.png")}
          text1="ERINNERUNG"
          text2="Verhindere, dass denie Lebensmittel"
          text3="ablaufen und lass dich vor der MHD erinnern"
        />

        <SwiperComponent
          IMAGE={require("../images/undraw_package_arrived_63rf.png")}
          text1="ERINNERUNG"
          text2="Verhindere, dass denie Lebensmittel"
          text3="ablaufen und lass dich vor der MHD erinnern"
        />
      </Swiper>
      <View
        style={{
          //   marginTop: "30%",
          flexDirection: "row-reverse",
          width: "90%",
          marginBottom: 30,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            index === 0
              ? swiperRef.current.scrollBy(1, true)
              : navigation.navigate("Welcome");
          }}
        >
          {index === 0 ? (
            <Text style={{ color: Colorstyles.textColor }}>NEXT</Text>
          ) : (
            <Text style={{ color: Colorstyles.textColor }}>LET'S START</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

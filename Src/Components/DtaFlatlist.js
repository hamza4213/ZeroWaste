import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Colorstyles from "../Colors/Colorstyles";
const DtaFlatlist = (props) => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <View
          style={{
            width: "30%",
            height: "100%",
            backgroundColor: Colorstyles.itemcolor,
            borderRadius: 15,
            bottom: 8,
          }}
        ></View>
        <View style={{ width: "60%", height: "95%" }}>
          <Text
            style={{
              color: Colorstyles.textColor,
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            {item.name}
          </Text>
          <Text style={styles.Text}>{item.quantity}</Text>
          <Text style={styles.Text}>{item.expiry}</Text>
        </View>
      </View>
    );
  };
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={props.Data}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    height: 90,
    width: "93%",
    backgroundColor: "white",
    alignItems: "center",
    margin: 12,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  Text: {
    color: "grey",
    fontSize: 13,
    marginTop: 10,
  },
});
export default DtaFlatlist;

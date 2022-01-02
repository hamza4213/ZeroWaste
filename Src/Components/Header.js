import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import Colorstyles from "../Colors/Colorstyles";
const Header = (props) => {
  const { selected, setSelected } = props;
  const Data = ["All", "Freezer", "Fridge", "Pantry"];
  const Item = ({ title }) => (
    <View>
      <Text
        style={{
          color: selected === title ? "green" : Colorstyles.flatlistColor,
          marginHorizontal: 23,
          textDecorationLine: selected === title ? "underline" : undefined,
        }}
      >
        {title}
      </Text>
      <View
        style={{
          // width: "60%",
          alignSelf: "center",
          height: 2,
          backgroundColor: selected === title ? "green" : "whitef",
        }}
      ></View>
    </View>
  );
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        setSelected(item);
      }}
    >
      <Item title={item} />
    </TouchableOpacity>
  );
  return (
    <View style={{ height: 80, width: "100%", backgroundColor: "white" }}>
      <View
        style={{
          width: "94%",
          height: 40,
          borderWidth: 1,
          borderColor: Colorstyles.flatlistColor,
          margin: 10,
          padding: 8,
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <TextInput
          style={styles.input}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder="Search by Product Name"
        />
        <EvilIcons name="search" size={24} color={Colorstyles.flatlistColor} />
      </View>
      <View
        style={{
          flexDirection: "row",
          marginLeft: 15,
        }}
      >
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={Data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
  },
});

export default Header;

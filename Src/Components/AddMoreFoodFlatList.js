import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import Colorstyles from "../Colors/Colorstyles";
import Data from "../Data/Data.json";
const AddMoreFoodFlatList = ({navigation}) => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <View
          style={{
            width: "30%",
            height: "90%",
            backgroundColor: Colorstyles.itemcolor,
            borderRadius: 5,
            alignItems:"center",
            justifyContent:"center"
          }}
        >
          <TouchableOpacity>
            <Image style={{
              width:55,
              height:50
            }}
            source={require('../../icons/add_product_photo.png')}/>
          </TouchableOpacity>
        </View>

        <View style={{ width: "60%", height: "90%" }}>
          <Text style={{ color: Colorstyles.textColor, fontWeight: "bold", fontSize: 20 }}>
            {item.name}
          </Text>
          <Text style={styles.Text}>{item.quantity}</Text>
          <Text style={styles.Text}>{item.expiry}</Text>
          <View
            style={{
              width: "100%",
              height: 40,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{
                width: 60,
                height: 25,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: Colorstyles.delColor }}>delete</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: 60,
                height: 25,
                borderRadius: 15,
                backgroundColor: Colorstyles.editColor,
                justifyContent: "center",
                alignItems: "center",
              }}
            onPress={()=>navigation.navigate('AddFood')} >
              <Text style={{ color: "white" }}>edit</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: 60,
                height: 25,
                borderRadius: 15,
                backgroundColor: Colorstyles.eatenColor,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white" }}>Eaten</Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    );
  };
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={Data}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    height: 120,
    width: "90%",
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
export default AddMoreFoodFlatList;
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import Header1 from "../Src/Components/Header1";
import Colorstyles from "../Src/Colors/Colorstyles";
import TextInputComponent from "../Src/Components/TextInputComponent";
import Button from "../Src/Components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
export default function AddFood() {
  //set states for textInputs
  const [category, setCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [broughtDate, setBroughtDate] = useState(new Date());
  const [date, setDate] = React.useState(new Date());
  return (
    <View style={styles.container}>
      <SafeAreaView>      
        {/* starting header of screen */}
      <View
        style={{
          backgroundColor: "#fff",
        }}
      >
        <Header1 />
      </View>

      <View
        style={{
          height: 60,
          marginTop: 15,
          alignItems: "center",
        }}
      >
        {/* barcode scanner */}
        <View
          style={{
            height: 60,
            width: 70,
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
          // onPress={}
          >
            <Image
              style={{ height: 50, width: 55 }}
              source={require("../icons/barcode.png")}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          alignItems: "center",
          marginTop: 5,
        }}
      >
        <Text style={{ color: Colorstyles.textColor }}>
          Scan Barcode to fill the Gaps
        </Text>
      </View>

      {/* list for collecting food data */}
      <ScrollView>
        <View
          style={{
            marginLeft: 20,
            marginTop: 20,
            height: 445,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              color: Colorstyles.textColor,
            }}
          >
            Category
          </Text>
          <TextInputComponent
            number={category}
            onChangeNumber={setCategory}
            placeholder={"Choose between Freezer, Fridge & Pantry"}
          />

          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginTop: 20,
              color: Colorstyles.textColor,
            }}
          >
            Product Name
          </Text>
          <TextInputComponent
            number={productName}
            onChangeNumber={setProductName}
            placeholder={"Type in"}
          />

          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginTop: 20,
              color: Colorstyles.textColor,
            }}
          >
            Quantity
          </Text>
          <TextInputComponent
            number={quantity}
            onChangeNumber={setQuantity}
            placeholder={"Please Type in the Quantity"}
            Touchable={true}
          />

          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginTop: 20,
              color: Colorstyles.textColor,
            }}
          >
            Expiry Date
          </Text>
          <TextInputComponent
            number={date}
            onChangeNumber={setDate}
            placeholder={"Choose Date"}
            datepicker={true}
          />

          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginTop: 20,
              color: Colorstyles.textColor,
            }}
          >
            Bought Date
          </Text>
          <TextInputComponent
            number={broughtDate}
            onChangeNumber={setBroughtDate}
            placeholder={"Choose Date"}
            datepicker={true}
          />
        </View>

        {/* button onClick add items to food list */}
      </ScrollView>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          text={"+ Add food"}
          width="100%"
          backgroundColor={Colorstyles.primaryColor}
          borderColor={Colorstyles.primaryColor}
          textclr={"white"}
          // onPress={}
        />
      </View>
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEEEEE",
  },
});

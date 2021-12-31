import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const TextInputComponent = (props) => {
  const { onChangeNumber, number, placeholder, Touchable, datepicker } = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [quantity, setQuantity] = useState("");
  const [show, setShow] = React.useState(Platform.OS === "ios");
  const [selected, setSelected] = useState(false);
  const [dateselected, setDateselected] = useState(false);
  function onchangetext(text) {
    if (quantity === "grams") {
      onChangeNumber(text + "-grams");
    } else {
      onChangeNumber(text + "-liters");
    }
  }
  const onChange = React.useCallback((event, selectedDate) => {
    console.log(selectedDate);
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    onChangeNumber(currentDate);
    console.log(onChangeNumber);
    console.log(number);
  });
  return (
    <>
      <View style={styles.container}>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
          >
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.centeredView}
            >
              <View style={styles.modalView}>
                <Text style={{ alignSelf: "center" }}>Quantity</Text>
                <TextInput
                  style={{ height: 50, left: 16 }}
                  onChangeText={(text) => onChangeNumber(text)}
                  value={number}
                  placeholder={placeholder}
                />
                <View
                  style={{
                    marginTop: 10,
                    width: "90%",
                    height: 1,
                    backgroundColor: "grey",
                    opacity: 0.6,
                    left: 15,
                  }}
                ></View>
                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-between",
                    marginTop: 20,
                  }}
                >
                  <TouchableOpacity
                    disabled={quantity === "grams" ? true : false}
                    onPress={() => setQuantity("grams")}
                    style={{
                      width: "40%",
                      height: 30,
                      borderRadius: 10,
                      borderWidth: 1,
                      backgroundColor:
                        quantity === "grams" ? "#669934" : "white",
                      justifyContent: "center",
                      alignItems: "center",
                      left: 15,
                    }}
                  >
                    <Text
                      style={{
                        color: quantity === "grams" ? "white" : "black",
                      }}
                    >
                      Grams
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    disabled={quantity === "liters" ? true : false}
                    onPress={() => setQuantity("liters")}
                    style={{
                      width: "40%",
                      height: 30,
                      borderRadius: 10,
                      borderWidth: 1,
                      backgroundColor:
                        quantity === "liters" ? "#669934" : "white",
                      justifyContent: "center",
                      alignItems: "center",
                      right: 15,
                    }}
                  >
                    <Text
                      style={{
                        color: quantity === "liters" ? "white" : "black",
                      }}
                    >
                      Liters
                    </Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(false), onchangetext(number);
                  }}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: "90%",
                    height: 30,
                    borderRadius: 10,
                    backgroundColor: "#669934",
                    marginTop: 15,
                    marginLeft: 15,
                  }}
                >
                  <Text style={{ color: "white" }}>Save</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </Modal>
        </View>
        {show ? (
          <DateTimePicker
            testID="dateTimePicker"
            value={number}
            // mode={mode}
            is24Hour={true}
            // display="default"
            onChange={onChange}
          />
        ) : null}
        {datepicker ? (
          <TouchableOpacity
            onPress={() => {
              setDateselected(true), setShow(true);
            }}
            style={{ width: "100%", height: "90%", justifyContent: "center" }}
          >
            {dateselected ? (
              <Text style={{ marginLeft: 18, color: "grey", opacity: 0.7 }}>
                {number.toDateString()}
              </Text>
            ) : (
              <Text style={{ marginLeft: 18, color: "grey", opacity: 0.7 }}>
                {placeholder}
              </Text>
            )}
          </TouchableOpacity>
        ) : Touchable ? (
          <TouchableOpacity
            onPress={() => {
              setSelected(true), setModalVisible(true);
            }}
            style={{ width: "100%", height: "90%", justifyContent: "center" }}
          >
            {!selected ? (
              <Text style={{ marginLeft: 18, color: "grey", opacity: 0.7 }}>
                Type in
              </Text>
            ) : (
              <Text style={{ marginLeft: 18, color: "grey", opacity: 0.7 }}>
                {number}
              </Text>
            )}
          </TouchableOpacity>
        ) : (
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder={placeholder}
          />
        )}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "95%",
    backgroundColor: "white",
    borderColor: "grey",
    justifyContent: "center",
    borderRadius: 10,
    height: 50,
  },
  input: {
    height: 50,
    margin: 12,
    padding: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 22,
  },
  modalView: {
    // margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    height: 200,
    width: "80%",
    // justifyContent: "center",
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default TextInputComponent;

import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Button from "./Src/Components/Button";
import Colorstyles from "./Src/Colors/Colorstyles";
import TextInputComponent from "./Src/Components/TextInputComponent";
import Data from "./Src/Data/Data.json";
import DtaFlatlist from "./Src/Components/DtaFlatlist";
import AddMoreFoodFlatList from "./Src/Components/AddMoreFoodFlatList";
import Header from "./Src/Components/Header";
import Onboarding from "./screens/Onboarding";
import Onboarding1 from "./screens/Onboarding1";
import Welcome from "./screens/Welcome";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import ForgotPassword from "./screens/ForgotPassword";
import Header1 from "./Src/Components/Header1";
import AddFood from "./screens/AddFood";
import Spend from "./screens/Spend";
import ExpireSoon from "./screens/ExpireSoon";
import HomeScreen from "./screens/HomeScreen";
import FoodScreen from "./screens/FoodScreen";
import Settings from "./screens/Settings";
import TabNavigator from "./Src/Components/TabNavigator";
import Imprint from "./screens/Imprint";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="HomeScreen" component={TabNavigator} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="AddFood" component={AddFood} />
        <Stack.Screen name="FoodScreen" component={FoodScreen} />
        <Stack.Screen name="Spend" component={Spend} />
        <Stack.Screen name="ExpireSoon" component={ExpireSoon} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Imprint" component={Imprint} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

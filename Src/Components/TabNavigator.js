import React from 'react';
import { Dimensions,View} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeScreen from '../../screens/HomeScreen';
import FoodScreen from '../../screens/FoodScreen';
import Settings from '../../screens/Settings';
import AddFood from '../../screens/AddFood';
import Colorstyles from '../Colors/Colorstyles';
const fullScreenWidth=Dimensions.get("window").width;
const Tab=createBottomTabNavigator();
const TabNavigator=()=>{
    return (
        <Tab.Navigator
            screenOptions={({route})=>({
                tabBarStyle:{height:55},
                tabBarShowLabel:false,  
                headerShown:false,
                tabBarHideOnKeyboard:true,
                tabBarIcon: ({focused,color,size,padding,bottom,backgroundColor,borderRadius,width,paddingBottom,paddingLeft,borderBottomColor,borderBottomWidth})=>{
                    let iconName;
                    if(route.name === "HomeScreen"){
                        iconName = focused ? 'home' : 'home'
                        size=28
                    }
                    else if(route.name === "FoodScreen"){
                        iconName = focused ? 'shoppingcart' : 'shoppingcart'
                        size=28
                    }
                    else if(route.name === "Settings"){
                        iconName = focused ? 'setting' : 'setting'
                        size=28
                    }
                    return(
                        <AntDesign
                            name={iconName}
                            size={size}
                            color={color}
                            style={{
                                paddingBottom:padding,
                                bottom:bottom,
                            }}
                        />
                    );
                },
            })}
            tabBarOptions={{
                activeTintColor: Colorstyles.primaryColor,
                inactiveTintColor: Colorstyles.itemcolor,
                style:{width:fullScreenWidth,},
            }}
        >
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            <Tab.Screen name="FoodScreen" component={FoodScreen}/>
            <Tab.Screen name="Settings" component={Settings}/>
            {/* <Tab.Screen name="AddFood" component={AddFood}/> */}
        </Tab.Navigator>
    );
};
export default TabNavigator;
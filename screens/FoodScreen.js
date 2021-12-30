import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colorstyles from '../Src/Colors/Colorstyles'
import AddMoreFoodFlatList from '../Src/Components/AddMoreFoodFlatList'
import Header1 from '../Src/Components/Header1'
import Button from '../Src/Components/Button'
import { NavigationContainer } from '@react-navigation/native'
export default function FoodScreen({navigation}) {
    return (
        <View style={styles.container}>
            
            <View style={{
                marginTop:25,
                backgroundColor:"#fff"
            }}>
                <Header1/>
            </View>

            {/* food list with delete ,edit, eaten options */}
            <View style={{
                height:580,
            }}>
                <AddMoreFoodFlatList/>
            </View>

            {/* button on click add items to list  */}
            <View style={{
                justifyContent:"center",
                alignItems:"center",
                marginTop:35
            }}>
            <Button
            text={"+ Add food"}
            width="100%"
            backgroundColor={Colorstyles.primaryColor}
            borderColor={Colorstyles.primaryColor}
            textclr={"white"}
            onPress={()=> navigation.navigate('AddFood')}
            />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colorstyles.backgroundColor
    }
})

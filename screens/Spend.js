import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Colorstyles from '../Src/Colors/Colorstyles'
import Header1 from '../Src/Components/Header1'
import Button from '../Src/Components/Button'
export default function Spend({navigation}) {
    return (
        <View style={styles.container}>
            
            <View style={{
                height:70,
                marginTop:25,
                backgroundColor:"#fff"
            }}>
                <Header1/>
            </View>

            <View style={{
                height:"50%",
                alignItems:"center",
            }}>

            <Text style={{color:Colorstyles.textColor,marginTop:20}}>So often love has been given to food</Text>
            
            <Image 
            style={{
                resizeMode:"contain",
                width:"55%"
            }}
            source={require('../icons/love.png')}/>
            </View>

            <View style={{
                justifyContent:"center",
                alignItems:"center",
                marginTop:100
            }}>
            <Button
            text={"Where can I spend?"}
            width="100%"
            backgroundColor={Colorstyles.primaryColor}
            borderColor={Colorstyles.primaryColor}
            textclr={"white"}
            // onPress={}
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

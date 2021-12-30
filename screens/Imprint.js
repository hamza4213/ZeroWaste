import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colorstyles from '../Src/Colors/Colorstyles'
import Header1 from '../Src/Components/Header1'
export default function Imprint() {
    return (
        <View style={styles.container}>
            
            <View style={{
                height:70,
                marginTop:25,
                backgroundColor:"#fff"
            }}>
                <Header1/>
            </View>

            {/* details screen about application */}
            <View style={{
                marginTop:30,
                height:"100%",
                marginLeft:15,
                width:"92%"
            }}>
                    <Text style={{color:Colorstyles.textColor}}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                    </Text>
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

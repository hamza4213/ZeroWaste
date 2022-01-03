import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colorstyles from '../Src/Colors/Colorstyles'
import Header1 from '../Src/Components/Header1'
export default function Imprint() {
    return (
        <View style={styles.container}>
            <SafeAreaView>
            <View style={{
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
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colorstyles.backgroundColor
    }
})

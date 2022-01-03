import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header1 from '../Src/Components/Header1'
import Colorstyles from '../Src/Colors/Colorstyles'
import DtaFlatlist from '../Src/Components/DtaFlatlist'
import Button from '../Src/Components/Button'
import Data from '../Src/Data/Data.json'
import { SafeAreaView } from 'react-native-safe-area-context'
export default function ExpireSoon() {
    return (
        <View style={styles.container}>
            <SafeAreaView>

            {/* starting header of screen */}
            <View style={{
                backgroundColor:"#fff"
            }}>
                <Header1/>
            </View>

            {/* food items list with expiry details */}
            <View style={{
                height:500,
            }}>
                <DtaFlatlist Data={Data}/>
            </View>

            {/* button onclick add food items to list  */}
            <View style={{
                justifyContent:"center",
                alignItems:"center",
                marginTop:30
            }}>
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
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colorstyles.backgroundColor
    }
})
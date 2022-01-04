import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colorstyles from '../Src/Colors/Colorstyles'
import Header1 from '../Src/Components/Header1'
import { auth } from '../Firebase'
export default function Settings({navigation}) {

    const handleSignOut = () => {
        auth 
        .signOut()
        .then( () => {
            navigation.replace("SignIn")
        })
        .catch(error => alert(error.message))
    }
    return (
        <View style={styles.container}>
            <SafeAreaView>
            <View style={{
                backgroundColor:"#fff"
            }}>
                <Header1/>
            </View>

            {/* theme selector  */}
            <View style={{
                flexDirection:"row",
                height:30,
                width:"90%",
                marginTop:25,
                alignItems:"center",
                marginLeft:15,
                justifyContent:"space-between"
            }}>
                <Text style={{color:Colorstyles.textColor}}>Dark Theme</Text>
                <View style={{
                    flexDirection:"row"
                }}>

                <TouchableOpacity>
                    <Text style={{color:Colorstyles.textColor}}>On   |</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={{color:Colorstyles.textColor}}>   Off</Text>
                </TouchableOpacity>
                </View>
            
            </View>

                {/* navigation to imprint screen */}
            <View style={{
                marginLeft:15,
                marginTop:15,
            }}>
                <TouchableOpacity onPress={() => navigation.navigate('Imprint')}>
                    <Text style={{color:Colorstyles.textColor}}>Imprint</Text>
                </TouchableOpacity>
            </View>

            {/* log out and navigate to LogIn */}
            <View style={{
                marginLeft:15,
                marginTop:15
            }}>
                <TouchableOpacity onPress={handleSignOut}>
                    <Text style={{color:Colorstyles.textColor}}>Log out</Text>
                </TouchableOpacity>
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

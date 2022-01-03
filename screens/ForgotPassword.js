import React, {useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import TextInputComponent from '../Src/Components/TextInputComponent'
import Button from '../Src/Components/Button'
import Colorstyles from '../Src/Colors/Colorstyles'
import { SafeAreaView } from 'react-native-safe-area-context'
export default function ForgotPassword({navigation}) {
    const [setPassword, setNewPasword] = useState("")
    return (
        <View style={styles.container}>
            <SafeAreaView>
            <View style={{
                height:35,
                width:80,
                backgroundColor:"#fff",
                marginTop:25,
                borderRadius:5,
                justifyContent:"center",
                alignItems:"center"
            }}>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('SignIn')} 
                    >                  
                    <FontAwesome5
                name='angle-left'
                size={35}
                color={Colorstyles.primaryColor}
                />
                    </TouchableOpacity>                
            </View>

            <View style={{
                width:180,
                height:100,
                marginLeft:15,
                marginTop:120
            }}>
                <Text style={{color:Colorstyles.textColor,fontWeight:"bold",fontSize:26}}>We will send you a new password</Text>
            </View>

            {/* collect email or username from user */}
            <View style={{
                marginLeft:20,
                marginTop:20,
                height:80
            }}>
            <Text style={{color:Colorstyles.textColor,fontWeight:"bold",fontSize:16}}>Username or E-Mail</Text>
            <TextInputComponent
            number={setPassword}
            onChangeNumber={setNewPasword}
            placeholder={"Username or Password"}
            />
            </View>

                <View style={{
                    justifyContent:"center",
                    alignItems:"center",
                    height:20,
                    }}>
                <Text style={{color:Colorstyles.textColor,fontSize:11,color:'grey'}}>You will receive an email shortly to reset your password</Text>
                </View>
            
                    {/* button on click will send email to user for reset password and return to SignIn screen */}
                <View style={{
                justifyContent:"center",
                alignItems:"center",
                marginTop:30
            }}>
            <Button
            text={"Reset Password"}
            width="90%"
            borderRadius={10}
            backgroundColor={Colorstyles.primaryColor}
            borderColor={Colorstyles.primaryColor}
            textclr={"white"}
            onPress={() => navigation.navigate('SignIn')}
            />
            </View>
            </SafeAreaView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: Colorstyles.backgroundColor,
    },
});
import React, {useState} from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import Button from '../Src/Components/Button';
import TextInputComponent from '../Src/Components/TextInputComponent';
import Colorstyles from '../Src/Colors/Colorstyles';
export default function SignIn({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <View style={styles.container}>
            
            {/* navigate back to welcome screen */}
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
                    onPress={() => navigation.navigate('Welcome')} 
                    >                  
                    <FontAwesome5
                name='angle-left'
                size={35}
                color={Colorstyles.primaryColor}
                />
                    </TouchableOpacity>                
            </View>

            <ScrollView>
            <View style={{
                marginTop:80,
                marginLeft:10
            }}>
                <Text style={{fontSize:28,fontWeight:"bold",color:Colorstyles.textColor}}>Hello again!</Text>
                <Text style={{fontWeight:"bold",fontSize:28,color:Colorstyles.textColor}}>Welcome</Text>
                <Text style={{fontWeight:"bold",fontSize:28,color:Colorstyles.textColor}}>back</Text>
            </View>

            {/* collecting data from user email and password */}
            <View style={{
                marginLeft:20,
                marginTop:20,
                height:170
            }}>
                <Text style={{fontWeight:"bold",fontSize:16,color:Colorstyles.textColor}}>E-Mail</Text>
            <TextInputComponent
            number={email}
            onChangeNumber={setEmail}
            placeholder={"example@mail.com"}
            />

            <Text style={{fontSize:16,fontWeight:"bold",marginTop:20,color:Colorstyles.textColor}}>Password</Text>
            <TextInputComponent
            number={password}
            onChangeNumber={setPassword}
            placeholder={"password"}
            />
            </View>

            {/* if user forgot password then navigate to forgot password screen */}
            <View style={{
                height:25,
                width:"90%",
                justifyContent:"flex-end",
                flexDirection:"row"
            }}>
                <TouchableOpacity
                onPress={() => navigation.navigate('ForgotPassword')}>
                <Text style={{justifyContent:"flex-end",color:Colorstyles.itemcolor}}>Forgot Password ?</Text>
            </TouchableOpacity>
            </View>

            {/* if login successful then navigate to homescreen */}
            <View style={{
                justifyContent:"center",
                alignItems:"center",
                marginTop:30
            }}>
            <Button
            text={"Sign in"}
            width="90%"
            borderRadius={10}
            backgroundColor={Colorstyles.primaryColor}
            borderColor={Colorstyles.primaryColor}
            textclr={"white"}
            onPress={() => navigation.navigate('HomeScreen')}
            />
            </View>

            {/* if not a user then navigate to signup screen on touch */}
            <View style={{
                flexDirection:"row",
                height:30,
                marginTop:10,
                justifyContent:"center"
            }}>
                <Text style={{color:Colorstyles.itemcolor}}>Not a member? </Text>
                <TouchableOpacity 
                onPress={() => navigation.navigate('SignUp')}>
                    <Text style={{color:Colorstyles.primaryColor,textDecorationLine:"underline"}}>Register now</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: Colorstyles.backgroundColor,
    },
});
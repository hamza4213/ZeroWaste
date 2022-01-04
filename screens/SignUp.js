import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import TextInputComponent from '../Src/Components/TextInputComponent'
import Button from '../Src/Components/Button'
import Colorstyles from '../Src/Colors/Colorstyles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { auth } from '../Firebase';

export default function SignUp({navigation}) {

    // set states for user data
    const [newUser, setNewUser] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [newPassword, setNewPassword] = useState("")

    const handleSignUp = () => {
        auth
        .createUserWithEmailAndPassword( newEmail, newPassword)
        .then(userCredentials => {
            const user = userCredentials.user
            alert("User created successfully ")
            console.log(user,newEmail)
            navigation.navigate("SignIn")
        })
        .catch(error => alert(error.message))
    }
    return (
        <View style={styles.container}>

            {/* move back to welcome screen  */}
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
                    onPress={() => navigation.navigate('Welcome')} 
                    >                  
                    <FontAwesome5
                name='angle-left'
                size={35}
                color={Colorstyles.primaryColor}
                />
                    </TouchableOpacity>                
            </View>

            <View style={{
                marginTop:10,
                marginLeft:10
            }}>
                <Text style={{fontSize:26,fontWeight:"bold",color:Colorstyles.textColor}}>Hello!</Text>
                <Text style={{fontWeight:"bold",fontSize:26,color:Colorstyles.textColor}}>Let's</Text>
                <Text style={{fontWeight:"bold",fontSize:26,color:Colorstyles.textColor}}>begin</Text>
            </View>

            {/* upload picture on icon click */}
            <ScrollView>
            <View style={{
                height:70,
                width:70,
                marginLeft:10,
                backgroundColor:"#fff",
                marginTop:16,
                borderRadius:15,
                justifyContent:"center",
                alignItems:"center"
            }}>
                <TouchableOpacity
                // onPress={}
                >
                <Image 
                style={{height:55,width:60}}
                source={require('../icons/upload.png')}/>
                </TouchableOpacity>              
            </View>

            {/* get data from new user registration */}
            

            
            <View style={{
                marginLeft:20,
                marginTop:15,
                height:260,
            }}>
                <Text style={{fontWeight:"bold",fontSize:16,color:Colorstyles.textColor}}>Userrname</Text>
            <TextInputComponent
            number={newUser}
            onChangeNumber={setNewUser}
            placeholder={"Username"}
            />

            <Text style={{fontSize:16,fontWeight:"bold",marginTop:20,color:Colorstyles.textColor}}>E-Mail</Text>
            <TextInputComponent
            number={newEmail}
            onChangeNumber={setNewEmail}
            placeholder={"example@mail.com"}
            />

            <Text style={{fontSize:16,fontWeight:"bold",marginTop:20,color:Colorstyles.textColor}}>Password</Text>
            <TextInputComponent
            number={newPassword}
            onChangeNumber={setNewPassword}
            placeholder={"password"}
            />
            </View>

            {/* will save user data and give access to login */}
            <View style={{
                justifyContent:"center",
                alignItems:"center",
                marginTop:30,
            }}>
            <Button
            text={"Sign up"}
            width="90%"
            borderRadius={10}
            backgroundColor={Colorstyles.primaryColor}
            borderColor={Colorstyles.primaryColor}
            textclr={"white"}
            onPress={handleSignUp}
            />
            </View>

            {/* if he has already account then can navigate to signin screen */}
            <View style={{
                flexDirection:"row",
                height:30,
                marginTop:10,
                justifyContent:"center"
            }}>
                <Text style={{color:Colorstyles.textColor}}>Already have an Account? </Text>
                <TouchableOpacity
                onPress={() => navigation.navigate('SignIn')}>
                    <Text style={{color:Colorstyles.primaryColor,textDecorationLine:"underline"}}>Sign in</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colorstyles.backgroundColor,
    }
})
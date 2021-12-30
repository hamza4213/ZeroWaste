import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Button from '../Src/Components/Button';
import Colorstyles from '../Src/Colors/Colorstyles';

export default function Welcome({navigation}) {
    return (
        <View style={styles.container}>
            
            <View style={{
                marginTop:50,
                alignItems:"center",
                height:300,
                justifyContent:"space-around"
            }}>
            <Image source={require('../logo/logo_light.png')}
            />
            <Text>Fulfil the mission and save delicious food!</Text>
            </View>
            
            {/* will navigate to signin screen */}
            <View style={{
                height:"100%",
                alignItems:"center",
                alignContent:"center",
                marginTop:170,
            }}>
            
                <Button
            text={"Sign in"}
            width="90%"
            borderRadius={10}
            backgroundColor={Colorstyles.primaryColor}
            borderColor={Colorstyles.primaryColor}
            textclr={"white"}
            onPress={() => navigation.navigate('SignIn')}
            />
            
                {/* will navigate to signup screen */}
            <Button
            text={"Sign up"}
            width="90%"
            borderRadius={10}
            backgroundColor={Colorstyles.secondaryColor}
            borderColor={Colorstyles.primaryColor}
            marginTop={15}
            textclr={Colorstyles.primaryColor}
            onPress={() => navigation.navigate('SignUp')}
            />            
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor:Colorstyles.backgroundColor,  
    },
});
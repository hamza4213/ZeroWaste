import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Colorstyles from '../Src/Colors/Colorstyles';

export default function Onboarding({navigation}) {
    return (
        <View style={styles.container}>

            {/* swiper screen */}
                <View style={{
                    height:400,
                    width:"100%",
                    alignItems:"center",
                    marginTop:30
                }}>
                <Image style={{
                resizeMode:'center',
                height:380,
                width:350
                }} 
                    source={require('../images/undraw_package_arrived_63rf.png')}
                />
                </View>

                <View style={{
                    flex:0.8,
                    alignContent:"center",
                    alignItems:"center",
                }}>
                    <Text style={{fontWeight:"bold",fontSize:22}}>ERINNERUNG</Text>
                    <Text style={{textAlign:'center',marginTop:5}}>Verhindere, dass denie Lebensmittel</Text>
                    <Text style={{textAlign:'center',marginTop:5}}> ablaufen und lass dich vor der MHD erinnern</Text>
                </View>

                <View  style={{
                    marginTop:"30%",
                    flexDirection:"row-reverse",
                    width:"92%"
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
                        <Text style={{color:Colorstyles.textColor}}>LET'S START</Text>
                    </TouchableOpacity>
                </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor:'#fff',  
    },
});

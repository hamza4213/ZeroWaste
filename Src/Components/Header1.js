import { Text, View, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Colorstyles from '../Colors/Colorstyles'
export default function Header1(props) {
    const {navigationTo} = props;
    const navigation=useNavigation();
    return (
        <View style={{
            height:50,
            width:"100%",
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
        }}>
            
            <View style={{
                flexDirection:"row",
                justifyContent:"center",
                alignItems:"center"
            }}>
            <View style={{
                height:40,
                width:40,
                marginLeft:10,
                marginTop:5,
                backgroundColor:"black",
                borderRadius:10,
                alignItems:"center"
            }}>               
            </View>
            <Text style={{fontSize:22,fontWeight:"bold",marginLeft:10,color:Colorstyles.textColor}}>Zero Waste</Text>
            </View>
            
            <View style={{
                flexDirection:"row",
                justifyContent:"space-evenly",
                alignItems:"center"
            }}> 

                <TouchableOpacity 
                onPress={() => navigation.navigate(navigationTo)}>
                <Image 
            style={{
                resizeMode:"center",
                width:30,
                tintColor:Colorstyles.textColor
            }}
            source={require('../../icons/hands.png')}/>
                </TouchableOpacity>
            
                <TouchableOpacity 
                onPress={() => navigation.navigate(navigationTo)}>
                <Image 
            style={{
                resizeMode:"center",
                width:40,
                tintColor:"#444D5B"
            }}
            source={require('../../icons/clock.png')}/>
                </TouchableOpacity>
            
            </View>
        </View>
    )
}
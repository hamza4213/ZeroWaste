import React,{useState} from 'react'
import { StyleSheet, View, ScrollView, Text } from 'react-native'
import Colorstyles from '../Src/Colors/Colorstyles'
import Header1 from '../Src/Components/Header1'
import Header from '../Src/Components/Header'
import DtaFlatlist from '../Src/Components/DtaFlatlist'
import Button from '../Src/Components/Button'
import Data from "../Src/Data/Data.json";
import Data1 from '../Src/Data/Data1.json'
import Data2 from '../Src/Data/Data2.json'
export default function HomeScreen({navigation}) {
    const [selected, setSelected] = React.useState("");

    return (
        <View style={styles.container}>
            <View style={{
                marginTop:25,
            }}>
                <Header1 
                navigationTo='Spend'
                navigationTo='ExpireSoon'/>
            </View>

            {/* will check the state  */}
            <View>
                <Header selected={selected} setSelected={setSelected}/>
            </View>

            {/* if state empty then show add & scan button */}
            <View style={{
                height:"80%",
                marginTop:10,
                backgroundColor:Colorstyles.backgroundColor
            }}>
                {selected===""?<View style={{
                    height:"70%",
                    width:"100%",
                    marginTop:"30%",
                    alignItems:"center",
                    justifyContent:"center"}}>
                <Text style={{bottom:30,color:Colorstyles.textColor}}>You have not added any food yet:(</Text>
                <Button
            text={"Add food"}
            width="90%"
            borderRadius={10}
            backgroundColor={Colorstyles.primaryColor}
            borderColor={Colorstyles.primaryColor}
            textclr={"white"}
            onPress={() => navigation.navigate('AddFood')}
            />

                <Button
            text={"Scan Barcode"}
            width="90%"
            borderRadius={10}
            backgroundColor={Colorstyles.secondaryColor}
            borderColor={Colorstyles.primaryColor}
            marginTop={15}
            textclr={Colorstyles.primaryColor}
            // onPress={}
            />  
              {/* will show data list according to options selected  */}
            
                </View>:
                <DtaFlatlist Data={
                selected==="All"?Data:
                selected==="Freezer" ?Data1:
                selected==="Fridge" ?Data2:
                selected==="Pantry" ?Data2:
                null}/>}

            </View>
            
            {/* will add items to selected category list on button click  */}
            
            <View style={{
                height:30,
                // backgroundColor:"blue"
            }}>
            {selected===""?null:
            <Button
            text={"+ Add food"}
            width="100%"
            // bottom={-25}
            backgroundColor={Colorstyles.primaryColor}
            borderColor={Colorstyles.primaryColor}
            textclr={"white"}
            onPress={() => navigation.navigate('AddFood')}
            />}
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:Colorstyles.backgroundColor
        backgroundColor:"#fff"
    }
})
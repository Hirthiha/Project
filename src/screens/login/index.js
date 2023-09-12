import React from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import Spacer from "../../components/spacer";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";

const Login =({navigation})=>{
    return(
        <View style={styles.viewStyle}>
            <Text style={styles.login}>Login</Text>
            <Spacer height={heightPercentageToDP('8%')}/>
            <Text style={styles.textOne} >User Name</Text>
            <Spacer height={heightPercentageToDP('2%')}/>
            <TextInput style={styles.inputStyle} placeholder="Enter user name"/>
            <Spacer height={heightPercentageToDP('2%')}/>
            <Text style={styles.textOne}>Password</Text>
            <Spacer height={heightPercentageToDP('2%')}/>
            <TextInput style={styles.inputStyle} placeholder="Enter password" secureTextEntry={true}/>
            <Spacer height={heightPercentageToDP('5%')}/>
          <TouchableOpacity onPress={()=>{navigation.navigate('DetailsScreen')}}>
            <View style={styles.btnStyle}>
                <Text style={styles.textStyle}>Login</Text>
            </View>
          </TouchableOpacity>
        </View>
    )
}

export default Login
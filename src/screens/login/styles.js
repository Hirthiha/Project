import { StyleSheet } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
const styles = StyleSheet.create({
    viewStyle:{
        flex :1,
        justifyContent:'center',
        backgroundColor:'white'
    },
    inputStyle:{
        width:widthPercentageToDP('80%'),
        height:heightPercentageToDP('5%'),
        borderWidth:widthPercentageToDP('0.2%'),
        borderRadius:widthPercentageToDP('3%'),
        paddingHorizontal:widthPercentageToDP('3%'),
        fontSize:15,
        marginStart:'10%',
    },
    btnStyle:{
backgroundColor:'#FFDF00',
borderRadius:widthPercentageToDP('3%'),
        width:widthPercentageToDP('80%'),
        height:heightPercentageToDP('6%'),
        marginStart:'10%',
    },
    textStyle:{
        color:'black',
        alignSelf:'center',
       fontSize:20,
       textAlignVertical:'center',
       paddingVertical:widthPercentageToDP('2%'),
    },
    textOne:{
        color:'black',
       fontSize:15,
       marginStart:'10%',
    },
    login:{
        color:'#FFDF00',
        fontSize:35,
        alignSelf:'center',
        fontWeight:'bold'
    },
    
}) 

export default styles
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Color } from '../../Constant'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CustomButton = ({onPress,btnTitle, color, backgroundColor,height ,fontSize,crossIcon,approvedIcon}:any) => {
  return (
    <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.8}
    style={[styles.btn, { marginVertical: 0,backgroundColor: backgroundColor ? backgroundColor :'#000',height:height? height :55, flexDirection:'row',gap:5, alignItems:"center" }]}
  >
    {crossIcon &&
    <Ionicons name='close-circle-outline' color={Color.white} size={25} />
    }
    {approvedIcon &&
    <AntDesign name='checkcircleo' color={Color.white} size={20} />
    }
    <Text style={[styles.textType1,{color:color ? color : Color.white,textAlign:'center',fontSize:fontSize ?fontSize :24 }]}>{btnTitle}</Text>
  </TouchableOpacity>

  )
}

export default CustomButton

const styles = StyleSheet.create({
    btn: {
      height: 55,
      borderRadius: 30,
      // flexShrink: 0,
      backgroundColor: '#000',
      justifyContent: 'center',
      alignItems: 'center',
      // marginHorizontal: 15,
    },
    textType1: {
        fontWeight: '500', 
        fontSize: 24, color: Color.white, 
        fontFamily: 'Circular Std Medium', lineHeight: 24
    },
    textType2: {
        color: Color.IronsideGrey, alignSelf: 'center', fontWeight: '500', fontSize: 16
    },
    textType3: {
        color: Color.Dune, fontWeight: '500', fontSize: 16, borderBottomWidth: 2, borderBottomColor: Color.Primary
    },
  });
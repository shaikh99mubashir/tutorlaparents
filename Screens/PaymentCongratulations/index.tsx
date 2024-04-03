import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Color } from '../../Constant'
import Header from '../../Components/Header'
import CustomButton from '../../Components/CustomButton'

const PaymentCongratulations = ({navigation}:any) => {
  return (
    <View
    style={{
      backgroundColor: Color.GhostWhite,
      height: '100%',
      paddingHorizontal: 25,
    }}>
    <Header goBack title="Congratulations" navigation={navigation} />
    <View style={{justifyContent:'center', alignItems:"center"}}>
    <View style={{margin:25}}></View>
    <Image source={require('../../Images/PaymentCongratulations.png')}/>
    <View style={{margin:15}}></View>
    <Text style={[styles.textType1,{color:Color.Primary}]}>RM210</Text>
    <View style={{margin:5}}></View>
    <Text style={[styles.textType1,{fontSize:30,}]}>Payment Successful</Text>
    <View style={{margin:5}}></View>
    <Text style={[styles.textType3,{fontSize:18,textAlign:"center"}]}>Your payment has been received.{'\n'} Thank you!</Text>
    <View style={{margin:25}}></View>
    <View style={{width:'85%'}}>
    <CustomButton btnTitle='Chat with Tutor'/>
    </View>
    </View>
    </View>
  )
}

export default PaymentCongratulations

const styles = StyleSheet.create({
    textType3: {
        color: Color.Dune,
        // fontWeight: '500',
        fontSize: 16,
        fontFamily: 'Circular Std Medium',
        fontStyle: 'normal',
      },
      textType1: {
        fontWeight: '500',
        fontSize: 26,
        color: Color.Black,
        fontFamily: 'Circular Std Medium',
        // lineHeight: 24,
        fontStyle: 'normal',
      },
})
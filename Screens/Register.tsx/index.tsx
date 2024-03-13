import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { Color } from '../../Constant'
import Header from '../../Components/Header'
import PhoneInput from 'react-native-phone-number-input';
import CustomButton from '../../Components/CustomButton';

const Register = ({navigation}:any) => {
    const phoneInput = useRef(null);
    let [phoneNumber, setPhoneNumber] = useState('');
  return (
    <SafeAreaView style={{flex:1,backgroundColor:Color.GhostWhite, paddingHorizontal:25}}>
        <Header navigation={navigation} BackBtn color={Color.GhostWhite}/>
        <Text style={[styles.textType2]}>Register</Text>
        <View style={{margin:20}}></View>
        <Text style={[styles.textType1,{lineHeight:20, color:Color.IronsideGrey}]}>Please Enter your <Text style={[styles.textType1,{lineHeight:20}]}>Phone Number</Text> to register and begin using our app.</Text>
        <View style={{margin:15}}></View>
        <Text style={styles.textType1}>Phone Number*</Text>
        <View style={{margin:4}}></View>
        <View>
        <PhoneInput
          ref={phoneInput}
          placeholder="149655271"
          defaultValue={phoneNumber}
          defaultCode="MY"
          layout="first"
          autoFocus={true}
          textInputStyle={{color: Color.DustyGrey, height: 50,fontFamily: 'Circular Std Medium',marginLeft: -5,letterSpacing:1.5}}
          textInputProps={{placeholderTextColor: Color.DustyGrey}}
          codeTextStyle={{marginLeft:0,  color: Color.DustyGrey,fontFamily: 'Circular Std Medium',letterSpacing:1.5}}
          containerStyle={styles.phoneNumberView}
          flagButtonStyle={{ borderRadius: 8,
            borderWidth:2,
            borderColor: Color.GhostWhite,width:70, height:40,marginLeft:10,marginTop:10}}
            
          textContainerStyle={{
            height: 60,
            backgroundColor: 'white',
            borderRadius:10,
            borderColor: Color.GhostWhite,
          }}
          onChangeFormattedText={text => {
            setPhoneNumber(text);
          }}
        /> 
        </View>
        <View style={{margin:20}}></View>
        <CustomButton
          btnTitle="Continue"
          backgroundColor={Color.Primary}
          color={Color.white}
          onPress={() => navigation.navigate('VerifyCode')}
        />
    
    </SafeAreaView>
  )
}

export default Register

const styles = StyleSheet.create({
    textType1: {
        color: Color.Black,
        fontSize: 16,
        fontFamily: 'Circular Std Medium',
      },
      textType2: {
        color: Color.Black,
        fontSize: 26,
        fontFamily: 'Circular Std Medium',
      },
      phoneNumberView: {
        // height: 70,
        width: '100%',
        // backgroundColor: 'white',
        borderColor: Color.GhostWhite,
        borderRadius: 10,
        borderWidth: 1,
        color: '#E5E5E5',
        flexShrink: 22,
        fontFamily: 'Circular Std Medium'
      },
})
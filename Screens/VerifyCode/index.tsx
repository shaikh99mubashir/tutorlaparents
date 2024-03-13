import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {Color} from '../../Constant';
import Header from '../../Components/Header';
import PhoneInput from 'react-native-phone-number-input';
import CustomButton from '../../Components/CustomButton';
import ConfirmationCodeField from '../../Components/ConfirmationCodeField';

const VerifyCode = ({navigation}: any) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Color.GhostWhite}}>
      <View style={{paddingHorizontal: 25}}>
        <Header navigation={navigation} BackBtn color={Color.Black} />
        <Text style={[styles.textType2]}>Verify Code</Text>
        <View style={{margin: 10}}></View>
        <Text
          style={[
            styles.textType1,
            {lineHeight: 20, color: Color.IronsideGrey},
          ]}>
          A Verification OTP has been sent {'\n'}to{' '}
          <Text style={[styles.textType1, {lineHeight: 20}]}>
            +60 149655217
          </Text>
        </Text>
        <View style={{margin: 25}}></View>
        <ConfirmationCodeField navigation={navigation} />
      </View>
      <View style={{margin: 15}}></View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 15,
          flexDirection: 'row',
          marginTop: 25,
        }}>
        <Text
          style={{
            color: Color.IronsideGrey,
            alignSelf: 'center',
            fontWeight: '500',
            fontSize: 16,
            fontFamily: 'Circular Std Medium',
          }}>
          Didn’t Receive a Code?{' '}
        </Text>
        <TouchableOpacity activeOpacity={0.8}>
          <Text
            style={{
              color: Color.Dune,
              fontWeight: '500',
              fontSize: 16,
              fontFamily: 'Circular Std Bold',
              borderBottomWidth: 2,
              borderBottomColor: Color.Primary,
            }}>
            Resend Code
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 15,
          flexDirection: 'row',
          marginTop: 0,
        }}>
        <Text
          style={{
            color: Color.IronsideGrey,
            alignSelf: 'center',
            fontWeight: '500',
            fontSize: 16,
            fontFamily: 'Circular Std Medium',
          }}>
          End in{' '}
        </Text>
        <TouchableOpacity activeOpacity={0.8}>
          <Text
            style={{
              color: Color.Dune,
              fontWeight: '500',
              fontSize: 16,
              fontFamily: 'Circular Std Bold',
              borderBottomWidth: 2,
              borderBottomColor: Color.Primary,
            }}>
            59 Seconds
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default VerifyCode;

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
    fontFamily: 'Circular Std Medium',
  },
});

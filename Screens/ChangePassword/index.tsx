import {ScrollView, StyleSheet, Text, ToastAndroid, View} from 'react-native';
import React from 'react';
import Header from '../../Components/Header';
import {Color} from '../../Constant';
import PasswordInput from '../../Components/PasswordInput';
import CustomButton from '../../Components/CustomButton';

const ChangePassword = ({navigation}: any) => {
  const handelUpdate = () => {
    ToastAndroid.show('Password Updated Successfully', ToastAndroid.SHORT);
  }
  return (
    <View
      style={{
        backgroundColor: Color.GhostWhite,
        height: '100%',
        paddingHorizontal: 25,
      }}>
      <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled>
        <Header title={'Change Password'} goBack navigation={navigation} />
        <View style={{margin: 10}}></View>
        <Text style={{fontFamily:'Circular Std Book', fontSize:16, lineHeight:20}}>
        Your password must be at least 8 characters long and includes a mix of upper and lowercase letters, numbers, and symbols.
        </Text>
        <View style={{margin: 15}}></View>
        <PasswordInput
          label="Current Password*"
          placeholder="***************"
        />
        <PasswordInput
          label="New Password*"
          placeholder="***************"
        />
        <PasswordInput
          label="Confirm Password*"
          placeholder="***************"
        />
        <View style={{marginVertical:40}}>
        <CustomButton btnTitle='Update' onPress={()=> handelUpdate()}/>
        </View>
      </ScrollView>
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({});

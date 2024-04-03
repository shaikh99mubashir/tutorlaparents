import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../Components/Header';
import {Color} from '../../Constant';
import InputText from '../../Components/InputText';
import CustomButton from '../../Components/CustomButton';

const AccountInformation = ({navigation}: any) => {
  return (
    <View
      style={{
        backgroundColor: Color.GhostWhite,
        height: '100%',
        paddingHorizontal: 25,
      }}>
      <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled>
        <Header title={'Account Information'} goBack navigation={navigation} />
        <View style={{margin: 5}}></View>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../../Images/Banner.png')}
            style={{
              width: 95,
              height: 95,
              borderRadius: 50,
              borderWidth: 3,
              borderColor: Color.Primary,
            }}
          />
          <Image
            source={require('../../Images/Plusicon.png')}
            style={{position: 'absolute', top: 60, right: 130}}
          />
          <View style={{margin: 5}}></View>
          <Text style={[styles.textType1, {lineHeight: 35}]}>
            Michelle Thomas
          </Text>
          <Text style={[styles.textType3]}>michelle.thomas@gmail.com</Text>
        </View>
        <View style={{gap: 5, marginTop: 15}}>
          <InputText label="Full Name*" placeholder="Full Name" />
        </View>
        <View>
          <InputText label="Email*" placeholder="your.email@example.com" />
        </View>
        <View>
          <InputText label="Mobile Phone*" placeholder="+60 2168-5000-6789" />
        </View>
        <View>
          <InputText label="Date of Birth*" placeholder="25 June 1985" />
        </View>
        <View style={{marginBottom:40,marginTop:30}}>
          <CustomButton btnTitle='Save'/>
        </View>
      </ScrollView>
    </View>
  );
};

export default AccountInformation;

const styles = StyleSheet.create({
  textType3: {
    color: Color.Dune,
    fontWeight: '500',
    fontSize: 16,
    fontFamily: 'Circular Std Medium',
    fontStyle: 'normal',
  },
  textType1: {
    fontWeight: '500',
    fontSize: 26,
    color: Color.Black,
    fontFamily: 'Circular Std Medium',
    lineHeight: 24,
    fontStyle: 'normal',
  },
});

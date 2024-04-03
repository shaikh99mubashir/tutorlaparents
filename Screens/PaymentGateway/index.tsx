import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Color} from '../../Constant';
import Header from '../../Components/Header';
import RadioButton from '../../Components/RadioButton';
import IconRadioButton from '../../Components/IconRadioButton';
import CustomButton from '../../Components/CustomButton';

const PaymentGateway = ({navigation}: any) => {
  const options = [
    {
      name: 'apple pay',
      image: require('../../Images/applepay.png'),
    },
    {
      name: 'google pay',
      image: require('../../Images/GooglePay.png'),
    },
    {
      name: 'paypal',
      image: require('../../Images/Paypal.png'),
    },
  ];
  const options2 = [
    {
      name: '**** **** **** *567',
      image: require('../../Images/Visa.png'),
    },
    {
      name: '**** **** **** *234',
      image: require('../../Images/master.png'),
    },
    {
      name: '**** **** **** *569',
      image: require('../../Images/Paypal2.png'),
    },
  ];
  const [selectedValue, setSelectedValue] = useState(null);
  const handleSelect = (value: any) => {
    setSelectedValue(value);
  };
  console.log('selectedValue', selectedValue);

  return (
    <View
      style={{
        backgroundColor: Color.GhostWhite,
        height: '100%',
        paddingHorizontal: 25,
      }}>
      <Header goBack title="Payment Options" navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled>
        {options.length > 0 && options2.length > 0 ? (
          <>
            <View>
              <IconRadioButton options={options} onSelect={handleSelect} />
            </View>
            <View style={{margin: 10}}></View>
            <View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.textType1}>Choose Card</Text>
                <TouchableOpacity activeOpacity={0.8} onPress={()=> navigation.navigate('AddCard')}>
                <Text style={[styles.textType3, {color: Color.BrightBlue}]}>
                  + Add Card
                </Text>
                </TouchableOpacity>
              </View>
              <View style={{margin: 5}}></View>
              <IconRadioButton options={options2} onSelect={handleSelect} />
            </View>
            <View style={{margin: 20}}></View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
                <Text
                  style={[
                    styles.textType3,
                    {
                      color: Color.IronsideGrey,
                      fontFamily: 'Circular Std Bold',
                    },
                  ]}>
                  Commitment Fees
                </Text>
              </View>
              <Text
                style={[
                  styles.textType1,
                  {color: Color.Primary, fontFamily: 'Circular Std Bold'},
                ]}>
                RM210
              </Text>
            </View>
            <View style={{margin: 10}}></View>
            <CustomButton
              btnTitle="Proceed to Pay"
              onPress={() => navigation.navigate('PaymentCongratulations')}
            />
          </>
        ) : (
          <>
          <View style={{margin: 30}}></View>
           <Image source={require('../../Images/EmptyPaymentOptions.png')}/>
           <View style={{margin: 10}}></View>
           <Text style={[styles.textType1,{textAlign:"center", fontSize:30}]}>Don’t have a{'\n'} Payment Options</Text>
           <View style={{margin: 10}}></View>
           <Text style={[styles.textType3,{textAlign:"center", }]}>Please Create a New Payment Options</Text>
           <View style={{margin: 20}}></View>
           <CustomButton btnTitle='Add Debit/Credit Card' onPress={()=> navigation.navigate('AddCard')}/>
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default PaymentGateway;

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
    fontStyle: 'normal',
  },
});

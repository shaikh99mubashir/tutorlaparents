import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color} from '../../Constant';
import CustomButton from '../../Components/CustomButton';

const GetStarted = ({navigation}:any) => {
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1,justifyContent:'center'}}
      scrollEnabled={false}
      style={{backgroundColor: Color.Primary}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 35,
        }}>
        <Text style={styles.textType2}>Welcome to Tutorla!</Text>
        <View style={{margin: 5}}></View>
        <Text style={styles.textType1}>
          Simplify Your Tutor Search for Your
        </Text>
        <Text style={styles.textType1}>
          Child's Success. Get a recommended{' '}
        </Text>
        <Text style={styles.textType1}>Tutor within 24 Hours. </Text>
      </View>
      <View style={{margin: 10}}></View>
      <View style={{alignItems:"center"}}>
      <Image source={require('../../Images/getStarted.png')} />
      </View>
      <View style={{margin: 20}}></View>
      <View style={{ marginHorizontal: 35,}}>

      <CustomButton
                btnTitle="Get Started"
                backgroundColor={Color.WhiteSmoke}
                color={Color.Black}
                onPress={() => navigation.navigate('Home')}
                />
                </View>
    </ScrollView>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  textType1: {
    textAlign: 'center',
    color: Color.white,
    fontSize: 14,
    fontFamily: 'Circular Std Medium',
  },
  textType2: {
    textAlign: 'center',
    color: Color.white,
    fontSize: 26,
    fontFamily: 'Circular Std Medium',
  },
});

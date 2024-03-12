import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Color} from '../../Constant';

const OnBoarding = ({navigation}:any) => {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      scrollEnabled={false}
      style={{ backgroundColor: '#5B56FB' }}>
      <View style={{ marginTop: 40 }}></View>
      <View style={{ alignItems: 'flex-end' }}>
        <TouchableOpacity
        activeOpacity={0.8}
        onPress={()=>navigation.navigate('GetStarted')}
          style={{
            marginHorizontal: 32,
            backgroundColor: Color.whiteLite,
            width: 60,
            borderRadius: 30,
            height: 26,
            justifyContent: 'center',
          }}>
          <Text style={styles.textType1}>Skip</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 40 }}></View>
      <View style={{ alignItems: 'center' }}>
        <Image
          source={require('../../Images/ONB1.png')}
          resizeMode="contain"
          style={{ width: Dimensions.get('screen').width }}
        />
      </View>
      <View style={{ alignItems: 'center', top: -45 }}>
        <Text
          style={[
            styles.textType1,
            { fontFamily: 'Circular Std Medium', lineHeight: 26 },
          ]}>
          Accelerate
        </Text>
        <Text
          style={[
            styles.textType1,
            { fontFamily: 'Circular Std Medium', fontSize: 18 },
          ]}>
          Your Child's Success
        </Text>
      </View>
      <View style={{ top: -30 }}>
        <Text
          style={[
            styles.textType1,
            {
              fontFamily: 'Circular Std Medium',
              lineHeight: 18,
              textAlign: 'center',
            },
          ]}>
          Effortless Tutor Matching, Secure Payments, and User-Friendly
          Interface for Seamless Learning
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          marginHorizontal: 32,
        }}>
        <View
          style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={require('../../Images/Pagination.png')}
            resizeMode="contain"
          />
          <View style={{ marginLeft: 70 }}>
            <TouchableOpacity onPress={()=>navigation.navigate('OnBoardingTwo')}>
            <Image
              source={require('../../Images/NextButton.png')}
              resizeMode="contain"
              style={{width:50, height:50}}
              />
              </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  textType1: {
    textAlign: 'center',
    color: Color.white,
    fontSize: 14,
    fontFamily: 'Circular Std Bold',
  },
});

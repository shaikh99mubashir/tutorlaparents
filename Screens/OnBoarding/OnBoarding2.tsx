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

const OnBoarding2 = ({navigation}: any) => {
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      scrollEnabled={false}
      style={{backgroundColor: Color.Primary}}>
      <View style={{marginTop: 40}}></View>
      <View style={{alignItems: 'flex-end'}}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('GetStarted')}
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
      <View style={{marginTop: 40}}></View>
      <View style={{alignItems: 'center'}}>
        <Image
          source={require('../../Images/ONB2.png')}
          resizeMode="contain"
          style={{width: Dimensions.get('screen').width}}
        />
      </View>
      <View style={{alignItems: 'center', top: -45}}>
        <Text
          style={[
            styles.textType1,
            {fontFamily: 'Circular Std Medium', lineHeight: 26},
          ]}>
          Ensuring 
        </Text>
        <Text
          style={[
            styles.textType1,
            {fontFamily: 'Circular Std Medium', fontSize: 18},
          ]}>
         Top-Quality Education
        </Text>
      </View>
      <View style={{top: -30}}>
        <View style={{marginHorizontal:35}}>   
        <Text
          style={[
            styles.textType1,
            {
              fontFamily: 'Circular Std Medium',
              lineHeight: 18,
              textAlign: 'center',
            },
          ]}>
          Thoroughly Vetted Tutors with Background Checks for Your Child's Best Learning Experience
        </Text>
        </View>
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal:35
        }}>
        <TouchableOpacity
        activeOpacity={0.8}
          onPress={() => navigation.navigate('OnBoarding')}>
          <Image
            source={require('../../Images/BackButtonG.png')}
            resizeMode="contain"
            style={{width: 50, height: 50}}
          />
        </TouchableOpacity>
        <Image
          source={require('../../Images/Pagination2.png')}
          resizeMode="contain"
        />
        <TouchableOpacity
        activeOpacity={0.8}
          onPress={() => navigation.navigate('OnBoardingThree')}>
          <Image
            source={require('../../Images/btngreen.png')}
            resizeMode="contain"
            style={{width: 50, height: 50}}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default OnBoarding2;

const styles = StyleSheet.create({
  textType1: {
    textAlign: 'center',
    color: Color.white,
    fontSize: 14,
    fontFamily: 'Circular Std Bold',
  },
});

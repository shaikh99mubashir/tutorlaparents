import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Color } from '../../Constant'

const OnBoarding3 = ({navigation}:any) => {
  return (
    <ScrollView
    contentContainerStyle={{ flexGrow: 1 }}
    scrollEnabled={false}
    style={{ backgroundColor: Color.Yellow }}>
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
        source={require('../../Images/ONB3.png')}
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
        20,000+ 
      </Text>
      <Text
        style={[
          styles.textType1,
          { fontFamily: 'Circular Std Medium', fontSize: 18 },
        ]}>
        Satisfied Family and Counting
      </Text>
    </View>
    <View style={{ top: -30,marginHorizontal:35 }}>
        
      <Text
        style={[
          styles.textType1,
          {
            fontFamily: 'Circular Std Medium',
            lineHeight: 18,
            textAlign: 'center',
          },
        ]}>
        Experience the Trusted and Reliable Way to Find Quality Tutors for Your Child's Academic Journey
      </Text>
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
          onPress={() => navigation.navigate('OnBoarding2')}>
          <Image
            source={require('../../Images/BackButtony.png')}
            resizeMode="contain"
            style={{width: 50, height: 50}}
          />
        </TouchableOpacity>
        <Image
          source={require('../../Images/Pagination3.png')}
          resizeMode="contain"
        />
        <TouchableOpacity
        activeOpacity={0.8}
          onPress={() => navigation.navigate('GetStarted')}>
          <Image
            source={require('../../Images/NextButtony.png')}
            resizeMode="contain"
            style={{width: 50, height: 50}}
          />
        </TouchableOpacity>
      </View>
  </ScrollView>
  )
}

export default OnBoarding3

const styles = StyleSheet.create({
    textType1: {
        textAlign: 'center',
        color: Color.white,
        fontSize: 14,
        fontFamily: 'Circular Std Bold',
      },
})
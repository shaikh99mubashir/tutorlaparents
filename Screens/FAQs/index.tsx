import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../Components/Header'
import { Color } from '../../Constant'
import { Image } from 'react-native'

const FAQs = ({navigation}:any) => {
  return (
    <View
    style={{
      backgroundColor: Color.GhostWhite,
      height: '100%',
      paddingHorizontal: 25,
    }}>
    <Header goBack title="FAQs" navigation={navigation} />
    <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled>
    <View style={{margin: 10}}></View>
    <Text style={[styles.textType3,{textAlign:'center'}]}>What do you want to know?</Text>
    <View style={{margin: 8}}></View>
    <Text style={[styles.textType1,{textAlign:'center', fontFamily: 'Circular Std Bold',}]}>Some of the most Frequently Asked Questions</Text>
    <View style={{margin: 15}}></View>
    <View>
        <Image source={require('../../Images/faq1.png')}/>
    </View>
    <View style={{margin: 15}}></View>
        </ScrollView>
    </View>
  )
}

export default FAQs

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
        lineHeight: 24,
        fontStyle: 'normal',
      },
})
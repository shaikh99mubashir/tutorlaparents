import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Header from '../../Components/Header';
import {Color} from '../../Constant';
import CustomButton from '../../Components/CustomButton';
import Feather from 'react-native-vector-icons/Feather';
const InviteFriends = ({navigation}: any) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Color.GhostWhite,
        paddingHorizontal: 25,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          goBack
          title="Refer a Friend"
          navigation={navigation}
          color={Color.GhostWhite}
        />
        <Text
          style={[
            styles.textType2,
            {color: Color.Primary, textAlign: 'center', marginVertical: 15},
          ]}>
          Get RM150!
        </Text>
        <View style={{margin: 20}}></View>
        <Image source={require('../../Images/ReferFriend.png')} />
        <View style={{margin: 10}}></View>
        <Text
          style={[
            styles.textType2,
            {textAlign: 'center', marginVertical: 15, lineHeight: 35},
          ]}>
          Invite a New User and Receive a Credit of RM150.
        </Text>
        <View style={{margin: 10}}></View>
        <View style={{marginHorizontal: 55}}>
          <CustomButton btnTitle="Invite" />
        </View>
        <Text
          style={[
            styles.textType1,
            {color: Color.DustyGrey, textAlign: 'center', marginVertical: 15},
          ]}>
          Share to your friend by using these
        </Text>
        <View style={{margin: 2}}></View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <Image source={require('../../Images/Whatsapp.png')} />
          <Image source={require('../../Images/Mail.png')} />
          <Image source={require('../../Images/Instagram.png')} />
          <Image source={require('../../Images/link.png')} />
        </View>
        <View style={{margin: 20}}></View>
        <TouchableOpacity
          onPress={() => navigation.navigate('MyReferralEarnings')}
          activeOpacity={0.8}
          style={{
            backgroundColor: Color.Primary,
            borderRadius: 20,
            padding: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
            <View style={{top: -9}}>
              <Feather name="dollar-sign" color={Color.white} size={18} />
            </View>
            <View>
              <Text
                style={[
                  styles.textType1,
                  {color: Color.white, fontFamily: 'Circular Std Bold'},
                ]}>
                My Earnings
              </Text>
              <View style={{margin: 2}}></View>
              <Text
                style={[
                  styles.textType1,
                  {color: Color.white, fontFamily: 'Circular Std Book'},
                ]}>
                Check your referral earnings
              </Text>
            </View>
          </View>
          <Feather name="arrow-right" color={Color.white} size={22} />
        </TouchableOpacity>
        <View style={{margin: 20}}></View>
      </ScrollView>
    </View>
  );
};

export default InviteFriends;

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
});

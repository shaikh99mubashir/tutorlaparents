import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Color} from '../../Constant';
import Octicons from 'react-native-vector-icons/Octicons';
import Video from 'react-native-video';
import CustomButton from '../../Components/CustomButton';
import RNVideo from '../../Components/RNVideo';

const TutorRequestAppliedStatus = ({navigation}:any) => {
  return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          height: '100%',
          backgroundColor: Color.GhostWhite,
          paddingHorizontal: 25,
        }}>
        <View style={{margin: 40}}></View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Image source={require('../../Images/LOGO-black.png')} />
        </View>
        <View style={{margin: 10}}></View>
        <View
          style={{
            backgroundColor: Color.Primary,
            padding: 20,
            borderRadius: 20,
            flexDirection: 'row',
            gap: 10,
          }}>
          <Octicons name="check-circle-fill" size={28} color={Color.white} />
          <Text
            style={[
              styles.textType1,
              {color: Color.white, width: '90%', lineHeight: 24},
            ]}>
            Request submitted! Check email or Tutor Request page in 24 hours for
            a list of applying tutors.
          </Text>
        </View>
        <View style={{margin: 10}}></View>
        <Text style={[styles.textType2, {textAlign: 'center', lineHeight: 28}]}>
          Watch <Text style={{color: Color.Primary}}>Mrs. Sara William</Text>{' '}
          Testimony’s Full Video:
        </Text>
        <View style={{margin: 10}}></View>
        <RNVideo/>
        {/* <View style={styles.container}>
          <Video
            source={{
              uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            }}
            style={styles.video}
            controls={true}
            resizeMode="contain"
            posterResizeMode="cover"
          />
        </View> */}
        <View style={{margin: 15}}></View>
        <CustomButton
              btnTitle="Home"
              backgroundColor={Color.WhiteSmoke}
              color={Color.Black}
              onPress={() => navigation.replace('BottomNav')}
            />
            <View style={{margin: 10}}></View>
            <CustomButton
              btnTitle="Make Tutor Request"
              onPress={() => navigation.replace('TutorRequest')}
            />
      </ScrollView>
    </View>
  );
};

export default TutorRequestAppliedStatus;

const styles = StyleSheet.create({
  textType1: {
    color: Color.Black,
    fontSize: 17,
    fontFamily: 'Circular Std Medium',
  },
  textType2: {
    color: Color.Black,
    fontSize: 22,
    fontFamily: 'Circular Std Medium',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: 200,
    borderRadius: 20,
    overflow: 'hidden',
  },
});

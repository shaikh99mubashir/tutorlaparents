import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color} from '../../Constant';
import Header from '../../Components/Header';
import {Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {FlatList} from 'react-native';
import CustomButton from '../../Components/CustomButton';
const StudentList = ({navigation}:any) => {
  const data = [
    {
      id: 1,
      name: 'Nurulain Kassim',
      dateOfBirth: '13 December 2012',
      preferredTutor: 'Male',
      specialNeeds: 'Dyscalculia',
    },
    {
      id: 2,
      name: 'Nurulain Kassim',
      dateOfBirth: '13 December 2012',
      preferredTutor: 'Male',
      specialNeeds: 'Dyscalculia',
    },
    // Add more data items if needed
  ];

  const renderItem = ({item}: any) => (
    <View
      style={{
        backgroundColor: Color.white,
        padding: 20,
        borderRadius: 16,
        marginBottom: 20,
      }}>
      <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
        <Image source={require('../../Images/studenticon.png')} />
        <Text style={[styles.textType2, {fontSize: 20}]}>{item.name}</Text>
      </View>
      <View style={{paddingVertical: 20}}>
        <InfoRow label="Date of Birth" value={item.dateOfBirth} />
        <InfoRow label="Pref. Tutor" value={item.preferredTutor} />
        <InfoRow label="Special Needs" value={item.specialNeeds} />
      </View>
    </View>
  );

  const InfoRow = ({label, value}: any) => (
    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          gap: 10,
        }}>
        <AntDesign name="calendar" size={20} color={Color.Primary} />
        <Text
          style={[
            styles.textType1,
            {
              fontFamily: 'Circular Std Book',
              color: Color.IronsideGrey,
              fontSize: 16,
            },
          ]}>
          {label}
        </Text>
      </View>
      <Text
        style={[styles.textType1, {fontSize: 16, textTransform: 'capitalize'}]}>
        {value}
      </Text>
    </View>
  );
  return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          height: '100%',
          backgroundColor: Color.GhostWhite,
          paddingHorizontal: 25,
        }}>
        <Header goBack title="Student List" navigation={navigation}/>
        {/* <View
          style={{backgroundColor: Color.white, padding: 20, borderRadius: 16}}>
          <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
            <Image source={require('../../Images/studenticon.png')} />
            <Text style={[styles.textType2, {fontSize: 20}]}>
              Nurulain Kassim
            </Text>
          </View>
          <View
            style={{
              paddingVertical: 20,
            }}>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  gap: 10,
                }}>
                <AntDesign name="calendar" size={20} color={Color.Primary} />
                <Text
                  style={[
                    styles.textType1,
                    {
                      fontFamily: 'Circular Std Book',
                      color: Color.IronsideGrey,
                      fontSize: 16,
                    },
                  ]}>
                  Date of Birth
                </Text>
              </View>
              <Text
                style={[
                  styles.textType1,
                  {fontSize: 16, textTransform: 'capitalize'},
                ]}>
                13 December 2012
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  gap: 10,
                }}>
                <FontAwesome
                  name="transgender"
                  size={18}
                  color={Color.Primary}
                />
                <Text
                  style={[
                    styles.textType1,
                    {
                      fontFamily: 'Circular Std Book',
                      color: Color.IronsideGrey,
                      fontSize: 15,
                    },
                  ]}>
                  Pref. Tutor
                </Text>
              </View>
              <Text
                style={[
                  styles.textType1,
                  {fontSize: 16, textTransform: 'capitalize'},
                ]}>
                Male
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  gap: 15,
                }}>
                <MaterialIcons
                  name="event-note"
                  size={18}
                  color={Color.Primary}
                />
                <Text
                  style={[
                    styles.textType1,
                    {
                      fontFamily: 'Circular Std Book',
                      color: Color.IronsideGrey,
                      fontSize: 15,
                    },
                  ]}>
                  Special Needs
                </Text>
              </View>
              <Text
                style={[
                  styles.textType1,
                  {fontSize: 16, textTransform: 'uppercase'},
                ]}>
                Dyscalculia
              </Text>
            </View>
          </View>
        </View> */}
        {data.length > 0 ? (
          <>
            <View>
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
              />
            </View>
            <View style={{margin: 15}}></View>
            <Text
              style={[
                styles.textType2,
                {
                  color: Color.IronsideGrey,
                  textAlign: 'center',
                  fontSize: 18,
                  lineHeight: 25,
                },
              ]}>
              Want to Ad another Student? {'\n'} Let’s get those classes
              scheduled!
            </Text>
            <View style={{margin: 10}}></View>
            <CustomButton btnTitle="Request New Tutor" />
          </>
        ) : (
            <>
          <View style={{alignItems:'center', justifyContent:'center',marginTop:'30%'}}>
          <Image source={require('../../Images/emptystudent.png')}/>
          <View style={{margin: 15}}></View>
            <Text
              style={[
                styles.textType2,
                {
                  color: Color.IronsideGrey,
                  textAlign: 'center',
                  fontSize: 18,
                  lineHeight: 25,
                },
              ]}>
              Want to Ad another Student? {'\n'} Let’s get those classes
              scheduled!
            </Text>
            <View style={{margin: 10}}></View>
          </View>
            <CustomButton btnTitle="Request New Tutor" />
            </>
        )}
      </ScrollView>
    </View>
  );
};

export default StudentList;

const styles = StyleSheet.create({
  textType1: {
    color: Color.Black,
    fontSize: 17,
    fontFamily: 'Circular Std Medium',
  },
  textType2: {
    color: Color.Black,
    fontSize: 26,
    fontFamily: 'Circular Std Medium',
  },
});

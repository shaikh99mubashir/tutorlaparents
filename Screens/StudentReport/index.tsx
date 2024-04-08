import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Color} from '../../Constant';
import Header from '../../Components/Header';
import SearchBar from '../../Components/SearchBar';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomButton from '../../Components/CustomButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {FlatList} from 'react-native';

const StudentReport = ({navigation}: any) => {
  const data = [
    {
      id: '1',
      reportType: 'Progress Report',
    },
    {
      id: '2',
      reportType: 'Evaluation Report',
    },
    {
      id: '3',
      reportType: 'Evaluation Report',
    },
  ];

  const handleItemPress = (item: any) => {
   navigation.navigate('ProgressReport');
  };

  const renderItem = ({item}: any) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => handleItemPress(item)}
        style={{marginBottom: 15}}>
        <View
          style={{
            borderRadius: 20,
            marginBottom: 0,
            paddingHorizontal: 20,
            paddingVertical: 10,
            backgroundColor: Color.white,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              borderColor: Color.shinyGrey,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 15,
                width: '100%',
              }}>
              <View>
              <Text
                style={[
                  styles.textType3,
                  {
                    fontFamily: 'Circular Std Bold',
                    backgroundColor: Color.Primary,
                    color: 'white',
                    paddingHorizontal: 12,
                    paddingVertical: 2,
                    borderRadius: 8,
                    textAlign:'center'
                  },
                ]}>
                J9000526
              </Text>
               
                <Text
                  style={[styles.textType1, {lineHeight: 30, fontSize: 18}]}>
                  Mathematics
                </Text>
              </View>
              <View>
                <View
                  style={{
                    backgroundColor: Color.Primary,
                    width: 40,
                    height: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 6,
                  }}>
                  <Entypo name="chevron-right" size={25} color={Color.white} />
                </View>
              </View>
            </View>
          </View>

          <View style={{margin: 4}}></View>
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
                gap: 8,
              }}>
              <FontAwesome name="user-o" size={16} color={Color.Primary} />
              <Text
                style={[
                  styles.textType3,
                  {
                    fontFamily: 'Circular Std Book',
                    color: Color.IronsideGrey,
                    fontSize: 16,
                  },
                ]}>
                Tutor
              </Text>
            </View>
            <Text
              style={[
                styles.textType1,
                {fontSize: 16, textTransform: 'capitalize'},
              ]}>
              Shahrizal Nor
            </Text>
          </View>
          <View style={{margin: 4}}></View>
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
                gap: 5,
              }}>
              <MaterialCommunityIcons
                name="check-underline-circle-outline"
                size={18}
                color={Color.Primary}
              />
              <Text
                style={[
                  styles.textType3,
                  {
                    fontFamily: 'Circular Std Book',
                    color: Color.IronsideGrey,
                    fontSize: 16,
                  },
                ]}>
                Month
              </Text>
            </View>
            <Text
              style={[
                styles.textType1,
                {fontSize: 16, textTransform: 'capitalize'},
              ]}>
              29 January 2024
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        backgroundColor: Color.GhostWhite,
        height: '100%',
      }}>
      <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled>
        <View style={{paddingHorizontal: 25, marginBottom: 0}}>
          <Header title={'Student Reports'} goBack navigation={navigation} />
          <View style={{margin: 10}}></View>
          <View>
            <SearchBar />
            <View style={{margin: 10}}></View>
            <View>
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                nestedScrollEnabled
              />
            </View>
          </View>
        </View>
        <View style={{margin: 20}}></View>
      </ScrollView>
    </View>
  );
};

export default StudentReport;

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

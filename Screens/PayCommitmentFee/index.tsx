import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color} from '../../Constant';
import Header from '../../Components/Header';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from '../../Components/CustomButton';

const PayCommitmentFee = ({navigation}: any) => {
  return (
    <View
      style={{
        backgroundColor: Color.GhostWhite,
        height: '100%',
        paddingHorizontal: 25,
      }}>
      <Header goBack title="Commitment Fee" navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled>
        <View style={{margin: 8}}></View>
        <View
          style={{
            borderWidth: 0.8,
            borderRadius: 20,
            marginBottom: 10,
            padding: 20,
            borderColor: Color.shinyGrey,
            backgroundColor: Color.white,
          }}>
          <View
            style={{
              width: '100%',
              borderColor: Color.shinyGrey,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
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
                  },
                ]}>
                J00000001
              </Text>
              <View style={{flexDirection: 'column'}}>
                <View
                  style={{alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                  <Text
                    style={[
                      styles.textType3,
                      {
                        color: Color.Primary,
                        backgroundColor: Color.lightPrimary,
                        // color:
                        //   item.mode == 'online'
                        //     ? Color.DodgerBlue
                        //     : Color.Primary,
                        // backgroundColor:
                        //   item.mode == 'online'
                        //     ? '#298CFF33'
                        //     : Color.lightPrimary,
                        paddingVertical: 5,
                        paddingHorizontal: 15,
                        borderRadius: 30,
                        textTransform: 'capitalize',
                      },
                    ]}>
                    Physical
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                marginTop: 2,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={[styles.textType1, {fontSize: 20}]}>
                Zaharah Akhir
              </Text>
              {/* {item?.mode == 'Physical' && ( */}
              <View
                style={{
                  flexDirection: 'row',
                  gap: 5,
                  alignItems: 'center',
                }}>
                <Feather name="map-pin" size={14} color={'#003E9C'} />
                <Text
                  style={[
                    styles.textType3,
                    {
                      color: '#003E9C',
                      fontFamily: 'Circular Std Book',
                      fontSize: 15,
                    },
                  ]}>
                  Klang, Selangor
                </Text>
              </View>
              {/* )} */}
            </View>
          </View>
          <View
            style={{
              borderWidth: 0.8,
              borderColor: Color.LightPattensBlue,
              marginTop: 20,
            }}></View>
          <View style={{margin: 10}}></View>
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
              <AntDesign name="copy1" size={20} color={Color.Primary} />
              <Text
                style={[
                  styles.textType3,
                  {
                    fontFamily: 'Circular Std Book',
                    color: Color.IronsideGrey,
                  },
                ]}>
                Subject
              </Text>
            </View>
            <Text
              style={[
                styles.textType1,
                {fontSize: 18, textTransform: 'capitalize'},
              ]}>
              Methamatics
            </Text>
          </View>
          <View style={{margin: 6}}></View>
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
              <AntDesign name="copy1" size={20} color={Color.Primary} />
              <Text
                style={[
                  styles.textType3,
                  {
                    fontFamily: 'Circular Std Book',
                    color: Color.IronsideGrey,
                  },
                ]}>
                No.of.Session
              </Text>
            </View>
            <Text
              style={[
                styles.textType1,
                {fontSize: 18, textTransform: 'capitalize'},
              ]}>
              3 Session per Month
            </Text>
          </View>
          <View style={{margin: 6}}></View>
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
              <AntDesign name="copy1" size={20} color={Color.Primary} />
              <Text
                style={[
                  styles.textType3,
                  {
                    fontFamily: 'Circular Std Book',
                    color: Color.IronsideGrey,
                  },
                ]}>
                Duration
              </Text>
            </View>
            <Text
              style={[
                styles.textType1,
                {fontSize: 18, textTransform: 'capitalize'},
              ]}>
              1 Month
            </Text>
          </View>
        </View>
        <View style={{margin: 6}}></View>
        <View
          style={{
            borderWidth: 0.8,
            borderRadius: 20,
            marginBottom: 10,
            padding: 20,
            borderColor: Color.shinyGrey,
            backgroundColor: Color.white,
          }}>
          <View
            style={{
              width: '100%',
              borderColor: Color.shinyGrey,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={[styles.textType1, {fontSize: 20}]}>
                Seri Jaafar
              </Text>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 2}}>
                <MaterialCommunityIcons
                  name="star"
                  size={20}
                  color={Color.Yellow}
                />
                <Text style={[styles.textType3, {fontSize: 20}]}>4.4</Text>
              </View>
            </View>
            <View
              style={{
                marginTop: 2,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={[
                  styles.textType3,
                  {
                    fontSize: 16,
                    color: Color.Primary,
                    fontFamily: 'Circular Std Book',
                  },
                ]}>
                Member Since Mar 2019
              </Text>
              <View style={{top: -2}}>
                <Text
                  style={[
                    styles.textType3,
                    {fontSize: 16, color: Color.IronsideGrey},
                  ]}>
                  (397)
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              borderWidth: 0.8,
              borderColor: Color.LightPattensBlue,
              marginTop: 20,
            }}></View>
          <View style={{margin: 10}}></View>
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
              <AntDesign name="copy1" size={20} color={Color.Primary} />
              <Text
                style={[
                  styles.textType3,
                  {
                    fontFamily: 'Circular Std Book',
                    color: Color.IronsideGrey,
                  },
                ]}>
                Subject
              </Text>
            </View>
            <Text
              style={[
                styles.textType1,
                {fontSize: 18, textTransform: 'capitalize'},
              ]}>
              Methamatics
            </Text>
          </View>
          <View style={{margin: 6}}></View>
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
              <AntDesign name="copy1" size={20} color={Color.Primary} />
              <Text
                style={[
                  styles.textType3,
                  {
                    fontFamily: 'Circular Std Book',
                    color: Color.IronsideGrey,
                  },
                ]}>
                Level
              </Text>
            </View>
            <Text
              style={[
                styles.textType1,
                {fontSize: 18, textTransform: 'uppercase'},
              ]}>
              IGCSE
            </Text>
          </View>
        </View>
        <View style={{margin: 6}}></View>
        <View
          style={{
            backgroundColor: Color.Primary,
            borderRadius: 20,
            padding: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
            <Feather name="dollar-sign" color={Color.white} size={18} />
            <Text style={[styles.textType3, {color: Color.white}]}>
              Commitment Fees
            </Text>
          </View>
          <Text style={[styles.textType1, {color: Color.white}]}>RM210</Text>
        </View>
        <View style={{margin: 15}}></View>
        <CustomButton
          btnTitle="Pay Now"
          onPress={() => navigation.navigate('PaymentGateway')}
        />
      </ScrollView>
    </View>
  );
};

export default PayCommitmentFee;

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
});

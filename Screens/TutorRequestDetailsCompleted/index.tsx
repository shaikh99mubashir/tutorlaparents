import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color} from '../../Constant';
import Header from '../../Components/Header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const TutorRequestDetailsCompleted = ({navigation, route}: any) => {
  const data = route.params;
  console.log('data', data);

  return (
    <View
      style={{
        paddingHorizontal: 25,
        backgroundColor: Color.GhostWhite,
        height: '100%',
      }}>
      <Header title={data.jtuid} goBack navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
      {/* Upper Green Box */}

      <View
        style={{
          backgroundColor: Color.Primary,
          paddingHorizontal: 20,
          paddingVertical: 20,
          borderRadius: 16,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={[
              styles.textType3,
              {
                backgroundColor: Color.white,
                color: Color.Primary,
                paddingVertical: 5,
                paddingHorizontal: 15,
                borderRadius: 16,
                fontFamily: 'Circular Std Bold',
              },
            ]}>
            {data.jtuid}
          </Text>
          <Text
            style={[
              styles.textType3,
              {
                backgroundColor: Color.whiteLite,
                color: Color.white,
                paddingVertical: 5,
                paddingHorizontal: 15,
                borderRadius: 16,
                textTransform: 'capitalize',
                fontFamily: 'Circular Std Bold',
              },
            ]}>
            Physical
          </Text>
        </View>
        <View style={{paddingVertical: 10, paddingHorizontal: 5}}>
          <Text
            style={[
              styles.textType3,
              {
                color: Color.white,
                textTransform: 'capitalize',
                fontFamily: 'Circular Std Medium',
                fontSize: 18,
              },
            ]}>
            Science
          </Text>
        </View>
        <View
          style={{
            borderWidth: 0.3,
            borderColor: Color.lineColor,
            marginVertical: 8,
          }}></View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 5,
            marginTop: 8,
          }}>
          <MaterialCommunityIcons
            name="check-underline-circle"
            size={25}
            color={Color.white}
          />
          <Text
            style={[
              styles.textType3,
              {
                color: Color.white,

                fontFamily: 'Circular Std Medium',
                fontSize: 16,
              },
            ]}>
            Completed on 17 Feb 2024
          </Text>
        </View>
      </View>

      {/* Tutor Detail */}
      <View
        style={{
          backgroundColor: Color.white,
          paddingHorizontal: 20,
          paddingVertical: 20,
          borderRadius: 16,
          marginTop: 20,
        }}>
        <Text
          style={[
            styles.textType3,
            {
              color: Color.IronsideGrey,
              fontFamily: 'Circular Std Book',
              fontSize: 15,
            },
          ]}>
          Tutor Details:
        </Text>
        <View style={{marginVertical: 10}}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
            <Image
              source={require('../../Images/BGEvent.png')}
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                borderWidth: 2,
                borderColor: Color.Primary,
              }}
            />
            <View style={{top: 5}}>
              <Text
                style={[styles.textType1, {fontFamily: 'Circular Std Bold'}]}>
                Yunus Yusuf
              </Text>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 2}}>
                <MaterialCommunityIcons
                  name="star"
                  size={25}
                  color={Color.star}
                />
                <Text style={[styles.textType3, {fontSize: 20}]}>4.5</Text>
                <Text
                  style={[
                    styles.textType3,
                    {fontSize: 16, color: Color.IronsideGrey},
                  ]}>
                  (121)
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Student Detail */}
      <View
        style={{
          backgroundColor: Color.white,
          paddingHorizontal: 20,
          paddingVertical: 20,
          borderRadius: 16,
          marginTop: 20,
        }}>
        <Text
          style={[
            styles.textType3,
            {
              color: Color.IronsideGrey,
              fontFamily: 'Circular Std Book',
              fontSize: 15,
            },
          ]}>
          Student Details:
        </Text>
        <View style={{marginVertical: 10}}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
            <Image source={require('../../Images/studentDetail.png')} />
            <View>
              <Text
                style={[
                  styles.textType1,
                  {fontFamily: 'Circular Std Medium', fontSize: 20},
                ]}>
                Shahrizal Nor
              </Text>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 2}}>
                <Text
                  style={[
                    styles.textType3,
                    {fontSize: 16, color: Color.IronsideGrey},
                  ]}>
                  Male, (24 y/o)
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      {/* No of session & Duration*/}
      <View
        style={{flexDirection: 'row', justifyContent: 'space-between', gap: 5}}>
        <View
          style={{
            backgroundColor: Color.white,
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 16,
            marginTop: 20,
            width: '58%',
          }}>
          <View style={{marginVertical: 10}}>
            <View>
              <Image source={require('../../Images/noofsession.png')} />
              <View style={{marginTop: 5}}>
                <Text
                  style={[
                    styles.textType3,
                    {fontSize: 16, color: Color.IronsideGrey},
                  ]}>
                  No.of Session:
                </Text>
                <Text style={[styles.textType3]}>4 Session Per Month</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: Color.white,
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 16,
            marginTop: 20,
            width: '40%',
          }}>
          <View style={{marginVertical: 10}}>
            <View>
              <Image source={require('../../Images/Duration.png')} />
              <View style={{marginTop: 5}}>
                <Text
                  style={[
                    styles.textType3,
                    {fontSize: 16, color: Color.IronsideGrey},
                  ]}>
                  Duration:
                </Text>
                <Text style={[styles.textType3]}>1 Month</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

       {/* Time Total classes Time*/}
       <View
        style={{flexDirection: 'row', justifyContent: 'space-between', gap: 5}}>
        <View
          style={{
            backgroundColor: Color.white,
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 16,
            marginTop: 20,
            width: '53%',
          }}>
          <View style={{marginVertical: 10}}>
            <View>
              <Image source={require('../../Images/Time.png')} />
              <View style={{marginTop: 5}}>
                <Text
                  style={[
                    styles.textType3,
                    {fontSize: 16, color: Color.IronsideGrey},
                  ]}>
                 Time
                </Text>
                <Text style={[styles.textType3]}>03:00PM-04:00PM</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: Color.white,
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 16,
            marginTop: 20,
            width: '45%',
          }}>
          <View style={{marginVertical: 10}}>
            <View>
              <Image source={require('../../Images/Time.png')} />
              <View style={{marginTop: 5}}>
                <Text
                  style={[
                    styles.textType3,
                    {fontSize: 16, color: Color.IronsideGrey},
                  ]}>
                  Total Class Time:
                </Text>
                <Text style={[styles.textType3]}>4 Hours</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

        {/* Time Total classes Time*/}
        <View
        style={{flexDirection: 'row', justifyContent: 'space-between', gap: 5}}>
        <View
          style={{
            backgroundColor: Color.white,
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 16,
            marginTop: 20,
            width: '58%',
          }}>
          <View style={{marginVertical: 10}}>
            <View>
              <Image source={require('../../Images/report.png')} />
              <View style={{marginTop: 5}}>
                <Text
                  style={[
                    styles.textType3,
                    {fontSize: 16, color: Color.IronsideGrey},
                  ]}>
                Progress Report:
                </Text>
                <Text style={[styles.textType3]}>Average Score: 87.4%</Text>
                <View style={{flexDirection:"row", alignItems:'center', marginVertical:10}}>

                
                <Text
              style={[
                styles.textType3,
                {color: Color.BrightBlue, fontFamily: 'Circular Std Medium'},
              ]}>
              View All
            </Text>
            <Entypo name="chevron-small-right" size={25} color={Color.BrightBlue} />
            </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: Color.white,
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 16,
            marginTop: 20,
            width: '40%',
            height: 140,
          }}>
          <View style={{marginVertical: 10}}>
            <View>
              <Image source={require('../../Images/loc.png')} />
              <View style={{marginTop: 5}}>
                <Text
                  style={[
                    styles.textType3,
                    {fontSize: 16, color: Color.IronsideGrey},
                  ]}>
                 Location:
                </Text>
                <Text style={[styles.textType3]}>Kuala Lumpur</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={{margin:20}}></View>
      </ScrollView>
    </View>
  );
};

export default TutorRequestDetailsCompleted;

const styles = StyleSheet.create({
  textType3: {
    color: Color.Dune,
    // fontWeight: '500',
    fontSize: 16,
    fontFamily: 'Circular Std Medium',
  },
  textType1: {
    fontSize: 26,
    color: Color.Black,
    fontFamily: 'Circular Std Medium',
    lineHeight: 24,
  },
});

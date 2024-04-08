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
import Header from '../../Components/Header';
import {Color} from '../../Constant';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ProfileMenu = ({navigation}: any) => {
  return (
    <View
      style={{
        backgroundColor: Color.GhostWhite,
        height: '100%',
      }}>
      <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled>
        <View style={{paddingHorizontal: 25, marginBottom: 20}}>
          <Header title={'Profile'} navigation={navigation} logout />
          <View style={{margin: 25}}></View>
          <View
            style={{
              backgroundColor: Color.BrightBlue,
              paddingVertical: 15,
              paddingHorizontal: 20,
              borderRadius: 20,
              height:200
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 15,
                top: -20,
              }}>
              <View style={{top: -30}}>
                <Image
                  source={require('../../Images/Banner.png')}
                  style={{
                    width: 90,
                    height: 90,
                    borderRadius: 50,
                    borderWidth: 3,
                    borderColor: Color.white,
                  }}
                />
                <View
                  style={{
                    backgroundColor: Color.Primary,
                    borderWidth: 2,
                    borderColor: Color.white,
                    width: 30,
                    height: 30,
                    borderRadius: 30,
                    alignSelf: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: -25,
                    right: -25,
                  }}>
                  <AntDesign name="edit" color={Color.white} size={16} />
                </View>
              </View>
              <View style={{top: -20}}>
                <Text
                  style={[
                    styles.textType1,
                    {lineHeight: 35, fontSize: 24, color: Color.white},
                  ]}>
                  Zahari Shim
                </Text>
                <Text
                  style={[
                    styles.textType3,
                    {fontFamily: 'Circular Std Book', color: Color.white},
                  ]}>
                  shim.zahari@gmail.com
                </Text>
              </View>
            </View>
            <View style={{top:-50}}>
              <Text
                style={[
                  styles.textType3,
                  {fontFamily: 'Circular Std Bold', color: Color.white},
                ]}>
                This Week’s Learning Time
              </Text>
              <View style={{margin: 2}}></View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View>
                  <Text
                    style={[
                      styles.textType1,
                      {fontFamily: 'Circular Std Bold', color: Color.white},
                    ]}>
                    4h 45m
                  </Text>
                  <View style={{margin: 1}}></View>
                  <View style={{flexDirection: 'row', gap: 5, alignItems:"center"}}>
                    <View style={{backgroundColor:'white', borderRadius:30,}}>
                    <MaterialCommunityIcons name='record-circle' size={14} color={Color.Primary}/>
                    </View>
                    <Text
                      style={[
                        styles.textType3,
                        {fontFamily: 'Circular Std Bold', color: Color.white},
                      ]}>
                      Maths
                    </Text>
                  </View>
                </View>
                <Image source={require('../../Images/likebtn.png')} />
              </View>
            </View>
          </View>
        </View>
        
        {/* dashboard */}
        <View style={{paddingHorizontal: 25, marginBottom: 30}}>
          <Text
            style={[
              styles.textType3,
              {
                paddingBottom: 10,
                fontFamily: 'Circular Std Book',
                color: Color.IronsideGrey,
              },
            ]}>
            Dashboard
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Chat')}
            activeOpacity={0.8}
            style={{
              flexDirection: 'row',
              gap: 10,
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <Image source={require('../../Images/chaticon.png')} />
            <Text style={[styles.textType3]}>Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('ParentProfile')}
            style={{
              flexDirection: 'row',
              gap: 10,
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <Image source={require('../../Images/tutorProfile.png')} />
            <Text style={[styles.textType3, ]}>
              Parent Profile
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.replace("Main", {
              screen: "JobTicket",
            })}
            style={{
              flexDirection: 'row',
              gap: 10,
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <Image source={require('../../Images/tutorRequest.png')} />
            <Text style={[styles.textType3,{color: Color.Primary} ]}>
            Tutor Request
            </Text>
          </TouchableOpacity>
         
          <TouchableOpacity
            onPress={() => navigation.navigate('PaymentHistory')}
            activeOpacity={0.8}
            style={{
              flexDirection: 'row',
              gap: 10,
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <Image source={require('../../Images/paymentHistory.png')} />
            <Text style={[styles.textType3]}>Payment History</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('InviteFriends')}
            activeOpacity={0.8}
            style={{
              flexDirection: 'row',
              gap: 10,
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <FontAwesome name='users' color={Color.Dune} size={18}/>
            <Text style={[styles.textType3]}>Invite a Friend</Text>
          </TouchableOpacity>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: Color.lineColor,
              paddingBottom: 20,
            }}></View>
        </View>

        {/* Student */}
        <View style={{paddingHorizontal: 25, marginBottom: 30}}>
          <Text
            style={[
              styles.textType3,
              {
                paddingBottom: 10,
                fontFamily: 'Circular Std Book',
                color: Color.IronsideGrey,
              },
            ]}>
            Students
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('ClassSchedule')}
            activeOpacity={0.8}
            style={{
              flexDirection: 'row',
              gap: 10,
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <Image source={require('../../Images/scheduleoverview.png')} />
            <Text style={[styles.textType3]}>Student Schedule</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('StudentList')}
            style={{
              flexDirection: 'row',
              gap: 10,
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <Image source={require('../../Images/listofStudent.png')} />
            <Text style={[styles.textType3]}>Student List</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('StudentReport')}
            activeOpacity={0.8}
            style={{
              flexDirection: 'row',
              gap: 10,
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <Image source={require('../../Images/studentreporticon.png')} />
            <Text style={[styles.textType3]}>Student Reports</Text>
          </TouchableOpacity>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: Color.lineColor,
              paddingBottom: 20,
            }}></View>
        </View>

        {/* Support */}
        <View style={{paddingHorizontal: 25, marginBottom: 30}}>
          <Text
            style={[
              styles.textType3,
              {
                paddingBottom: 10,
                fontFamily: 'Circular Std Book',
                color: Color.IronsideGrey,
              },
            ]}>
            Support
          </Text>
          <TouchableOpacity
          onPress={() => navigation.navigate('FAQs')}
          activeOpacity={0.9}
            style={{
              flexDirection: 'row',
              gap: 10,
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <Image source={require('../../Images/faqsicon.png')} />
            <Text style={[styles.textType3]}>FAQ's</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              gap: 10,
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <Image source={require('../../Images/supportTicket.png')} />
            <Text style={[styles.textType3]}>Support Ticket</Text>
          </TouchableOpacity>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: Color.lineColor,
              paddingBottom: 20,
            }}></View>
        </View>

        {/* About*/}
        <View style={{paddingHorizontal: 25, marginBottom: 30}}>
          <Text
            style={[
              styles.textType3,
              {
                paddingBottom: 10,
                fontFamily: 'Circular Std Book',
                color: Color.IronsideGrey,
              },
            ]}>
            About
          </Text>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              gap: 10,
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <Image source={require('../../Images/abouticon.png')} />
            <Text style={[styles.textType3]}>About Tutorla</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('TutorlaTermOfServices')}
            style={{
              flexDirection: 'row',
              gap: 10,
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <Image source={require('../../Images/ttsicon.png')} />
            <Text style={[styles.textType3]}>Tutorla Terms of Services</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('TutorlaPrivacyStatement')}
            style={{
              flexDirection: 'row',
              gap: 10,
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <Image source={require('../../Images/dataprotection.png')} />
            <Text style={[styles.textType3]}>Tutorla Privacy Statement</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              gap: 10,
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <Image source={require('../../Images/versionIcon.png')} />
            <Text style={[styles.textType3]}>Versions</Text>
          </TouchableOpacity>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: Color.lineColor,
              paddingBottom: 40,
            }}></View>
        </View>

        {/* Settings */}
        <View style={{paddingHorizontal: 25, marginBottom: 30}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Settings')}
            style={{
              flexDirection: 'row',
              gap: 10,
              paddingVertical: 0,
              alignItems: 'center',
            }}>
            <Image source={require('../../Images/settingsicon.png')} />
            <Text style={[styles.textType3]}>Settings</Text>
          </TouchableOpacity>

          <View
            style={{
              paddingBottom: 20,
            }}></View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileMenu;

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

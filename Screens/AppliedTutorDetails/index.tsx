import {
  Dimensions,
  FlatList,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Color} from '../../Constant';
import Header from '../../Components/Header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const AppliedTutorDetails = ({navigation, route}: any) => {
  const data = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const DATA = [
    {
      id: '1',
      name: 'Yunus Yusuf',
      rating: 4.5,
      reviews: 121,
      description:
        "Hello, I'm Seri Jaafar, a dedicated and passionate educator committed to fostering a positive learning environment with 7 years of experience in the teaching profession",
    },
    {
      id: '2',
      name: 'Yunus Yusuf',
      rating: 4.5,
      reviews: 121,
      description:
        "Hello, I'm Seri Jaafar, a dedicated and passionate educator committed to fostering a positive learning environment with 7 years of experience in the teaching profession",
    },
    {
      id: '3',
      name: 'Yunus Yusuf',
      rating: 4.5,
      reviews: 121,
      description:
        "Hello, I'm Seri Jaafar, a dedicated and passionate educator committed to fostering a positive learning environment with 7 years of experience in the teaching profession",
    },
  ];

  const renderItem = ({item}: any) => (
    <TouchableOpacity
    activeOpacity={0.8}
    onPress={()=> navigation.navigate('TutorProfile')}
      style={{
        backgroundColor: Color.white,
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 16,
        marginTop: 20,
      }}>
      <View
        style={{
          marginVertical: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
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
            <Text style={[styles.textType1, {fontFamily: 'Circular Std Bold'}]}>
              {item.name}
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 2}}>
              <MaterialCommunityIcons
                name="star"
                size={25}
                color={Color.star}
              />
              <Text style={[styles.textType3, {fontSize: 20}]}>
                {item.rating}
              </Text>
              <Text
                style={[
                  styles.textType3,
                  {fontSize: 16, color: Color.IronsideGrey},
                ]}>
                {' '}
                ({item.reviews})
              </Text>
            </View>
          </View>
        </View>
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
      <View style={{marginVertical: 5}}>
        <Text
          style={[
            styles.textType3,
            {
              color: Color.IronsideGrey,
              fontFamily: 'Circular Std Book',
              fontSize: 15,
            },
          ]}>
          {item.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View
      style={{
        paddingHorizontal: 25,
        backgroundColor: Color.GhostWhite,
        height: '100%',
      }}>
      <Header title={'Details'} goBack navigation={navigation} />

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
                textAlign: 'center',
                height: 25,
                width: 100,
                paddingTop: 2,
                borderRadius: 6,
              },
            ]}>
            {data.jtuid}
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setModalVisible(true)}
            style={{
              backgroundColor: Color.whiteLite,
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 5,
              paddingHorizontal: 15,
              borderRadius: 16,
              gap: 3,
            }}>
            <Ionicons
              name="information-circle-outline"
              color={Color.white}
              size={20}
            />
            <Text
              style={[
                styles.textType3,
                {
                  color: Color.white,
                  textTransform: 'capitalize',
                  fontFamily: 'Circular Std Book',
                },
              ]}>
              Details
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{paddingVertical: 10, paddingHorizontal: 0}}>
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
            Mathematics
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 5,
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              gap: 10,
            }}>
            <Fontisto name="user-secret" size={20} color={Color.white} />
            <Text
              style={[
                styles.textType3,
                {
                  fontFamily: 'Circular Std Book',
                  color: Color.white,
                },
              ]}>
              Student
            </Text>
          </View>
          <Text
            style={[
              styles.textType3,
              {textTransform: 'capitalize', color: Color.white},
            ]}>
            Nurulain Kassim
          </Text>
        </View>
        <View style={{margin: 5}}></View>
        <View
          style={{
            borderWidth: 0.3,
            borderColor: Color.lineColor,
            marginVertical: 5,
          }}></View>
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
            <FontAwesome name="user-o" size={18} color={Color.white} />
            <Text
              style={[
                styles.textType3,
                {
                  fontFamily: 'Circular Std Medium',
                  color: Color.white,
                  fontSize: 15,
                },
              ]}>
              13 Tutors Applied
            </Text>
          </View>
          <View>
            <Text
              style={[
                styles.textType3,
                {
                  fontFamily: 'Circular Std Book',
                  color: Color.white,
                  fontSize: 14,
                  textAlign: 'right',
                },
              ]}>
              Posted:
            </Text>
            <Text
              style={[
                styles.textType3,
                {
                  fontFamily: 'Circular Std Book',
                  color: Color.white,
                  fontSize: 15,
                },
              ]}>
              Yesterday
            </Text>
          </View>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            scrollEnabled={true}
          />
        </View>
        <View style={{margin: 20}}></View>
      </ScrollView>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            // justifyContent: 'center',
            paddingTop:40,
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255,0.70)',
            height: '100%',
          }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setModalVisible(!modalVisible)}
            style={{alignSelf: 'flex-end', top: -20, left: -28}}>
            <AntDesign name="closecircleo" size={35} color={Color.Primary} />
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: Color.Primary,
              paddingHorizontal: 20,
              paddingVertical: 20,
              borderRadius: 16,
              width: Dimensions.get('window').width / 1.15,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={[
                  styles.textType3,
                  {
                    backgroundColor: Color.white,
                    color: Color.Primary,
                    textAlign: 'center',
                    height: 25,
                    width: 100,
                    paddingTop: 2,
                    borderRadius: 6,
                  },
                ]}>
                {data.jtuid}
              </Text>

              <Text
                style={[
                  styles.textType3,
                  {
                    backgroundColor: Color.whiteLite,
                    paddingVertical: 5,
                    paddingHorizontal: 15,
                    borderRadius: 16,
                    color: Color.white,
                    textTransform: 'capitalize',
                    fontFamily: 'Circular Std Book',
                  },
                ]}>
                {data.mode}
              </Text>
            </View>
            <View style={{paddingVertical: 10, paddingHorizontal: 0}}>
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
                Mathematics
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 5,
              }}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  gap: 10,
                }}>
                <Fontisto name="user-secret" size={20} color={Color.white} />
                <Text
                  style={[
                    styles.textType3,
                    {
                      fontFamily: 'Circular Std Book',
                      color: Color.white,
                    },
                  ]}>
                  Student
                </Text>
              </View>
              <Text
                style={[
                  styles.textType3,
                  {textTransform: 'capitalize', color: Color.white},
                ]}>
                Nurulain Kassim
              </Text>
            </View>
            <View style={{margin: 5}}></View>
            <View
              style={{
                borderWidth: 0.3,
                borderColor: Color.lineColor,
                marginVertical: 5,
              }}></View>
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
                <FontAwesome name="user-o" size={18} color={Color.white} />
                <Text
                  style={[
                    styles.textType3,
                    {
                      fontFamily: 'Circular Std Medium',
                      color: Color.white,
                      fontSize: 15,
                    },
                  ]}>
                  13 Tutors Applied
                </Text>
              </View>
              <View>
                <Text
                  style={[
                    styles.textType3,
                    {
                      fontFamily: 'Circular Std Book',
                      color: Color.white,
                      fontSize: 14,
                      textAlign: 'right',
                    },
                  ]}>
                  Posted:
                </Text>
                <Text
                  style={[
                    styles.textType3,
                    {
                      fontFamily: 'Circular Std Book',
                      color: Color.white,
                      fontSize: 15,
                    },
                  ]}>
                  Yesterday
                </Text>
              </View>
            </View>
          </View>
          {/* No of session & Duration*/}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: 5,
              width: Dimensions.get('window').width / 1.15,
            }}>
            <View
              style={{
                backgroundColor: Color.Primary,
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 16,
                marginTop: 20,
                width: '47.5%',
              }}>
              <View style={{marginVertical: 10}}>
                <View>
                  <Image source={require('../../Images/sessionw.png')} />
                  <View style={{marginTop: 5}}>
                    <Text
                      style={[
                        styles.textType3,
                        {
                          fontSize: 16,
                          color: Color.white,
                          fontFamily: 'Circular Std Book',
                        },
                      ]}>
                      No.of Session:
                    </Text>
                    <View style={{margin: 2}}></View>
                    <Text
                      style={[
                        styles.textType3,
                        {color: Color.white, fontSize: 18},
                      ]}>
                      3 Sessions{' '}
                    </Text>
                    <Text
                      style={[
                        styles.textType3,
                        {color: Color.white, fontSize: 18},
                      ]}>
                      Per Month{' '}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                backgroundColor: Color.Primary,
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 16,
                marginTop: 20,
                width: '52%',
              }}>
              <View style={{marginVertical: 10}}>
                <View>
                  <Image source={require('../../Images/timew.png')} />
                  <View style={{marginTop: 5}}>
                    <Text
                      style={[
                        styles.textType3,
                        {fontSize: 16, color: Color.white},
                      ]}>
                      Time:
                    </Text>
                    <Text style={[styles.textType3, {color: Color.white}]}>
                      10:00AM-11:30AM
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* Special Need */}
          <View
            style={{
              backgroundColor: Color.Primary,
              paddingHorizontal: 20,
              paddingVertical: 20,
              borderRadius: 16,
              marginTop: 20,
              width: Dimensions.get('window').width / 1.15,
            }}>
            <Image source={require('../../Images/specialneed.png')} />
            <View style={{margin: 5}}></View>
            <Text
              style={[
                styles.textType3,
                {
                  color: Color.white,
                  fontFamily: 'Circular Std Book',
                  fontSize: 15,
                },
              ]}>
              Special Need:
            </Text>
            <View style={{margin: 2}}></View>
            <Text
              style={[
                styles.textType3,
                {
                  color: Color.white,
                  fontFamily: 'Circular Std Book',
                  fontSize: 15,
                  lineHeight: 20,
                },
              ]}>
              This student has dyslexia. Please adjust tutoring strategies
              accordingly.
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AppliedTutorDetails;

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

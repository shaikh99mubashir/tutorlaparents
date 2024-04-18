import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import Header from '../../Components/Header';
import CustomTabView from '../../Components/CustomTabView';
import {Color} from '../../Constant';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from '../../Components/CustomButton';
const JobTicket = ({navigation}: any) => {
  const [currentTab, setCurrentTab]: any = useState([
    {
      index: 0,
      name: 'Latest',
      selected: true,
    },
    {
      index: 1,
      name: 'Applied',
      selected: false,
    },
  ]);

  const activateTab = (index: any) => {
    const newTabs = currentTab.map((e: any) => ({
      ...e,
      selected: e.index === index,
    }));
    console.log('newTabs', newTabs);

    setCurrentTab(newTabs);
  };

  const data = [
    {id: '1', title: 'All', jtuid: 'J9000321', mode: 'online'},
    {id: '2', title: 'Biology', jtuid: 'J9000321', mode: 'Physical'},
    {id: '3', title: 'Mathematics', jtuid: 'J9000321', mode: 'online'},
    {id: '4', title: 'Bahasa Melayu', jtuid: 'J9000321', mode: 'online'},
    {id: '5', title: 'English ', jtuid: 'J9000321', mode: 'online'},
  ];
  const firstRoute = useCallback(() => {
    const renderTicketData = ({item}: any) => {
      return (
        <TouchableOpacity
          onPress={() => navigation.navigate('AppliedTutorDetails', item)}
          activeOpacity={0.8}
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
                {item?.jtuid}
              </Text>
              <View style={{flexDirection: 'column'}}>
                <View
                  style={{alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                  <Text
                    style={[
                      styles.textType3,
                      {
                        color:
                          item.mode == 'online'
                            ? Color.DodgerBlue
                            : Color.Primary,
                        backgroundColor:
                          item.mode == 'online'
                            ? '#298CFF33'
                            : Color.lightPrimary,
                        paddingVertical: 5,
                        paddingHorizontal: 15,
                        borderRadius: 30,
                        textTransform: 'capitalize',
                      },
                    ]}>
                    {item?.mode}
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
                Mathematics
              </Text>
              {item?.mode == 'Physical' && (
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
                    Selangor, Malaysia
                  </Text>
                </View>
              )}
            </View>
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
                Student
              </Text>
            </View>
            <Text
              style={[
                styles.textType1,
                {fontSize: 18, textTransform: 'capitalize'},
              ]}>
              Nurulain Kassim
            </Text>
          </View>
          <View
            style={{
              borderWidth: 0.8,
              borderColor: Color.LightPattensBlue,
              marginTop: 20,
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
              <FontAwesome name="user-o" size={16} color={Color.Primary} />
              <Text
                style={[
                  styles.textType3,
                  {
                    fontFamily: 'Circular Std Medium',
                    color: Color.IronsideGrey,
                    fontSize: 14,
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
                    color: Color.DustyGrey,
                    fontSize: 12,
                    textAlign: 'right',
                  },
                ]}>
                Posted
              </Text>
              <Text
                style={[
                  styles.textType3,
                  {
                    fontFamily: 'Circular Std Book',
                    color: Color.IronsideGrey,
                    fontSize: 14,
                  },
                ]}>
                Yesterday
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    };

    return (
      <View style={{width: '100%',marginBottom:80}}>
        <View style={{marginTop: 20}}></View>

       
          <View>
            <FlatList
              data={data}
              renderItem={renderTicketData}
              keyExtractor={item => item.id.toString()}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        
        <View style={{}}></View>
        <View style={{position: 'absolute', bottom: -120, width: '100%'}}>
          <CustomButton btnTitle="Request New Tutor" />
          <View style={{marginBottom: 40}}></View>
        </View>
      </View>
    );
  }, []);
  const secondRoute = useCallback(() => {
    const data = [
      {
        id: '1',
        title: 'All',
        jtuid: 'J9003428',
        mode: 'online',
        offer_status: 'pending',
      },
      {
        id: '2',
        title: 'Biology',
        jtuid: 'J9003428',
        mode: 'Physical',
        offer_status: 'approved',
      },
      {
        id: '3',
        title: 'Mathematics',
        jtuid: 'J9003428',
        mode: 'online',
        offer_status: 'rejected',
      },
    ];
    const renderAppliedTicketData = ({item}: any) => {
      return (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('TutorRequestDetailsCompleted', item)
          }
          activeOpacity={0.8}
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
                {item?.jtuid}
              </Text>
              <View style={{flexDirection: 'column'}}>
                <View
                  style={{alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                  <Text
                    style={[
                      styles.textType3,
                      {
                        color:
                          item.mode == 'online'
                            ? Color.DodgerBlue
                            : Color.Primary,
                        backgroundColor:
                          item.mode == 'online'
                            ? '#298CFF33'
                            : Color.lightPrimary,
                        paddingVertical: 5,
                        paddingHorizontal: 15,
                        borderRadius: 30,
                        textTransform: 'capitalize',
                      },
                    ]}>
                    {item?.mode}
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
                Mathematics
              </Text>
              {item?.mode == 'Physical' && (
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
                    Selangor, Malaysia
                  </Text>
                </View>
              )}
            </View>
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
                Student
              </Text>
            </View>
            <Text
              style={[
                styles.textType1,
                {fontSize: 18, textTransform: 'capitalize'},
              ]}>
              Nurulain Kassim
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
                gap: 15,
              }}>
              <FontAwesome name="user-o" size={18} color={Color.Primary} />
              <Text
                style={[
                  styles.textType3,
                  {
                    fontFamily: 'Circular Std Book',
                    color: Color.IronsideGrey,
                  },
                ]}>
                Tutor
              </Text>
            </View>
            <Text
              style={[
                styles.textType1,
                {fontSize: 18, textTransform: 'capitalize'},
              ]}>
              Norlina Fung
            </Text>
          </View>
          <View
            style={{
              borderWidth: 0.8,
              borderColor: Color.LightPattensBlue,
              marginTop: 20,
            }}></View>

          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              paddingTop: 15,
              borderTopWidth: 1,
              borderTopColor: '#eee',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'column'}}>
              <Text
                style={[
                  styles.textType3,
                  {
                    fontFamily: 'Circular Std Book',
                    color: Color.DustyGrey,
                    fontSize: 12,
                    marginBottom: 5,
                  },
                ]}>
                Posted:
              </Text>
              <View
                style={{
                  backgroundColor: Color.PattensBlue,
                  borderRadius: 5,
                  justifyContent: 'center',
                  height: 33,
                }}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    gap: 10,
                    paddingHorizontal: 10,
                  }}>
                  <AntDesign name="calendar" size={20} color={Color.Primary} />
                  <Text
                    style={[
                      styles.textType3,
                      {color: Color.Primary, fontFamily: 'Circular Std Book'},
                    ]}>
                    Jan 12, 2024
                  </Text>
                </View>
              </View>
            </View>
            <View style={{top: 10}}>
              <MaterialCommunityIcons
                name="check-underline-circle"
                size={25}
                color={Color.Primary}
              />
            </View>
          </View>
        </TouchableOpacity>
      );
    };
    return (
      <View style={{marginTop: 15, width: '100%'}}>
        <View>
          <FlatList
            data={data}
            renderItem={renderAppliedTicketData}
            keyExtractor={item => item.id.toString()}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={{marginBottom: 50}}></View>
      </View>
    );
  }, []);

  return (
    <View
      style={{
        paddingHorizontal: 25,
        backgroundColor: Color.GhostWhite,
        height: '100%',
      }}>
      <Header title="Tutor Request" tab={currentTab} navigation={navigation} />

      {data.length > 0 ? (
        <ScrollView
          nestedScrollEnabled
          showsVerticalScrollIndicator={false}
          style={{}}>
          <View style={{marginTop: 10}}>
            <CustomTabView
              currentTab={currentTab}
              firstRoute={firstRoute}
              secondRoute={secondRoute}
              activateTab={activateTab}
              firstRouteTitle="Open"
              secondRouteTitle={`Completed (12)`}
            />
          </View>
        </ScrollView>
      ) : (
        <View>
          <View>
            <View style={{marginTop: 100}}>
              <Image
                source={require('../../Images/emptytutorrequest.png')}
                resizeMode="contain"
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '98%',
                }}
              />
              <Text
                style={[
                  styles.textType1,
                  {textAlign: 'center', fontSize: 30, lineHeight: 36},
                ]}>
                Ready to Find the Perfect Tutor?
              </Text>
              <Text
                style={[
                  styles.textType3,
                  {
                    textAlign: 'center',
                    color: Color.IronsideGrey,
                    fontFamily: 'Circular Std Book',
                    marginTop: 10,
                  },
                ]}>
                Create a request, and it will show up right here.
              </Text>
            </View>
          </View>
          <View style={{position: 'absolute', bottom: -190, right: 0}}>
            <Image
              source={require('../../Images/Add-primrary.png')}
              resizeMode="contain"
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default JobTicket;

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

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
  import EvilIcons from 'react-native-vector-icons/EvilIcons';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import Feather from 'react-native-vector-icons/Feather';
  import Octicons from 'react-native-vector-icons/Octicons';
  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
  import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
  import CustomButton from '../../Components/CustomButton';
  import Entypo from 'react-native-vector-icons/Entypo';
  const TutorClassAttendance = ({navigation}: any) => {
    const [currentTab, setCurrentTab]: any = useState([
      {
        index: 0,
        name: 'Upcomming',
        selected: true,
      },
      {
        index: 1,
        name: 'Past',
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
      {id: '1', title: 'All', jtuid: 'J9000321', mode: 'Ongoing'},
      {id: '2', title: 'Biology', jtuid: 'J9000321', mode: ''},
      {id: '3', title: 'Mathematics', jtuid: 'J9000321', mode: ''},
      {id: '4', title: 'Bahasa Melayu', jtuid: 'J9000321', mode: ''},
      {id: '5', title: 'English ', jtuid: 'J9000321', mode: ''},
    ];
  
    const DropDownValues = [
      {
        ddValue: 'All',
      },
      {
        ddValue: 'Online',
      },
      {
        ddValue: 'Physical',
      },
    ];
    const [ddOpen, setDDOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(
      DropDownValues[0]?.ddValue || '',
    );
    const closeDropdown = () => {
      if (ddOpen) {
        setDDOpen(false);
      }
    };
    const selectedValues = (e: any) => {
      setDDOpen(false);
      setSelectedValue(e.ddValue);
    };
  
    const firstRoute = useCallback(() => {
      const renderUpcommingClasses = ({item}: any) => {
        return (
          <TouchableOpacity activeOpacity={0.8} style={{marginBottom: 15}}>
            <View
              style={{
                borderRadius: 20,
                marginBottom: 0,
                paddingHorizontal: 20,
                paddingVertical: 10,
                backgroundColor: Color.white,
              }}>
              <View style={{margin: 4}}></View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 15,
                  width: '100%',
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
                      textAlign: 'center',
                    },
                  ]}>
                  J9000526
                </Text>
              </View>
  
              <View style={{margin: 8}}></View>
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
                  <FontAwesome
                    name="graduation-cap"
                    size={16}
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
                    Student
                  </Text>
                </View>
                <Text
                  style={[
                    styles.textType1,
                    {fontSize: 16, textTransform: 'capitalize'},
                  ]}>
                  Sara William
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
                    gap: 8,
                  }}>
                  <MaterialIcons name="subject" size={16} color={Color.Primary} />
                  <Text
                    style={[
                      styles.textType3,
                      {
                        fontFamily: 'Circular Std Book',
                        color: Color.IronsideGrey,
                        fontSize: 16,
                      },
                    ]}>
                    Subject
                  </Text>
                </View>
                <Text
                  style={[
                    styles.textType1,
                    {fontSize: 16, textTransform: 'capitalize'},
                  ]}>
                  English
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
                  <EvilIcons name="location" size={18} color={Color.Primary} />
                  <Text
                    style={[
                      styles.textType3,
                      {
                        fontFamily: 'Circular Std Book',
                        color: Color.IronsideGrey,
                        fontSize: 16,
                      },
                    ]}>
                    Location
                  </Text>
                </View>
                <Text
                  style={[
                    styles.textType1,
                    {fontSize: 16, textTransform: 'capitalize'},
                  ]}>
                  Kajang
                </Text>
              </View>
              <View style={{margin: 10}}></View>
              <View
                style={{
                  flexDirection: 'row',
                  gap: 10,
                  paddingTop: 20,
                  borderTopWidth: 1,
                  borderTopColor: '#eee',
                }}>
                <View
                  style={{
                    backgroundColor: Color.PattensBlue,
                    // paddingVertical: 10,
                    borderRadius: 5,
                    alignItems: 'center',
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
                      Mar 29, 2024
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor: Color.PattensBlue,
                    // paddingVertical: 10,
                    borderRadius: 5,
                    alignItems: 'center',
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
                    <AntDesign
                      name="clockcircleo"
                      size={20}
                      color={Color.Primary}
                    />
                    <Text
                      style={[
                        styles.textType3,
                        {color: Color.Primary, fontFamily: 'Circular Std Book'},
                      ]}>
                      08:30 PM
                    </Text>
                  </View>
                </View>
              </View>
              <View style={{margin: 10}}></View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{width: '49%'}}>
          <CustomButton
            btnTitle="Approve"
            backgroundColor={Color.Primary}
            color={Color.white}
            fontSize={18}
            approvedIcon
            onPress={() => navigation.navigate('')}
          />
        </View>
        <View style={{width: '49%'}}>
          <CustomButton
            btnTitle="Reject"
            backgroundColor={Color.Red}
            color={Color.white}
            fontSize={18}
            crossIcon
            onPress={() => navigation.navigate('')}
          />
        </View>
      </View>
            </View>
          </TouchableOpacity>
        );
      };
  
      return (
        <View style={{width: '100%'}}>
  
          <View style={{marginTop: 20}}>
            <View>
              <FlatList
                data={data}
                renderItem={renderUpcommingClasses}
                keyExtractor={item => item.id.toString()}
                showsHorizontalScrollIndicator={false}
              />
            </View>
            <View style={{marginBottom: 50}}></View>
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
          mode: 'Paid',
          offer_status: 'pending',
        },
        {
          id: '2',
          title: 'Biology',
          jtuid: 'J9003428',
          mode: 'Paid',
          offer_status: 'approved',
        },
        {
          id: '3',
          title: 'Mathematics',
          jtuid: 'J9003428',
          mode: 'Paid',
          offer_status: 'rejected',
        },
      ];
  
      const renderPastClasses = ({item}: any) => {
        return (
         < TouchableOpacity activeOpacity={0.8} style={{marginBottom: 15}}>
            <View
              style={{
                borderRadius: 20,
                marginBottom: 0,
                paddingHorizontal: 20,
                paddingVertical: 10,
                backgroundColor: Color.white,
              }}>
              <View style={{margin: 4}}></View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 15,
                  width: '100%',
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
                      textAlign: 'center',
                    },
                  ]}>
                  J9000526
                </Text>
              </View>
  
              <View style={{margin: 8}}></View>
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
                  <FontAwesome
                    name="graduation-cap"
                    size={16}
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
                    Student
                  </Text>
                </View>
                <Text
                  style={[
                    styles.textType1,
                    {fontSize: 16, textTransform: 'capitalize'},
                  ]}>
                  Sara William
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
                    gap: 8,
                  }}>
                  <MaterialIcons name="subject" size={16} color={Color.Primary} />
                  <Text
                    style={[
                      styles.textType3,
                      {
                        fontFamily: 'Circular Std Book',
                        color: Color.IronsideGrey,
                        fontSize: 16,
                      },
                    ]}>
                    Subject
                  </Text>
                </View>
                <Text
                  style={[
                    styles.textType1,
                    {fontSize: 16, textTransform: 'capitalize'},
                  ]}>
                  English
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
                  <EvilIcons name="location" size={18} color={Color.Primary} />
                  <Text
                    style={[
                      styles.textType3,
                      {
                        fontFamily: 'Circular Std Book',
                        color: Color.IronsideGrey,
                        fontSize: 16,
                      },
                    ]}>
                    Location
                  </Text>
                </View>
                <Text
                  style={[
                    styles.textType1,
                    {fontSize: 16, textTransform: 'capitalize'},
                  ]}>
                  Kajang
                </Text>
              </View>
              <View style={{margin: 10}}></View>
             
             
              <View
                style={{
                  flexDirection: 'row',
                  gap: 10,
                  paddingTop: 20,
                  borderTopWidth: 1,
                  borderTopColor: '#eee',
                }}>
                <View
                  style={{
                    backgroundColor: Color.PattensBlue,
                    // paddingVertical: 10,
                    borderRadius: 5,
                    alignItems: 'center',
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
                      Mar 29, 2024
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor: Color.PattensBlue,
                    // paddingVertical: 10,
                    borderRadius: 5,
                    alignItems: 'center',
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
                    <AntDesign
                      name="clockcircleo"
                      size={20}
                      color={Color.Primary}
                    />
                    <Text
                      style={[
                        styles.textType3,
                        {color: Color.Primary, fontFamily: 'Circular Std Book'},
                      ]}>
                      08:30 PM
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      };
      return (
        <View style={{marginTop: 15, width: '100%'}}>
          <View style={{marginTop: 20}}></View>
          <View>
            <FlatList
              data={data}
              renderItem={renderPastClasses}
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
        <Header
          title="All Scheduled Classes"
          goBack
          tab={currentTab}
          navigation={navigation}
        />
  
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
                firstRouteTitle="UpComming"
                secondRouteTitle={`Past`}
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
              </View>
            </View>
          </View>
        )}
      </View>
    );
  };
  
  export default TutorClassAttendance;
  
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
  
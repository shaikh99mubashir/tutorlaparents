import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {Color} from '../../Constant';
import Header from '../../Components/Header';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomDropDown from '../../Components/CustomDropDown';
import CustomButton from '../../Components/CustomButton';
import IconRadioButton from '../../Components/IconRadioButton';
import DefaultDropDown from '../../Components/CustomDropDown/DefaultDropDown';
import DateTimePicker from '@react-native-community/datetimepicker';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Form3 = ({navigation}: any) => {
  const options = [
    {
      name: 'In-Person Class',
    },
    {
      name: 'Online Class',
    },
  ];

  const [selectedState, setSelectedState] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [requirenments, setRequirenments] = useState('');
  const state = [
    {
      subject: 'SPM',
    },
    {
      subject: 'IGESE',
    },
  ];
  const Days = [
    {
      subject: 'Monday',
    },
    {
      subject: 'Tuesday',
    },
    {
      subject: 'Wednesday',
    },
    {
      subject: 'Thusday',
    },
    {
      subject: 'Friday',
    },
    {
      subject: 'Saturday',
    },
    {
      subject: 'Sunday',
    },
  ];

  const [selectedValue, setSelectedValue] = useState(null);
  const handleSelect = (value: any) => {
    setSelectedValue(value);
  };
  const [show, setShow] = useState<boolean>(false);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [tempSelectedTime, setTempSelectedTime] = useState<Date | null>(null);

  const [mode, setMode] = useState<any>('date');
  const onChange = (event: any, selectedTime: any) => {
      setShow(false);
    if (event.type == 'set') {
      const currentDate: any = selectedTime || tempSelectedTime;
      setSelectedTime(currentDate);
      setTempSelectedTime(null);
    } else {
      //cancel button clicked
      setTempSelectedTime(null);
    }
  };
  console.log('selectedTime', selectedTime);

  return (
    <View style={{
      height: '100%',
      backgroundColor: Color.GhostWhite,
      paddingHorizontal: 25,
    }}>
    <ScrollView
      showsVerticalScrollIndicator={false}
      >
      <Header goBack title="New Tutor Request" navigation={navigation} />
      <View style={{margin: 10}}></View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{backgroundColor: 'white', borderRadius: 5, width: 25}}>
            <Octicons
              name="check-circle-fill"
              size={25}
              color={Color.Primary}
            />
          </View>
          <View
            style={{
              width: 90,
              backgroundColor: Color.Primary,
              height: 6,
            }}></View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: Color.white,
              borderRadius: 30,
              width: 25,
            }}>
            <Octicons
              name="check-circle-fill"
              size={25}
              color={Color.Primary}
            />
          </View>
          <View
            style={{
              width: 90,
              backgroundColor: Color.Primary,
              height: 6,
            }}></View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: Color.white,
              borderRadius: 30,
              width: 25,
            }}>
            <Octicons name="circle" size={25} color={Color.Primary} />
          </View>
        </View>
      </View>

      <View style={{margin: 15}}></View>

      <View
        style={{
          borderWidth: 1,
          borderRadius: 12,
          borderColor: Color.Primary,
          marginBottom: 30,
        }}>
        <View
          style={{
            backgroundColor: Color.Primary,
            height: 60,
            borderRadius: 10,
            justifyContent: 'center',
            paddingHorizontal: 20,
            borderWidth: 1,
            borderColor: Color.Primary,
          }}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              flexDirection: 'row',
              gap: 15,
              paddingVertical: 10,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', gap: 10}}>
              <Image source={require('../../Images/classmodeiconw.png')} />
              <Text style={[styles.textType1, {color: Color.white}]}>
                Session Details
              </Text>
            </View>
            <View
              style={{
                backgroundColor: Color.white,
                borderRadius: 50,
                borderColor: Color.DarkGreen,
                height: 25,
                width: 25,
                alignItems: 'center',
              }}>
              {selectedState && selectedTime && selectedDay ? (
                <Octicons
                  name="check-circle-fill"
                  size={25}
                  color={Color.DarkGreen}
                />
              ) : (
                <Octicons name="circle" size={25} color={Color.Primary} />
              )}
            </View>
          </TouchableOpacity>
        </View>
        <View style={{padding: 20}}>
          <View>
            <DefaultDropDown
              setSelectedSubject={setSelectedState}
              selectedSubject={selectedState}
              ddTitle="Class Frequency"
              dropdownPlace={'Select Frequency'}
              subject={state}
              categoryShow={'subject'}
              Required
            />
          </View>
          <View>
            <DefaultDropDown
              setSelectedSubject={setSelectedDay}
              selectedSubject={selectedDay}
              ddTitle="Preferable Day"
              dropdownPlace={'Select Day'}
              subject={Days}
              categoryShow={'subject'}
              Required
            />
          </View>

          <Text
            style={{
              fontFamily: 'Circular Std Medium',
              color: Color.Dune,
              fontSize: 16,
              marginVertical: 5,
              textTransform: 'capitalize',
            }}>
            Prefable Time <Text style={{color: 'red'}}>*</Text>
          </Text>
          <View
            style={{
              backgroundColor: Color.white,
              height: 60,
              borderRadius: 12,
              justifyContent: 'center',
              paddingHorizontal: 20,
            }}>
            <TouchableOpacity
              onPress={() => setShow(true)}
              activeOpacity={0.8}
              style={{
                flexDirection: 'row',
                gap: 15,
                paddingVertical: 10,
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={[styles.textType1, {color: '#A9A9A9'}]}>
                {selectedTime
                  ? selectedTime
                      .toLocaleDateString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: true,
                      })
                      .split(' ')[1]
                  : 'Pick Time'}
              </Text>
              <Image source={require('../../Images/clockicon.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View
        style={{
          borderWidth: 1,
          borderRadius: 12,
          borderColor: Color.Primary,
          marginBottom: 30,
        }}>
        <View
          style={{
            backgroundColor: Color.Primary,
            height: 60,
            borderRadius: 10,
            justifyContent: 'center',
            paddingHorizontal: 20,
            borderWidth: 1,
            borderColor: Color.Primary,
          }}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              flexDirection: 'row',
              gap: 15,
              paddingVertical: 10,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', gap: 10}}>
              <Image source={require('../../Images/classmodeiconw.png')} />
              <Text style={[styles.textType1, {color: Color.white}]}>
                Tutor’s Requirement
              </Text>
            </View>
            <View
              style={{
                backgroundColor: Color.white,
                borderRadius: 50,
                borderColor: Color.DarkGreen,
                height: 25,
                width: 25,
                alignItems: 'center',
              }}>
              {requirenments.length > 0 ? (
                <Octicons
                  name="check-circle-fill"
                  size={25}
                  color={Color.DarkGreen}
                />
              ) : (
                <Octicons name="circle" size={25} color={Color.Primary} />
              )}
            </View>
          </TouchableOpacity>
        </View>
        <View style={{padding: 20}}>
          <Text
            style={{
              fontFamily: 'Circular Std Medium',
              color: Color.Dune,
              fontSize: 16,
              marginVertical: 5,
              textTransform: 'capitalize',
            }}>
            Write about your requirement <Text style={{color: 'red'}}>*</Text>
          </Text>
          <View
            style={[
              styles.textAreaContainer,
              {
                // borderWidth: 1,
                marginTop: 5,
                borderRadius: 10,
                marginHorizontal: 2,
              },
            ]}>
            <TextInput
              placeholder="We will select the best Tutor that matches your requests/requirements"
              multiline={true}
              maxLength={300}
              onChangeText={e =>
                setRequirenments(e)
              }
              style={[
                styles.textArea,
                {
                  backgroundColor: Color.white,
                  padding: 12,
                  color: Color.Dune,
                  fontFamily: 'Circular Std Book',
                },
              ]}
              underlineColorAndroid="transparent"
              placeholderTextColor="grey"
            />
          </View>
          <View style={{margin:5}}></View>
          <Text style={[styles.textType1,{fontSize:14, fontFamily: 'Circular Std Book',color:Color.DustyGrey}]}>Fee Cost: <Text style={[styles.textType1,{fontSize:18, color:Color.Primary}]}>RM 210</Text></Text>
        </View>
      </View>

      
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={tempSelectedTime || new Date()}
          mode={'time'}
          // is24Hour={true}
          onChange={onChange}
        />
      )}
    </ScrollView>
    <View style={{marginVertical: 30}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 8,
          }}>
          <View style={{width: '48%'}}>
            <CustomButton
              btnTitle="Previous"
              backgroundColor={Color.WhiteSmoke}
              color={Color.Black}
              onPress={() => navigation.navigate('TutorRequestForm2')}
            />
          </View>
          <View style={{width: '48%'}}>
            <CustomButton
              btnTitle="Submit"
              onPress={() => navigation.replace('TutorRequestAppliedStatus')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Form3;

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
  textAreaContainer: {
    borderRadius: 16,
  },
  textArea: {
    borderRadius: 10,
    height: 100,
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
    fontFamily: 'Circular Std',
  },
});

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
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

const Form2 = ({navigation}: any) => {
  const options = [
    {
      name: 'In-Person Class',
    },
    {
      name: 'Online Class',
    },
  ];

  const [selectedState, setSelectedState] = useState('');
  const state = [
    {
      subject: 'SPM',
    },
    {
      subject: 'IGESE',
    },
  ];

  const [selectedValue, setSelectedValue] = useState(null);
  const handleSelect = (value: any) => {
    setSelectedValue(value);
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        height: '100%',
        backgroundColor: Color.GhostWhite,
        paddingHorizontal: 25,
      }}>
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
            <Octicons name="circle" size={25} color={Color.Primary} />
          </View>
          <View
            style={{
              width: 90,
              backgroundColor: Color.lineColor,
              height: 6,
            }}></View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: Color.lineColor,
              borderRadius: 30,
              width: 25,
            }}>
            <Octicons
              name="check-circle-fill"
              size={25}
              color={Color.lineColor}
            />
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
                Class Mode
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
              {selectedValue ? (
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
          <IconRadioButton
            options={options}
            onSelect={handleSelect}
            label="Select Class Type"
            Required
          />
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
                Subject
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
              {selectedValue ? (
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
          <DefaultDropDown
            setSelectedSubject={setSelectedState}
            selectedSubject={selectedState}
            ddTitle="Select Level"
            dropdownPlace={'Select Level'}
            subject={state}
            categoryShow={'subject'}
          />
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
                Subject
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
              {selectedValue ? (
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
          <DefaultDropDown
            setSelectedSubject={setSelectedState}
            selectedSubject={selectedState}
            ddTitle="Select Subject"
            dropdownPlace={'Select Subject'}
            subject={state}
            categoryShow={'subject'}
          />
        </View>
      </View>
      <View style={{marginBottom: 30}}>
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
            onPress={()=> navigation.navigate('TutorRequest')} 
          />
        </View>
        <View style={{width: '48%'}}>
          <CustomButton btnTitle="Next" onPress={()=> navigation.navigate('TutorRequestForm3')} />
        </View>
      </View>
      </View>
    </ScrollView>
  );
};

export default Form2;

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

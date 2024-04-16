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

const TutorRequest = ({navigation}: any) => {
  const [count, setCount] = useState(1); // initial count is 1
  const [selectedState, setSelectedState] = useState('');
  const state = [
    {
      id:1,
      subject: 'Sara William',
      sn:'Dyscalculia',
      gender:'female',
    },
    {
      id:1,
      subject: 'Nurulain Kassim',
      sn:'Dyscalculia',
      gender:'female',
    },
    {
      id:3,
      subject: 'Nurulain ',
      sn:'Dyscalculia',
      gender:'female',
    },
    {
      id:4,
      subject: 'Sara',
      sn:'Dyscalculia',
      gender:'female',
    },
  ];

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  console.log("selectedState",selectedState);
  const [selectedStates, setSelectedStates] = useState<string[]>(Array.from({ length: count }, () => ''));
  const renderDropDowns = () => {
    const dropDowns = [];
    for (let i = 0; i < count; i++) {
      dropDowns.push(
        <CustomDropDown
          key={i}
          setSelectedSubject={(value: string) => handleSelectedSubject(value, i)}
          selectedSubject={selectedStates[i]}
          ddTitle={`Select Student ${i + 1}`}
          dropdownPlace={`Select Student ${i + 1}`}
          subject={state}
          categoryShow={'subject'}
        />,
      );
    }
    return dropDowns;
  }

  const handleSelectedSubject = (value: string, index: number) => {
    const updatedStates = [...selectedStates];
    updatedStates[index] = value;
    setSelectedStates(updatedStates);
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
      {/* <Octicons name="check-circle-fill" size={25} color={Color.Primary} /> */}
      <View style={{margin: 5}}></View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{backgroundColor: 'white', borderRadius: 5, width: 25}}>
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
            <Octicons name="circle" size={25} color={Color.lineColor} />
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

      <View style={{margin: 10}}></View>
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
              <Image source={require('../../Images/Icon-student-w.png')} />
              <Text style={[styles.textType1, {color: Color.white}]}>
                Student Information
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
              <Octicons
                name="check-circle-fill"
                size={25}
                color={Color.DarkGreen}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            paddingVertical: 30,
            alignItems: 'center',
          }}>
          <Text style={[styles.textType2, {fontSize: 20}]}>No. of Student</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 30,
              backgroundColor: Color.white,
              width: 145,
              height: 60,
              paddingHorizontal: 25,
              borderRadius: 50,
            }}>
            <TouchableOpacity onPress={incrementCount}>
              {/* <Feather name="plus" size={25} /> */}
              <Image source={require('../../Images/plus.png')} />
            </TouchableOpacity>
            <Text style={[styles.textType2, {fontSize: 22}]}>{count}</Text>
            <TouchableOpacity onPress={decrementCount}>
              <Image source={require('../../Images/minus.png')} />
              {/* <Feather name="minus" size={25} /> */}
            </TouchableOpacity>
          </View>
        </View>
        <View style={{paddingHorizontal: 20, marginBottom: 30}}>
          <Text style={[styles.textType2, {fontSize: 20}]}>
            Student Details
          </Text>
          <View style={{margin: 4}}></View>
          {renderDropDowns()}
        </View>
      </View>
      <View style={{marginBottom:30}}>
        <CustomButton btnTitle='Next' onPress={()=> navigation.navigate('TutorRequestForm2')}/>
      </View>
    </ScrollView>
  );
};

export default TutorRequest;

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

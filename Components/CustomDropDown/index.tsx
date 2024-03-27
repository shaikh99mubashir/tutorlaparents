import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Color} from '../../Constant';
import InputText from '../InputText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';
import RadioButton from '../RadioButton';
import RadioButton2 from '../RadioButton2';
const CustomDropDown = (props: any) => {
  let {
    ddTitle,
    categoryData,
    dataShow,
    studentCount,
    searchData,
    searchFunc,
    subject,
    search,
    headingStyle,
    categoryShow,
    dropdownPlace,
    dropdownContainerStyle,
    setSelectedSubject,
    selectedSubject,
  } = props;

  const [selectedServicedata, setSelectedServicedata]: any = useState({});
  const [serviceDD, setServiceDD] = useState(false);
  const SelectedServices = (item: any) => {
    setSelectedSubject(item);

    setServiceDD(!serviceDD);
  };

  const filterSearchData = (text: string) => {
    if (text.length > 0) {
      searchFunc(text, search);
    }
  };
  const [show, setShow] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [mode, setMode] = useState<any>('date');
  const onChange = (event: any, selectedDate: any) => {
    setShow(false);
    const currentDate: any = selectedDate;
    setSelectedDate(currentDate);
    // setShow(false);
  };

  const [selectedValue, setSelectedValue] = useState(null);
  const [addNewStudent, setAddNewStudent] = useState(false);

  const options = ['Male', 'Female'];
  const specialNeed =  ['Option 1', 'Option 2', 'Option 3'];


  const handleSelect = (value: any) => {
    setSelectedValue(value);
    setAddNewStudent(!addNewStudent)
  };

  const handelAddNewStudentPress = () => {
    setAddNewStudent(true)
    setServiceDD(!serviceDD);
  }
  return (
    <View>
      <View
        style={{overflow: 'hidden', marginHorizontal: 0, marginVertical: 0}}>
        {ddTitle && (
          <Text
            style={{
              fontFamily: 'Circular Std Medium',
              color: Color.Dune,
              fontSize: 16,
              marginVertical: 10,
              textTransform: 'capitalize',
              marginHorizontal: 5,
              ...headingStyle,
            }}>
            {ddTitle} {studentCount}
            <Text style={{color: Color.Red}}>*</Text>
          </Text>
        )}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setServiceDD(!serviceDD)}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
            paddingHorizontal: 20,
            height: 60,
            borderWidth: serviceDD ? 0 : 0,
            backgroundColor: Color.white,
            borderRadius: 15,
            borderColor: Color.Primary,
            alignItems: 'center',

            ...dropdownContainerStyle,
          }}>
          {selectedServicedata &&
          Object.keys(selectedServicedata).length > 0 ? (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <Text
                style={{
                  color: Color.DustyGrey,
                  fontFamily: 'Circular Std Medium',
                  fontSize: 16,
                  textTransform: 'capitalize',
                }}>
                {selectedServicedata.complain_name &&
                selectedServicedata.complain_name > 10
                  ? selectedServicedata.complain_name.slice(0, 10)
                  : selectedServicedata.complain_name }
              </Text>
              {serviceDD ? (
                <Image
                  source={require('../../Images/up.png')}
                  style={{width: 20, height: 20}}
                />
              ) : (
                <Image
                  source={require('../../Images/down.png')}
                  style={{width: 20, height: 20}}
                />
              )}
            </View>
          ) : (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <Text
                style={{
                  color: Color.DustyGrey,
                  fontFamily: 'Circular Std Book',
                  fontSize: 18,
                  textTransform: 'capitalize',
                }}>
                {selectedSubject
                  ? selectedSubject?.subject
                  : 
                  addNewStudent ? " Add New Student" :
                  
                  dropdownPlace ?? ddTitle}
              </Text>
              {serviceDD ? (
                <AntDesign name="up" size={20} color={'black'} />
              ) : (
                <AntDesign name="down" size={20} color={'black'} />
              )}
            </View>
          )}
        </TouchableOpacity>
      </View>

      {subject && (
        <View
          style={{
            borderRadius: 15,
            borderColor: Color.DustyGrey,
            marginVertical: 5,
            backgroundColor: Color.white,
            paddingVertical: !serviceDD ? 0 : 15,
            paddingHorizontal: 10,
          }}>
          <ScrollView
            style={{maxHeight: 170}}
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled={true}>
            {serviceDD == true && (
              <View>
                <TouchableOpacity
                onPress={()=>handelAddNewStudentPress()}
                  activeOpacity={0.8}
                  style={{paddingHorizontal: 10, paddingVertical: 15}}>
                  <Text style={styles.textType1}>Add New Student</Text>
                </TouchableOpacity>
                {subject && subject.length > 0 && (
                  <View
                    style={{
                      paddingHorizontal: 10,
                      paddingBottom: 15,
                      paddingTop: 5,
                    }}>
                    <Text style={[styles.textType1, {color: Color.Gray78}]}>
                      Select Existing Student
                    </Text>
                  </View>
                )}
                {search && (
                  <TextInput
                    onChangeText={e => filterSearchData(e)}
                    style={{
                      paddingHorizontal: 10,
                      marginVertical: 0,
                      color: 'black',
                      backgroundColor: Color.white,
                      borderBottomWidth: 1,
                      borderBottomColor: 'lightgrey',
                      gap: 0,
                      height: 38,
                      fontFamily: 'Circular Std Medium',
                      borderTopRightRadius: 10,
                      borderTopLeftRadius: 10,
                    }}
                    placeholder={'Search'}
                    placeholderTextColor={'black'}
                  />
                )}
                {searchData && searchData.length > 0
                  ? Array.from(
                      new Set(
                        searchData &&
                          searchData.map((item: any) => item?.subject),
                      ),
                    )
                      .map((e: any, i: number) => {
                        return (
                          <TouchableOpacity
                            onPress={() =>
                              SelectedServices(
                                subject.find(
                                  (item: any) => `${item?.subject}` === e,
                                ),
                              )
                            }
                            key={i}
                            style={{
                              flexDirection: 'row',
                              paddingHorizontal: 10,
                              marginVertical: 5,
                              gap: 10,
                              borderBottomWidth: 1,
                              borderBottomColor: 'lightgrey',
                            }}>
                            <Text
                              style={{
                                fontFamily: 'Circular Std Book',
                                fontSize: 18,
                                textTransform: 'capitalize',
                              }}>
                              {e ?? selectedSubject}
                            </Text>
                          </TouchableOpacity>
                        );
                      })
                      .filter(Boolean)
                  : Array.from(
                      new Set(
                        subject && subject.map((item: any) => item?.subject),
                      ),
                    )
                      .map((e: any, i: number) => {
                        if (i < 5) {
                          return (
                            <TouchableOpacity
                              onPress={() =>
                                SelectedServices(
                                  subject.find(
                                    (item: any) => `${item?.subject}` === e,
                                  ),
                                )
                              }
                              key={i}
                              style={{
                                flexDirection: 'row',
                                marginHorizontal: 35,
                                marginVertical: 10,
                                gap: 10,
                                // paddingBottom: 10,
                              }}>
                              <Text
                                style={{
                                  color: Color.Gray78,
                                  fontFamily: 'Circular Std Book',
                                  fontSize: 18,
                                  textTransform: 'capitalize',
                                }}>
                                {e ?? selectedSubject}
                              </Text>
                            </TouchableOpacity>
                          );
                        }
                      })
                      .filter(Boolean)}
              </View>
            )}
          </ScrollView>
        </View>
      )}
      {addNewStudent &&
      <>
      <Text style={[styles.textType2, {fontSize: 20}]}>Add New Student</Text>
      <View style={{margin: 5}}></View>
      <InputText placeholder="Full Name" label="Full Name" Required />
      <View style={{margin: 5}}></View>
      <Text style={styles.label}>
        Date of Birth <Text style={{color: Color.Red}}>*</Text>
      </Text>
      <View style={{margin: 3}}></View>
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
            {selectedDate
              ? selectedDate.toLocaleDateString([], {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                })
              : ' Date of Birth'}
          </Text>
          <Ionicons name="calendar-outline" color={Color.Black} size={25} />
        </TouchableOpacity>
      </View>
      <View>
        <View style={{margin: 5}}></View>
        <View>
          <RadioButton
            options={options}
            onSelect={handleSelect}
            label="Select Gender"
          />
        </View>
      </View>
      <View>
        <View style={{margin: 0}}></View>
        <View>
          <RadioButton2
            options={specialNeed}
            onSelect={handleSelect}
            label="Is this student identified as having special needs?"
            Required
          />
        </View>
      </View>
      </>
    }
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={selectedDate}
          mode={mode}
          // is24Hour={true}
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default CustomDropDown;

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
  label: {
    color: Color.Dune,
    fontFamily: 'Circular Std Medium',
    fontSize: 16,
  },
});

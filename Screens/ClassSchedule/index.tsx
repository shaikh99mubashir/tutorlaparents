import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Color} from '../../Constant';
import Header from '../../Components/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';
import CustomButton from '../../Components/CustomButton';
const ClassSchedule = ({navigation}: any) => {
  const currentDate = new Date(); // Get the current date
  const currentDay = currentDate.getDate(); // Get the day of the month
  const currentMonth = currentDate.toLocaleString('default', {month: 'long'}); // Get the month
  const currentMonthShort = currentDate.toLocaleString('default', {
    month: 'short',
  }); // Get the month
  const currentYear = currentDate.getFullYear(); // Get the year
  const getCurrentMonthDates = () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const currentDay = currentDate.getDate();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    const dates = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentYear, currentMonth, i);
      const formattedDate = String(i).padStart(2, '0');
      dates.push({
        id: i,
        // date: date.getDate(),
        date: formattedDate,
        day: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getDay()],
        isCurrentDate: i === currentDay,
      });
    }
    return dates;
  };

  const dates = getCurrentMonthDates();
  const flatListRef = useRef<FlatList>(null);
  useEffect(() => {
    // Find the index of the current date
    const currentIndex = dates.findIndex(date => date.isCurrentDate);
    // Scroll to the current date if found
    if (currentIndex !== -1 && flatListRef.current) {
      flatListRef.current.scrollToIndex({index: currentIndex, animated: true});
    }
  }, []);
  const getItemLayout = (data: any, index: number): any => ({
    length: 90, // Adjust the height of each item as per your design
    offset: 70 * index,
    index,
  });
  const renderItem = ({item}: any) => (
    <View
      style={{
        alignItems: 'center',
        paddingVertical: 15,
        width: 68,
        backgroundColor: item.isCurrentDate ? 'black' : Color.white,
        marginRight: 5,
        borderRadius: 16,
        gap: 10,
      }}>
      <Text
        style={[
          styles.textType3,
          {
            color: item.isCurrentDate ? Color.white : Color.IronsideGrey,
            fontSize: 14,
          },
        ]}>
        {item.day}
      </Text>
      <Text
        style={[
          styles.textType1,
          {
            fontSize: 28,
            backgroundColor: item.isCurrentDate ? Color.Primary : Color.white,
            color: item.isCurrentDate ? Color.white : Color.Black,
            paddingHorizontal: 6,
            paddingVertical: 7,
            textAlign: 'center',
            borderRadius: 10,
          },
        ]}>
        {item.date}
      </Text>
    </View>
  );

  const data = [
    {id: '1', title: 'Mathematics', jtuid: 'J9003428', mode: 'online'},
    {id: '2', title: 'Biology', jtuid: 'J9003428', mode: 'Physical'},
    {id: '3', title: 'Mathematics', jtuid: 'J9003428', mode: 'online'},
    {id: '4', title: 'Bahasa Melayu', jtuid: 'J9003428', mode: 'online'},
    {id: '5', title: 'English ', jtuid: 'J9003428', mode: 'online'},
  ];
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemPress = (itemId: any) => {
    setSelectedItem(itemId === selectedItem ? null : itemId);
  };
  const [leftBorderHeight, setLeftBorderHeight] = useState(0);
  const renderClassScheduleData = ({item}: any) => {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderLeftColor: Color.lineColor,
            
          }}>
          
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => handleItemPress(item.id)}
            style={{
              borderLeftWidth:5,
              borderLeftColor:Color.Primary,
              borderRadius: 6,
              marginBottom: 10,
              padding: 15,
              borderBottomColor: Color.shinyGrey,
              backgroundColor: Color.white,
              
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                borderColor: Color.shinyGrey,
               
              }}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
                <Text style={[styles.textType1, {fontSize: 20}]}>
                 {item.title}
                </Text>
              </View>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
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
                      paddingHorizontal: 10,
                      borderRadius: 30,
                      textTransform: 'capitalize',
                    },
                  ]}>
                  {item?.mode}
                </Text>
              </View>
            </View>
            {item?.mode == 'Physical' && (
              <View style={{justifyContent:'flex-end', alignItems:'flex-end'}}>
              <View
                style={{
                  flexDirection: 'row',
                  gap: 5,
                  alignItems: 'center',
                  marginTop: 5,
                }}>
                <Feather name="map-pin" size={14} color={'#003E9C'} />
                <Text
                  style={[styles.textType3, {color: '#003E9C', fontSize: 14}]}>
                  Selangor, Malaysia
                </Text>
              </View>
              </View>
            )}
           
            <View
              style={{
                paddingVertical: 10,
              }}>
              
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 10,
                   
                  }}>
                  <FontAwesome name="user-o" size={18} color={Color.Primary} />
                  <Text style={[styles.textType3, {}]}>
                  Yunus Yusuf
                  </Text>
                </View>
                  
                  <View style={{margin:4}}></View>
              
                <View
                  style={{ 
                    flexDirection: 'row',
                    gap: 10,
                  }}>
                  <Feather name="hash" size={18} color={Color.Primary} />
                  <Text style={[styles.textType3, {}]}>
                  2nd Session
                  </Text>
                </View>
                
            </View>

            <View
                style={{
                  flexDirection: 'row',
                  gap: 10,
                  paddingTop: 10,
                  justifyContent:'space-between',
               
                }}>
                
                <View
                  style={{
                    backgroundColor: Color.PattensBlue,
                    borderRadius: 5,
                    alignItems:'center',
                    justifyContent:'center',
                    height:33
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
                    <Text style={[styles.textType3, {color: Color.Primary,fontFamily:'Circular Std Book'}]}>
                    04:00 PM - 05:00 PM
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    backgroundColor: Color.PattensBlue,
                    borderRadius: 10,
                    alignItems:'center',
                    justifyContent:'center',
                    padding:10,
                    position:'absolute',
                    right:0,
                    top:-20
                  }}>
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 0,
                      paddingHorizontal: 10,
                      
                    }}>
                   
                    <Text style={[styles.textType1, {fontFamily:'Circular Std Bold'}]}>
                    20
                    </Text>
                    <Text style={[styles.textType3, {fontFamily:'Circular Std Bold'}]}>
                      Student
                    </Text>
                  </View>
                </View>
              </View>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  const [mSDate, setMSDate] = useState(new Date());
 
  const [show, setShow] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [mode, setMode] = useState<any>('date');

  console.log('selectedDate', selectedDate);

  const onChange = (event: any, selectedDate: any) => {
    setShow(false);
    const currentDate: any = selectedDate;
    setSelectedDate(currentDate);
    setMSDate(currentDate);
  };

  return (
    <View
      style={{
        backgroundColor: Color.GhostWhite,
        height: '100%',
      }}>
      <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled>
        <View style={{paddingHorizontal: 25}}>
          <Header title={'Student Schedule'} goBack navigation={navigation} />
          <View style={{margin: 10}}></View>
          {/* Today */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Text style={[styles.textType1, {fontSize: 22}]}>Today</Text>
              <Text style={[styles.textType3, {color: Color.IronsideGrey}]}>
                {currentDay} {currentMonth} {currentYear}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                top: -6,
              }}>
              <TouchableOpacity
                onPress={() => setShow(true)}
                activeOpacity={0.8}
                style={{
                  backgroundColor: Color.white,
                  flexDirection: 'row',
                  gap: 15,
                  paddingVertical: 5,
                  alignItems: 'center',
                  borderRadius: 6,
                  paddingHorizontal: 10,
                  borderWidth: 1,
                  borderColor: Color.lineColor,
                }}>
                <Text style={[styles.textType3]}>
                  {/* {currentMonthShort} {currentYear} */}
                  {mSDate.toLocaleDateString([], {
                    month: 'short',
                    year: 'numeric',
                  })}
                </Text>
                <EvilIcons name="calendar" size={22} color={Color.Dune} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{margin: 10}}></View>
        <View>
          <FlatList
            ref={flatListRef}
            data={dates}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled={true}
            getItemLayout={getItemLayout}
          />
        </View>
        <View style={{margin: 10}}></View>
      
        <View style={{paddingHorizontal:20}}>
          <View>
          <FlatList
            data={data}
            renderItem={renderClassScheduleData}
            keyExtractor={item => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            />
            </View>
        
        <View style={{margin: 10}}></View>
        <Text style={[styles.textType3,{textAlign:'center',color:Color.IronsideGrey, fontFamily: 'Circular Std Book'}]}>Check your all Scheduled Classes</Text>
        <View style={{margin: 10}}></View>
                  <CustomButton btnTitle='View All Schedule'/>
        <View style={{margin: 10}}></View>
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={selectedDate}
            mode={mode}
            // is24Hour={true}
            onChange={onChange}
          />
        )}
        <View style={{margin: 10}}></View>

        <View style={{margin: 20}}></View>
      </ScrollView>
    </View>
  );
};

export default ClassSchedule;

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

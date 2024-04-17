import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Color} from '../../Constant';
import CustomButton from '../../Components/CustomButton';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Video from 'react-native-video';

const Home = ({navigation}: any) => {
  const levelData = [
    {id: '1', title: 'Preschool'},
    {id: '2', title: 'Year 1-6'},
    {id: '3', title: 'Form 1-3 (PT3)'},
    {id: '4', title: 'Form 4-5 (SPM)'},
    {id: '5', title: 'Form 6-10 (IGSE)'},
  ];
  const [selectedJT, setSelectedJT] = useState(0);
  const handelJobTicketPress = (item: any) => {
    setSelectedJT(item.id === selectedJT ? null : item.id);
  };

  const [selectedItem, setSelectedItem] = useState(levelData[0].id);
  const renderLevel = ({item}: any) => {
    const isSelected = selectedItem === item.id;

    return (
      <TouchableOpacity
        onPress={() => setSelectedItem(item.id)}
        style={{
          paddingHorizontal: 15,
          height: 40,
          borderWidth: 1,
          borderColor: Color.lightPrimary,
          borderRadius: 20,
          backgroundColor: isSelected ? Color.Primary : Color.white,
          marginTop: 20,
          justifyContent: 'center',
          marginRight: 10,
        }}>
        <Text
          style={[
            styles.textType1,
            {color: isSelected ? Color.white : 'black', textAlign: 'center'},
          ]}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  const dataSubject = [
    {id: 1, text: 'English', experiencedTutors: '138 Experienced \nTutors'},
    {id: 2, text: 'English', experiencedTutors: '138 Experienced \nTutors'},
    {id: 3, text: 'English', experiencedTutors: '138 Experienced \nTutors'},
    // Add more data items if needed
  ];

  const renderSubjectItem = ({item}: any) => (
    <View style={{marginBottom: 25, marginRight: 15}}>
      <Image
        source={require('../../Images/Bg.png')}
        resizeMode="cover"
        style={{width: 150, backgroundColor: 'pink', borderRadius: 10}}
      />
      <View style={{margin: 3}}></View>
      <Text style={[styles.textType2, {fontSize: 20}]}>{item.text}</Text>
      <View style={{margin: 2}}></View>
      <Text
        style={[
          styles.textType1,
          {
            color: Color.DustyGrey,
            fontFamily: 'Circular Std Book',
            fontSize: 14,
            lineHeight: 18,
          },
        ]}>
        {item.experiencedTutors}
      </Text>
    </View>
  );

  const reminderData = [
    {id: 1, time: '10:00 AM to 11:00 AM', subject: 'Mathematics'},
  ];

  const renderReminderItem = ({item}: any) => (
    <View
      style={{
        backgroundColor: Color.Primary,
        borderRadius: 16,
        paddingHorizontal: 25,
        paddingVertical: 30,
        marginVertical: 15, // Adjust margin as needed
      }}>
      <View
        style={{
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          alignSelf: 'flex-end',
          position: 'absolute',
          top: -16,
          right: 25,
        }}>
        <Image source={require('../../Images/Notiicon.png')} />
      </View>
      <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
        <Entypo name="clock" color={Color.white} size={16} />
        <Text
          style={[
            styles.textType1,
            {
              fontSize: 15,
              color: Color.white,
              textTransform: 'uppercase',
            },
          ]}>
          {item.time}
        </Text>
      </View>
      <View style={{margin: 5}}></View>
      <Text
        style={[
          styles.textType2,
          {
            fontSize: 22,
            color: Color.white,
            textTransform: 'capitalize',
          },
        ]}>
        {item.subject}
      </Text>
    </View>
  );

  const Educationdata = [
    {
      id: '1',
      uid: 'J9000321',
      rm: 'RM215.00',
      date: 'Due on 12 Feb 2024',
    },
    {
      id: '2',
      uid: 'J9000321',
      rm: 'RM215.00',
      date: 'Due on 12 Feb 2024',
    },
  ];

  const renderInvoiceDuesItem = ({item, index}: any) => {
    const isLastItem = index === Educationdata.length - 1;
    return (
      <View>
        <View style={{margin: 5}}></View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            paddingHorizontal: 20,
          }}>
          <Text style={[styles.textType1, {color: Color.IronsideGrey}]}>
            {item.uid}
          </Text>
        </View>
        <View style={{marginVertical: 10, paddingHorizontal: 20}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={[styles.textType1, {color: Color.Primary, fontSize: 24}]}>
              {item.rm}
            </Text>
            <Text
              style={[
                styles.textType1,
                {
                  color: Color.BrightBlue,
                  fontSize: 16,
                  fontFamily: 'Circular Std Book',
                },
              ]}>
              See More
            </Text>
          </View>
          <View style={{margin: 2}}></View>
          <Text
            style={[
              styles.textType1,
              {
                color: Color.DustyGrey,
                fontFamily: 'Circular Std Book',
                fontSize: 14,
              },
            ]}>
            {item.date}
          </Text>
          <View style={{margin: 10}}></View>
          {isLastItem ? null : (
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: Color.lineColor,
              }}></View>
          )}
        </View>
      </View>
    );
  };

  const attendenceData = [
    {
      id: 1,
      name: 'Yunus Yusuf',
      level: 'IGCSE',
      code: 'J9000761',
      date: 'Feb 12, 2024',
      time: '08:30 PM',
    },
    // Add more data items if needed
  ];

  const renderAttendenceItem = ({item}: any) => (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        borderRadius: 16,
        marginBottom: 10,
        padding: 20,
        backgroundColor: Color.white,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
          <View>
            <Image
              source={require('../../Images/profileimage.png')}
              style={{width: 60, height: 60}}
            />
          </View>
          <View>
            <Text style={[styles.textType1, {fontSize: 20, lineHeight: 20}]}>
              {item.name}
            </Text>

            <View
              style={{
                flexDirection: 'row',
                gap: 5,
                alignItems: 'center',
                marginTop: 5,
              }}>
              <Image source={require('../../Images/levelicon.png')} />
              <Text
                style={[
                  styles.textType1,
                  {
                    color: Color.Black,
                    fontFamily: 'Circular Std Medium',
                    fontSize: 16,
                  },
                ]}>
                {item.level}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            top: -16,
          }}>
          <Text
            style={[
              styles.textType1,
              {
                paddingVertical: 5,
                width: 90,
                textAlign: 'center',
                borderRadius: 8,
                textTransform: 'capitalize',
                backgroundColor: Color.Primary,
                color: Color.white,
                fontFamily: 'Circular Std Bold',
                fontSize: 16,
              },
            ]}>
            {item.code}
          </Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', gap: 10, paddingTop: 15}}>
        <View
          style={{
            backgroundColor: Color.PattensBlue,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            height: 33,
          }}>
          <View style={{flexDirection: 'row', gap: 10, paddingHorizontal: 10}}>
            <Feather name="calendar" size={20} color={Color.Primary} />
            <Text
              style={[
                styles.textType1,
                {color: Color.Primary, fontFamily: 'Circular Std Book'},
              ]}>
              {item.date}
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: Color.PattensBlue,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            height: 33,
          }}>
          <View style={{flexDirection: 'row', gap: 10, paddingHorizontal: 10}}>
            <AntDesign name="clockcircleo" size={20} color={Color.Primary} />
            <Text
              style={[
                styles.textType1,
                {color: Color.Primary, fontFamily: 'Circular Std Book'},
              ]}>
              {item.time}
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
    </TouchableOpacity>
  );

  const eventData = [
    {
      id: 1,
      tutorsCategory: 'Tutors, Category',
      featuredTutor: 'Meet Michelle',
      imageSource: require('../../Images/BGEvent.png'),
    },
    {
      id: 2,
      tutorsCategory: 'Tutors, Category',
      featuredTutor: 'Meet Michelle',
      imageSource: require('../../Images/BGEvent.png'),
    },
    // Add more data items if needed
  ];

  const renderEventsItem = ({item}: any) => (
    <View
      style={{
        backgroundColor: Color.white,
        borderRadius: 20,
        width: 170,
        marginBottom: 20,
        marginRight: 10,
      }}>
      <Image source={item.imageSource} />
      <View style={{padding: 15}}>
        <Text
          style={[
            styles.textType1,
            {
              color: Color.Primary,
              fontSize: 14,
              fontFamily: 'Circular Std Book',
            },
          ]}>
          {item.tutorsCategory}
        </Text>
        <View style={{margin: 5}}></View>
        <Text style={styles.textType1}>
          Featured Tutor:{'\n'}
          {item.featuredTutor}
        </Text>
        <View style={{margin: 5}}></View>
      </View>
    </View>
  );

  const LatestNewsArray = [
    {
      id: '1',
      imageSource: require('../../Images/Banner.png'),
      title: 'The Status of the Teach..',
      timestamp: '16 Dec | 10:40 PM',
    },
    {
      id: '2',
      imageSource: require('../../Images/Banner.png'),
      title: 'The Status of the Teach..',
      timestamp: '16 Dec | 10:40 PM',
    },
  ];

  const renderItemLatestNews = ({item}: any) => (
    <View
      style={{
        marginHorizontal: 5,
        marginVertical: 10,
        gap: 2,
        marginBottom: 40,
      }}>
      <Image
        source={item.imageSource}
        resizeMode="cover"
        style={{borderRadius: 10, width: 155, height: 90}}
      />
      <View style={{marginTop: 3}}></View>
      <Text
        style={[
          styles.textType1,
          {fontFamily: 'Circular Std Book', fontSize: 13},
        ]}>
        {item.title}
      </Text>
      <Text
        style={[
          styles.textType1,
          {
            color: Color.IronsideGrey,
            fontFamily: 'Circular Std Book',
            fontSize: 13,
          },
        ]}>
        {item.timestamp}
      </Text>
    </View>
  );
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{height: '100%', backgroundColor: Color.GhostWhite}}>
        <View
          style={{
            paddingHorizontal: 25,
          }}>
          {/* home header */}
          <View style={{paddingTop: 25}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{}}>
                <Text style={styles.textType1}>Welcome Back!</Text>
                <Text style={[styles.textType2]}>Zahari Shim</Text>
              </View>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
                <TouchableOpacity>
                  <Image
                    source={require('../../Images/Notification.png')}
                    resizeMode="contain"
                    style={{width: 25, height: 25}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderWidth: 2,
                    borderRadius: 50,
                    borderColor: Color.Dune,
                  }}
                  activeOpacity={0.8}>
                  <Image
                    source={require('../../Images/profileimage.png')}
                    resizeMode="contain"
                    style={{width: 60, height: 60, borderRadius: 50}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={{alignItems: 'center', marginVertical: 30}}>
          <Image source={require('../../Images/Banner.png')} />
        </View>
        <View style={{paddingHorizontal: 25}}>
          <Text style={styles.textType1}>Discover Your Tutor and Teacher</Text>

          <View>
            <FlatList
              data={levelData}
              renderItem={renderLevel}
              keyExtractor={item => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            marginTop: 20,
            borderBottomColor: Color.lineColor,
          }}></View>
        <View style={{margin: 10}}></View>
        <View style={{paddingHorizontal: 25}}>
          <View>
            <FlatList
              data={dataSubject}
              renderItem={renderSubjectItem}
              keyExtractor={item => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <CustomButton btnTitle="Create Tutor Request" 
            onPress={() => navigation.navigate('TutorRequest')}
          />
          <View style={{margin: 5}}></View>
          <CustomButton
            btnTitle="Student List"
            onPress={() => navigation.navigate('StudentList')}
          />
          <View style={{margin: 15}}></View>
          <Text style={styles.textType2}>Class Reminder</Text>
          <View style={{margin: 5}}></View>
          <Text
            style={[
              styles.textType1,
              {
                fontSize: 14,
                color: Color.DustyGrey,
                textTransform: 'uppercase',
              },
            ]}>
            Today
          </Text>
          <View style={{margin: 2}}></View>
          <View>
            <FlatList
              data={reminderData}
              renderItem={renderReminderItem}
              keyExtractor={item => item.id.toString()}
            />
          </View>
          <View style={{margin: 5}}></View>
          <Text style={styles.textType2}>Invoice Due</Text>
          <View style={{margin: 5}}></View>
          <View
            style={{
              backgroundColor: Color.white,
              paddingTop: 5,
              paddingBottom: 0,
              borderRadius: 16,
              marginVertical: 10,
            }}>
            <FlatList
              data={Educationdata}
              renderItem={renderInvoiceDuesItem}
              keyExtractor={item => item.id}
            />
          </View>

          <View style={{margin: 5}}></View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.textType2}>Tutor Attendance</Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('TutorClassAttendance')}>
              <Text
                style={[
                  styles.textType1,
                  {
                    color: Color.BrightBlue,
                    fontSize: 16,
                    fontFamily: 'Circular Std Medium',
                  },
                ]}>
                View All
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{margin: 5}}></View>
          <View>
            <FlatList
              data={attendenceData}
              renderItem={renderAttendenceItem}
              keyExtractor={item => item.id.toString()}
            />
          </View>
          <View style={{margin: 10}}></View>
          <Text style={[styles.textType2, {lineHeight: 30}]}>
            Celebration of the Top Tutors from the Previous Month
          </Text>
          <View style={{margin: 5}}></View>
          <View style={styles.container}>
            <Video
              source={{
                uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
              }}
              style={styles.video}
              controls={true}
              resizeMode="contain"
              posterResizeMode="cover"
            />
          </View>
          <View style={{margin: 15}}></View>
          <Text style={[styles.textType2, {lineHeight: 30}]}>Events</Text>
          <View style={{margin: 5}}></View>
          <View>
            <FlatList
              data={eventData}
              renderItem={renderEventsItem}
              keyExtractor={item => item.id.toString()}
              horizontal={true} // Set horizontal to true if you want the items to be rendered horizontally
            />
          </View>
          <View style={{margin: 5}}></View>
          <View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.textType2}>Latest News</Text>
                <TouchableOpacity onPress={()=> navigation.navigate('LatestBlog')}>
                  <Text
                    style={[
                      styles.textType1,
                      {
                        color: Color.BrightBlue,
                        fontSize: 16,
                        fontFamily: 'Circular Std Medium',
                      },
                    ]}>
                    View All
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{margin: 2}}></View>
              <View>
              <FlatList
                data={LatestNewsArray}
                keyExtractor={item => item.id}
                renderItem={renderItemLatestNews}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Home;

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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: 200,
    borderRadius: 20,
    overflow: 'hidden',
  },
});

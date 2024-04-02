import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../Components/Header';
import {Color} from '../../Constant';
import CustomButton from '../../Components/CustomButton';
import CustomTabView2 from '../../Components/CustomTabView2';
import {FlatList} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Video from 'react-native-video';

const TutorProfile = ({navigation}: any) => {
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

    setCurrentTab(newTabs);
  };
  const firstRoute = () => {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
      setShowMore(!showMore);
    };

    const textContent = `Hello, I'm Michelle Thomas, a dedicated and passionate educator committed to fostering a positive learning environment with 7 years of experience in the teaching profession. I strive to inspire and empower my students, equipping them with the knowledge and skills they need to succeed. My approach involves creating a supportive atmosphere where students feel valued and encouraged to participate actively in their learning journey. I believe in utilizing a variety of teaching methods to accommodate diverse learning styles and interests, making learning engaging and enjoyable. Hello, I'm Michelle Thomas, a dedicated and passionate educator committed to fostering a positive learning environment with 7 years of experience in the teaching profession. I strive to inspire and empower my students, equipping them with the knowledge and skills they need to succeed. My approach involves creating a supportive atmosphere where students feel valued and encouraged to participate actively in their learning journey. I believe in utilizing a variety of teaching methods to accommodate diverse learning styles and interests, making learning engaging and enjoyable.`;

    const truncatedContent = textContent.split(' ').slice(0, 70).join(' ');
    const remainingContent = textContent.split(' ').slice(70).join(' ');

    return (
      <View style={{paddingHorizontal: 25, paddingVertical: 15}}>
        <Text
          style={[
            styles.textType3,
            {color: Color.IronsideGrey, lineHeight: 20, textAlign: 'justify'},
          ]}>
          {showMore ? textContent : truncatedContent}
          {textContent.length > 70 && (
            <TouchableOpacity
              style={{padding: 0, margin: 0}}
              onPress={toggleShowMore}>
              <Text
                style={[
                  styles.textType3,
                  {
                    color: showMore ? Color.BrightBlue : Color.IronsideGrey,
                    position: 'relative',
                    top: 4,
                  },
                ]}>
                {showMore ? 'Read Less' : '...'}
                {!showMore && (
                  <Text style={{color: Color.BrightBlue}}>Read More</Text>
                )}
              </Text>
            </TouchableOpacity>
          )}
        </Text>
      </View>
    );
  };

  const secondRoute = () => {
    const data = [
      {id: 1, title: 'Science (Year 1-6)'},
      {id: 2, title: 'Mathematics (UPSR)'},
      {id: 3, title: 'English (Preschool)', new: true},
    ];
    const renderItem = ({item}: any) => (
      <View style={[styles.studentBox, {flexDirection: 'row', gap: 10}]}>
        <Text style={[styles.textType3, {fontSize: 18}]}>{item.title}</Text>
        {item.new && (
          <Text
            style={[
              styles.textType3,
              {
                backgroundColor: Color.lightPrimary,
                color: Color.Primary,
                padding: 3,
                borderRadius: 4,
                width: 45,
                textAlign: 'center',
                fontSize: 12,
              },
            ]}>
            New
          </Text>
        )}
      </View>
    );
    return (
      <View style={{paddingHorizontal: 25, paddingVertical: 15, width: '100%'}}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          nestedScrollEnabled={true}
        />
      </View>
    );
  };
  const Reviewdata = [
    {
      id: '1',
      name: 'Lisa Cameron',
      rating: 4.5,
      review:
        'Exceptional online tutoring – a game-changer for personalized learning and academic success!',
      likes: 56,
      date: '2 Weeks ago',
    },
    {
      id: '2',
      name: 'Lisa Cameron',
      rating: 4.5,
      review:
        'Exceptional online tutoring – a game-changer for personalized learning and academic success!',
      likes: 56,
      date: '1 Week ago',
    },
    {
      id: '31',
      name: 'Lisa Cameron',
      rating: 4.5,
      review:
        'Exceptional online tutoring – a game-changer for personalized learning and academic success!',
      likes: 56,
      date: '2 Weeks ago',
    },
  ];

  const renderReviewItems = ({item}: any) => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          padding: 20,
          borderRadius: 16,
          marginBottom: 15,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <View>
            <Image
              source={require('../../Images/profileimage.png')}
              style={{width: 60, height: 60, borderRadius: 50}}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1,
            }}>
            <View>
              <Text style={[styles.textType3, {fontSize: 22}]}>
                {item.name}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
                backgroundColor: Color.GhostWhite,
                borderWidth: 1,
                borderRadius: 30,
                alignSelf: 'center',
                paddingHorizontal: 10,
                borderColor: Color.Primary,
              }}>
              <Image source={require('../../Images/star.png')} />
              <Text style={[styles.textType3, {lineHeight: 24, fontSize: 18}]}>
                {item.rating}
              </Text>
            </View>
          </View>
        </View>

        <View style={{paddingLeft: 72}}>
          <Text style={{color: 'gray', lineHeight: 20}}>{item.review}</Text>
          <View style={{marginVertical: 10}}></View>
          <View style={{flexDirection: 'row', gap: 40}}>
            <View style={{flexDirection: 'row', gap: 6, alignItems: 'center'}}>
              <AntDesign name="heart" size={18} color="red" />
              <Text style={styles.textType3}>{item.likes}</Text>
            </View>
            <Text style={styles.textType3}>{item.date}</Text>
          </View>
        </View>
      </View>
    );
  };

  const Educationdata = [
    {
      id: '1',
      date: '2014 - 2015',
      degree: 'Master of Science',
      university: 'Malaysia University of Science & Technology',
    },
    {
      id: '2',
      date: '2013 - 2014',
      degree: 'Master of Mathematics',
      university: 'Malaysia University of Science & Technology',
    },
    // Add more data objects as needed
  ];

  const renderEducationItem = ({item, index}: any) => {
    const isLastItem = index === Educationdata.length - 1;
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            paddingHorizontal: 20,
          }}>
          <Feather name="calendar" size={20} color={Color.Primary} />
          <Text style={[styles.textType3, {color: Color.Primary}]}>
            {item.date}
          </Text>
        </View>
        <View style={{marginVertical: 20, paddingHorizontal: 20}}>
          <Text style={[styles.textType1, {color: Color.Black, fontSize: 24}]}>
            {item.degree}
          </Text>
          <View style={{margin: 2}}></View>
          <Text style={[styles.textType3, {color: Color.IronsideGrey}]}>
            {item.university}
          </Text>
        </View>
        {isLastItem ? null : (
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: Color.lineColor,
              marginBottom: 20,
            }}></View>
        )}
      </View>
    );
  };

  const Certificatedata = [
    {id: '1', subject: 'Mathematics', award: 'Best Teacher Award'},
    {id: '2', subject: 'Science', award: 'Best Teacher Award'},
    {id: '3', subject: 'Science', award: 'Best Teacher Award'},
    {id: '4', subject: 'Science', award: 'Best Teacher Award'},
  ];

  const renderCertificateItem = ({item}: any) => (
    <View
      style={{
        backgroundColor: Color.white,
        paddingVertical: 30,
        paddingHorizontal:15,
        marginRight: 10,
        marginVertical: 10,
        borderRadius: 16,
        alignItems: 'center',
      }}>
      <Image source={require('../../Images/Frame.png')} />
      <View style={{margin: 10}}></View>
      <Text style={[styles.textType1, {fontSize: 16}]}>{item.subject}</Text>
      <View style={{margin: 3}}></View>
      <Text style={[styles.textType3, {color: Color.Primary,fontSize: 14}]}>
        {item.award}
      </Text>
    </View>
  );

  return (
    <View
      style={{
        backgroundColor: Color.GhostWhite,
        height: '100%',
      }}>
      <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled>
        <View style={{paddingHorizontal: 25}}>
          <Header title={'Tutor Profile'} goBack navigation={navigation} />
          <View style={{margin: 10}}></View>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../../Images/profileimage.png')}
              style={{
                width: 95,
                height: 95,
                borderRadius: 50,
                borderWidth: 3,
                borderColor: Color.Primary,
              }}
            />

            <View style={{margin: 5}}></View>
            <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
              <Text style={[styles.textType3]}>Verified Tutor</Text>
              <Image source={require('../../Images/verified.png')} />
            </View>
            <Text style={[styles.textType1, {lineHeight: 35}]}>
              Michelle Thomas
            </Text>
            <Text style={[styles.textType3, {color: Color.IronsideGrey}]}>
              Member Since Mar 2018
            </Text>
            <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
              <Image source={require('../../Images/star.png')} />
              <Text style={[styles.textType3, {lineHeight: 24, fontSize: 18}]}>
                4.5
              </Text>
              <Text
                style={[
                  styles.textType3,
                  {color: Color.IronsideGrey, fontSize: 18},
                ]}>
                (121)
              </Text>
            </View>
          </View>
          <View style={{margin: 10}}></View>
          {/* Boxex */}
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={[styles.boxStyle, {backgroundColor: '#fc8800'}]}>
              <Text style={[styles.textType1, {color: 'white'}]}>90+</Text>
              <Text style={[styles.textType3, {color: 'white'}]}>Hours</Text>
            </View>
            <View
              style={[styles.boxStyle, {backgroundColor: Color.BrightBlue}]}>
              <Text style={[styles.textType1, {color: 'white'}]}>32</Text>
              <Text style={[styles.textType3, {color: 'white'}]}>Students</Text>
            </View>
            <View style={[styles.boxStyle, {backgroundColor: '#872AFE'}]}>
              <Text style={[styles.textType1, {color: 'white'}]}>121</Text>
              <Text style={[styles.textType3, {color: 'white'}]}>Reviews</Text>
            </View>
          </View>
          {/* Edit Button */}
          <View style={{margin: 15}}></View>
          <CustomButton btnTitle="Edit Your Profile" onPress={()=>navigation.navigate('EditTutorProfile')} />
        </View>
        <View style={{margin: 15}}></View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: Color.lineColor,
          }}></View>
        <CustomTabView2
          currentTab={currentTab}
          firstRoute={firstRoute}
          secondRoute={secondRoute}
          activateTab={activateTab}
          firstRouteTitle="About"
          secondRouteTitle="Subjects"
        />

        <View style={{paddingHorizontal: 25}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.textType1}>Reviews</Text>
            <TouchableOpacity style={{alignItems: 'center', flexDirection:"row", gap:3}}>
              <Text style={[styles.textType3, {color: Color.BrightBlue,fontFamily: 'Circular Std Book',}]}>
                See All
              </Text>
                <AntDesign name="right" size={15} color={Color.BrightBlue} />
            </TouchableOpacity>
          </View>
            <View style={{margin:2}}></View>

          <View style={{marginTop: 10}}>
            <FlatList
              data={Reviewdata}
              renderItem={renderReviewItems}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
          <View style={{paddingHorizontal:25, position:'relative', top:40}}>
        <Text style={styles.textType1}>My Introduction</Text>
          </View>
        <View style={styles.container}>
      <Video
        source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }} // Replace 'your_video_url_here' with the actual URL of your video
        style={styles.video}
        controls={true}
        resizeMode="contain"
      />
    </View>

        <View style={{paddingHorizontal:25, marginBottom: 15}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.textType1}>Education</Text>
          </View>
          <View style={{margin:2}}></View>
          <View
            style={{
              backgroundColor: Color.white,
              paddingTop: 25,
              paddingBottom: 10,
              borderRadius: 16,
              marginVertical: 10,
            }}>
            <FlatList
              data={Educationdata}
              renderItem={renderEducationItem}
              keyExtractor={item => item.id}
            />
          </View>
        </View>

        <View style={{paddingHorizontal: 25, marginVertical: 15}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.textType1}>Certification</Text>
              </View>
              <View style={{margin:2}}></View>
          <View>
            <FlatList
              data={Certificatedata}
              renderItem={renderCertificateItem}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{alignItems: 'center'}}
            />
          </View>
          <View style={{margin:10}}></View>
          <CustomButton btnTitle='Select Tutor' onPress={()=> navigation.navigate('PayCommitmentFee')}/>
          <View style={{margin:10}}></View>
        </View>
      </ScrollView>
    </View>
  );
};

export default TutorProfile;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '85%',
    height: 300,
    borderRadius: 15,
    overflow:'hidden',
  },
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
  boxStyle: {
    width: '31%',
    padding: 10,
    alignItems: 'center',
    height: 70,
    justifyContent: 'center',
    borderRadius: 16,
  },
  studentBox: {
    backgroundColor: 'white',
    height: 60,
    borderRadius: 12,
    elevation: 4, // for Android
    shadowColor: 'rgba(213, 226, 245, 0.40)', // for iOS
    shadowOffset: {width: 0, height: 4}, // for iOS
    shadowOpacity: 1, // for iOS
    shadowRadius: 20,
    flex: 1,
    padding: 15,
    fontFamily: 'Circular Std Book',
    color: 'black',
    fontSize: 16,
    width: '100%',
    // justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
});

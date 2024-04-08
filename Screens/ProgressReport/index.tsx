import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../Components/Header';
import {Color} from '../../Constant';
import {Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {FlatList} from 'react-native';
const ProgressReport = ({navigation}: any) => {
  const [faqsData, setFaqsData]: any = useState<any>([
    {
      id: '1',
      test: 'Performance',
      icon: require('../../Images/Performance-icon.png'),
      q1: 'Rate Student’s understanding on this Subjects',
      a1: 'Excellent',
      q2: 'Rate Student’s understanding on this Subjects',
      a2: 'Excellent',
      q3: 'Rate Student’s understanding on this Subjects',
      a3: 'Excellent',
      q4: 'Rate Student’s understanding on this Subjects',
      description: 'Rate Student’s understanding on this Subjects',
      a4: 'Excellent',
      open: false,
    },
    {
      id: '2',
      test: 'Attitude',
      icon: require('../../Images/Performance-icon.png'),
      q1: 'Rate Student’s understanding on this Subjects',
      a1: 'Excellent',
      q2: 'Rate Student’s understanding on this Subjects',
      a2: 'Excellent',
      q3: 'Rate Student’s understanding on this Subjects',
      a3: 'Excellent',
      q4: 'Rate Student’s understanding on this Subjects',
      a4: 'Excellent',
      open: false,
    },
    {
      id: '3',
      test: 'Result',
      icon: require('../../Images/result-icon.png'),
      q1: 'Rate the Student’s performance in quizzers',
      a1: 'Excellent',
      q2: 'Rate Student’s understanding on this Subjects',
      a2: 'Excellent',
      q3: 'Rate Student’s understanding on this Subjects',
      a3: 'Excellent',
      q4: 'Rate Student’s understanding on this Subjects',
      a4: 'Excellent',
      open: false,
    },
    {
      id: '4',
      test: 'Observation',
      icon: require('../../Images/observation-icon.png'),
      q1: 'Did you (Tutor) hold or Carried out any from of Examination/test/quiz for the student with in this 3 Months?',
      a1: 'My knowledge and abilities provide information, answer questions, and assist with various queries.',
      q2: 'Rate Student’s understanding on this Subjects',
      a2: 'My knowledge and abilities provide information, answer questions, and assist with various queries.',
      q3: 'Rate Student’s understanding on this Subjects',
      a3: 'My knowledge and abilities provide information, answer questions, and assist with various queries.',
      q4: 'Rate Student’s understanding on this Subjects',
      a4: 'My knowledge and abilities provide information, answer questions, and assist with various queries.',
      open: false,
    },
  ]);

  const handleQuestionPress = (index: number) => {
    setFaqsData((prevData: any) =>
      prevData.map((faq: any, i: number) => ({
        ...faq,
        open: i === index ? !faq.open : false,
      })),
    );
  };

  const renderProgressReport = ({item, index}: any) => (
    <>
    {!item.open &&
      <TouchableOpacity
        style={{paddingBottom: 20}}
        onPress={() => handleQuestionPress(index)}
        activeOpacity={0.7}>
        <Text
          style={[
            styles.textType1,
            {position: 'absolute', zIndex: 1, left: 30, top: 22},
          ]}>
          {item.test}
        </Text>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image source={require('../../Images/Reportbox.png')} />
        </View>
        <View
          style={{
            backgroundColor: Color.white,
            marginHorizontal: 15,
            paddingHorizontal: 15,
            paddingBottom: 15,
            borderBottomEndRadius: 20,
            borderBottomStartRadius: 20,
          }}>
          <View style={{flexDirection: 'row', gap: 10}}>
            <View>
              <Image source={item.icon} />
            </View>
            <View style={{width: '80%'}}>
              <Text
                style={[
                  styles.textType3,
                  {
                    fontSize: 15,
                    fontFamily: 'Circular Std Book',

                    color: Color.IronsideGrey,
                  },
                ]}>
                {item.q1}
              </Text>
              <View style={{margin: 2}}></View>
              <Text style={[styles.textType1, {fontSize: 16}]}>{item.a1}</Text>
            </View>
          </View>
          <View style={{alignItems: 'flex-end'}}>
            <AntDesign name="downcircleo" size={25} color={Color.Primary} />
          </View>
        </View>
      </TouchableOpacity>
      }
      {item.open && (
        <TouchableOpacity onPress={()=> handleQuestionPress(index)} activeOpacity={0.7}>
          <View
            style={{
              padding: 15,
              backgroundColor: Color.Primary,
              borderRadius: 20,
              marginHorizontal: 15,
              marginBottom: 20,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={[styles.textType1, {color: Color.white, fontSize: 22}]}>
                {item.test}
              </Text>
              <AntDesign name="upcircleo" size={25} color={Color.white} />
            </View>

            <View style={{flexDirection: 'row', gap: 10, marginVertical:15}}>
              <View>
                <Image source={require('../../Images/att1.png')} />
              </View>
              <View style={{width: '80%'}}>
                <Text
                  style={[
                    styles.textType3,
                    {
                      fontSize: 15,
                      fontFamily: 'Circular Std Book',

                      color: Color.white,
                    },
                  ]}>
                  {item.q1}
                </Text>
                <View style={{margin: 2}}></View>
                <Text
                  style={[
                    styles.textType1,
                    {fontSize: 16, color: Color.white},
                  ]}>
                  {item.a1}
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', gap: 10, marginVertical:15}}>
              <View>
                <Image source={require('../../Images/att2.png')} />
              </View>
              <View style={{width: '80%'}}>
                <Text
                  style={[
                    styles.textType3,
                    {
                      fontSize: 15,
                      fontFamily: 'Circular Std Book',

                      color: Color.white,
                    },
                  ]}>
                  {item.q2}
                </Text>
                <View style={{margin: 2}}></View>
                <Text
                  style={[
                    styles.textType1,
                    {fontSize: 16, color: Color.white},
                  ]}>
                  {item.a2}
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', gap: 10, marginVertical:15}}>
              <View>
                <Image source={require('../../Images/att3.png')} />
              </View>
              <View style={{width: '80%'}}>
                <Text
                  style={[
                    styles.textType3,
                    {
                      fontSize: 15,
                      fontFamily: 'Circular Std Book',

                      color: Color.white,
                    },
                  ]}>
                  {item.q3}
                </Text>
                <View style={{margin: 2}}></View>
                <Text
                  style={[
                    styles.textType1,
                    {fontSize: 16, color: Color.white},
                  ]}>
                  {item.a3}
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', gap: 10, marginVertical:15}}>
              <View>
                <Image source={require('../../Images/att4.png')} />
              </View>
              <View style={{width: '80%'}}>
                <Text
                  style={[
                    styles.textType3,
                    {
                      fontSize: 15,
                      fontFamily: 'Circular Std Book',

                      color: Color.white,
                    },
                  ]}>
                  {item.q4}
                </Text>
                <View style={{margin: 2}}></View>
                <Text
                  style={[
                    styles.textType1,
                    {fontSize: 16, color: Color.white},
                  ]}>
                  {item.a4}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )}
    </>
  );

  return (
    <View
      style={{
        backgroundColor: Color.GhostWhite,
        height: '100%',
      }}>
      <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled>
        <View style={{paddingHorizontal: 20, marginBottom: 0}}>
          <Header
            title={'Progress Report'}
            goBack
            download
            navigation={navigation}
          />
          <View style={{margin: 10}}></View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('../../Images/Report-Card.png')} />
          </View>
          <View style={{position: 'absolute', bottom: 30, left: 35}}>
            <Text style={[styles.textType3, {color: Color.white}]}>
              February 2024
            </Text>
            <View style={{margin: 3}}></View>
            <Text
              style={[styles.textType1, {color: Color.white, fontSize: 20}]}>
              Nurulain Kassim
            </Text>
            <View style={{margin: 1}}></View>
            <Text style={[styles.textType3, {color: Color.white}]}>
              Mathematics
            </Text>
          </View>
        </View>
        <View style={{margin: 15}}></View>
        {/* <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image source={require('../../Images/Reportbox.png')} />
        </View>
        <View
          style={{
            marginHorizontal: 20,
            position: 'relative',
            top: -135,
            paddingHorizontal: 15,
          }}>
          <Text style={styles.textType1}>Performance</Text>
          <View style={{margin: 10}}></View>
          <View style={{flexDirection: 'row', gap: 10}}>
            <View>
              <Image source={require('../../Images/Performance-icon.png')} />
            </View>
            <View>
              <Text
                style={[
                  styles.textType3,
                  {
                    fontSize: 15,
                    fontFamily: 'Circular Std Book',
                    width: '80%',
                    color: Color.IronsideGrey,
                  },
                ]}>
                Rate Student’s understanding on this Subjects
              </Text>
              <View style={{margin: 2}}></View>
              <Text style={[styles.textType1, {fontSize: 16}]}>Excellent</Text>
            </View>
          </View>
          <View style={{alignItems: 'flex-end'}}>
            <AntDesign name="downcircleo" size={25} color={Color.Primary} />
          </View>
        </View> */}

        <View>
          <FlatList
            data={faqsData}
            renderItem={renderProgressReport}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProgressReport;

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
    fontStyle: 'normal',
  },
});

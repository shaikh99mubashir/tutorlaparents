import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import {Color} from '../../Constant';
import Header from '../../Components/Header';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {FlatList} from 'react-native';
const Review = ({navigation}: any) => {
  const Reviewdata = [
    {
      id: '1',
      name: 'Lisa Cameron',
      rating: 4.5,
      review:
        'Exceptional online tutoring – a game-changer for personalized learning and academic success!',
      likes: 56,
      date: '2 Week ago',
    },
    {
      id: '2',
      name: 'Lisa Cameron',
      rating: 4.5,
      review:
        'Exceptional online tutoring – a game-changer for personalized learning and academic success!',
      likes: 56,
      date: '2 Week ago',
    },
    {
      id: '31',
      name: 'Lisa Cameron',
      rating: 4.5,
      review:
        'Exceptional online tutoring – a game-changer for personalized learning and academic success!',
      likes: 56,
      date: '2 Week ago',
    },
  ];

  const renderReviewItems = ({item}: any) => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          padding: 20,
          borderRadius: 16,
          marginBottom: 10,
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
              <Text style={[styles.textType3, {fontSize: 18}]}>
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
              <Image
                source={require('../../Images/star.png')}
                style={{width: 15, height: 15}}
              />
              <Text
                style={[
                  styles.textType3,
                  {
                    lineHeight: 24,
                    fontSize: 14,
                    fontFamily: 'Circular Std Book',
                  },
                ]}>
                {item.rating}
              </Text>
            </View>
          </View>
        </View>

        <View style={{paddingLeft: 72}}>
          <Text
            style={[
              styles.textType3,
              {
                color: Color.IronsideGrey,
                lineHeight: 18,
                fontSize: 14,
                fontFamily: 'Circular Std Book',
              },
            ]}>
            {item.review}
          </Text>
          <View style={{marginVertical: 10}}></View>
          <View style={{flexDirection: 'row', gap: 40}}>
            <View style={{flexDirection: 'row', gap: 6, alignItems: 'center'}}>
              <AntDesign name="heart" size={18} color="red" />
              <Text style={[styles.textType3, {fontSize: 14}]}>
                {item.likes}
              </Text>
            </View>
            <Text style={[styles.textType3, {fontSize: 14}]}>{item.date}</Text>
          </View>
        </View>
      </View>
    );
  };

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
    {label: 'Pear', value: 'pear'},
  ]);

  const DropDownValues = [
    {
      ddValue: 'Most Recent',
    },
    {
      ddValue: 'Newest',
    },
    {
      ddValue: 'Oldest',
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
 

  return (
    <View
      style={{
        backgroundColor: Color.GhostWhite,
        height: '100%',
      }}>
      <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled>
        <View style={{paddingHorizontal: 25, marginBottom: 0}}>
          <Header title={'Reviews'} goBack navigation={navigation} />
          <View style={{margin: 0}}></View>
        </View>
        <View>
          {/* <Image
            source={require('../../Images/Ratings.png')}
            style={{
              width: Dimensions.get('screen').width / 1.1,
              alignSelf: 'center',
            }}
          /> */}
          <Text
            style={[
              styles.textType3,
              {
                position: 'relative',
                top: -120,
                right: -55,
                color: Color.IronsideGrey,
              },
            ]}>
            121 Reviews
          </Text>
        </View>
        <TouchableWithoutFeedback onPress={closeDropdown}>
          <View style={{paddingHorizontal: 25, top: -30}}>
            <View style={{flex: 1}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}>
                <View style={{flexDirection: 'row', gap: 10}}>
                  <Text
                    style={[
                      styles.textType3,
                      {
                        color: Color.IronsideGrey,
                        fontFamily: 'Circular Std Book',
                        fontSize: 14,
                        position: 'relative',
                        top: 6,
                      },
                    ]}>
                    Sort By
                  </Text>
                  <View>
                    <TouchableOpacity
                      onPress={() => setDDOpen(!ddOpen)}
                      activeOpacity={0.8}
                      style={{
                        backgroundColor: Color.white,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingVertical: 5,
                        alignItems: 'center',
                        borderRadius: 6,
                        paddingHorizontal: 8,
                        borderWidth: 1,
                        borderColor: Color.lineColor,
                        width: 135,
                      }}>
                      <Text style={[styles.textType3, {fontSize: 14}]}>
                        {selectedValue}
                      </Text>
                      {ddOpen ? (
                        <Feather
                          name="chevron-up"
                          size={20}
                          color={Color.Dune}
                        />
                      ) : (
                        <Feather
                          name="chevron-down"
                          size={20}
                          color={Color.Dune}
                        />
                      )}
                    </TouchableOpacity>
                    {ddOpen ? (
                      <View
                        style={{
                          backgroundColor: Color.white,
                          borderRadius: 6,
                          paddingHorizontal: 20,
                          paddingTop: 15,
                          marginTop: 3,
                          zIndex: 999,
                          position: 'absolute',
                          top: 32,
                          width: 135,
                          elevation: 2,
                        }}>
                        {DropDownValues &&
                          DropDownValues.map((e: any, i: number) => {
                            return (
                              <TouchableOpacity
                              key={i}
                                onPress={() => selectedValues(e)}>
                                <Text
                                  style={[
                                    styles.textType3,
                                    {fontSize: 14, paddingBottom: 16},
                                  ]}>
                                  {e.ddValue ? e.ddValue : e.ddValue[0]}
                                </Text>
                              </TouchableOpacity>
                            );
                          })}
                      </View>
                    ) : null}
                  </View>
                </View>
              </View>
            </View>
            {/* <View style={{alignItems: 'flex-end',position:'relative',left:0,right:0}}>
              <CustomDropDown3
                items={DropDownValues}
                defaultSelected={selectedValue}
                onSelect={handleDropdownSelection}
              />
            </View> */}

            <View style={{margin: 10}}></View>
            <View style={{marginVertical: 0}}>
              <FlatList
                data={Reviewdata}
                renderItem={renderReviewItems}
                keyExtractor={item => item.id}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </View>
  );
};

export default Review;

const styles = StyleSheet.create({
  textType3: {
    color: Color.Dune,
    fontSize: 16,
    fontFamily: 'Circular Std Medium',
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

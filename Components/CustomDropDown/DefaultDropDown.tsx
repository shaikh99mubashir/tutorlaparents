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
  import React, { useState, useEffect } from 'react';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import { Color } from '../../Constant';
  const DefaultDropDown = (props: any) => {
    let { ddTitle, categoryData, dataShow, searchData,
         searchFunc, subject, search, headingStyle, categoryShow, 
         dropdownPlace, dropdownContainerStyle, setSelectedSubject, 
         selectedSubject, Required } = props
  
  
  
  
    const [selectedServicedata, setSelectedServicedata]: any = useState({});
    const [serviceDD, setServiceDD] = useState(false);
    const SelectedServices = (item: any) => {
  
      setSelectedSubject(item);
  
      setServiceDD(!serviceDD);
    };
  
    const filterSearchData = (text: string) => {
  
      if (text.length > 0) {
        searchFunc(text, search)
      }
    }
  
  
    return (
      <View>
        <View style={{ overflow: 'hidden', marginHorizontal: 0, marginVertical: 0, }}>
          {ddTitle &&
            <Text
              style={{
                fontFamily: 'Circular Std Medium',
                color: Color.Dune,
                fontSize: 16,
                marginVertical: 5,
                textTransform:'capitalize',
                marginHorizontal: 5,
                ...headingStyle
  
              }}>
              {ddTitle} {Required && <Text style={{color: 'red'}}>*</Text>}
            </Text>
          }
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setServiceDD(!serviceDD)}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 10,
              paddingHorizontal: 20,
              height:60,
              borderWidth: serviceDD ? 1 : 0,
              backgroundColor: Color.white,
              borderRadius:15,
              borderColor: Color.Primary,
              alignItems: 'center',
              ...dropdownContainerStyle
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
                    textTransform:'capitalize',
                  }}>
                  {selectedServicedata.complain_name &&
                    selectedServicedata.complain_name > 10
                    ? selectedServicedata.complain_name.slice(0, 10)
                    : selectedServicedata.complain_name}
                </Text>
                {serviceDD ? (
                  <Image source={require('../../Images/up.png')} style={{ width: 20, height: 20 }} />
                ) : (
                  <Image source={require('../../Images/down.png')} style={{ width: 20, height: 20 }} />
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
                    textTransform:'capitalize',
                  }}>
                  {selectedSubject ? selectedSubject?.subject : dropdownPlace ?? ddTitle}
                </Text>
                {serviceDD ? (
                  <AntDesign name='up' size={20} color={'black'}/>
                ) : (
                  <AntDesign name='down' size={20} color={'black'}/>
                )}
              </View>
            )}
          </TouchableOpacity>
        </View>
        {categoryData &&
          <View
            style={{
              borderBottomEndRadius: 5,
              borderBottomStartRadius: 5,
              borderWidth: !serviceDD ? 0 : 1,
              borderTopWidth: !serviceDD ? 0 : 1,
              borderColor: Color.DustyGrey,
              top: -14,
            }}>
            <ScrollView style={{ maxHeight: 100 }} nestedScrollEnabled={true}>
              {serviceDD == true &&
                Array.from(
                  new Set(categoryData && categoryData.map((item: any) => item.complain_name)),
                ).map((e: any, i: number) => {
  
                  return (
                    <TouchableOpacity
                      onPress={() =>
                        SelectedServices(
                          categoryData.find(
                            (item: any) => item.complain_name === e,
                          ),
                        )
                      }
                      key={i}
                      style={{
                        flexDirection: 'row',
                        paddingHorizontal: 10,
                        marginVertical: 5,
                        gap: 10,
                      }}>
                      <Text
                        style={{
                          color: Color.DustyGrey,
                          fontFamily: 'Circular Std Medium',
                          fontSize: 16,
                          textTransform:'capitalize',
                        }}>
                        {e}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
            </ScrollView>
          </View>
        }
        {subject &&
          <View
            style={{
              borderRadius:15,
              borderColor: Color.DustyGrey,
              marginVertical:5,
              backgroundColor:Color.white,
              paddingVertical:!serviceDD ? 0 : 15,
              paddingHorizontal:10,
            }}>
            <ScrollView style={{ maxHeight: 150 }} nestedScrollEnabled={true}>
  
              {serviceDD == true &&
                <View>
                  {search && <TextInput onChangeText={(e) => filterSearchData(e)} style={{
                    paddingHorizontal: 10,
                    marginVertical: 0,
                    color: 'black',
                    backgroundColor: Color.white,
                    borderBottomWidth: 1,
                    borderBottomColor:'lightgrey',
                    gap: 0,
                    height: 38,
                    fontFamily: 'Circular Std Medium',
                    borderTopRightRadius:10,
                    borderTopLeftRadius:10,
                  }}
                    placeholder={"Search"}
                    placeholderTextColor={"black"}
  
                  />}
                  {searchData && searchData.length > 0 ? Array.from(
                    new Set(searchData && searchData.map((item: any) => item?.subject)),
                  ).map((e: any, i: number) => {
  
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
                          borderBottomColor:'lightgrey'
                        }}>
                        <Text
                          style={{
                            fontFamily: 'Circular Std Book',
                            fontSize: 18,
                            textTransform:'capitalize'
                          }}>
                          {e ?? selectedSubject}
                        </Text>
                      </TouchableOpacity>
                    );
  
                  }).filter(Boolean)
                    :
                    Array.from(
                      new Set(subject && subject.map((item: any) => item?.subject)),
                    ).map((e: any, i: number) => {
                      console.log('e',e);
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
                              marginHorizontal: 10,
                              marginVertical: 10,
                              gap: 10,
                              paddingBottom:15,
                              borderBottomWidth: 1,
                              borderBottomColor:'lightgrey'
                            }}>
                            <Text
                              style={{
                                color: Color.Dune,
                                fontFamily: 'Circular Std Book',
                                fontSize: 18,
                                textTransform:'capitalize'
                              }}>
                              {e ?? selectedSubject}
                            </Text>
                          </TouchableOpacity>
                        );
                      }
                    }).filter(Boolean)
                  }
                </View>
              }
            </ScrollView>
          </View>
        }
      </View>
    )
  }
  
  export default DefaultDropDown
  
  const styles = StyleSheet.create({})
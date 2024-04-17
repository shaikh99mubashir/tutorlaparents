import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import Header from '../../Components/Header';
import CustomTabView from '../../Components/CustomTabView';
import {Color} from '../../Constant';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {Swipeable} from 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
const Chat = ({navigation}: any) => {
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
    console.log('newTabs', newTabs);

    setCurrentTab(newTabs);
  };

  const firstRoute = useCallback(() => {
    const data = [
      {
        id: '1',
        name: 'Rene Johnson',
        message: "Hi there! I hope you're ..",
        time: '05:50PM',
        unreadCount: 13,
      },
      {
        id: '2',
        name: 'Mubashir',
        message: "Hi there! I hope you're ..",
        time: '05:50PM',
        unreadCount: 13,
      },
    ];
    const RightSwipe = () => {
      return (
        <View
          style={{
            backgroundColor: Color.Primary,
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 5,
            marginLeft: 10,
            width: 50,
            borderRadius: 12,
          }}>
          <Image source={require('../../Images/deletew.png')} />
        </View>
      );
    };
    const LefttSwipe = () => {
      return (
       null
      );
    };
    const renderItem = ({item}: any) => {
      console.log('item',item);
      
      return(
      <Swipeable renderRightActions={RightSwipe} renderLeftActions={LefttSwipe}>
        <TouchableOpacity
        onPress={()=> navigation.navigate('MessageScreen', item)}
          activeOpacity={0.8}
          style={{
            borderWidth: 1,
            borderRadius: 12,
            // marginBottom: 10,
            paddingVertical: 15,
            paddingHorizontal: 20,
            borderColor: Color.shinyGrey,
            borderBottomColor: Color.shinyGrey,
            backgroundColor: Color.white,
            width: '100%',
            marginVertical: 5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderColor: Color.shinyGrey,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
              <View>
                <Image source={require('../../Images/avatar.png')} />
              </View>
              <View style={{gap: 5}}>
                <Text style={[styles.textType1, {fontSize: 20}]}>
                  {item.name}
                </Text>
                <Text style={[styles.textType3, {fontSize: 16}]}>
                  {item.message}
                </Text>
              </View>
            </View>
            <View
              style={{
                alignItems: 'flex-end',
                justifyContent: 'center',
                gap: 5,
              }}>
              <Text style={[styles.textType3]}>{item.time}</Text>
              <Text
                style={[
                  styles.textType3,
                  {
                    backgroundColor: Color.BrightBlue,
                    color: Color.white,
                    width: 23,
                    height: 23,
                    textAlign: 'center',
                    borderRadius: 50,
                    paddingVertical: 1,
                  },
                ]}>
                {item.unreadCount}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </Swipeable>
    )};

    return (
      <>
        <GestureHandlerRootView>
          <View style={{margin: 10}}></View>
          <View>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
        </GestureHandlerRootView>
      </>
    );
  }, []);
  const secondRoute = useCallback(() => {
    return <Text style={{color: 'black'}}></Text>;
  }, []);

  return (
    <View
      style={{
        paddingHorizontal: 25,
        backgroundColor: Color.GhostWhite,
        height: '100%',
      }}>
      <Header title="Chat" search tab={currentTab} navigation={navigation} />

      <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
        <View style={{marginTop: 10}}>
          <CustomTabView
            currentTab={currentTab}
            firstRoute={firstRoute}
            secondRoute={secondRoute}
            activateTab={activateTab}
            firstRouteTitle="Recent"
            secondRouteTitle={`Online (49)`}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Chat;

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

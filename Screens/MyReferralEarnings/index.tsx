import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {Color} from '../../Constant';
import Header from '../../Components/Header';
import CustomButton from '../../Components/CustomButton';
import CustomTabViewUnderline from '../../Components/CustomTabViewUnderline';
import {Image} from 'react-native';
import {FlatList} from 'react-native';

const MyReferralEarnings = ({navigation}: any) => {
  const [currentTab, setCurrentTab]: any = useState([
    {
      index: 0,
      name: 'completed',
      selected: true,
    },
    {
      index: 1,
      name: 'cancelled',
      selected: false,
    },
    {
      index: 2,
      name: 'cancelled',
      selected: false,
    },
  ]);

  const activateTab = (index: any) => {
    setCurrentTab(
      currentTab &&
        currentTab.length > 0 &&
        currentTab.map((e: any, i: any) => {
          if (e.index == index) {
            return {
              ...e,
              selected: true,
            };
          } else {
            return {
              ...e,
              selected: false,
            };
          }
        }),
    );
  };

  const firstRoute = useCallback(() => {
    const data = [
      {
        id: '1',
        name: 'Amiruddin Wong',
        referredDate: 'Referred on Jan 21, 2024',
        amount: 'RM210',
      },
      {
        id: '2',
        name: 'Amiruddin Wong',
        referredDate: 'Referred on Jan 21, 2024',
        amount: 'RM210',
      },
      {
        id: '3',
        name: 'Amiruddin Wong',
        referredDate: 'Referred on Jan 21, 2024',
        amount: 'RM210',
      },
    ];
    const renderItem = ({item}: any) => (
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 20,
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          marginBottom: 10, // Add margin bottom for separation
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
          <View>
            <Image source={require('../../Images/AvatarMale.png')} />
          </View>
          <View>
            <Text
              style={{
                color: 'black',
                fontFamily: 'Circular Std Medium',
                fontSize: 18,
              }}>
              {item.name}
            </Text>
            <View style={{margin: 1}}></View>
            <Text
              style={{
                color: 'gray',
                fontFamily: 'Circular Std Book',
                fontSize: 13,
              }}>
              {item.referredDate}
            </Text>
          </View>
        </View>
        <Text style={[styles.textType2, {color: Color.Primary, fontSize: 18}]}>
          {item.amount}
        </Text>
      </View>
    );
    return (
      <View style={{marginVertical: 20, marginBottom: 10}}>
        <View>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    );
  }, []);

  const secondRoute = useCallback(() => {
    const data = [
      {
        id: '1',
        name: 'Amiruddin Wong',
        referredDate: 'Referred on Jan 21, 2024',
        amount: 'RM210',
      },
      {
        id: '2',
        name: 'Amiruddin Wong',
        referredDate: 'Referred on Jan 21, 2024',
        amount: 'RM210',
      },
      {
        id: '3',
        name: 'Amiruddin Wong',
        referredDate: 'Referred on Jan 21, 2024',
        amount: 'RM210',
      },
    ];
    const renderItem = ({item}: any) => (
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 20,
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          marginBottom: 10,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
          <View>
            <Text
              style={{
                color: 'black',
                fontFamily: 'Circular Std Medium',
                fontSize: 18,
              }}>
              {item.name}
            </Text>
            <View style={{margin: 1}}></View>
            <Text
              style={{
                color: 'gray',
                fontFamily: 'Circular Std Book',
                fontSize: 13,
              }}>
              {item.referredDate}
            </Text>
          </View>
        </View>
        <View style={{width: '40%'}}>
          <CustomButton btnTitle="Resend" fontSize={18} height={45} />
        </View>
      </View>
    );
    return (
      <View style={{marginVertical: 20, marginBottom: 10}}>
        <View>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    );
  }, []);

  const thirdRoute = useCallback(() => {
    const data = [
      {
        id: '1',
        title: 'Invite your Friends',
        description:
          'Invite a friend, family member, or colleague by simply clicking on this link.',
      },
      {
        id: '2',
        title: 'They hit the road',
        description:
          'After registering and participating in their initial class, you will receive a notification.',
      },
      {
        id: '3',
        title: 'You make Savings!',
        description:
          'Then you get RM150!',
      },
    ];

    const renderItem = ({item}: any) => (
      <View style={{flexDirection: 'row', gap: 10 ,marginBottom:15, width: '80%' }}>
        <View
          style={{
            backgroundColor: Color.white,
            width: 50,
            height: 50,
            borderRadius: 50,
            justifyContent: 'center',
          }}>
          <Text style={[styles.textType2, {textAlign: 'center'}]}>{item.id}</Text>
        </View>
        <View>
          <Text style={[styles.textType2, {}]}>{item.title}</Text>
          <View style={{margin: 2}}></View>
          <Text
            style={[
              styles.textType1,
              {fontFamily: 'Circular Std Book', color: Color.IronsideGrey,  lineHeight:20},
            ]}>
           {item.description}
          </Text>
        </View>
      </View>
    );
    return (
      <View style={{marginVertical: 20, marginBottom: 10}}>
        <View>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={{margin: 10}}></View>
        <CustomButton btnTitle='Invite Now'/>
      </View>
    );
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Color.GhostWhite,
        paddingHorizontal: 25,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          goBack
          title="My Referral Earnings"
          navigation={navigation}
          color={Color.GhostWhite}
        />
        <View style={{margin: 15}}></View>
        <View
          style={{
            backgroundColor: Color.Primary,
            padding: 30,
            borderRadius: 20,
          }}>
          <Text
            style={[
              styles.textType2,
              {color: Color.white, textAlign: 'center', fontSize: 22},
            ]}>
            My Earnings
          </Text>
          <View style={{margin: 10}}></View>
          <Text
            style={[
              styles.textType2,
              {color: Color.white, textAlign: 'center'},
            ]}>
            RM1800
          </Text>
          <View style={{margin: 8}}></View>
          <View style={{marginHorizontal: 40}}>
            <CustomButton btnTitle="Use Now" />
          </View>
        </View>
        <View style={{margin: 10}}></View>
        <CustomTabViewUnderline
          currentTab={currentTab}
          firstRoute={firstRoute}
          secondRoute={secondRoute}
          thirdRoute={thirdRoute}
          activateTab={activateTab}
          firstRouteTitle="Completed"
          secondRouteTitle="Pending"
          thirdRouteTitle="How it works"
        />
      </ScrollView>
    </View>
  );
};

export default MyReferralEarnings;

const styles = StyleSheet.create({
  textType1: {
    color: Color.Black,
    fontSize: 16,
    fontFamily: 'Circular Std Medium',
  },
  textType2: {
    color: Color.Black,
    fontSize: 26,
    fontFamily: 'Circular Std Medium',
  },
});

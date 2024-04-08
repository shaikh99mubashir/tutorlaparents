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
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from '../../Components/CustomButton';
const CompleteClassSchedule = ({navigation}: any) => {
  const [currentTab, setCurrentTab]: any = useState([
    {
      index: 0,
      name: 'Upcomming',
      selected: true,
    },
    {
      index: 1,
      name: 'Past',
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

  const data = [
    {id: '1', title: 'All', jtuid: 'J9000321', mode: 'Ongoing'},
    {id: '2', title: 'Biology', jtuid: 'J9000321', mode: ''},
    {id: '3', title: 'Mathematics', jtuid: 'J9000321', mode: ''},
    {id: '4', title: 'Bahasa Melayu', jtuid: 'J9000321', mode: ''},
    {id: '5', title: 'English ', jtuid: 'J9000321', mode: ''},
  ];
  const firstRoute = useCallback(() => {
    const renderPendingPayments = ({item}: any) => {
      return (
        // <TouchableOpacity
        //   activeOpacity={0.8}
        //   style={{
        //     borderWidth: 0.8,
        //     borderRadius: 20,
        //     marginBottom: 10,
        //     padding: 20,
        //     borderColor: Color.shinyGrey,
        //     backgroundColor: Color.white,
        //   }}>
        //   <View
        //     style={{
        //       width: '100%',
        //       borderColor: Color.shinyGrey,
        //     }}>
        //     <View
        //       style={{
        //         flexDirection: 'row',
        //         justifyContent: 'space-between',
        //         alignItems: 'center',
        //       }}>
        //       <Text
        //         style={[
        //           styles.textType1,
        //           {
        //             fontFamily: 'Circular Std Bold',
        //             color: Color.Primary,
        //           },
        //         ]}>
        //         RM 210.00
        //       </Text>
        //       <View style={{flexDirection: 'column'}}>
        //         <View
        //           style={{alignItems: 'flex-end', justifyContent: 'flex-end'}}>
        //           {item.mode && (
        //             <Text
        //               style={[
        //                 styles.textType3,
        //                 {
        //                   color:
        //                     item.mode == 'Ongoing'
        //                       ? Color.YellowishOrange
        //                       : Color.Primary,
        //                   backgroundColor:
        //                     item.mode == 'Ongoing'
        //                       ? Color.YellowishOrangelite
        //                       : Color.lightPrimary,
        //                   paddingVertical: 5,
        //                   paddingHorizontal: 15,
        //                   borderRadius: 30,
        //                   textTransform: 'capitalize',
        //                 },
        //               ]}>
        //               {item?.mode}
        //             </Text>
        //           )}
        //         </View>
        //       </View>
        //     </View>
        //     <View
        //       style={{
        //         justifyContent: 'space-between',
        //         flexDirection: 'row',
        //         alignItems: 'center',
        //         marginTop: 15,
        //       }}>
        //       <View>
        //         <Text style={[styles.textType1, {fontSize: 20}]}>
        //           Jeffrey Lim
        //         </Text>
        //         <Text
        //           style={[
        //             styles.textType3,
        //             {
        //               fontFamily: 'Circular Std Book',
        //               color: Color.IronsideGrey,
        //               fontSize: 15,
        //             },
        //           ]}>
        //           Mathematics (IGCSE)
        //         </Text>
        //       </View>
        //       <View>
        //         <Text
        //           style={[
        //             styles.textType3,
        //             {
        //               fontFamily: 'Circular Std Book',
        //               color: Color.Dune,
        //               fontSize: 14,
        //               textAlign: 'right',
        //             },
        //           ]}>
        //           Pending
        //         </Text>
        //         <Text
        //           style={[
        //             styles.textType3,
        //             {
        //               fontFamily: 'Circular Std Bold',
        //               color: Color.Primary,
        //               fontSize: 15,
        //             },
        //           ]}>
        //           Mar 2024
        //         </Text>
        //       </View>
        //     </View>
        //   </View>

        //   <View
        //     style={{
        //       borderWidth: 0.8,
        //       borderColor: Color.LightPattensBlue,
        //       marginTop: 20,
        //     }}></View>
        //   <View style={{margin: 8}}></View>
        //   <View
        //     style={{
        //       justifyContent: 'space-between',
        //       flexDirection: 'row',
        //       alignItems: 'center',
        //     }}>
        //     <View
        //       style={{
        //         alignItems: 'center',
        //         justifyContent: 'center',
        //         flexDirection: 'row',
        //         gap: 8,
        //       }}>
        //       <FontAwesome name="user-o" size={16} color={Color.Primary} />
        //       <Text
        //         style={[
        //           styles.textType3,
        //           {
        //             fontFamily: 'Circular Std Book',
        //             color: Color.IronsideGrey,
        //           },
        //         ]}>
        //         Student
        //       </Text>
        //     </View>
        //     <Text
        //       style={[
        //         styles.textType1,
        //         {fontSize: 18, textTransform: 'capitalize'},
        //       ]}>
        //       Shahrizal Nor
        //     </Text>
        //   </View>
        //   <View style={{margin:4}}></View>
        //   <View
        //     style={{
        //       justifyContent: 'space-between',
        //       flexDirection: 'row',
        //       alignItems: 'center',
        //     }}>
        //     <View
        //       style={{
        //         alignItems: 'center',
        //         justifyContent: 'center',
        //         flexDirection: 'row',
        //         gap: 5,
        //       }}>
        //       <Feather name="hash" size={16} color={Color.Primary} />
        //       <Text
        //         style={[
        //           styles.textType3,
        //           {
        //             fontFamily: 'Circular Std Book',
        //             color: Color.IronsideGrey,
        //           },
        //         ]}>
        //         No. of Session
        //       </Text>
        //     </View>
        //     <Text
        //       style={[
        //         styles.textType1,
        //         {fontSize: 18, textTransform: 'capitalize'},
        //       ]}>
        //       4 Session per Month
        //     </Text>
        //   </View>
        // </TouchableOpacity>
        <></>
      );
    };

    return (
      <View style={{width: '100%'}}>
        <View style={{marginTop: 20}}></View>

        <View>
          <View>
            <FlatList
              data={data}
              renderItem={renderPendingPayments}
              keyExtractor={item => item.id.toString()}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={{marginBottom: 50}}></View>
        </View>
      </View>
    );
  }, []);
  const secondRoute = useCallback(() => {
    const data = [
      {
        id: '1',
        title: 'All',
        jtuid: 'J9003428',
        mode: 'Paid',
        offer_status: 'pending',
      },
      {
        id: '2',
        title: 'Biology',
        jtuid: 'J9003428',
        mode: 'Paid',
        offer_status: 'approved',
      },
      {
        id: '3',
        title: 'Mathematics',
        jtuid: 'J9003428',
        mode: 'Paid',
        offer_status: 'rejected',
      },
    ];
    
    const renderPaidPayments = ({item}: any) => {
      return (
        // <TouchableOpacity
        //   activeOpacity={0.8}
        //   style={{
        //     borderWidth: 0.8,
        //     borderRadius: 20,
        //     marginBottom: 10,
        //     padding: 20,
        //     borderColor: Color.shinyGrey,
        //     backgroundColor: Color.white,
        //   }}>
        //   <View
        //     style={{
        //       width: '100%',
        //       borderColor: Color.shinyGrey,
        //     }}>
        //     <View
        //       style={{
        //         flexDirection: 'row',
        //         justifyContent: 'space-between',
        //         alignItems: 'center',
        //       }}>
        //       <Text
        //         style={[
        //           styles.textType1,
        //           {
        //             fontFamily: 'Circular Std Bold',
        //             color: Color.Primary,
        //           },
        //         ]}>
        //         RM 210.00
        //       </Text>
        //       <View style={{flexDirection: 'column'}}>
        //         <View
        //           style={{alignItems: 'flex-end', justifyContent: 'flex-end'}}>
        //           {item.mode && (
        //             <Text
        //               style={[
        //                 styles.textType3,
        //                 {
        //                   color:
        //                     item.mode == 'Ongoing'
        //                       ? Color.YellowishOrange
        //                       : Color.Primary,
        //                   backgroundColor:
        //                     item.mode == 'Ongoing'
        //                       ? Color.YellowishOrangelite
        //                       : Color.lightPrimary,
        //                   paddingVertical: 5,
        //                   paddingHorizontal: 15,
        //                   borderRadius: 30,
        //                   textTransform: 'capitalize',
        //                 },
        //               ]}>
        //               {item?.mode}
        //             </Text>
        //           )}
        //         </View>
        //       </View>
        //     </View>
        //     <View
        //       style={{
        //         justifyContent: 'space-between',
        //         flexDirection: 'row',
        //         alignItems: 'center',
        //         marginTop: 15,
        //       }}>
        //       <View>
        //         <Text style={[styles.textType1, {fontSize: 20}]}>
        //           Jeffrey Lim
        //         </Text>
        //         <Text
        //           style={[
        //             styles.textType3,
        //             {
        //               fontFamily: 'Circular Std Book',
        //               color: Color.IronsideGrey,
        //               fontSize: 15,
        //             },
        //           ]}>
        //           Mathematics (IGCSE)
        //         </Text>
        //       </View>
        //       <View>
        //         <Text
        //           style={[
        //             styles.textType3,
        //             {
        //               fontFamily: 'Circular Std Book',
        //               color: Color.Dune,
        //               fontSize: 14,
        //               textAlign: 'right',
        //             },
        //           ]}>
        //           Pending
        //         </Text>
        //         <Text
        //           style={[
        //             styles.textType3,
        //             {
        //               fontFamily: 'Circular Std Bold',
        //               color: Color.Primary,
        //               fontSize: 15,
        //             },
        //           ]}>
        //           Mar 2024
        //         </Text>
        //       </View>
        //     </View>
        //   </View>

        //   <View
        //     style={{
        //       borderWidth: 0.8,
        //       borderColor: Color.LightPattensBlue,
        //       marginTop: 20,
        //     }}></View>
        //   <View style={{margin: 8}}></View>
        //   <View
        //     style={{
        //       justifyContent: 'space-between',
        //       flexDirection: 'row',
        //       alignItems: 'center',
        //     }}>
        //     <View
        //       style={{
        //         alignItems: 'center',
        //         justifyContent: 'center',
        //         flexDirection: 'row',
        //         gap: 8,
        //       }}>
        //       <FontAwesome name="user-o" size={16} color={Color.Primary} />
        //       <Text
        //         style={[
        //           styles.textType3,
        //           {
        //             fontFamily: 'Circular Std Book',
        //             color: Color.IronsideGrey,
        //           },
        //         ]}>
        //         Student
        //       </Text>
        //     </View>
        //     <Text
        //       style={[
        //         styles.textType1,
        //         {fontSize: 18, textTransform: 'capitalize'},
        //       ]}>
        //       Shahrizal Nor
        //     </Text>
        //   </View>
        //   <View style={{margin:4}}></View>
        //   <View
        //     style={{
        //       justifyContent: 'space-between',
        //       flexDirection: 'row',
        //       alignItems: 'center',
        //     }}>
        //     <View
        //       style={{
        //         alignItems: 'center',
        //         justifyContent: 'center',
        //         flexDirection: 'row',
        //         gap: 5,
        //       }}>
        //       <Feather name="hash" size={16} color={Color.Primary} />
        //       <Text
        //         style={[
        //           styles.textType3,
        //           {
        //             fontFamily: 'Circular Std Book',
        //             color: Color.IronsideGrey,
        //           },
        //         ]}>
        //         No. of Session
        //       </Text>
        //     </View>
        //     <Text
        //       style={[
        //         styles.textType1,
        //         {fontSize: 18, textTransform: 'capitalize'},
        //       ]}>
        //       4 Session per Month
        //     </Text>
        //   </View>
        // </TouchableOpacity>
        <></>
      );
    };
    return (
      <View style={{marginTop: 15, width: '100%'}}>
        <View>
          <FlatList
            data={data}
            renderItem={renderPaidPayments}
            keyExtractor={item => item.id.toString()}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={{marginBottom: 50}}></View>
      </View>
    );
  }, []);

  return (
    <View
      style={{
        paddingHorizontal: 25,
        backgroundColor: Color.GhostWhite,
        height: '100%',
      }}>
      <Header
        title="All Scheduled Classes"
        goBack
        tab={currentTab}
        navigation={navigation}
      />

      {data.length > 0 ? (
        <ScrollView
          nestedScrollEnabled
          showsVerticalScrollIndicator={false}
          style={{}}>
          <View style={{marginTop: 10}}>
            <CustomTabView
              currentTab={currentTab}
              firstRoute={firstRoute}
              secondRoute={secondRoute}
              activateTab={activateTab}
              firstRouteTitle="UpComming"
              secondRouteTitle={`Past`}
            />
          </View>
        </ScrollView>
      ) : (
        <View>
          <View>
            <View style={{marginTop: 100}}>
              <Image
                source={require('../../Images/emptytutorrequest.png')}
                resizeMode="contain"
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '98%',
                }}
              />
              
              
            </View>
          </View>
         
        </View>
      )}
    </View>
  );
};

export default CompleteClassSchedule;

const styles = StyleSheet.create({
  textType3: {
    color: Color.Dune,
    // fontWeight: '500',
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

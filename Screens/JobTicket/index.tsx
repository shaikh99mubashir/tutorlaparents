import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import Header from '../../Components/Header'
import CustomTabView from '../../Components/CustomTabView'
import { Color } from '../../Constant'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
const JobTicket = ({navigation}:any) => {
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
    console.log("newTabs",newTabs);
    
    setCurrentTab(newTabs);
  };

  const firstRoute = useCallback(() => {
    const data = [
      { id: '1', title: 'All',jtuid:'J9003428',mode:'online' },
      { id: '2', title: 'Biology',jtuid:'J9003428',mode:'Physical' },
      { id: '3', title: 'Mathematics',jtuid:'J9003428',mode:'online' },
      { id: '4', title: 'Bahasa Melayu',jtuid:'J9003428',mode:'online' },
      { id: '5', title: 'English ',jtuid:'J9003428',mode:'online' },
    ];
  
    const renderTicketData = ({ item }: any) => {
      return (
      //   <TouchableOpacity
      //   activeOpacity={0.8}
      //   style={{
      //     borderWidth:0.8,
      //     borderRadius: 20,
      //     marginBottom: 10,
      //     padding: 20,
      //     borderBottomColor: Color.shinyGrey,
      //     backgroundColor: Color.white,
      //   }}>
      //   <View
      //     style={{
            
      //       width: '100%',
      //       borderColor: Color.shinyGrey,
      //     }}>
      //     <View style={{flexDirection: 'row',
      //       justifyContent: 'space-between',alignItems:'center'}}>
      //       <Text style={[styles.textType3,{fontFamily:'Circular Std Bold'}]}>{item?.jtuid}</Text>
      //       <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      //       <Text
      //         style={[
      //           styles.textType3,
      //           {
      //             color: item.mode == 'online'? Color.DodgerBlue  : Color.Primary,
      //             backgroundColor: item.mode == 'online'? '#298CFF33' : Color.lightPrimary,
      //             paddingVertical: 5,
      //             paddingHorizontal: 15,
      //             borderRadius: 30,
      //             textTransform: 'capitalize',
      //           },
      //         ]}>
      //         {item?.mode}
      //       </Text>
      //     </View>

      //     </View>
      //     <Text style={[styles.textType1,{fontFamily:'Circular Std Bold'} ]}>
      //         RM 210
      //       </Text>
         
      //   </View>
      //   <View style={{margin:3}}></View>
      //   {item?.mode == 'Physical' && 
      //   <View
      //     style={{
      //       flexDirection: 'row', gap: 5, alignItems: 'center',
            
      //     }}>
      //     <Feather name="map-pin" size={18} color={'#003E9C'} />
      //     <Text style={[styles.textType3, { color: '#003E9C',fontFamily:'Circular Std Book', fontSize:18 }]}>
      //     Selangor, Malaysia
      //     </Text>
      //   </View>
      //   }
      //   <View style={{ borderWidth: 0.8,borderColor: Color.LightPattensBlue,marginTop: 20, }}></View>
      //   <View
      //     style={{
      //       paddingVertical: 20,
      //       borderBottomWidth: 0.8,
      //       borderBottomColor: Color.LightPattensBlue,
      //     }}>
      //     <View
      //       style={{
      //         justifyContent: 'space-between',
      //         flexDirection: 'row',
      //         alignItems: 'center',
      //       }}>
      //       <View
      //         style={{
      //           alignItems: 'center',
      //           justifyContent: 'center',
      //           flexDirection: 'row',
      //           gap: 10,
      //         }}>
      //         <AntDesign name="copy1" size={20} color={Color.Primary} />
      //         <Text style={[styles.textType3,{fontFamily:'Circular Std Book', color:Color.IronsideGrey,fontSize:18}]}>Subject</Text>
      //       </View>
      //       <Text
      //         style={[
      //           styles.textType1,
      //           { fontSize: 20, textTransform: 'capitalize' },
      //         ]}>
      //         Mathematics
      //       </Text>
      //     </View>
      //     <View
      //       style={{
      //         justifyContent: 'space-between',
      //         flexDirection: 'row',
      //         alignItems: 'center',
      //         marginTop: 10,
      //       }}>
      //       <View
      //         style={{
      //           alignItems: 'center',
      //           justifyContent: 'center',
      //           flexDirection: 'row',
      //           gap: 10,
      //         }}>
      //         <FontAwesome name="user-o" size={18} color={Color.Primary} />
      //         <Text style={[styles.textType3,{fontFamily:'Circular Std Book', color:Color.IronsideGrey,fontSize:18}]}>Pref. Tutor</Text>
      //       </View>
      //       <Text
      //         style={[
      //           styles.textType1,
      //           { fontSize: 20, textTransform: 'capitalize' },
      //         ]}>
      //         Male
      //       </Text>
      //     </View>
      //     <View
      //       style={{
      //         justifyContent: 'space-between',
      //         flexDirection: 'row',
      //         alignItems: 'center',
      //         marginTop: 10,
      //       }}>
      //       <View
      //         style={{
      //           alignItems: 'center',
      //           justifyContent: 'center',
      //           flexDirection: 'row',
      //           gap: 15,
      //         }}>
      //         <FontAwesome name="level-up" size={18} color={Color.Primary} />
      //         <Text style={[styles.textType3,{fontFamily:'Circular Std Book', color:Color.IronsideGrey,fontSize:18}]}>Level</Text>
      //       </View>
      //       <Text
      //         style={[
      //           styles.textType1,
      //           { fontSize: 20, textTransform: 'uppercase' },
      //         ]}>
      //         SPM
      //       </Text>
      //     </View>
      //   </View>

      //   <View
      //         style={{
      //           flexDirection: 'row',
      //           gap: 10,
      //           paddingTop: 15,
      //           borderTopWidth: 1,
      //           borderTopColor: '#eee',
      //         }}>
      //         <View
      //           style={{
      //             backgroundColor: Color.PattensBlue,
      //             // paddingVertical: 10,
      //             borderRadius: 5,
      //             alignItems:'center',
      //             justifyContent:'center',
      //             height:33
      //           }}>
      //           <View
      //             style={{
      //               alignItems: 'center',
      //               justifyContent: 'center',
      //               flexDirection: 'row',
      //               gap: 10,
      //               paddingHorizontal: 10,
                    
      //             }}>
      //             <AntDesign
      //               name="calendar"
      //               size={20}
      //               color={Color.Primary}
      //             />
      //             <Text style={[styles.textType3, {color: Color.Primary,fontFamily:'Circular Std Book'}]}>
      //               Monday
      //             </Text>
      //           </View>
      //         </View>
      //         <View
      //           style={{
      //             backgroundColor: Color.PattensBlue,
      //             // paddingVertical: 10,
      //             borderRadius: 5,
      //             alignItems:'center',
      //             justifyContent:'center',
      //             height:33
      //           }}>
      //           <View
      //             style={{
      //               alignItems: 'center',
      //               justifyContent: 'center',
      //               flexDirection: 'row',
      //               gap: 10,
      //               paddingHorizontal: 10,
                    
      //             }}>
      //            <AntDesign
      //               name="clockcircleo"
      //               size={20}
      //               color={Color.Primary}
      //             />
      //             <Text style={[styles.textType3, {color: Color.Primary,fontFamily:'Circular Std Book'}]}>
      //             08:30 PM
      //             </Text>
      //           </View>
      //         </View>
      //       </View>
      // </TouchableOpacity>
      <></>
      );
    };

    return (
      <View style={{width:'100%',}} >
       
        <View style={{marginTop:20}}></View>
        <FlatList
          data={data}
          renderItem={renderTicketData}
           keyExtractor={(item) => item.id.toString()} 
          showsHorizontalScrollIndicator={false}
          />
     
          <View style={{marginBottom:50}}></View>
      </View>
    );
  }, []);
  const secondRoute = useCallback(() => {
    const data = [
      { id: '1', title: 'All',jtuid:'J9003428',mode:'online',offer_status:'pending' },
      { id: '2', title: 'Biology',jtuid:'J9003428',mode:'Physical',offer_status:'approved' },
      { id: '3', title: 'Mathematics',jtuid:'J9003428',mode:'online',offer_status:'rejected' },
    ];
    const renderAppliedTicketData = ({ item }: any) => { 
      return (
        <>
        <View style={{margin:5}}></View>
          <Text
            style={[
              styles.textType3,
              {
                color: item.offer_status === 'pending' ? '#000000' : '#FFFFFF',
                backgroundColor: (() => {
                  switch (item.offer_status) {
                    case 'pending':
                      return '#FEBC2A';
                    case 'approved':
                      return '#1FC07D';
                    case 'rejected':
                      return '#FF0000';
                    default:
                      return '#298CFF33'; // Default background color if the status is not recognized
                  }
                })(),
                paddingVertical: 5,
                paddingHorizontal: 0,
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                marginLeft: 20,
                width: 100,
                textAlign: 'center',
                textTransform: 'capitalize',
              },
            ]}
          >
            {item.offer_status}
          </Text>
         
          <TouchableOpacity
          activeOpacity={0.8}
          style={{
            borderWidth:0.8,
            borderRadius: 20,
            marginBottom: 10,
            padding: 20,
            borderColor: Color.shinyGrey,
            borderBottomColor: Color.shinyGrey,
            backgroundColor: Color.white,
          }}>
          <View
            style={{
              
              width: '100%',
              borderColor: Color.shinyGrey,
            }}>
            <View style={{flexDirection: 'row',
              justifyContent: 'space-between',alignItems:'center', width:'100%'}}>
              <Text style={[styles.textType3,{fontFamily:'Circular Std Bold'}]}>{item?.jtuid}</Text>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Text
                style={[
                  styles.textType3,
                  {
                    color: item.mode == 'online'? Color.DodgerBlue  : Color.Primary,
                    backgroundColor: item.mode == 'online'? '#298CFF33' : Color.lightPrimary,
                    paddingVertical: 5,
                    paddingHorizontal: 15,
                    borderRadius: 30,
                    textTransform: 'capitalize',
                  },
                ]}>
                {item?.mode}
              </Text>
            </View>

            </View>
            <Text style={[styles.textType1,{fontFamily:'Circular Std Bold'} ]}>
                RM 210
              </Text>
           
          </View>
          <View style={{margin:3}}></View>
          {item?.mode == 'Physical' && 
          <View
            style={{
              flexDirection: 'row', gap: 5, alignItems: 'center',
              
            }}>
            <Feather name="map-pin" size={18} color={'#003E9C'} />
            <Text style={[styles.textType3, { color: '#003E9C',fontFamily:'Circular Std Book', fontSize:18 }]}>
            Selangor, Malaysia
            </Text>
          </View>
          }
          <View style={{ borderWidth: 0.8,borderColor: Color.LightPattensBlue,marginTop: 20, }}></View>
          <View
            style={{
              paddingVertical: 20,
              borderBottomWidth: 0.8,
              borderBottomColor: Color.LightPattensBlue,
            }}>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  gap: 10,
                }}>
                <AntDesign name="copy1" size={20} color={Color.Primary} />
                <Text style={[styles.textType3,{fontFamily:'Circular Std Book', color:Color.IronsideGrey,fontSize:18}]}>Subject</Text>
              </View>
              <Text
                style={[
                  styles.textType1,
                  { fontSize: 20, textTransform: 'capitalize' },
                ]}>
                Mathematics
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  gap: 10,
                }}>
                <FontAwesome name="user-o" size={18} color={Color.Primary} />
                <Text style={[styles.textType3,{fontFamily:'Circular Std Book', color:Color.IronsideGrey,fontSize:18}]}>Pref. Tutor</Text>
              </View>
              <Text
                style={[
                  styles.textType1,
                  { fontSize: 20, textTransform: 'capitalize' },
                ]}>
                Male
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  gap: 15,
                }}>
                <FontAwesome name="level-up" size={18} color={Color.Primary} />
                <Text style={[styles.textType3,{fontFamily:'Circular Std Book', color:Color.IronsideGrey,fontSize:18}]}>Level</Text>
              </View>
              <Text
                style={[
                  styles.textType1,
                  { fontSize: 20, textTransform: 'uppercase' },
                ]}>
                SPM
              </Text>
            </View>
          </View>

          <View
                style={{
                  flexDirection: 'row',
                  gap: 10,
                  paddingTop: 15,
                  borderTopWidth: 0.8,
                  borderTopColor: '#eee',
                }}>
                <View
                  style={{
                    backgroundColor: Color.PattensBlue,
                    // paddingVertical: 10,
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
                      name="calendar"
                      size={20}
                      color={Color.Primary}
                    />
                    <Text style={[styles.textType3, {color: Color.Primary,fontFamily:'Circular Std Book'}]}>
                      Monday
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor: Color.PattensBlue,
                    // paddingVertical: 10,
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
                    08:30 PM
                    </Text>
                  </View>
                </View>
              </View>
        </TouchableOpacity>
        </>
      );
     }
    return (
      <View style={{marginTop:15}}>
      <FlatList
          data={data}
          renderItem={renderAppliedTicketData}
           keyExtractor={(item) => item.id.toString()} 
          showsHorizontalScrollIndicator={false}
          />
          <View style={{marginBottom:50}}></View>
      </View>
    );
  }, []);

  return (
    <View style={{paddingHorizontal: 25,backgroundColor:Color.GhostWhite, height:"100%"}}>
      <Header title='Tutor Request' tab={currentTab}  navigation={navigation}/>

      <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
       
        <View style={{ marginTop: 10 }}>
          <CustomTabView
            currentTab={currentTab}
            firstRoute={firstRoute}
            secondRoute={secondRoute}
            activateTab={activateTab}
            firstRouteTitle="Open"
            secondRouteTitle={`Completed (12)`}
          />
        </View>
      </ScrollView>
    </View>
  )
}

export default JobTicket

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
})
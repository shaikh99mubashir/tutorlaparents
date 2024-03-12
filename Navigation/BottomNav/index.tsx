import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../Screens/Home';
import Splash from '../../Screens/Splash';
import { Color } from '../../Constant';
import LatestJobTicket from '../../Screens/LatestJobTicket';
import ClassSchedule from '../../Screens/ClassSchedule';
import Chat from '../../Screens/Chat';
import TutorProfileMenu from '../../Screens/TutorProfileMenu';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: 'black',
      })}>

      <Tab.Screen
        name="LatestJobTicket"
        component={LatestJobTicket}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View>
              {focused == true ? (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    padding: 5,
                    borderRadius: 5,
                  }}>
                  <Image
                    source={require('../../Images/Job.png')}
                    resizeMode="contain"
                    style={{
                      height: 50,
                      width: 50,
                      tintColor: focused ? 'black' : 'grey',
                    }}
                  />
                </View>
              ) : (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}>
                  <Image
                    source={require('../../Images/Job.png')}
                    resizeMode="contain"
                    style={{
                      height: 50,
                      width: 50,
                      tintColor: focused ? 'black' : 'grey',
                    }}
                  />
                </View>
              )}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="ClassSchedule"
        component={ClassSchedule}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View>
              {focused == true ? (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    padding: 5,
                    borderRadius: 5,
                  }}>
                  <Image
                    source={require('../../Images/schedule1.png')}
                    resizeMode="contain"
                    style={{
                      height: 50,
                      width: 50,
                      tintColor: focused ? 'black' : 'grey',
                    }}
                  />
                </View>
              ) : (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}>
                  <Image
                    source={require('../../Images/schedule1.png')}
                    resizeMode="contain"
                    style={{
                      height: 50,
                      width: 50,
                      tintColor: focused ? 'black' : 'grey',
                    }}
                  />
                </View>
              )}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View>
              {focused == true ? (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    // backgroundColor:'#1FC07D',
                  }}>
                  <Image
                    source={require('../../Images/Home1.png')}
                    resizeMode="contain"
                    style={{
                      height: 100,
                      width: 100,

                    }}
                  />
                </View>
              ) : (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}>
                  <Image
                    source={require('../../Images/Home1.png')}
                    resizeMode="contain"
                    style={{
                      height: 100,
                      width: 100,
                    }}
                  />
                </View>
              )}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View>
              {focused == true ? (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    padding: 5,
                    borderRadius: 5,
                  }}>
                  <Image
                    source={require('../../Images/Chat.png')}
                    resizeMode="contain"
                    style={{
                      height: 40,
                      width: 40,
                      tintColor: focused ? 'black' : 'grey',
                    }}
                  />
                </View>
              ) : (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}>
                  <Image
                    source={require('../../Images/Chat.png')}
                    resizeMode="contain"
                    style={{
                      height: 40,
                      width: 40,
                      tintColor: focused ? 'black' : 'grey',
                    }}
                  />
                </View>
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="TutorProfileMenu"
        component={TutorProfileMenu}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View>
              {focused == true ? (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    padding: 5,
                    borderRadius: 5,
                  }}>
                  <Image
                    source={require('../../Images/profile1.png')}
                    resizeMode="contain"
                    style={{
                      height: 40,
                      width: 40,
                      tintColor: focused ? 'black' : 'grey',
                    }}
                  />
                </View>
              ) : (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}>
                  <Image
                    source={require('../../Images/profile1.png')}
                    resizeMode="contain"
                    style={{
                      height: 40,
                      width: 40,
                      tintColor: focused ? 'black' : 'grey',
                    }}
                  />
                </View>
              )}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  tabBarStyle: {
    // position: 'absolute',
    borderTopWidth: 0,
    height: 80,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: Color.white,
  },
});

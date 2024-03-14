import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../../Screens/Splash';
import Home from '../../Screens/Home';
import BottomNav from '../BottomNav';
import GetStarted from '../../Screens/GetStarted';
import OnBoarding from '../../Screens/OnBoarding';
import OnBoarding2 from '../../Screens/OnBoarding/OnBoarding2';
import OnBoarding3 from '../../Screens/OnBoarding/OnBoarding3';
import Register from '../../Screens/Register.tsx';
import VerifyCode from '../../Screens/VerifyCode/index.tsx';
import UpdateProfile from '../../Screens/UpdateProfile/index.tsx';
import JobTicket from '../../Screens/JobTicket/index.tsx';
import ClassSchedule from '../../Screens/ClassSchedule/index.tsx';
import Chat from '../../Screens/Chat/index.tsx';
import ProfileMenu from '../../Screens/ProfileMenu/index.tsx';
import StudentList from '../../Screens/StudentList/index.tsx';


const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
        {/* <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="VerifyCode" component={VerifyCode} /> */}
        {/* <Stack.Screen name="UpdateProfile" component={UpdateProfile} /> */}
        <Stack.Screen name="BottomNav" component={BottomNav} />
        <Stack.Screen name="StudentList" component={StudentList} />
        <Stack.Screen name="JobTicket" component={JobTicket} />
        <Stack.Screen name="ClassSchedule" component={ClassSchedule} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="ProfileMenu" component={ProfileMenu} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;

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


const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="OnBoardingTwo" component={OnBoarding2} />
        <Stack.Screen name="OnBoardingThree" component={OnBoarding3} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="GetStarted" component={GetStarted} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;

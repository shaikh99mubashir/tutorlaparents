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
import TutorRequest from '../../Screens/TutorRequest/index.tsx';
import TutorRequestDetailsCompleted from '../../Screens/TutorRequestDetailsCompleted/index.tsx';
import AppliedTutorDetails from '../../Screens/AppliedTutorDetails/index.tsx';
import TutorProfile from '../../Screens/TutorProfile/index.tsx';
import PayCommitmentFee from '../../Screens/PayCommitmentFee/index.tsx';
import PaymentGateway from '../../Screens/PaymentGateway/index.tsx';
import PaymentCongratulations from '../../Screens/PaymentCongratulations/index.tsx';
import AddCard from '../../Screens/AddCard/index.tsx';
import Settings from '../../Screens/Settings/index.tsx';
import AccountInformation from '../../Screens/AccountInformation/index.tsx';
import ChangePassword from '../../Screens/ChangePassword/index.tsx';
import ParentProfile from '../../Screens/ParentProfile/index.tsx';
import PaymentHistory from '../../Screens/PaymentHistory/index.tsx';
import InviteFriends from '../../Screens/InviteFriends/index.tsx';
import MyReferralEarnings from '../../Screens/MyReferralEarnings/index.tsx';
import TutorlaTermOfServices from '../../Screens/TutorlaTermOfServices/index.tsx';
import TutorlaPrivacyStatement from '../../Screens/TutorlaPrivacyStatement/index.tsx';
import FAQs from '../../Screens/FAQs/index.tsx';
import StudentReport from '../../Screens/StudentReport/index.tsx';
import ProgressReport from '../../Screens/ProgressReport/index.tsx';
import CompleteClassSchedule from '../../Screens/CompleteClassSchedule/index.tsx';


const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="VerifyCode" component={VerifyCode} />
        <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
        <Stack.Screen name="BottomNav" component={BottomNav} />
        
        <Stack.Screen name="TutorRequest" component={TutorRequest} />
        {/* <Stack.Screen name="JobTicket" component={JobTicket} /> */}
        <Stack.Screen name="TutorRequestDetailsCompleted" component={TutorRequestDetailsCompleted} />
        <Stack.Screen name="AppliedTutorDetails" component={AppliedTutorDetails} />
        <Stack.Screen name="TutorProfile" component={TutorProfile} />
        <Stack.Screen name="PayCommitmentFee" component={PayCommitmentFee} />
        <Stack.Screen name="PaymentGateway" component={PaymentGateway} />
        <Stack.Screen name="PaymentCongratulations" component={PaymentCongratulations} />
        <Stack.Screen name="AddCard" component={AddCard} />
        
        <Stack.Screen name="AccountInformation" component={AccountInformation} />
       
        <Stack.Screen name="ProfileMenu" component={ProfileMenu} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="ParentProfile" component={ParentProfile} />
        <Stack.Screen name="PaymentHistory" component={PaymentHistory} />
        <Stack.Screen name="InviteFriends" component={InviteFriends} />
        <Stack.Screen name="MyReferralEarnings" component={MyReferralEarnings} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="TutorlaTermOfServices" component={TutorlaTermOfServices} />
        <Stack.Screen name="TutorlaPrivacyStatement" component={TutorlaPrivacyStatement} />
        <Stack.Screen name="FAQs" component={FAQs} />
        <Stack.Screen name="ClassSchedule" component={ClassSchedule} />
        <Stack.Screen name="StudentList" component={StudentList} />
        <Stack.Screen name="StudentReport" component={StudentReport} />
        <Stack.Screen name="ProgressReport" component={ProgressReport} />
        <Stack.Screen name="CompleteClassSchedule" component={CompleteClassSchedule} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;

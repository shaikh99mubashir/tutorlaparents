import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  PermissionsAndroid,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Header from '../../Components/Header';
import {Color} from '../../Constant';
import InputText from '../../Components/InputText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';
import PhoneInput from 'react-native-phone-number-input';
import CustomButton from '../../Components/CustomButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { launchImageLibrary } from 'react-native-image-picker';
const UpdateProfile = ({navigation}: any) => {
  const [show, setShow] = useState<boolean>(false);
  const [mode, setMode] = useState<any>('date');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [tempSelectedDate, setTempSelectedDate] = useState<Date | null>(null);
  const phoneInput = useRef(null);
  let [phoneNumber, setPhoneNumber] = useState('');

  console.log('selectedDate', selectedDate);

  const onChange = (event: any, selectedDate: any) => {
    setShow(false);
    if (event.type == 'set') {
      const currentDate: any = selectedDate || tempSelectedDate;
      setSelectedDate(currentDate);
      setTempSelectedDate(null);
    } else {
      //cancel button clicked
      setTempSelectedDate(null);
    }
  };
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(prevState => !prevState);
  };


  const [uri, setUri] = useState('');
  const [type, setType] = useState('');
  const [name, setName] = useState('');

  const uploadImageFromGallery = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
   
   

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('running');
      const options: any = {
        title: 'Select Picture',
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
        maxWidth: 500,
        maxHeight: 500,
        quality: 0.5,
      };
      const result: any = await launchImageLibrary(options);
      if (result.didCancel) {
        // ('');
        console.log("Cancelled image selection");
        
      } else if (result.errorCode == 'permission') {
        // setToastMsg('');
        console.log("Permission Not Satisfied");
        
      } else if (result.errorCode == 'others') {
        // setToastMsg(result.errorMessage);
        console.log('result.errorMessage',result.errorMessage);
        
      } else {
        console.log('hello');
        
        let uri = result.assets[0].uri;
        let type = result.assets[0].type;
        let name = result.assets[0].fileName;

        setUri(uri);
        setType(type);
        setName(name);
      }
    }
    else{
      console.log('PermissionsAndroid.RESULTS. Not GRANTED');
    }
  };
  
  const localImage = 'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=1024x1024&w=is&k=20&c=6XEZlH2FjqdpXUqjUK4y0LlWF6yViZVWn9HZJ-IR8gU='
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
          title="Parent Profile"
          navigation={navigation}
          color={Color.GhostWhite}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent:'center',
            marginTop: 30,
            gap: 15,
          }}>
          <View style={{}}>
            <Image
              source={{uri: name ? `file://${uri}` : localImage }}
              style={{
                width: 120,
                height: 120,
                borderRadius: 100,
                borderWidth: 3,
                borderColor: Color.white,
              }}
            />
            <TouchableOpacity 
            onPress={()=> uploadImageFromGallery()}
              style={{
                backgroundColor: Color.Primary,
                borderWidth: 2,
                borderColor: Color.white,
                width: 35,
                height: 35,
                borderRadius: 30,
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                top: -35,
                right: -35,
              }}>
              <Fontisto name="picture" color={Color.white} size={14} />
            </TouchableOpacity>
          </View>
        </View>

        <InputText placeholder="Full Name" />
        <View style={{margin: 10}}></View>
        <View
          style={{
            backgroundColor: Color.white,
            height: 60,
            borderRadius: 12,
            justifyContent: 'center',
            paddingHorizontal: 20,
          }}>
          <TouchableOpacity
            onPress={() => setShow(true)}
            activeOpacity={0.8}
            style={{
              flexDirection: 'row',
              gap: 15,
              paddingVertical: 10,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={[styles.textType1, {color: '#A9A9A9'}]}>
              {selectedDate
                ? selectedDate.toLocaleDateString([], {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                  })
                : ' Date of Birth'}
            </Text>
            <Ionicons name="calendar-outline" color={Color.Black} size={25} />
          </TouchableOpacity>
        </View>

        <InputText placeholder="Email" />
        <View style={{margin: 10}}></View>
        <View>
          <PhoneInput
            ref={phoneInput}
            placeholder="149655271"
            defaultValue={phoneNumber}
            disabled
            defaultCode="MY"
            layout="first"
            autoFocus={true}
            textInputStyle={{
              color: Color.DustyGrey,
              height: 50,
              fontFamily: 'Circular Std Medium',
              marginLeft: -5,
              letterSpacing: 1.5,
            }}
            textInputProps={{placeholderTextColor: Color.DustyGrey}}
            codeTextStyle={{
              marginLeft: 0,
              color: Color.DustyGrey,
              fontFamily: 'Circular Std Medium',
              letterSpacing: 1.5,
            }}
            containerStyle={styles.phoneNumberView}
            flagButtonStyle={{
              borderRadius: 8,
              borderWidth: 1,
              borderColor: Color.DustyGrey,
              width: 70,
              height: 40,
              marginLeft: 10,
              marginTop: 10,
            }}
            // flagComponent={<YourCustomFlagIcon />}
            textContainerStyle={{
              height: 60,
              backgroundColor: '#CECECE',
              borderRadius: 10,
              borderColor: Color.GhostWhite,
            }}
            onChangeFormattedText={text => {
              setPhoneNumber(text);
            }}
          />
        </View>
        <InputText placeholder="Address (Area and Street)" />
        
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{width: '48%'}}>
            <InputText placeholder="City" />
          </View>
          <View style={{width: '48%'}}>
            <InputText placeholder="State" />
          </View>
        </View>
        <InputText placeholder="Postcode" />
        
        <View style={{margin: 20}}></View>
        <CustomButton
          btnTitle="Save"
          onPress={() => navigation.navigate('')}
        />
        <View style={{margin: 30}}></View>
      </ScrollView>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={tempSelectedDate || new Date()}
          mode="date"
          maximumDate={new Date()}
          // is24Hour={true}
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  textType1: {
    color: Color.Black,
    fontSize: 17,
    fontFamily: 'Circular Std Medium',
  },
  textType2: {
    color: Color.Black,
    fontSize: 26,
    fontFamily: 'Circular Std Medium',
  },
  phoneNumberView: {
    // height: 70,
    width: '100%',
    // backgroundColor: 'white',
    borderColor: Color.GhostWhite,
    backgroundColor: '#CECECE',
    borderRadius: 10,
    borderWidth: 1,
    color: '#E5E5E5',
    flexShrink: 22,
    fontFamily: 'Circular Std Medium',
  },
});

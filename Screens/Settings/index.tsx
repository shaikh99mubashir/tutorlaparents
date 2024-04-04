import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Color} from '../../Constant';
import Header from '../../Components/Header';
import CustomButton from '../../Components/CustomButton';

const Settings = ({navigation}: any) => {
  const [apply, setApply] = useState(false);
  const [cancel, setCancel] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const handleCloseModal = () => {
    setModalVisible(false);
  };
  const handleLogoutPress = () => {
    setModalVisible(true);
  };
  return (
    <View
      style={{
        backgroundColor: Color.GhostWhite,
        height: '100%',
        paddingHorizontal: 25,
      }}>
      <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled>
        <Header title={'Settings'} goBack navigation={navigation} />
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
            onPress={() => navigation.navigate('')}
            activeOpacity={0.8}
            style={{
              flexDirection: 'row',
              gap: 15,
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <Image source={require('../../Images/tutorProfile.png')} />
            <Text style={[styles.textType3]}>Account Information</Text>
          </TouchableOpacity>
        </View>
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
            onPress={() => navigation.navigate('ChangePassword')}
            activeOpacity={0.8}
            style={{
              flexDirection: 'row',
              gap: 15,
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <Image source={require('../../Images/lock.png')} />
            <Text style={[styles.textType3]}>Change Password</Text>
          </TouchableOpacity>
        </View>
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
            onPress={handleLogoutPress}
            activeOpacity={0.8}
            style={{
              flexDirection: 'row',
              gap: 15,
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <Image source={require('../../Images/logout.png')} />
            <Text style={[styles.textType3]}>Logout</Text>
          </TouchableOpacity>
        </View>
        <View style={{margin: 10}}></View>
      </ScrollView>
      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.9)',
          }}>
          <View
            style={[
              styles.modalContainer,
              {padding: 30, marginHorizontal: 20,},
            ]}>
            <Text style={styles.textType1}>Logout?</Text>
            <View style={{margin: 5}}></View>
            <Text style={styles.textType3}>
              Are you sure you want to Logout?
            </Text>
            <View style={{margin: 15}}></View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: 8,
              }}>
              <View style={{width: '48%'}}>
                <CustomButton
                  btnTitle="Cancel"
                  onPress={handleCloseModal}
                  backgroundColor={Color.WhiteSmoke}
                  color={Color.Black}
                />
              </View>
              <View style={{width: '48%'}}>
                <CustomButton btnTitle="Ok" onPress={handleCloseModal} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Settings;

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
  modalContainer: {
    // flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  modalText: {
    color: 'black',
    fontSize: 12,
    fontFamily: 'Circular Std Medium',
  },
});

import {ScrollView, StyleSheet, Text, View, Image, Dimensions, Modal, Button} from 'react-native';
import React, { useState } from 'react';
import {Color} from '../../Constant';
import Header from '../../Components/Header';
import CustomButton from '../../Components/CustomButton';
import InputText from '../../Components/InputText';
import Octicons from 'react-native-vector-icons/Octicons';
const AddCard = ({navigation}: any) => {
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
      setModalVisible(!modalVisible);
    };
    const handelDone = () => {
      setModalVisible(!modalVisible);
      navigation.navigate('PaymentGateway')
    };
  return (
    <View
      style={{
        backgroundColor: Color.GhostWhite,
        height: '100%',
        paddingHorizontal: 25,
      }}>
      <Header goBack title="Add Card" navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled>
      
        <View style={{margin: 10}}></View>
        <Image source={require('../../Images/CARD.png')}resizeMode='contain' style={{width:Dimensions.get('screen').width/1.15}}/>
        <View style={{margin: 10}}></View>

      <InputText placeholder="Card Holder Name" label='Card Holder Name*' />
      <View style={{margin: 10}}></View>

      <InputText placeholder="Card Number" label='Card Number*' />
      <View style={{margin: 10}}></View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{width: '48%'}}>
          <InputText label="Expiry Date*" placeholder='MM/YYYY'/>
        </View>
        <View style={{width: '48%'}}>
          <InputText label="CVV*" placeholder='***' />
        </View>
      </View>
      <View style={{margin: 5}}></View>
      <Text style={{ fontFamily: 'Circular Std Book',fontSize:13, lineHeight:18, color:Color.DustyGrey}}>Adding this card ensures automatic payment for{'\n'}future invoices.</Text>
      </ScrollView>
      <View  style={{marginVertical:50}}>
        <CustomButton btnTitle='Add Card' onPress={toggleModal}/>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
       <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0,0.80)',
            height: '100%',
          }}>
          <View style={{backgroundColor:Color.white,borderRadius:25,paddingHorizontal:60, paddingVertical:30}}>
            <Text style={[styles.textType1, {textAlign:'center', lineHeight:35,fontSize:30}]}>Card Added{'\n'}Successfully!</Text>
            <View style={{margin: 10}}></View>
            <View style={{alignSelf:'center'}}>
            <Octicons name='check-circle-fill' color={Color.Primary} size={70}/>
            </View>
            <View style={{margin: 15}}></View>
            <Text style={{ fontFamily: 'Circular Std Book',fontSize:13, lineHeight:18, color:Color.DustyGrey}}>Your card has been added successfully</Text>
            <View style={{margin: 10}}></View>
            <CustomButton btnTitle='Done' onPress={()=>handelDone()} />
          </View>
          
        </View>
      </Modal>
    </View>
  );
};

export default AddCard;

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
        fontStyle: 'normal',
      },
});

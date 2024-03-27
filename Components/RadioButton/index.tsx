import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Color } from '../../Constant';
import Octicons from 'react-native-vector-icons/Octicons';

const RadioButton = ({ options, onSelect,label,Required }:any) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option:any) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <>
     <Text style={styles.label}>{label} {Required  && <Text style={{color:Color.Red}}>*</Text>}</Text>
    <View style={{ flexDirection: 'row',flexWrap:'wrap',width:'100%', justifyContent:"space-between", marginVertical:5 }}>
      {options.map((option:any) => (
        <TouchableOpacity
        activeOpacity={0.8}
          key={option}
          style={{ flexDirection: 'row',width:'48.5%', marginBottom:10,alignItems: 'center',justifyContent:'space-between',backgroundColor:Color.white, height:60, paddingHorizontal:15, borderRadius:16,  }}
          onPress={() => handleSelect(option)}
        >
        <Text style={[styles.textType1,{color:Color.DustyGrey,fontSize: 16,}]}>{option}</Text>
          <View
            style={{
              height: 24,
              width: 24,
              borderRadius: 12,
            //   borderWidth: 2,
            //   borderColor: selectedOption === option ? '#007AFF' : '#000',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor:Color.AliceBlue
            }}
          >
             
            {selectedOption === option && (
            <View style={{backgroundColor:Color.white}}>
            <Octicons name="check-circle-fill" size={22} color={Color.Primary} />
            </View>
            )}
          </View>
         
        </TouchableOpacity>
      ))}
    </View>
    </>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
    textType1: {
      color: Color.Black,
      fontSize: 17,
      fontFamily: 'Circular Std Book',
    },
    textType2: {
      color: Color.Black,
      fontSize: 26,
      fontFamily: 'Circular Std Medium',
    },
    label: {
      color: Color.Dune,
      fontFamily: 'Circular Std Medium',
      fontSize: 16,
    },
  });
  

import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Color} from '../../Constant';
import Octicons from 'react-native-vector-icons/Octicons';

const RadioButton2 = ({options, onSelect, label, Required}: any) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option: any) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <>
      <Text style={styles.label}>
        {label} {Required && <Text style={{color: Color.Red}}>*</Text>}
      </Text>
      <View style={{margin: 3}}></View>
      <View
        style={{backgroundColor: Color.white, borderRadius: 16, padding: 0}}>
        {options.map((option: any, index: number) => {
          const isLastItem = index === options.length - 1;
          return (
            <>
              <TouchableOpacity
                activeOpacity={0.8}
                key={index}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: Color.white,
                  height: 60,
                  paddingHorizontal: 15,
                  margin: 5,
                }}
                onPress={() => handleSelect(option)}>
                <Text
                  style={[
                    styles.textType1,
                    {color: Color.Black, fontSize: 16},
                  ]}>
                  {option}
                </Text>
                <View
                  style={{
                    height: 24,
                    width: 24,
                    borderRadius: 12,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: Color.AliceBlue,
                  }}>
                  {selectedOption === option && (
                    <View style={{backgroundColor: Color.white}}>
                      <Octicons
                        name="check-circle-fill"
                        size={22}
                        color={Color.Primary}
                      />
                    </View>
                  )}
                </View>
              </TouchableOpacity>
              {isLastItem ? null : (
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: Color.lineColor,
                  }}></View>
              )}
            </>
          );
        })}
      </View>
    </>
  );
};

export default RadioButton2;
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

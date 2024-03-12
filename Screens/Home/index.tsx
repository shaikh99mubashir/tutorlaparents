import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Home = ({navigation}: any) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('OnBoarding')}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});

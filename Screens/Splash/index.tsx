import { Image, StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import { Color } from '../../Constant';

const Splash = ({navigation}:any) => {
  const navigateToHomeScreen = () => {
    setTimeout(async () => {
      navigation.replace('OnBoarding');
    }, 3000);
  };
  useEffect(() => {
    navigateToHomeScreen();
  }, []);
  return (
    <View style={{ flex: 1,  justifyContent: "center", alignItems: "center" }}  >
      <Image source={require("../../Images/Launching.jpg")} style={styles.logo} />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  logo: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width / 1,
  },
})
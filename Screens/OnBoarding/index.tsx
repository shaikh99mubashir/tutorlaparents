import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Color} from '../../Constant';
import CustomButton from '../../Components/CustomButton';

const {width, height} = Dimensions.get('window');

const COLORS = {primary: 'pink', white: 'black'};

const slides = [
  {
    id: '1',
    image: require('../../Images/ONB1.png'),
    title: 'Accelerate',
    title2: "Your Child's Success",
    subtitle: 'Effortless Tutor Matching, Secure Payments, and ',
    subtitle2: 'User-Friendly Interface for Seamless Learning',
    backgroundColor: '#5B56FB',
  },
  {
    id: '2',
    image: require('../../Images/ONB2.png'),
    title: 'Ensuring',
    title2: 'Top-Quality Education',
    subtitle: 'Thoroughly Vetted Tutors with Background',
    subtitle2: "Checks for Your Child's Best Learning Experience",
    backgroundColor: Color.Primary,
  },
  {
    id: '3',
    image: require('../../Images/ONB3.png'),
    title: '20,000+ Satisfied',
    title2: '  Family and Counting',
    subtitle: 'Experience the Trusted and Reliable Way to Find',
    subtitle2: "Quality Tutors for Your Child's Academic Journey",
    backgroundColor: Color.Yellow,
  },
];

const Slide = ({item}: any) => {
  return (
    <View style={{alignItems: 'center', marginTop: 40}}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={item?.image}
          style={{width: Dimensions.get('screen').width, resizeMode: 'contain'}}
        />
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center', top: -52}}>
        <Text
          style={{
            fontFamily: 'Circular Std Medium',
            color: Color.white,
            fontSize: 18,
            lineHeight: 35,
          }}>
          {item?.title}
        </Text>
        <Text
          style={{
            fontFamily: 'Circular Std Medium',
            color: Color.white,
            fontSize: 22,
            lineHeight: 23,
          }}>
          {item?.title2}
        </Text>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center', top: -30}}>
        <Text
          style={{
            fontFamily: 'Circular Std Book',
            color: Color.white,
            fontSize: 15,
            lineHeight: 23,
          }}>
          {item?.subtitle}
        </Text>
        <Text
          style={{
            fontFamily: 'Circular Std Book',
            color: Color.white,
            fontSize: 15,
            lineHeight: 23,
          }}>
          {item?.subtitle2}
        </Text>
      </View>
    </View>
  );
};

const OnBoarding = ({navigation}: any) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref: any = React.useRef();
  const updateCurrentSlideIndex = (e: any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };
  const goToPreviousSlide = () => {
    const nextSlideIndex = currentSlideIndex - 1;
    // if (nextSlideIndex >= 0) {
      console.log('goToPreviousSlide',nextSlideIndex);
      
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex - 1);
    // }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({offset});
    setCurrentSlideIndex(lastSlideIndex);
  };

  const handleDonePress = () => {
    AsyncStorage.setItem('login', 'login');
    navigation.replace('GetStarted');
  };

  const Footer = () => {
    return (
      <View style={{marginBottom: 20, marginHorizontal: 30}}>
        {currentSlideIndex == slides.length - 1 ? (
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              onPress={() => goToPreviousSlide()}
              style={{
                backgroundColor: Color.whiteLite,
                width: 50,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 30,
              }}>
              <AntDesign
                name="arrowleft"
                color={slides[currentSlideIndex].backgroundColor}
                size={25}
              />
            </TouchableOpacity>
            <UpperScroll />
            <TouchableOpacity
              onPress={() => handleDonePress()}
              style={{
                backgroundColor: Color.white,
                width: 50,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 30,
              }}>
              <AntDesign
                name="arrowright"
                color={slides[currentSlideIndex].backgroundColor}
                size={25}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View   
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 50,
                height: 50,
              }}>
              {currentSlideIndex === 0 ? (
                ''
              ) : (
                <TouchableOpacity
                onPress={() => goToPreviousSlide()}
                  style={{
                    backgroundColor: Color.whiteLite,
                    width: 50,
                    height: 50,
                    borderRadius: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <AntDesign
                    name="arrowleft"
                    color={slides[currentSlideIndex].backgroundColor}
                    size={25}
                  />
                </TouchableOpacity>
              )}
            </View>
            <UpperScroll />
            <TouchableOpacity
              onPress={() => goToNextSlide()}
              style={{
                backgroundColor: Color.white,
                width: 50,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 30,
              }}>
              <AntDesign
                name="arrowright"
                color={slides[currentSlideIndex].backgroundColor}
                size={25}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };

  const roundedCornerStyle = {
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
  };

  const roundedEndStyle = {
    borderTopRightRadius: 18,
    borderBottomRightRadius: 18,
    left: -1,
  };
  const UpperScroll = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* Render indicator */}
        {slides.map((_, index) => {
          return (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: Color.white,
                  width: 20,
                  height: 10,
                  borderRadius: 50,
                },
              ]}
            />
          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: slides[currentSlideIndex].backgroundColor,
        paddingTop: 20,
      }}>
      {/* <StatusBar backgroundColor={COLORS.primary} /> */}
      <View style={{alignItems: 'center', flexDirection: 'row', marginTop: 20}}>
        {/* <View style={{width: '60%'}}>
          <View style={{justifyContent: 'flex-end', alignItems: 'flex-end'}}>
           
          </View>
        </View> */}

        <View style={{justifyContent: 'flex-end', flex: 1}}>
          <TouchableOpacity
            onPress={() => skip()}
            activeOpacity={0.8}
            style={{
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              marginRight: 30,
            }}>
            {currentSlideIndex != slides.length  && (
              <Text
                style={{
                  color: Color.white,
                  backgroundColor: Color.whiteLite,
                  textAlign: 'center',
                  fontSize: 14,
                  fontFamily: 'Circular Std Bold',
                  width: 60,
                  paddingVertical: 4,
                  borderRadius: 30,
                }}>
                Skip
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{height: height * 0.75}}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({item}) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    color: COLORS.white,
    fontSize: 13,
    marginTop: 10,
    // maxWidth: '70%',
    textAlign: 'center',
    lineHeight: 23,
  },
  title: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: 'bold',
    // marginTop: 20,
    textAlign: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  indicator: {
    height: 10,
    width: 10,
    borderRadius: 50,
    marginHorizontal: 3,
    backgroundColor: Color.white,
    // borderLeftWidth:1
  },
  btn: {
    flex: 1,
    height: 50,
    // width:360,
    borderRadius: 30,
    flexShrink: 0,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default OnBoarding;

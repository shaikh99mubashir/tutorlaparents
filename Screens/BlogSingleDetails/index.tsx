import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color} from '../../Constant';
import Header from '../../Components/Header';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';

const BlogSingleDetails = ({navigation, route}: any) => {
  const blog = route.params;
  console.log('blog', blog);

  return (
    <View
      style={{
        backgroundColor: Color.GhostWhite,
        height: '100%',
        paddingHorizontal: 25,
      }}>
      <Header goBack title="Tutors will plan and Tea" navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled>
        <Image
          source={require('../../Images/Banner.png')}
          resizeMode="cover"
          style={{borderRadius: 16, width: '98%', alignSelf: 'center'}}
        />

        <View style={{margin: 5}} />
        <Text style={[styles.textType1]}>
          Tutors will plan and teach accordi..
        </Text>
        <View style={{margin: 5}} />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
            <Image
              source={require('../../Images/Banner.png')}
              resizeMode="cover"
              style={{borderRadius: 50, width: 40, height: 40}}
            />
            <Text
              style={[
                styles.textType1,
                {
                  fontSize: 14,
                  color: Color.Dune,
                  fontFamily: 'Circular Std Book',
                },
              ]}>
              Die Loon Tak
            </Text>
          </View>

          <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
            <Text
              style={[
                styles.textType1,
                {
                  fontSize: 14,
                  color: Color.Dune,
                  fontFamily: 'Circular Std Book',
                },
              ]}>
              27 Mar |
            </Text>
            <Text
              style={[
                styles.textType1,
                {
                  fontSize: 14,
                  color: Color.Dune,
                  fontFamily: 'Circular Std Book',
                },
              ]}>
              11:30 AM
            </Text>
          </View>
        </View>
        <View style={{margin: 8}} />
        <View style={{borderWidth: 0.5, borderColor:Color.lineColor}} />
        <View style={{margin: 3}} />
        <Text style={styles.textType2}>
        Because feeds into the cynicism we have about it government. Instead it is that American spirit is a American promise that pushes forward even when the path is uncertain that binds us together in spite our differences struggle women's equality continues in many aspects of American life, and in countries around the world this time we want about the men women of every colour.
        </Text>
        <View style={{margin: 8}} />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
           <Octicons name='share-android' size={22} color={Color.Black}/>
            <Text
              style={[
                styles.textType1,
                {
                  fontSize: 14,
                  color: Color.Black,
                },
              ]}>
              Share
            </Text>
          </View>

          <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
            <Entypo name='facebook-with-circle' size={22} color={Color.Black} />
            <Entypo name='twitter-with-circle' size={22} color={Color.Black} />
            <Entypo name='google--with-circle' size={22} color={Color.Black} />
            <Entypo name='linkedin-with-circle'  size={22} color={Color.Black}/>
          </View>
        </View>
        <View style={{margin: 8}} />
      </ScrollView>
    </View>
  );
};

export default BlogSingleDetails;

const styles = StyleSheet.create({
  textType1: {
    fontWeight: '500',
    fontSize: 20,
    color: Color.Black,
    fontFamily: 'Circular Std Medium',
    // lineHeight: 24,
    fontStyle: 'normal',
  },
  textType2: {
    color: Color.Black,
    fontSize: 15,
    fontFamily: 'Circular Std Book',
    lineHeight:20
  },
});

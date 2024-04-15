import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../Components/Header';
import {Color} from '../../Constant';

const LatestBlog = ({navigation}: any) => {
  const levelData = [
    {id: '1', title: 'All Course'},
    {id: '2', title: 'Science'},
    {id: '3', title: 'Mathematics'},
    {id: '4', title: 'Biology'},
    {id: '5', title: 'English'},
  ];

  const [selectedItem, setSelectedItem] = useState(levelData[0].id);
  const renderLevel = ({item}: any) => {
    const isSelected = selectedItem === item.id;

    return (
      <TouchableOpacity
        onPress={() => setSelectedItem(item.id)}
        style={{
          paddingHorizontal: 15,
          height: 40,
          borderRadius: 8,
          backgroundColor: isSelected ? Color.Primary : Color.PattensBlue,
          marginTop: 20,
          justifyContent: 'center',
          marginRight: 10,
        }}>
        <Text
          style={[
            styles.textType1,
            {
              color: isSelected ? Color.white : Color.IronsideGrey,
              textAlign: 'center',
            },
          ]}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  const LatestNewsArray = [
    {
      id: '1',
      imageSource: require('../../Images/Banner.png'),
      title: 'The Status of the Teach..',
      timestamp: '16 Dec | 10:40 PM',
    },
    {
      id: '2',
      imageSource: require('../../Images/Banner.png'),
      title: 'The Status of the Teach..',
      timestamp: '16 Dec | 10:40 PM',
    },
    {
      id: '3',
      imageSource: require('../../Images/Banner.png'),
      title: 'The Status of the Teach..',
      timestamp: '16 Dec | 10:40 PM',
    },
    {
      id: '4',
      imageSource: require('../../Images/Banner.png'),
      title: 'The Status of the Teach..',
      timestamp: '16 Dec | 10:40 PM',
    },
    {
      id: '5',
      imageSource: require('../../Images/Banner.png'),
      title: 'The Status of the Teach..',
      timestamp: '16 Dec | 10:40 PM',
    },
  ];

  return (
    <View
      style={{
        backgroundColor: Color.GhostWhite,
        height: '100%',
        paddingHorizontal: 25,
      }}>
      <Header goBack title="Latest Blogs" navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled>
        <View>
          <FlatList
            data={levelData}
            renderItem={renderLevel}
            keyExtractor={item => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled
          />
        </View>

        <View
          style={{
            width: '100%',
            
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            marginTop: 20,
          }}>
          {LatestNewsArray &&
            LatestNewsArray.map((item: any, i: number) => {
              return (
                <>
                  <TouchableOpacity onPress={()=> navigation.navigate('BlogSingleDetails', item)} activeOpacity={0.8} style={{width: '48.5%', paddingBottom: 20}} key={i}>
                    <Image
                      source={item.imageSource}
                      resizeMode="cover"
                      style={{borderRadius: 10, width: '100%', height: 90, }}
                    />
                    <View style={{marginTop: 3}}></View>
                    <Text
                      style={[
                        styles.textType1,
                        {fontFamily: 'Circular Std Book', fontSize: 13},
                      ]}>
                      {item.title}
                    </Text>
                    <Text
                      style={[
                        styles.textType1,
                        {
                          color: Color.IronsideGrey,
                          fontFamily: 'Circular Std Book',
                          fontSize: 13,
                        },
                      ]}>
                      {item.timestamp}
                    </Text>
                    <View
                      style={{
                        borderBottomWidth: 1,
                        borderBottomColor: Color.lineColor,
                        marginTop: 20,
                        width: '500%',
                      }}
                    />
                  </TouchableOpacity>
                  
                </>
              );
            })}
           
        </View>
      </ScrollView>
    </View>
  );
};

export default LatestBlog;

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
});

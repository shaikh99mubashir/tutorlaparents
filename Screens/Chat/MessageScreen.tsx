import {StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import React, {useState} from 'react';
import {Color} from '../../Constant';
import ChatHeader from '../../Components/Header/ChatHeader';
import ChatInput from '../../Components/ChatInput';
import MessagesList from '../../Components/MessagesList';

const MessageScreen = ({navigation, route}: any) => {
  const data = route.params;
  console.log('data', data);
  const [reply, setReply] = useState("");
	const [isLeft, setIsLeft] = useState();
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const closeReply = () => {
		setReply("");
	};

  const swipeToReply = (message:any, isLeft:any) => {
		setReply(message.length > 50 ? message.slice(0, 50) + '...' : message);
		setIsLeft(isLeft);
	};
  const [ddOpen, setDDOpen] = useState(false);
  const DropDownValues = [
    {
      ddValue: 'Search',
    },
    {
      ddValue: 'Delete',
    },
    {
      ddValue: 'View Profile',
    },
  ];
  const closeDropDown = () => {
    setDDOpen(false);
  };

  const toggleDropDown = () => {
    setDDOpen(!ddOpen);
  };

  return (
    <TouchableWithoutFeedback onPress={closeDropDown}>
      <View
        style={{
          paddingHorizontal: 25,
          backgroundColor: Color.GhostWhite,
          height: '100%',
         zIndex:9999,
        }}>
        <ChatHeader
          navigation={navigation}
          title={data.name}
          showOptions={true}
          onOptionsPress={toggleDropDown}
        />
        <View style={{margin:10}}></View>
        {/* <MessagesList onSwipeToReply={swipeToReply} /> */}
       {/* <ChatInput reply={reply} isLeft={isLeft} closeReply={closeReply} username={data.name} /> */}

       {ddOpen ? (
            <View
              style={{
                backgroundColor: Color.white,
                borderRadius: 12,
                paddingHorizontal: 15,
                paddingTop: 15,
                marginTop: 3,
                zIndex: 999,
                position: 'absolute',
                top: 72,
                width: 110,
                elevation: 2,
                right: 13,
              }}>
              <View style={{padding: 3}}></View>
              {DropDownValues &&
                DropDownValues.map((e: any, i: number) => {
                  return (
                    <TouchableOpacity key={i}>
                      <Text
                        style={[
                          styles.textType3,
                          {
                            fontSize: 14,
                            paddingBottom: 16,
                            fontFamily: 'Circular Std Book',
                          },
                        ]}>
                        {e.ddValue ? e.ddValue : e.ddValue[0]}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              <View style={{padding: 2}}></View>
            </View>
          ) : null}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  textType1: {
    fontWeight: '500',
    fontSize: 26,
    color: Color.Black,
    fontFamily: 'Circular Std Medium',
    // lineHeight: 24,
    fontStyle: 'normal',
  },
  textType3: {
    color: Color.Dune,
    fontWeight: '500',
    fontSize: 16,
    fontFamily: 'Circular Std Medium',
    fontStyle: 'normal',
  },
});

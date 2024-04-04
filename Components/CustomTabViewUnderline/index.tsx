import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useState, useCallback} from 'react';
import {Color} from '../../Constant';

const CustomTabViewUnderline = (Props: any): any => {
  const {
    firstRoute,
    secondRoute,
    currentTab,
    activateTab,
    firstRouteTitle,
    secondRouteTitle,
    thirdRoute,
    thirdRouteTitle,
  } = Props;

  const myFirstRoute = () => {
    firstRoute();
  };

  const mySecondRoute = () => {
    secondRoute();
  };

  return (
    <View>
      <View style={{marginBottom: 40, }}>
        <View
          style={{
            width: Dimensions.get('window').width / 1.1,
            alignItems: 'center',
            flexDirection: 'row',
            gap: 0,
          }}>
          <TouchableOpacity
            onPress={() => activateTab(0)}
            style={{
              width: '33%',
            }}>
            <Text
              style={[
                styles.text,
                {
                  color:
                    currentTab &&
                    currentTab.some(
                      (e: any, i: any) => e.index == 0 && e.selected,
                    )
                      ? Color.Primary
                      : Color.Black,
                  borderBottomWidth:
                    currentTab &&
                    currentTab.some(
                      (e: any, i: any) => e.index == 0 && e.selected,
                    )
                      ? 3
                      : 1,
                  fontSize: 15,
                  borderBottomColor:
                    currentTab &&
                    currentTab.some(
                      (e: any, i: any) => e.index == 0 && e.selected,
                    )
                      ? Color.Primary
                      : Color.lineColor,
                  padding: 8,
                },
              ]}>
              {firstRouteTitle}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => activateTab(1)}
            style={{
              width: '33%',
              borderRadius: 10,
              borderColor: Color.Black,
            }}>
            <Text
              style={[
                styles.text,
                {
                  color:
                    currentTab &&
                    currentTab.some(
                      (e: any, i: any) => e.index == 1 && e.selected,
                    )
                      ? Color.Primary
                      : Color.Black,
                  fontSize: 15,
                  borderBottomWidth:
                    currentTab &&
                    currentTab.some(
                      (e: any, i: any) => e.index == 1 && e.selected,
                    )
                      ? 3
                      : 1,
                  borderBottomColor:
                    currentTab &&
                    currentTab.some(
                      (e: any, i: any) => e.index == 1 && e.selected,
                    )
                      ? Color.Primary
                      : Color.lineColor,
                  padding: 8,
                },
              ]}>
              {secondRouteTitle}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => activateTab(2)}
            style={{
              width: '33%',
              borderRadius: 10,
              paddingVertical: 5,
              // borderWidth:1,
              borderColor: Color.Black,
            }}>
            <Text
              style={[
                styles.text,
                {
                  color:
                    currentTab &&
                    currentTab.some(
                      (e: any, i: any) => e.index == 2 && e.selected,
                    )
                      ? Color.Primary
                      : Color.Black,
                  borderBottomWidth:
                    currentTab &&
                    currentTab.some(
                      (e: any, i: any) => e.index == 2 && e.selected,
                    )
                      ? 3
                      : 1,
                  fontSize: 15,
                  borderBottomColor:
                    currentTab &&
                    currentTab.some(
                      (e: any, i: any) => e.index == 2 && e.selected,
                    )
                      ? Color.Primary
                      : Color.lineColor,
                  padding: 8,
                },
              ]}>
              {thirdRouteTitle}
            </Text>
          </TouchableOpacity>
        </View>

        {currentTab &&
        currentTab.length > 0 &&
        currentTab.some((e: any, i: any) => e.index == 0 && e.selected)
          ? firstRoute()
          : currentTab.length > 0 &&
            currentTab.some((e: any, i: any) => e.index == 1 && e.selected)
          ? secondRoute()
          : thirdRoute()}
      </View>
    </View>
  );
};

export default CustomTabViewUnderline;

const styles = StyleSheet.create({
  text: {
    color: Color.Black,
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: 'Circular Std Medium',
  },
});

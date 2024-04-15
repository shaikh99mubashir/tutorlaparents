import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Color } from '../../Constant'
import Header from '../../Components/Header'

const BlogSingleDetails = ({navigation}:any) => {
  return (
    <View
    style={{
      backgroundColor: Color.GhostWhite,
      height: '100%',
      paddingHorizontal: 25,
    }}>
    <Header goBack title="Tutors will plan and Tea..." navigation={navigation} />
    <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled>
        </ScrollView>
    </View>
  )
}

export default BlogSingleDetails

const styles = StyleSheet.create({})
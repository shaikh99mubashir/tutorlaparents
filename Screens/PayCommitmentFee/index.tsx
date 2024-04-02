import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Color } from '../../Constant'
import Header from '../../Components/Header'

const PayCommitmentFee = ({navigation}:any) => {
  return (
    <View
    style={{
      backgroundColor: Color.GhostWhite,
      height: '100%',
      paddingHorizontal:25
    }}>
         <Header goBack title="Commitment Fee" navigation={navigation} />
    <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled>
        </ScrollView>
    </View>
  )
}

export default PayCommitmentFee

const styles = StyleSheet.create({})
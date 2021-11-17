import React from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'dripsy'

import SignLog from '../components/Profiles/SignLog'

export default function ProfileScreen(props) {
  return (
    <View style={styles.container}>
      <SignLog />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#428ACA'
  }
})

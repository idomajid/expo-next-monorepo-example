import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import FormPost from '../components/FormPost'

export default function postForm() {
  return (
    <View style={styles.container}>
      <FormPost />
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

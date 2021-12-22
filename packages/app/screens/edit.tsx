import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Form from '../components/FormPost'

export default function edit() {
    return (
        <View style={styles.container}>
            <Form/>
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
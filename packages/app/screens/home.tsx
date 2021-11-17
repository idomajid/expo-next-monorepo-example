import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { View, Text, TextInput } from 'dripsy'
import { USER } from '../../expo/data/dummy-data'

import Card from '../components/Card'

export default function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <FlatList
          data={USER}
          renderItem={({ item }) => (
            <Card
              name={item.name}
              date={item.date}
              opinion={item.opinion}
              image={item.imageUrl}
            />
          )}
          keyExtractor={(item) => item.userId}
        />
      </View>
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

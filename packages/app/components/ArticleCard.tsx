import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default function ArticleCard(props) {
  return (
    <View style={styles.container}>
      <View style={styles.loginCard}>
        <View style={styles.textLayout}>
          <Text style={styles.textTitle}>{props.title}</Text>
          <Text style={styles.textParagraph}>{props.paragraph}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textLayout: {
    width: '95%',
    marginHorizontal: 10,
    marginVertical: 5
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingVertical: 10
  },
  textParagraph: {
    fontSize: 14,
    paddingVertical: 10
  },
  loginCard: {
    backgroundColor: '#FBFEFB',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 0.2,
    elevation: 5,
    borderRadius: 8
  }
})

import React from 'react'
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native'
import Feather from '@expo/vector-icons/build/Feather'

export default function ArticleCard(props) {
  return (
    <View style={styles.container}>
      <View style={styles.layoutCard}>
        <View style={styles.textLayout}>
          <View style={styles.rowSetting}>
            <Text style={styles.textTitle}>{props.title}</Text>
            <View style={styles.rowButton}>
            <TouchableHighlight
            style={styles.editPad}
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={props.editHandle}
              >
                <View>
                  <Feather name="edit-2" color="grey" size={21} />
                </View>
              </TouchableHighlight>
              <TouchableHighlight
              style={styles.removePad}
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={props.deleteArticleHandle}
              >
                <View>
                  <Feather name="trash-2" color="grey" size={21} />
                </View>
              </TouchableHighlight>
              
            </View>
          </View>
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
    fontSize: 18
  },
  textParagraph: {
    fontSize: 14,
    paddingVertical: 10,
    marginHorizontal: 7
  },
  layoutCard: {
    backgroundColor: '#FBFEFB',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 0.2,
    elevation: 5,
    borderRadius: 8
  },
  rowSetting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    marginHorizontal: 7
  }, rowButton: {
    flexDirection: 'row',
    justifyContent: "space-evenly"
  },editPad: {
    paddingRight: 10
  }, removePad: {
    paddingLeft: 10
  }
})

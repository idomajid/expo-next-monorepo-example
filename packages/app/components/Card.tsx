import React ,{ useState } from 'react'
import { StyleSheet, Button, Alert } from 'react-native'
import { View, Text } from 'dripsy'

import Picture from './Picture'



export default function Card(props) {
  

  
  return (
    <View style={styles.container}>
      <View style={styles.cardCon}>
        <View>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.dateStyle}>{props.date}</Text>
        </View>
        <View>
          <Picture style={styles.cardPicture} source={{ uri: props.image }} />
        </View>
        <View style={styles.directionStyle}>
          {/* <Picture
            style={styles.profilePicStyle}
            source={{ uri: props.image }}
          /> */}
          {/* <View style={styles.nameDateContainer}>
            <Text style={styles.nameStyle}>{props.name}</Text>
          </View> */}
        </View>
  
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 5
  },
  cardCon: {
    backgroundColor: '#FFC470',
    width: '85%',
    height: 300,
    marginVertical: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    flex: 1
  },
  nameStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    flexDirection: 'column',
    paddingVertical: 5
  },
  dateStyle: {
    fontSize: 10,
    color: '#808080',
    fontWeight: '300',
    paddingTop: 2
  },
  opinionStyle: {
    paddingVertical: 7,
    marginVertical: 10
  },
  profilePicStyle: {
    width: 30,
    height: 30,
    borderRadius: 80
  },
  directionStyle: {
    flexDirection: 'row'
  },
  nameDateContainer: {
    paddingHorizontal: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17
  },
  pictureLayout: {
    width: '85%',
    marginVertical: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    flex: 1
  },
  cardPicture: {
    height: 200
  },
  
})

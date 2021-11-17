import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text } from 'dripsy'

import ProfPicture from './ProfPicture'

export default function Card(props) {
  return (
    <View style={styles.container}>
      <View style={styles.cardCon}>
        <View style={styles.directionStyle}>
          <ProfPicture
            style={styles.imageStyle}
            source={{ uri: props.image }}
          />
          <View style={styles.nameDateContainer}>
            <Text style={styles.nameStyle}>{props.name}</Text>
            <Text style={styles.dateStyle}>{props.date}</Text>
          </View>
        </View>
        <Text style={styles.opinionStyle}>{props.opinion}</Text>
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
    marginVertical: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    flex: 1
  },
  nameStyle: {
    fontSize: 17,
    fontWeight: 'bold',
    flexDirection: 'column'
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
  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 80
  },
  directionStyle: {
    flexDirection: 'row'
  },
  nameDateContainer: {
    padding: 10
  }
})

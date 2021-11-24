import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'
import { v4 as uuidv4 } from 'uuid'
import { ref, set } from 'firebase/database'
import { db } from '../../expo/firebase'

export default function FormPost(props) {
  const [myName, setMyName] = useState('')
  const [myQuote, setMyQuoute] = useState('')

  const uuid = uuidv4()
  const insertData = () => {
    set(ref(db, 'items/' + uuid), {
      name: myName,
      quote: myQuote
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Name"
          placeholderTextColor="#000"
          value={myName}
          onChangeText={(text) => {
            setMyName(text)
          }}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Quotes"
          placeholderTextColor="#000"
          multiline={true}
          numberOfLines={4}
          value={myQuote}
          onChangeText={(text) => {
            setMyQuoute(text)
          }}
        />
        <View>
          <TouchableOpacity style={styles.submitButton} onPress={insertData}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    margin: 7,
    height: 40,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,

    width: 200
  },
  card: {
    backgroundColor: '#FFC470',
    width: '75%',
    marginVertical: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'salmon'
  },
  submitButton: {
    backgroundColor: '#428ACA',
    padding: 10,
    paddingHorizontal: 40,
    margin: 5,
    height: 40,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#ffff'
  },
  submitButtonText: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white'
  }
})

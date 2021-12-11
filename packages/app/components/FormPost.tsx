import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator
} from 'react-native'
import { v4 as uuidv4 } from 'uuid'
import { ref, set } from 'firebase/database'

import { db,auth } from '../../expo/firebase'
import { formattedDate } from '../utils/Date'
import { useRouter } from 'app/navigation/use-router'


export default function FormPost(props) {
  const [mytitle, setMyTitle] = useState('')
  const [myArticle, setMyArticle] = useState('')
  const [myAvatar, setMyAvatar] = useState('')
  const [picture, setPicture] = useState('')

  const uuid = uuidv4()
  const router = useRouter()
  
const user = auth.currentUser

  const insertData = () => {
    set(ref(db, `items/${uuid}`), {
      uuid: uuid,
      userId: user.uid,
      title: mytitle,
      date: formattedDate,
      avatarUrl: myAvatar,
      quote: myArticle
    })
      .then(() => {
        router.push('/')
      })
      .catch((error) => error.message)
  }

  

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.loginCard}>
        <TextInput
          style={styles.inputOne}
          underlineColorAndroid="transparent"
          placeholder="Name"
          placeholderTextColor="#000"
          value={mytitle}
          onChangeText={(text) => {
            setMyTitle(text)
          }}
        />
        <TextInput
          style={styles.inputOne}
          underlineColorAndroid="transparent"
          placeholder="Avatar"
          placeholderTextColor="#000"
          value={myAvatar}
          onChangeText={(text) => {
            setMyAvatar(text)
          }}
        />

        <TextInput
          style={styles.inputTwo}
          underlineColorAndroid="transparent"
          placeholder="Quotes"
          placeholderTextColor="#000"
          multiline={true}
          numberOfLines={4}
          value={myArticle}
          onChangeText={(text) => {
            setMyArticle(text)
          }}
        />

        {/* // Refactor to a seperate component */}
        <View>
          <TouchableOpacity style={styles.submitButton} onPress={insertData}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginCard: {
    backgroundColor: '#F8F5FA',
    width: '100%',
    height: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 0.2,
    elevation: 5,
    borderRadius: 8
  },
  inputOne: {
    margin: 20,
    marginHorizontal: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    width: '95%',
    height: '5%'
  },
  inputTwo: {
    marginHorizontal: 10,
    margin: 20,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    width: '95%',
    height: '70%'
  },
  submitButton: {
    backgroundColor: '#FFC470',
    padding: 10,
    margin: 5,
    height: 40,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#ffff'
  },
  submitButtonText: {
    color: 'black',
    marginHorizontal: 150
  }
})

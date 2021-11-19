import React, { useState } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native'
import { View, TextInput, Text } from 'dripsy'

import { auth } from '../../../expo/firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth'

export default function SignLog() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        console.log(user.email)
        // ...
      })
      .catch((error) => alert(error.message))
  }

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log(user.email)
      })
      .catch((error) => alert(error.message))
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.loginCard}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Email"
          placeholderTextColor="#000"
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Password"
          placeholderTextColor="#000"
          autoCapitalize="none"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        {/* // Refactor to a seperate component */}
        <View>
          <TouchableOpacity style={styles.submitButton} onPress={handleLogin}>
            <Text style={styles.submitButtonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.submitButton} onPress={handleSignUp}>
            <Text style={styles.submitButtonText}>Sign Up</Text>
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
    backgroundColor: '#FFC470',
    justifyContent: 'center',
    alignItems: 'center',
    width: '75%',
    height: '35%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 0.2,
    elevation: 5,
    borderRadius: 8
  },
  input: {
    margin: 7,
    height: 40,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,

    width: 200
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
    color: 'white'
  }
})

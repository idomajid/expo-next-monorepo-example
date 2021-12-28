import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

import {
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator
} from 'react-native'
import { View, TextInput, Text } from 'dripsy'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut
} from 'firebase/auth'

import { auth } from '../../../expo/firebase'

//import AuthStateChanged from './AuthStateChanged'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
const { Navigator, Screen } = createNativeStackNavigator()

import { useRouter } from 'app/navigation/use-router'

export default function SignLog({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [user, setUser] = useState(null)

  const router = useRouter()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      }
    })
  }, [])

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: name,
        })
        // Signed in
        const user = userCredential.user

        console.log({user})
        // ...
      })
      .catch((error) => alert(error.message))
  }

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        
        console.log({user})
        router.push('/')
      })
      .catch((error) => alert(error.message))
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser(!user)
        router.push('/')
      })
      .catch((error) => {
        // An error happened.
        alert(error.message)
      })
  }

  

  if (!user) {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.loginCard}>
        <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Name"
            placeholderTextColor="#000"
            autoCapitalize="none"
            value={name}
            onChangeText={(text) => setName(text)}
          />
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

            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSignUp}
            >
              <Text style={styles.submitButtonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    )
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.loginCard}>
          <Text style={{ margin: 10 }}>{`Hello ${user.email}`}</Text>
          <View>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSignOut}
            >
              <Text style={styles.submitButtonText}>log out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
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

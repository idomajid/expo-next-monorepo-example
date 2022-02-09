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
          displayName: name
        })
        // Signed in
        const user = userCredential.user

        console.log({ user })
        // ...
      })
      .catch((error) => alert(error.message))
  }

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user

        console.log({ user })
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
      <View>
        <View>
          <Text style={styles.loginTitle}>Sign up</Text>
        </View>
        {/* <View style={{ backgroundColor: 'black' }}>
              <Text>dnwqdqlwkdqwlk</Text>
            </View> */}
        <KeyboardAvoidingView style={styles.container}>
          <View style={styles.loginCard}>
            <View style={styles.textInputContainer}>
              <Text style={styles.textTittle}>Name</Text>
              <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Types something here......"
                placeholderTextColor="#000"
                autoCapitalize="none"
                value={name}
                onChangeText={(text) => setName(text)}
              />
            </View>
            <View style={styles.textInputContainer}>
              <Text style={styles.textTittle}>Email</Text>
              <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Types something here......"
                placeholderTextColor="#000"
                autoCapitalize="none"
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
            </View>
            <View style={styles.textInputContainer}>
              <Text style={styles.textTittle}>Password</Text>
              <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Types something here......"
                placeholderTextColor="#000"
                autoCapitalize="none"
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
            </View>
            {/* // Refactor to a seperate component */}
            <View>
              {/* <TouchableOpacity style={styles.submitButton} onPress={handleLogin}>
              <Text style={styles.submitButtonText}>Login</Text>
            </TouchableOpacity> */}

              <TouchableOpacity
                style={styles.submitButton}
                onPress={handleSignUp}
              >
                <Text style={styles.submitButtonText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.haveAnAccount}>
                Already have account ?{' '}
                <Text style={{ color: '#4DB5FF' }}>Login</Text>
              </Text>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
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
    position: 'absolute',
    width: 375,
    height: 282,
    left: 0
  },
  textInputContainer: {
    marginVertical: 2
  },
  textTittle: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 16
  },
  loginTitle: {
    // width: 111,
    // height: 41,
    // left: 132,
    marginHorizontal: 30,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 30,
    lineHeight: 41,
    color: '#404040',
    top: 100,
    textAlign: 'center'
  },
  loginCard: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 40,
    top: 200
  },
  input: {
    margin: 5,
    borderWidth: 1,
    borderColor: '#BFBFBF',
    borderRadius: 8,
    paddingLeft: 16,
    position: 'relative',
    width: 315,
    height: 40,
    left: -5
  },
  submitButton: {
    left: -5,
    width: 315,
    height: 55,
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#4DB5FF',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 15
  },
  submitButtonText: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 25,
    color: 'white'
  },
  haveAnAccount: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 14,
    textAlign: 'center'
  }
})

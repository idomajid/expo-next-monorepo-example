import React from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator
} from 'react-native'



export default function FormPost(props) {
  

  //  const updateData = () => {
  //   update(ref(db, `items/${uuid}`), {
  //     title: mytitle,
  //     avatarUrl: myAvatar,
  //     quote: myArticle
  //   })
  //     .then(() => {
  //       router.push(`/formPost`)
  //     })
  //     .catch((error) => error.message)
  // }
  

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.loginCard}>
        <TextInput
          style={styles.inputOne}
          underlineColorAndroid="transparent"
          placeholder="title"
          placeholderTextColor="#000"
          value={props.titleValue}
          onChangeText={props.titleOnChange}
        />
        <TextInput
          style={styles.inputOne}
          underlineColorAndroid="transparent"
          placeholder="cover"
          placeholderTextColor="#000"
          value={props.avatarValue}
          onChangeText={props.avatarOnChage}
        />

        <TextInput
          style={styles.inputTwo}
          underlineColorAndroid="transparent"
          placeholder="Paragraph"
          placeholderTextColor="#000"
          multiline={true}
          numberOfLines={4}
          value={props.articleValue}
          onChangeText={props.articleOnChange}
        />

        {/* // Refactor to a seperate component */}
        <View>
          <TouchableOpacity style={styles.submitButton} onPress={props.onInsertData}>
            <Text style={styles.submitButtonText}>{props.titleButton}</Text>
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

import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import FormPost from '../components/FormPost'

import { v4 as uuidv4 } from 'uuid'
import { ref, set } from 'firebase/database'

import { db, auth } from '../../expo/firebase'
import { formattedDate } from '../utils/Date'
import { useRouter } from 'app/navigation/use-router'

export default function postForm() {
  const [mytitle, setMyTitle] = useState('')
  const [myArticle, setMyArticle] = useState('')
  const [myAvatar, setMyAvatar] = useState('')
  const [picture, setPicture] = useState('')

  

  const uuid = uuidv4()
  const router = useRouter()

  const user = auth.currentUser

  if (!user) {
    router.push('/profile')
  }

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
    <View style={styles.container}>
      <FormPost
        titleValue={mytitle}
        titleOnChange={(text) => setMyTitle(text)}
        avatarValue={myAvatar}
        avatarOnChage={(text) => setMyAvatar(text)}
        articleValue={myArticle}
        articleOnChange={(text) => setMyArticle(text)}
        onInsertData={insertData}
        titleButton="Create Post"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#428ACA'
  }
})

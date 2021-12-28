import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import Form from '../components/FormPost'
import type { HomeScreenProps } from 'app/navigation/types'

import { ref, update, child, get } from 'firebase/database'

import { db, auth } from '../../expo/firebase'
import { useRouter } from 'app/navigation/use-router'

export default function edit({ navigation, route }: HomeScreenProps) {
  const [mytitle, setMyTitle] = useState('')
  const [myArticle, setMyArticle] = useState('')
  const [myAvatar, setMyAvatar] = useState('')
  const [picture, setPicture] = useState('')

  const uid = route.params.id
  const router = useRouter()
  const user = auth.currentUser

  //console.log(user)

  useEffect(() => {
    const dbRef = ref(db)
    get(child(dbRef, `items/${uid}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const value = snapshot.val()

          setMyTitle(value.title)
          setMyArticle(value.quote)
          setMyAvatar(value.avatarUrl)

        } else {
          console.log('No data available')
        }
      })
      .catch((error) => error.message)
  }, [])

  const updateData = () => {
    update(ref(db, `items/${uid}`), {
      title: mytitle,
      avatarUrl: myAvatar,
      quote: myArticle
    })
      .then(() => {
        router.push('/home')
      })
      .catch((error) => error.message)
  }

  if (!user) {
    router.push('/profile')
  }

  // if (getDataForm == null) return <Text>Loading</Text>

  return (
    <View style={styles.container}>
      <Form
        titleValue={mytitle}
        //defaultTitleValue={getDataForm.title}
        titleOnChange={(text) => setMyTitle(text)}
        avatarValue={myAvatar}
        //defaultAvatarValue={getDataForm.avatarUrl}
        avatarOnChage={(text) => setMyAvatar(text)}
        articleValue={myArticle}
        //defaultArticleValue={getDataForm.quote}
        articleOnChange={(text) => setMyArticle(text)}
        onInsertData={updateData}
        titleButton="Update Post"
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

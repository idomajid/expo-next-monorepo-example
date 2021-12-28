import React, { useEffect, useState } from 'react'
import { Text, View } from 'dripsy'
import { StyleSheet, Alert, ActivityIndicator } from 'react-native'

import { ref, child, get, remove } from 'firebase/database'
import { db } from '../../expo/firebase'

import { useRouter } from 'app/navigation/use-router'
import type { HomeScreenProps } from 'app/navigation/types'
import Article from '../components/ArticleCard'

type Article = {
  avatarUrl: string
  date: string
  quote: string
  title: string
  userId: string
  uuid: string
}

export default function ArticleScreen({ navigation, route }: HomeScreenProps) {
  const [article, setArticle] = useState<Article | null>()

  const routeParams = route.params.id
  const router = useRouter()

  useEffect(() => {
    const dbRef = ref(db)
  get(child(dbRef, `items/${routeParams}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          
          setArticle(snapshot.val())
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => error.message)
  }, [])

  

  const RemoveArt = () => {
    remove(ref(db, `items/${routeParams}`))
      .then(() => {
        Alert.alert('deleted')
        router.push(`/home`)
      })
      .catch((error) => error.message)
  }

  const RemoveAlert = () => {
    Alert.alert(
      "Are You Sure ",
      " Delete the article ?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: RemoveArt }
      ]
    );
  } 

  if (article == null) return <ActivityIndicator style={{flex: 1, justifyContent: "center", alignItems: "center"}}/>


  const routerUuid = () => {
    router.push(`/${article.uuid}/edit`)
  }

  return (
    <View style={styles.container}>
      <View>
      <Article title={article.title} paragraph={article.quote} deleteArticleHandle={RemoveAlert} editHandle={routerUuid}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#428ACA',

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

import React, { useEffect, useState } from 'react'
import { Text, View } from 'dripsy'
import { StyleSheet, FlatList } from 'react-native'

import { ref, child, get } from 'firebase/database'
import { db } from '../../expo/firebase'

import type { HomeScreenProps } from 'app/navigation/types'
import Article from '../components/ArticleCard'

export default function ArticleScreen({ navigation, route }: HomeScreenProps) {
  const [articleList, setArticleList] = useState([])

  useEffect(() => {
    const dbRef = ref(db)
    let articlesList = []
    get(child(dbRef, `items/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          snapshot.forEach((snap) => {
            articlesList.push(snap.val())
          })

          setArticleList(articlesList)
        } else {
          console.log('No data available')
        }
      })
      .catch((error) => error.message)
  }, [])

  const ArticleData = () => {
    const article = [...articleList]
    const ids = article.map((id) => id.uuid)
    //const idsPath = ids.map((slug) => ({ params: { pid: slug } }));
    console.log(ids)
  }

  console.log(ArticleData())

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={articleList}
          renderItem={({ item }) => (
            <Article title={item.title} paragraph={item.quote} />
          )}
          keyExtractor={(item) => item.uuid}
        />
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

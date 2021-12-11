import React, { useState, useEffect } from 'react'
import { FlatList, StyleSheet, Pressable, Button } from 'react-native'
import { View, Text, TextInput } from 'dripsy'
import { USER } from '../../expo/data/dummy-data'
import { ref, child, get } from 'firebase/database'
import { useRouter } from 'app/navigation/use-router'


//import { getDatabase, ref, set, get } from "firebase/database";

import Card from '../components/Card'
import { db } from '../../expo/firebase'

export default function 

HomeScreen(props) {
  const [articleList, setArticleList] = useState([])

  const router = useRouter()

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

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <FlatList
          data={articleList}
          renderItem={({item }) => (
            <Pressable
            key={item.uuid}
          onPress={() => {
            
            router.push(`/article/${item.uuid}`)
            //console.log(item.uuid)
          }}
            >
            <Card
              title={item.title}
              date={item.date}
              opinion={item.quote}
              image={item.avatarUrl}
            />
            </Pressable>
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
    backgroundColor: '#428ACA'
  }
})

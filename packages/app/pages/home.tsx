import React from 'react'

import createStackNavigator from 'app/navigation/create-stack-navigator'
import ArticleScreen from 'app/screens/article'
import HomeScreen from 'app/screens/home'
import { HomeStackParams } from 'app/navigation/types'
import { navigatorScreenOptions } from 'app/navigation/navigator-screen-options'

const HomeStack = createStackNavigator<HomeStackParams>()

function HomeNavigator() {
  return (
    <HomeStack.Navigator screenOptions={navigatorScreenOptions}>
      <HomeStack.Group>
      <HomeStack.Screen
        name="home"
        component={HomeScreen}
        options={{ title: 'Home', headerTitle: 'Home' }}
      />
      
      <HomeStack.Screen
        name="article"
        component={ArticleScreen}
        options={{ title: 'article', headerTitle: 'Article' }}
      />
      
      </HomeStack.Group>
    </HomeStack.Navigator>
  )
}

export default HomeNavigator

import React from 'react'

import createStackNavigator from 'app/navigation/create-stack-navigator'
import postFormScreen from 'app/screens/postForm'
import { PostFormStackParams } from 'app/navigation/types'
import { navigatorScreenOptions } from 'app/navigation/navigator-screen-options'

const PostStack = createStackNavigator<PostFormStackParams>()
function postForm() {
    return (
        <PostStack.Navigator screenOptions={navigatorScreenOptions}>
          <PostStack.Screen
            name="formPost"
            component={postFormScreen}
            options={{ title: 'Create Post', headerTitle: 'Create Post' }}
          />
        </PostStack.Navigator>
      )
}


export default postForm
import * as Linking from 'expo-linking'
import type { NavigationContainer } from '@react-navigation/native'
import type { BottomTabNavigatorParams } from './bottom-tab-navigator/types'
import {
  HomeStackParams,
  //PlaylistsStackParams,
  ProfileStackParams,
  PostFormStackParams,
} from './types'

type Props = React.ComponentProps<typeof NavigationContainer>['linking']

function makeTabPath<Path extends keyof BottomTabNavigatorParams>(
  path: Path
): Path {
  return path
}

function makePlaylistsStackPath<Path extends keyof PlaylistsStackParams>(
  path: Path
): Path {
  return path
}

function makeProfileStackPath<Path extends keyof ProfileStackParams>(
  path: Path
): Path {
  return path
}

function makeHomeStackPath<Path extends keyof HomeStackParams>(
  path: Path
): Path {
  return path
}

function makePostFormStackParams<Path extends keyof PostFormStackParams>(
  path: Path
): Path {
  return path
}

function makeType<T>(t: T) {
  return t
}

const playlistsStackPaths = makeType({
  playlists: makePlaylistsStackPath('playlists'),
  playlist: makePlaylistsStackPath('playlist'),
  new: makePlaylistsStackPath('new')
})

const profileStackPaths = makeType({
  profile: makeProfileStackPath('profile')
})

const homeStackPaths = makeType({
  home: makeHomeStackPath('home'),
  article: makeHomeStackPath('article'),
  edit: makeHomeStackPath('edit')
})

const postFormStackPaths = makeType({
  formPost: makePostFormStackParams('formPost')
})

const tabPaths = makeType({
  home: makeTabPath('homeTab'),
  playlists: makeTabPath('playlistsTab'),
  profile: makeTabPath('profileTab'),
  formPost: makeTabPath('formPostTab'),
})

const linking: Props = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      [tabPaths.home]: {
        path: '',
        initialRouteName: homeStackPaths.home,
        screens: {
          [homeStackPaths.home]: '',
          [homeStackPaths.home]: 'home',
          [homeStackPaths.article]: 'article/:id',
          [homeStackPaths.edit]: ':id/edit'
        }
      },
      // [tabPaths.playlists]: {
      //   initialRouteName: playlistsStackPaths.playlists,
      //   path: 'playlists',
      //   screens: {
      //     [playlistsStackPaths.playlists]: '',
      //     [playlistsStackPaths.playlist]: ':id',
      //     [playlistsStackPaths.new]: 'new'
      //   }
      // },
      [tabPaths.formPost]: {
        path: 'formPost',
        initialRouteName: postFormStackPaths.formPost,
        screens: {
          [postFormStackPaths.formPost]: ''
        }
      },
      [tabPaths.profile]: {
        path: 'profile',
        initialRouteName: profileStackPaths.profile,
        screens: {
          [profileStackPaths.profile]: ''
        }
      }
    }
  }
}

export { linking }

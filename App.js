import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './src/screens/Home';
import MovieChatScreen from './src/screens/MovieChat';

import { Text, View } from 'react-native';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    MovieChat: MovieChatScreen
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

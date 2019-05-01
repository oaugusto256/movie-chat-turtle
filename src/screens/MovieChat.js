import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { database } from '../config';

class MovieChat extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('id', 'DEFAULT_VALUE'),
    headerStyle: {
      backgroundColor: '#393e46'
    },
    headerBackTitle: null,
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  });

  componentDidMount() {
    console.log(database());

    const movieTitle = this.props.navigation.getParam('id', 'DEFAULT_VALUE');

    console.log(movieTitle);
  }

  render() {
    return (
      <>
        <View>
          <Text>MovieChat screen</Text>
        </View>
      </>
    );
  }
}

export default MovieChat;

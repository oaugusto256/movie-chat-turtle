import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { database } from '../config';

class MovieChat extends Component {
  static navigationOptions = {
    title: 'MovieChat',
    headerStyle: {
      backgroundColor: '#393e46'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  };

  componentDidMount() {
    console.log(database());
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

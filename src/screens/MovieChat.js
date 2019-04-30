import React, { Component } from 'react';
import { Text, View } from 'react-native';

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

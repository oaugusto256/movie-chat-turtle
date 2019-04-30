import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Home extends Component {
  static navigationOptions = {
    title: 'Home',
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
          <Text>Home screen</Text>
        </View>
      </>
    );
  }
}

export default Home;

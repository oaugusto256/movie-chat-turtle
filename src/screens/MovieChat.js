import React, { Component } from 'react';
import { Text, View } from 'react-native';

class MovieChat extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('id', 'DEFAULT_VALUE'),
      headerStyle: {
        backgroundColor: '#393e46'
      },
      headerBackTitle: null,
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    };
  };

  componentDidMount() {
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

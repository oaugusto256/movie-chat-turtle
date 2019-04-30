import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import data from '../data/movies.json';

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

  state = {
    loading: true,
    movies: []
  };

  componentDidMount() {
    this.setState({
      loading: false,
      movies: data.slice(0, 20)
    });
  }

  render() {
    const { movies } = this.state;

    return (
      <>
        <View style={styles.screen}>
          <Text>Home screen</Text>
          {movies.map((movie, index) => {
            return (
              <View key={index}>
                <Text>{movie.title}</Text>
              </View>
            );
          })}
        </View>
      </>
    );
  }
}

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    height: height
  },
  loadingContainer: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 20
  },
  introText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10
  },
  emphasizeText: {
    fontWeight: 'bold'
  },
  content: {
    flex: 1,
    padding: 15
  }
});

export default Home;

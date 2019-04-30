import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Loading from '../components/Loading';
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
    const { movies, loading } = this.state;

    return (
      <>
        <View style={styles.screen}>
          {loading ? (
            <Loading />
          ) : (
            <ScrollView>
              <View style={styles.content}>
                <>
                  {movies.map((movie, index) => {
                    return (
                      <View key={index} style={styles.movieContent}>
                        <Text>{movie.title}</Text>
                      </View>
                    );
                  })}
                </>
              </View>
            </ScrollView>
          )}
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
  text: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 20
  },
  movieContent: {
    flex: 1,
    height: 50
  },
  content: {
    flex: 1,
    padding: 15
  }
});

export default Home;

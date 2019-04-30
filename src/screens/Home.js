import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
 Text, View, StyleSheet, ScrollView, Dimensions, TouchableOpacity 
} from 'react-native';
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

  onPressMovie = () => {};

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
                <Text style={styles.text}>Select a Movie, and see its comments.</Text>
                <>
                  {movies.map(movie => (
                    <TouchableOpacity key={movie.title} onPress={this.onPressMovie}>
                      <View style={styles.movieContent}>
                        <Text>{movie.title}</Text>
                        <Ionicons name="ios-arrow-forward" size={20} />
                      </View>
                    </TouchableOpacity>
                  ))}
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
    height,
    backgroundColor: '#d8d8d8'
  },
  text: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10
  },
  emphasizedText: {
    fontWeight: 'bold'
  },
  movieContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 65,
    padding: 10,
    marginBottom: 10,
    borderWidth: 0,
    borderRadius: 4,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1
  },
  content: {
    flex: 1,
    padding: 10
  }
});

export default Home;

/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Loading from '../components/Loading';
import Button from '../components/Button';
import { database } from '../config';
import MovieComment from '../components/MovieComment';

class MovieChat extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('id', 'DEFAULT_VALUE'),
    headerStyle: {
      backgroundColor: '#247BA0'
    },
    headerBackTitle: null,
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  });

  state = {
    loading: true,
    movieTitle: '',
    comment: '',
    movieComments: []
  };

  componentDidMount() {
    const movieTitle = this.props.navigation.getParam('id', 'DEFAULT_VALUE');
    this.setState({ movieTitle });
    this.retrieveComments(movieTitle);
  }

  retrieveComments = (movieTitle) => {
    database()
      .ref(`movieChats/${movieTitle}/comments`)
      .on('value', (snapshot) => {
        if (snapshot.val()) {
          this.setState({
            loading: false,
            movieComments: Object.values(snapshot.val())
          });
        } else {
          this.setState({
            loading: false
          });
        }
      });
  };

  onSubmitComment = () => {
    const { comment, movieTitle } = this.state;
    database()
      .ref(`movieChats/${movieTitle}/comments`)
      .push({
        id: Math.random()
          .toString(36)
          .substr(2, 9),
        text: comment
      });

    this.setState({ comment: '' });
  };

  renderComments = () => {
    const { movieComments } = this.state;

    if (movieComments.length > 0) {
      return movieComments.map(comment => <MovieComment key={comment.id} comment={comment} />);
    }

    return (
      <View style={styles.noCommentsContent}>
        <Ionicons name="ios-sad" size={65} color="#247BA0" />
        <Text style={styles.noCommentsText}>No comment has been added yet!</Text>
      </View>
    );
  };

  render() {
    const { comment, loading } = this.state;

    return (
      <>
        <View style={styles.screen}>
          <KeyboardAvoidingView
            behavior="padding"
            style={styles.keyboardAvoidContent}
            keyboardVerticalOffset={75}
          >
            <View style={styles.commentsContent}>
              {loading ? <Loading /> : <ScrollView>{this.renderComments()}</ScrollView>}
            </View>
            <View style={styles.inputContent}>
              <TextInput
                placeholder="Write a comment"
                style={styles.input}
                onChangeText={comment => this.setState({ comment })}
                value={comment}
              />
              <Button text="Submit" onPress={this.onSubmitComment} />
            </View>
          </KeyboardAvoidingView>
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
    backgroundColor: '#d8d8d8',
    padding: 10
  },
  noCommentsContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: height / 2
  },
  noCommentsText: {
    fontSize: 18,
    color: '#247BA0'
  },
  commentsContent: {
    flex: 1
  },
  keyboardAvoidContent: {
    flex: 1,
    flexGrow: 1
  },
  inputContent: {
    marginTop: 10,
    height: 50,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0
  },
  input: {
    flex: 1,
    padding: 10
  }
});

export default MovieChat;

/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  ScrollView,
  Platform,
  KeyboardAvoidingView
} from 'react-native';
import Button from '../components/Button';
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

  state = {
    comment: ''
  };

  componentDidMount() {
    const movieTitle = this.props.navigation.getParam('id', 'DEFAULT_VALUE');

    database()
      .ref(`movieChats/${movieTitle}`)
      .set({
        title: movieTitle,
        chats: []
      });
  }

  onSubmit = () => {
    console.log('Submit button was clicked!');
  };

  render() {
    return (
      <>
        <View style={styles.screen}>
          <KeyboardAvoidingView
            behavior="padding"
            style={styles.keyboardAvoidContent}
            keyboardVerticalOffset={75}
          >
            <View style={styles.commentsContent}>
              <ScrollView>
                <View style={styles.commentCard}>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nunc magna,
                    tempus id scelerisque vel, cursus eget dui. Sed tempus lacus vitae felis
                    eleifend viverra. Aenean eu purus ornare arcu tempus auctor. Cras porttitor
                    pretium tortor, non faucibus neque dapibus ac. Donec sed turpis eu nunc finibus
                    condimentum.
                  </Text>
                </View>
                <View style={styles.commentCard}>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nunc magna,
                    tempus id scelerisque vel, cursus eget dui. Sed tempus lacus vitae felis
                    eleifend viverra. Aenean eu purus ornare arcu tempus auctor. Cras porttitor
                    pretium tortor, non faucibus neque dapibus ac. Donec sed turpis eu nunc finibus
                    condimentum.
                  </Text>
                </View>
              </ScrollView>
            </View>
            <View style={styles.inputContent}>
              <TextInput
                placeholder="Write a comment"
                style={styles.input}
                onChangeText={comment => this.setState({ comment })}
                value={this.state.comment}
              />
              <Button text="Submit" onPress={this.onSubmit} />
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
  },
  commentCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
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
  }
});

export default MovieChat;

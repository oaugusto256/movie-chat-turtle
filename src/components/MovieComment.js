import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MovieComment(props) {
  const { comment } = props;

  return (
    <View style={styles.movieCommentContent}>
      <Text>{comment.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  movieCommentContent: {
    flex: 1,
    minHeight: 50,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 3,
    borderBottomColor: '#70C1B3',
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

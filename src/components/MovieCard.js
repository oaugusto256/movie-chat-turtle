import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MovieCard(props) {
  const { movie } = props;

  return (
    <TouchableOpacity onPress={this.onPressMovie}>
      <View style={styles.movieContent}>
        <Text>{movie.title}</Text>
        <Ionicons name="ios-arrow-forward" size={20} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
  }
});

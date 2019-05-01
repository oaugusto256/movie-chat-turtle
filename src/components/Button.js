import React from 'react';
import {
 TouchableOpacity, View, Text, StyleSheet 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Button(props) {
  const { text, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.buttonContent}>
        <Ionicons name="ios-add" size={25} color="#FFF" />
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContent: {
    width: 105,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#70C1B3',
    justifyContent: 'space-around'
  },
  text: {
    fontSize: 16,
    color: '#FFF'
  }
});

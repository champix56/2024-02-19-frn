import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const Button = props => {
  console.log(props);
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('button clicked');
      }}>
      <View style={styles.vue}>
        <Text style={styles.text}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  vue: {
    padding: 10,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    margin: 3,
  },
  text: {
    fontWeight: '900',
    textDecorationColor: 'white',
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
    color: 'white',
    fontSize: 24,
  },
});

export default Button;

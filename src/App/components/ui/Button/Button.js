import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = props => {
  console.log(props);
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('button clicked');
      }}>
      <View
        style={{
          padding: 10,
          backgroundColor: 'skyblue',
          alignItems: 'center',
          margin: 3,
        }}>
        <Text
          style={{
            fontWeight: '900',
            textDecorationColor: 'white',
            textDecorationStyle: 'solid',
            textDecorationLine: 'underline',
            color: 'white',
            fontSize: 24,
          }}>
          {props.children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

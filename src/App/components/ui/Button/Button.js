import {View, Text, TouchableOpacity, TouchableHighlight} from 'react-native';
import React from 'react';

const Button = props => {
  console.log(props);
  return (
    <TouchableHighlight
      onPress={() => {
        console.log('button clicked');
      }}>
      {/* <View> */}
      <Text>{props.children}</Text>
      {/* </View> */}
    </TouchableHighlight>
  );
};

export default Button;

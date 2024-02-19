import {View, Text} from 'react-native';
import React from 'react';

const Button = props => {
  console.log(props);
  return (
    <View>
      <Text>{props.children}</Text>
    </View>
  );
};

export default Button;

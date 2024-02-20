import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Button.styles';
import PropTypes from 'prop-types';

const Button = props => {
  console.log(props);
  return (
    <TouchableOpacity
      onPress={() => {
        props.onButtonClicked();
        console.log('button clicked');
      }}>
      <View style={[styles.vue, props.style, {backgroundColor: props.bgColor}]}>
        {typeof props.children === 'string' ? (
          <Text style={[styles.text, {color: props.color}]}>
            {props.children}
          </Text>
        ) : (
          props.children
        )}
      </View>
    </TouchableOpacity>
  );
};
//   <Text style={[styles.text, {color: props.color}]}>
// {props.children}
// </Text>
Button.propTypes = {
  style: PropTypes.object,
  children: PropTypes.any.isRequired,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  onButtonClicked: PropTypes.func.isRequired,
};

Button.defaultProps = {
  bgColor: 'skyblue',
  color: 'white',
};
export default Button;

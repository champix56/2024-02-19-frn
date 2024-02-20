import {View} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './CarForm.styles';
const CarForm = props => {
  return (
    <View style={styles.CarForm} testID="CarForm">
      {props.children}
    </View>
  );
};
CarForm.propTypes = {
  children: PropTypes.any.isRequired,
};
CarForm.defaultProps = {
  children: <Text>No children given</Text>,
};
export default CarForm;

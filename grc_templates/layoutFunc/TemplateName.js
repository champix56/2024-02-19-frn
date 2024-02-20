import {View} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './TemplateName.styles';
const TemplateName = props => {
  return (
    <View style={styles.TemplateName} testID="TemplateName">
      {props.children}
    </View>
  );
};
TemplateName.propTypes = {
  children: PropTypes.any.isRequired,
};
TemplateName.defaultProps = {
  children: <Text>No children given</Text>,
};
export default TemplateName;

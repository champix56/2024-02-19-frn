import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './TemplateName.styles';

const initialState = {};
/**
 * Composant TemplateName
 * @param {object} props props du composant templateName
 * @returns {React.ReactNode}
 */
const TemplateName = props => {
  const [state, setState] = useState(initialState);
  return (
    <View style={styles.TemplateName} testID="TemplateName">
      <Text>TemplateName</Text>
    </View>
  );
};

TemplateName.propTypes = {};
TemplateName.defaultProps = {};

export default TemplateName;

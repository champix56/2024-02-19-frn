import {Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './CarViewer.styles';
import PropTypes from 'prop-types';
const initialState = true;
const CarViewer = props => {
  const [state, setState] = useState(initialState);
  useEffect(() => {
    return () => {};
  }, [state]);
  return (
    <View style={styles.CarViewer} testID="CarViewer">
      <Text>CarViewer{JSON.stringify(props)}</Text>
    </View>
  );
};
CarViewer.propTypes = {};
CarViewer.defaultProps = {};
export default CarViewer;

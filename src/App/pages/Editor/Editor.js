import {Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Editor.styles';
import PropTypes from 'prop-types';
const initialState = true;
const Editor = props => {
  const [state, setState] = useState(initialState);
  useEffect(() => {
    return () => {};
  }, [state]);
  return (
    <View style={styles.Editor} testID="Editor">
      <Text>Editor{JSON.stringify(props)}</Text>
    </View>
  );
};
Editor.propTypes = {};
Editor.defaultProps = {};
export default Editor;

import {ScrollView, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './FiltrableCarList.styles';
import PropTypes from 'prop-types';
import CarListViewer from '../CarListViewer/CarListViewer';
const initialState = '';
const FiltrableCarList = props => {
  const [state, setState] = useState(initialState);
  return (
    <View style={styles.FiltrableCarList} testID="FiltrableCarList">
      <Text style={{textAlign: 'center', fontSize: 20}}>
        Liste des vehicules
      </Text>
      <TextInput
        placeholder="rechercher..."
        value={state}
        onChangeText={str => setState(str)}
        style={{
          borderStyle: 'solid',
          borderWidth: 1,
          borderColor: 'grey',
          margin: 5,
        }}
      />
      <View style={{height: 400}}>
        <ScrollView>
          {props.cars
            .filter(e => e.model.toLowerCase().includes(state.toLowerCase()))
            .map((c, i) => (
              <CarListViewer car={c} key={`c${i}`} onPress={() => {}} />
            ))}
        </ScrollView>
      </View>
    </View>
  );
};
FiltrableCarList.propTypes = {
  cars: PropTypes.array.isRequired,
};
FiltrableCarList.defaultProps = {};
export default FiltrableCarList;

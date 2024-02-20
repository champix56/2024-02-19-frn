import {Dimensions, ScrollView, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './FiltrableCarList.styles';
import PropTypes from 'prop-types';
import CarListViewer from '../CarListViewer/CarListViewer';
import CarViewer from '../CarViewer/CarViewer';
const initialState = '';
const FiltrableCarList = props => {
  const [state, setState] = useState(initialState);
  const [current, setCurrent] = useState(undefined);
  return (
    <View style={styles.FiltrableCarList} testID="FiltrableCarList">
      <View>
        <Text style={styles.header}>Liste des vehicules</Text>
        <TextInput
          placeholder="rechercher..."
          value={state}
          onChangeText={str => setState(str)}
          style={styles.input}
        />
      </View>
      <View
        style={[
          styles.centerContainer,
          {
            height:
              Dimensions.get('screen').height -
              (current !== undefined ? 500 : 190),
          },
        ]}>
        <ScrollView style={styles.scroll}>
          {props.cars
            .filter(e => e.model.toLowerCase().includes(state.toLowerCase()))
            .map((c, i) => (
              <CarListViewer
                car={c}
                key={`c${i}`}
                onPress={() => {
                  if (undefined === current || current !== c) {
                    setCurrent(c);
                  } else {
                    setCurrent(undefined);
                  }
                }}
              />
            ))}
        </ScrollView>
      </View>
      {current !== undefined && (
        <View style={{height: 100}}>
          <CarViewer car={current} />
        </View>
      )}
    </View>
  );
};
FiltrableCarList.propTypes = {
  cars: PropTypes.array.isRequired,
};
FiltrableCarList.defaultProps = {};
export default FiltrableCarList;

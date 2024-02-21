import {Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './List.styles';
import PropTypes from 'prop-types';
import FiltrableCarList from '../../components/ui/FiltrableCarList/FiltrableCarList';
import CarViewer from '../../components/ui/CarViewer/CarViewer';
const initialState = true;
const List = props => {
  const [current, setCurrent] = useState(undefined);
  const [cars, setCars] = useState([]);
  return (
    <View>
      {current !== undefined && <CarViewer car={current} />}

      <FiltrableCarList
        cars={cars}
        selectedCar={current}
        onUpdateSelect={c => {
          if (current !== undefined && current === c) {
            setCurrent(undefined);
          } else {
            setCurrent(c);
          }
        }}
      />
    </View>
  );
};
List.propTypes = {};
List.defaultProps = {};
export default List;

import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import styles from './App.styles';
import {cars} from '../../db/db.json';
import FiltrableCarList from './components/ui/FiltrableCarList/FiltrableCarList';
import CarViewer from './components/ui/CarViewer/CarViewer';
import {store} from './store/store';
import {addCars} from './store/carSlice';
const initialState = cars;
function App() {
  const [cars, setCars] = useState(initialState);
  const [current, setCurrent] = useState(undefined);
  console.log(store);
  useEffect(() => {
    store.dispatch(addCars(cars));
  }, []);
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
}

export default App;

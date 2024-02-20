import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './App.styles';
import {cars} from '../../db/db.json';
import FiltrableCarList from './components/ui/FiltrableCarList/FiltrableCarList';
const initialState = cars;
function App() {
  const [cars, setCars] = useState(initialState);
  return (
    <View>
      <FiltrableCarList cars={cars} />
    </View>
  );
}

export default App;

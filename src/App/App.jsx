import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import styles from './App.styles';
import {cars} from '../../db/db.json';
import FiltrableCarList from './components/ui/FiltrableCarList/FiltrableCarList';
import CarViewer from './components/ui/CarViewer/CarViewer';
import {
  ajouterValeur,
  store,
  initialState as storeInitialState,
} from './store/store';
import Button from './components/ui/Button/Button';
const initialState = cars;
function App() {
  const [cars, setCars] = useState(initialState);
  const [current, setCurrent] = useState(undefined);
  const [state, setstate] = useState(store.getState());
  console.log(store);
  useEffect(() => {
    store.subscribe(() => {
      setstate(store.getState());
    });
  }, []);
  return (
    <View>

      <Text>{JSON.stringify(state)}</Text>
      <Button
        onButtonClicked={() => {
          store.dispatch(ajouterValeur(3));
        }}>
        Ajouter3
      </Button>
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

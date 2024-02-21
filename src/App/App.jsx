import React, {useEffect, useState} from 'react';
import {cars} from '../../db/db.json';

import {store} from './store/store';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './pages/Home/Home';
import List from './pages/List/List';
import {Text, View} from 'react-native';
import CarEditor from './components/functionnal/CarEditor/CarEditor';
import {newCar} from './store/currentSlice';
const initialState = cars;
function App() {
  const [cars, setCars] = useState(initialState);
  const [current, setCurrent] = useState(undefined);
  console.log(store);

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="CarEditor">
          {p => <CarEditor {...p} car={newCar} onSubmit={() => {}} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

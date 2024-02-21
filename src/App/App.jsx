import React, {useEffect} from 'react';
import {View} from 'react-native';
import FiltrableCarList from './components/ui/FiltrableCarList/FiltrableCarList.connected';
import CarViewer from './components/ui/CarViewer/CarViewer.connected';
import {store} from './store/store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './pages/Home/Home';
import List from './pages/List/List';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home">
            {navProps => <Home {...navProps} uneData={'COUCUO'} />}
          </Stack.Screen>
          <Stack.Screen name="List Voiture" component={List} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
export default App;

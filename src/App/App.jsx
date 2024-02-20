import React from 'react';
import {View} from 'react-native';
import {store} from './store/store';
import FiltrableCarList from './components/ui/FiltrableCarList/FiltrableCarList.connect';
import {Provider} from 'react-redux';
function App() {
  console.log(store);
  return (
    <Provider store={store}>
      <View>
        <FiltrableCarList />
      </View>
    </Provider>
  );
}

export default App;

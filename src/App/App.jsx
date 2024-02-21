import React from 'react';
import {View} from 'react-native';
import FiltrableCarList from './components/ui/FiltrableCarList/FiltrableCarList.connected';
import CarViewer from './components/ui/CarViewer/CarViewer.connected';
import {store} from './store/store';
import {Provider} from 'react-redux';
function App() {
  return (
    <Provider store={store}>
      <View>
        <CarViewer />
        <FiltrableCarList />
      </View>
    </Provider>
  );
}
export default App;

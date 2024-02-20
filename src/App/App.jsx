import React, {useState} from 'react';
import {View, Text, LogBox, ToastAndroid} from 'react-native';
import Button from './components/ui/Button/Button';

function App() {
  let counter = 1;
  return (
    <View>
      {/*comment*/}
      <Text>Etat de counter : {counter}</Text>
      <Button
        onButtonClicked={arg => {
          ToastAndroid.show('button clicked depuis App', ToastAndroid.LONG);
        }}
        bgColor="green">
        Ajouter 1
      </Button>
      <Button bgColor="tomato">Soustraire 1</Button>
    </View>
  );
}

export default App;

import React from 'react';
import {View, Text, LogBox, ToastAndroid, Image} from 'react-native';
import Button from './components/ui/Button/Button';

function App() {
  return (
    <View>
      {/*comment*/}
      <Text>DEMAT Breizh</Text>
      <Button
        onButtonClicked={arg => {
          ToastAndroid.show(
            'button ajouter clicked depuis App',
            ToastAndroid.LONG,
          );
        }}>
         <Image source={require('../../assets/img/plus.png')} style={}/>
         <Text>Ajouter 1</Text>
      </Button>
      <Button
        onButtonClicked={arg => {
          ToastAndroid.show(
            'button supprimer clicked depuis App',
            ToastAndroid.LONG,
          );
        }}
        bgColor="tomato">
        <View style={{flexDirection:'row'}}>
          <Image source={} style={}/>
          <Text>supprimer 1</Text>
        </View>
      </Button>
    </View>
  );
}

export default App;

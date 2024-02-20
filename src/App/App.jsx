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
          ToastAndroid.show('button clicked depuis App', ToastAndroid.LONG);
        }}
        bgColor="green">
        button1
      </Button>
      <Button bgColor="tomato">Button 2</Button>
      <Button style={{width: '45%'}} color="yellow">
        <Image source={{uri: ''}} />
        <Text>hdgdg</Text>
      </Button>
      <Button style={{width: '45%'}} bgColor="red">
        fghuiolmlkj
      </Button>
      <Button children="ghjkl" />
    </View>
  );
}

export default App;

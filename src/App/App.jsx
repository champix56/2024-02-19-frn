import React from 'react';
import {View, Text} from 'react-native';
import Button from './components/ui/Button/Button';

function App() {
  return (
    <View>
      {/*comment*/}
      <Text>DEMAT Breizh</Text>
      <Button bgColor="green">button1</Button>
      <Button bgColor="tomato">Button 2</Button>
      <Button style={{width: '45%'}}>Button 3</Button>
      <Button style={{width: '45%'}} bgColor="red">
        fghuiolmlkj
      </Button>
      <Button children="ghjkl" />
    </View>
  );
}

export default App;

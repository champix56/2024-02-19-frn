import React from 'react';
import {View, Text} from 'react-native';
import Button from './components/ui/Button/Button';

function App() {
  return (
    <View>
      {/*comment*/}
      <Text>DEMAT Breizh</Text>
      <Button>button1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
      <Button>fghuiolmlkj</Button>
      <Button children="ghjkl" />
    </View>
  );
}

export default App;

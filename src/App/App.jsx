import React, {useEffect, useState} from 'react';
import {View, Text, ToastAndroid, Image, StyleSheet} from 'react-native';

function App() {
  const [state, setState] = useState({
    imat: '',
    model: '',
    coleur: '',
    kms: '',
    photo: '',
    present: true,
  });
  return (
    <View>
      <Text>{JSON.stringify(state)}</Text>
    </View>
  );
}

export default App;

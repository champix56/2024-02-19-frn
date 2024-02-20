import React, {useEffect, useState} from 'react';
import {View, Text, ToastAndroid, Image} from 'react-native';
import Button from './components/ui/Button/Button';
import styles from './App.styles';
import buttonStyles from './components/ui/Button/Button.styles';
const initialState = {
  id: 0,
  imat: 'bs-709-gx',
  couleur: 'bleu',
  marque: 'renault',
  model: 'megane II',
  photo: undefined,
  disponible: true,
  prix: 2000,
};
function App() {
  const [car, setCar] = useState(initialState);
  return (
    <View>
      {/*comment*/}
      <Text style={styles.buttonText}>voiture: {JSON.stringify(car)}</Text>
    </View>
  );
}

export default App;

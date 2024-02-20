import React, {useEffect, useState} from 'react';
import {View, Text, ToastAndroid, Image, StyleSheet} from 'react-native';
import CarForm from './components/functionnal/CarForm/CarForm';

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
    // react fragment <> ....</> permet l'existance d'un balise fictive
    // pour laisser bien qu'une seul balise principale dans la section XML
    //ne generre pas de composant en sortie
    <>
      <View>
        <Text>{JSON.stringify(state)}</Text>
      </View>
      <CarForm />
    </>
  );
}

export default App;

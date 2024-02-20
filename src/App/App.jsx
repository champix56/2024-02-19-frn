import React, {useEffect, useState} from 'react';
import {View, Text, LogBox, ToastAndroid} from 'react-native';
import Button from './components/ui/Button/Button';

function App() {
  const [counter, setCounter] = useState(1);

  //cycle de vie
  useEffect(() => {
    //action en cas de changement/initialisation de valeur de counter
    console.log('valeur de counter par useEffect', counter);
    return () => {
      //action de demontage pour la valeur counter
    };
    //le tableau en 2eme argument de useEffect pointe les references a observer
    //ici seul la valeur counter est observée pour le declenchement
  }, [counter]);

  useEffect(() => {
    //action de montage du composant car dependance observée -> []
    // initialisation du composant
    setCounter(0);
    return () => {
      //action de demontage du composant
    };
    //array vide donc equiv a component didMount & componentWillUnmount(pour la fonction retourné dans le useEffect)
  }, []);
  return (
    <View>
      {/*comment*/}
      <Text>Etat de counter : {counter}</Text>
      <Button
        onButtonClicked={arg => {
          ToastAndroid.show('button clicked depuis App', ToastAndroid.LONG);
          // mutation des etats interdits --> counter++;
          //utilisation du setter
          setCounter(counter + 1);
          //décalage de 1 palier car set counter met a jour et rerend le composant de facon async
          console.log(counter);
        }}
        bgColor="green">
        Ajouter 1
      </Button>
      <Button
        onButtonClicked={() => {
          ToastAndroid.show('soustraire 1', 500);
          // counter--;
          setCounter(counter - 1);
          //retard de 1 sur le log car setCounter async
          console.log(counter);
        }}
        bgColor="tomato">
        Soustraire 1
      </Button>
    </View>
  );
}

export default App;

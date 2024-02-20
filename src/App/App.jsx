import React, {useState} from 'react';
import {View, Text, LogBox, ToastAndroid} from 'react-native';
import Button from './components/ui/Button/Button';

function App() {
  const [counter, setCounter] = useState(1);
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

import React, {useEffect, useState} from 'react';
import {View, Text, ToastAndroid, Image} from 'react-native';
import Button from './components/ui/Button/Button';
import styles from './App.styles';
import buttonStyles from './components/ui/Button/Button.styles';
function App() {
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    //mount & update
    console.log('dans le useEffect', counter);
    /*return () => {
      //destruction de la valeur
    };*/
  }, [counter]);
  useEffect(() => {
    //componentDidMount
    setCounter(0);
    return () => {
      //willUnmount
    };
  }, []);
  return (
    <View>
      {/*comment*/}
      <Text style={styles.buttonText}>Valeur de counter : {counter}</Text>
      <Button
        onButtonClicked={arg => {
          ToastAndroid.show(
            'button ajouter clicked depuis App',
            ToastAndroid.LONG,
          );
          setCounter(counter + 1);
          console.log(counter);
        }}>
        <Image
          source={require('../../assets/img/plus.png')}
          style={styles.buttonImage}
        />
        <Text style={styles.buttonText}>Ajouter 1</Text>
      </Button>
      <Button
        onButtonClicked={arg => {
          ToastAndroid.show(
            'button supprimer clicked depuis App',
            ToastAndroid.LONG,
          );
          setCounter(counter - 1);
          console.log(counter);
        }}
        bgColor="tomato">
        <View style={styles.buttonView}>
          <Image
            source={require('../../assets/img/minus.png')}
            style={styles.buttonImage}
          />
          <Text style={buttonStyles.text}>supprimer 1</Text>
        </View>
      </Button>
    </View>
  );
}

export default App;

import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './App.styles';
import CarViewer from './components/ui/CarViewer/CarViewer';
import CarEditor from './components/functionnal/CarEditor/CarEditor';
const initialState = {
  id: 0,
  imat: 'bs-709-gx',
  couleur: 'bleu',
  marque: 'renault',
  model: 'megane II',
  //photo: undefined,
  photo:
    'https://th.bing.com/th/id/R.249c24da93d2105b0dcec7540c73ce1b?rik=5PakK0TbFfTVJA&riu=http%3a%2f%2fwww.encyclautomobile.fr%2fweb%2f_encyclauto%2fcars%2f263%2fmegane_2_2_f1_b.jpg&ehk=KTbl96eayslV9INUj6ejTTghHZ7kVn6IIEc8M7rj1tw%3d&risl=&pid=ImgRaw&r=0',
  disponible: true,
  prix: 2000,
};
function App() {
  const [car, setCar] = useState(initialState);
  return (
    <View>
      {/*comment*/}
      {/* <Text style={styles.buttonText}>
        voiture: {JSON.stringify({...car, photo: undefined})}
      </Text> */}
      <CarViewer car={car} />
      <CarEditor car={car} />
    </View>
  );
}

export default App;

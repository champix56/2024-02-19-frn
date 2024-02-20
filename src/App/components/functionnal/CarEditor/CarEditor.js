import {
  Image,
  Switch,
  Text,
  TextInput,
  ToastAndroid,
  TouchableHighlight,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './CarEditor.styles';
import PropTypes from 'prop-types';
const initialState = true;
const CarEditor = props => {
  const [state, setState] = useState(initialState);
  useEffect(() => {
    return () => {};
  }, [state]);
  return (
    <View style={styles.CarEditor} testID="CarEditor">
      <View style={styles.leftContainer}>
        <TextInput style={styles.big} value={props.car.marque} />
        <TextInput style={styles.big} value={props.car.model} />
        <TextInput style={styles.big} value={props.car.imat} />
        <Text>{'\n'}</Text>
        <TextInput value={props.car.couleur} />
        <TextInput style={[styles.big, styles.price]} value={props.car.prix} />€
        <Text>{'\n'}</Text>
        <Text>
          Disponible : <Switch value={props.car.disponible} />
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <Text>{props.car.id}</Text>
        <TouchableHighlight
          onPress={() => {
            ToastAndroid.show('Change image ask', 1000);
          }}>
          <Image source={{uri: props.car.photo}} style={styles.image} />
        </TouchableHighlight>
      </View>
    </View>
  );
};
CarEditor.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number,
    marque: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    imat: PropTypes.string.isRequired,
    couleur: PropTypes.string.isRequired,
    prix: PropTypes.number.isRequired,
    disponible: PropTypes.bool.isRequired,
    photo: PropTypes.string,
  }).isRequired,
};
CarEditor.defaultProps = {};
export default CarEditor;

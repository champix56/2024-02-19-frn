import {Image, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './CarViewer.styles';
import PropTypes from 'prop-types';
const initialState = true;
const CarViewer = props => {
  const [state, setState] = useState(initialState);
  useEffect(() => {
    return () => {};
  }, [state]);
  return (
      <View style={styles.CarViewer} testID="CarViewer">
        <View style={styles.leftContainer}>
          <Text style={styles.big}>{props.car.marque}</Text>
          <Text style={styles.big}>{props.car.model}</Text>
          <Text style={styles.big}>{props.car.imat}</Text>
          <Text>{'\n'}</Text>
          <Text>{props.car.couleur}</Text>
          <Text style={[styles.big, styles.price]}>{props.car.prix}€</Text>
          <Text>{'\n'}</Text>
          <Text>
            Disponible : {props.car.disponible === true ? 'oui' : 'non'}
          </Text>
        </View>
        <View style={styles.rightContainer}>
          <Text>{props.car.id}</Text>
          <Image source={{uri: props.car.photo}} style={styles.image} />
        </View>
      </View>
  );
};
CarViewer.propTypes = {};
CarViewer.defaultProps = {};
export default CarViewer;

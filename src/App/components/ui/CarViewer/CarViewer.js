import {Image, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './CarViewer.styles';
import PropTypes from 'prop-types';

const CarViewer = props => {
  console.log(props.car);
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
        <Image
          source={
            props.car.photo !== undefined && props.car.photo !== null
              ? {uri: props.car.photo}
              : require('../../../../../assets/img/car.png')
          }
          style={styles.image}
        />
      </View>
    </View>
  );
};
CarViewer.propTypes = {
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
CarViewer.defaultProps = {};
export default CarViewer;

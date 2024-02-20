import {Image, Text, TouchableHighlight, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './CarListViewer.styles';
import PropTypes from 'prop-types';
const initialState = true;
const CarListViewer = props => {
  return (
    <TouchableHighlight onPress={() => {}}>
      <View style={styles.CarListViewer} testID="CarListViewer">
        <View style={styles.left} testID="CarListViewer">
          <Image
            source={
              props.car.photo !== undefined
                ? {uri: props.car.photo}
                : require('../../../../../assets/img/car.png')
            }
            style={styles.image}
          />
        </View>

        <View style={styles.right} testID="CarListViewer">
          <Text style={styles.titre}>
            {props.car.id !== undefined
              ? props.car.id + ':' + props.car.imat
              : props.car.imat}
          </Text>
          <Text style={styles.titre}>
            diponible :{props.car.disponible === true ? 'Oui' : 'Non'}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};
CarListViewer.propTypes = {};
CarListViewer.defaultProps = {};
export default CarListViewer;

import {Image, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Home.styles';
import PropTypes from 'prop-types';
import Button from '../../components/ui/Button/Button';

const Home = props => {
  console.log(props);
  return (
    <View style={styles.Home} testID="Home">
      <Text style={styles.titre}>Car lister</Text>
      <View style={styles.centerImageView}>
        <Image
          source={require('../../../../assets/img/car.png')}
          style={styles.centerImage}
        />
      </View>
      <View style={styles.buttons}>
        <Button
          onButtonClicked={() => {
            props.navigation.navigate('List Voiture');
          }}
          style={styles.button}>
          <View style={styles.buttonView}>
            <Image
              source={require('../../../../assets/img/car.png')}
              style={styles.buttonImage}
            />
            <Text>Liste</Text>
          </View>
        </Button>
        <Button
          onButtonClicked={() => {}}
          bgColor="tomato"
          style={styles.button}>
          <View style={styles.buttonView}>
            <Image
              source={require('../../../../assets/img/plus.png')}
              style={styles.buttonImage}
            />
            <Text>Nouveau</Text>
          </View>
        </Button>
      </View>
    </View>
  );
};
Home.propTypes = {};
Home.defaultProps = {};
export default Home;

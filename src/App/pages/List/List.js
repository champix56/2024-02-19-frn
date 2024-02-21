import {View} from 'react-native';
import React from 'react';
import styles from './List.styles';
import CarViewer from '../../components/ui/CarViewer/CarViewer.connected';
import FiltrableCarList from '../../components/ui/FiltrableCarList/FiltrableCarList.connected';

const List = props => {
  console.log(props);
  return (
    <View style={styles.List} testID="List">
      <CarViewer />
      <FiltrableCarList />
    </View>
  );
};
export default List;

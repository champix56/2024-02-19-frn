import React from 'react';
import {useSelector} from 'react-redux';
import FiltrableCarListUnconnected from './FiltrableCarList';
const FiltrableCarList = props => {
  const cars = useSelector(storeState => storeState.cars);
  return <FiltrableCarListUnconnected {...props} cars={cars} />;
};

export default FiltrableCarList;

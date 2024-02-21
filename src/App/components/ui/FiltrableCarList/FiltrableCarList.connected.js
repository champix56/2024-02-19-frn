import React from 'react';
import FiltrableCarListUnconnected from './FiltrableCarList';
import {useSelector} from 'react-redux';

const FiltrableCarList = props => {
  const cars = useSelector(storeState => storeState.ressources.cars);
  const current = useSelector(storeState => storeState.current.car);
  return (
    <FiltrableCarListUnconnected {...props} cars={cars} selectedCar={current} />
  );
};

export default FiltrableCarList;

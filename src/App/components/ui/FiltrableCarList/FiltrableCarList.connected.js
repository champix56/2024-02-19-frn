import React from 'react';
import FiltrableCarListUnconnected from './FiltrableCarList';
import {useDispatch, useSelector} from 'react-redux';
import {set, clear} from '../../../store/currentSlice';

const FiltrableCarList = props => {
  const cars = useSelector(storeState => storeState.ressources.cars);
  const current = useSelector(storeState => storeState.current.car);
  const dispatch = useDispatch();
  return (
    <FiltrableCarListUnconnected
      {...props}
      cars={cars}
      selectedCar={current}
      onUpdateSelect={c => {
        if (current !== undefined && current === c) {
          //clear
          dispatch(clear());
        } else {
          //update
          dispatch(set(c));
        }
      }}
    />
  );
};

export default FiltrableCarList;

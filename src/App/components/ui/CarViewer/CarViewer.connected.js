import React from 'react';
import Unconnect from './CarViewer';
import {useSelector} from 'react-redux';
const CarViewer = props => {
  const current = useSelector(s => s.current.car);
  return undefined !== current ? <Unconnect {...props} car={current} /> : null;
};

export default CarViewer;

import {combineReducers, configureStore} from '@reduxjs/toolkit';
import carListReducer, {addCar, loadDatas} from './carList';

export const store = configureStore({
  reducer: combineReducers({cars: carListReducer}),
});
store.subscribe(() => {
  console.log('storeUpdated', store.getState());
});

// loading des dats
store.dispatch(loadDatas());

import {combineReducers, configureStore} from '@reduxjs/toolkit';
import ressourcesReducer from './carSlice';

export const store = configureStore({
  reducer: combineReducers({ressources: ressourcesReducer}),
});
store.subscribe(() => {
  console.log('changement de store state', store.getState());
});

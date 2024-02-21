import {combineReducers, configureStore} from '@reduxjs/toolkit';
import ressourcesReducer, {loadCars} from './carSlice';

export const store = configureStore({
  reducer: combineReducers({
    ressources: ressourcesReducer,
    // current: currentReducer,
  }),
});
store.subscribe(() => {
  console.log('changement de store state', store.getState());
});
store.dispatch(loadCars());

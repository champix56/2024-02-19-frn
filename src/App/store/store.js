//import {configureStore} from '@reduxjs/toolkit';

import {combineReducers, configureStore} from '@reduxjs/toolkit';

//export const store = configureStore({reducer: undefined, devTools: true});

export const initialState = {
  value: 1,
  msg: 'coucou',
};

const reducer = (state = initialState, action) => {
  console.log('action value', action);
  switch (action.type) {
    case 'AjouterValeur':
      return {...state, value: state.value + action.payload};
    case 'increm':
      return {...state, value: state.value + 1};
    default:
      return state;
  }
};
export const ajouterValeur = valueToSend => {
  return {type: 'AjouterValeur', payload: valueToSend};
};
const increm = () => {
  return {type: 'increm'};
};

// let state = reducer(undefined, {type: '@@INIT'});
// console.log(state);
// state = reducer(state, increm());
// console.log(state);
// state = reducer(state, ajouterValeur(3));
// console.log(state);
export const store = configureStore({
  reducer: combineReducers({valuereducer: reducer, xxx:reducer}),
});
store.subscribe(() => {
  console.log('subscribe', store.getState());
});
store.dispatch(increm());

/*
store.dispatch(increm());
// console.log('store value', store.getState());
store.dispatch(ajouterValeur(3));
// console.log('store value', store.getState());
store.dispatch(increm());
// console.log('store value', store.getState());*/

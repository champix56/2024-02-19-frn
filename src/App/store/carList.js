import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

const carList = createSlice({
  name: 'CarList',
  initialState,
  reducers: {
    addCar: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const {addCar} = carList.actions;
const carListReducer = carList.reducer;
export default carListReducer;

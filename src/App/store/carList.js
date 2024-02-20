import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {RESSOURCES, REST_URL} from '../config/config';

const initialState = [];

const carList = createSlice({
  name: 'CarList',
  initialState,
  reducers: {
    addCar: (state, action) => {
      state.push(action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(loadDatas.fulfilled, (state, action) => {
      state.splice(0);
      state.push(...action.payload);
    });
  },
});

export const {addCar} = carList.actions;

export const loadDatas = createAsyncThunk('CarList/loadAll', async () => {
  const pr = await fetch(`${REST_URL}${RESSOURCES.cars}`);
  return await pr.json();
});

const carListReducer = carList.reducer;
export default carListReducer;

import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = {car: undefined};
export const newCar = {
  imat: '',
  couleur: '',
  marque: '',
  model: '',
  disponible: true,
  prix: 0,
};
const currentSlice = createSlice({
  name: 'current',
  initialState,
  reducers: {
    set: (s, a) => {
      s.car = a.payload;
    },
    clear: (s, a) => {
      s.car = undefined;
    },
    new: (s, a) => {
      s.car = newCar;
    },
  },
  extraReducers: builder => {
    builder.addCase(syncCurrent.fulfilled, (s, a) => {
      Object.assign(s.car, a.payload);
    });
  },
});

export const syncCurrent = createAsyncThunk('current/sync', async car => {
  const pr = await fetch(
    `http://localhost:5600/cars${car.id !== undefined ? '/' + car.id : ''}`,
    {
      method: car.id !== undefined ? 'PUT' : 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(car),
    },
  );
  return await pr.json();
});

export const {set} = currentSlice.actions;
const currentReducer = currentSlice.reducer;
export default currentReducer;

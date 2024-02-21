import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {store} from './store';

const initialState = {
  cars: [
    {
      id: 0,
      imat: 'bs-709-gx',
      couleur: 'bleu',
      marque: 'renault',
      model: 'megane II',
      photo:
        'https://th.bing.com/th/id/R.249c24da93d2105b0dcec7540c73ce1b?rik=5PakK0TbFfTVJA&riu=http%3a%2f%2fwww.encyclautomobile.fr%2fweb%2f_encyclauto%2fcars%2f263%2fmegane_2_2_f1_b.jpg&ehk=KTbl96eayslV9INUj6ejTTghHZ7kVn6IIEc8M7rj1tw%3d&risl=&pid=ImgRaw&r=0',
      disponible: true,
      prix: 2000,
    },
  ],
};

const carSlice = createSlice({
  name: 'ressources',
  initialState,
  reducers: {
    addCar(state, action) {
      //return {...state, cars: [...state.cars, action.payload]};
      state.cars.push(action.payload);
    },
    addCars(state, action) {
      state.cars.splice(0);
      state.cars.push(...action.payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(loadCars.pending, (state, action) => {
      console.log('loadData en cours ........');
      state.cars.push(...action.payload);
    });
    builder.addCase(loadCars.fulfilled, (state, action) => {
      state.cars.splice(0);
      state.cars.push(...action.payload);
    });
    builder.addDefaultCase((state, action) => {
      console.log('defaultCase extraReducer', state, action);
    });
  },
});
export const loadCars = createAsyncThunk('ressources/loadData', async () => {
  const promise = await fetch('http://localhost:5600/cars');
  return await promise.json();
});
export const {addCar, addCars} = carSlice.actions;
const ressourcesReducer = carSlice.reducer;
export default ressourcesReducer;

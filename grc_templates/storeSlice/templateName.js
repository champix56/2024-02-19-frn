import {createSlice} from '@reduxjs/toolkit';

export const initialState = {};

const templateName = createSlice({
  name: 'templateName',
  initialState,
  reducers: {
    fn: (state, action) => {},
  },
});

export const {fn} = templateName.actions;
const templateNameReducer = templateName.reducer;
export default templateNameReducer;

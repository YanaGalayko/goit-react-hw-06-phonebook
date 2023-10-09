import { createSlice } from '@reduxjs/toolkit';

export const filterSlise = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
      filterContacts(state, action) {
        return action.payload;
      },
    },
  });
  
  export const { filterContacts } = filterSlise.actions;
  export const filterReducer = filterSlise.reducer;
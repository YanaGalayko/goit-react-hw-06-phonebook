import { createAction } from '@reduxjs/toolkit';
import { createReducer } from '@reduxjs/toolkit';

const initialStateFilter = {
  filter: '',
};

export const sliseFilter = createAction('filter/sliseFilter', newContactName => {
  return {
    payload: newContactName,
  };
});

export const filterReducer = createReducer(initialStateFilter, builder => {
  builder.addCase(sliseFilter, (state, action) => {
    return {
      ...state,
      filter: action.payload,
    };
  });
});
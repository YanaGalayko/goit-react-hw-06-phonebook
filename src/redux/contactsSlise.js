import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { nanoid } from 'nanoid';

const initialStateContacts = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialStateContacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(value) {
        return {
          payload: { id: nanoid(), ...value },
        };
      },
    },
    deleteContact: {
      reducer(state, action) {
        return {
          contacts: state.contacts.filter(
            contact => contact.id !== action.payload
          ),
        };
      },
      prepare(contactId) {
        return {
          payload: contactId,
        };
      },
    },
  },
});

const persistConfig = {
    key: 'root',
    storage,
  };

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const persistedReducer = persistReducer(persistConfig, contactsReducer);
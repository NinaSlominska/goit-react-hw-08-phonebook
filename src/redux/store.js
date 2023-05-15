import { configureStore } from '@reduxjs/toolkit';
import { contactsReduser } from './contactsSlice';
import { filterReduser } from './filterSlice';

// const persistConfig = {
//   key: 'contactsStore',
//   storage,
// };
// const persistedReducer = persistReducer(persistConfig, contactsReduser);
export const store = configureStore({
  reducer: { contacts: contactsReduser, filter: filterReduser },
});

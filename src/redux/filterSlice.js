const { createSlice } = require('@reduxjs/toolkit');
const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    changeValue(state, action) {
      state.filter = action.payload;
    },
  },
});
export const filterReduser = filterSlice.reducer;
export const { changeValue } = filterSlice.actions;

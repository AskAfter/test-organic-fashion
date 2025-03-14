import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: 'Altanschool web courses',
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    updateHeader: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateHeader } = headerSlice.actions;
export default headerSlice.reducer;

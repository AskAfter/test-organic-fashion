import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nav: {
    home: 'Home',
    about: 'About',
    shop: 'Shop',
    blog: 'Blog',
    contact: 'Contact',
  },
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    updateNavigation: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateNavigation } = navigationSlice.actions;
export default navigationSlice.reducer;

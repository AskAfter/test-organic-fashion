import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nav: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'shop', label: 'Shop' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ],
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

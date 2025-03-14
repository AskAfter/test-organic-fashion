import { createSlice } from '@reduxjs/toolkit';

import img1x1Webp from '../assets/images/followUs/img-1@1x.webp';
import img1x2Webp from '../assets/images/followUs/img-1@2x.webp';
import img1x1Jpg from '../assets/images/followUs/img-1@1x.jpg';
import img1x2Jpg from '../assets/images/followUs/img-1@2x.jpg';

const initialState = {
  title: 'Follow us',
  images: {
    webp: { x1: img1x1Webp, x2: img1x2Webp },
    jpg: { x1: img1x1Jpg, x2: img1x2Jpg },
  },
};

const followUsSlice = createSlice({
  name: 'followUs',
  initialState,
  reducers: {
    updateFollowUs: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateFollowUs } = followUsSlice.actions;
export default followUsSlice.reducer;

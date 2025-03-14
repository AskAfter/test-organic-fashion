import { createSlice } from '@reduxjs/toolkit';

import imgMobile1x1Webp from '../assets/images/hero/img1mobile@1x.webp';
import imgMobile1x2Webp from '../assets/images/hero/img1mobile@2x.webp';
import imgMobile1x1Jpg from '../assets/images/hero/img1mobile@1x.jpg';
import imgMobile1x2Jpg from '../assets/images/hero/img1mobile@2x.jpg';
import img1x1Webp from '../assets/images/hero/img1@1x.webp';
import img1x2Webp from '../assets/images/hero/img1@2x.webp';
import img1x1Jpg from '../assets/images/hero/img1@1x.jpg';
import img1x2Jpg from '../assets/images/hero/img1@2x.jpg';

const initialState = {
  title: 'Organic fashion',
  content:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  buttonText: 'Shop now',
  images: {
    mobile: {
      webp: { x1: imgMobile1x1Webp, x2: imgMobile1x2Webp },
      jpg: { x1: imgMobile1x1Jpg, x2: imgMobile1x2Jpg },
    },
    desktop: {
      webp: { x1: img1x1Webp, x2: img1x2Webp },
      jpg: { x1: img1x1Jpg, x2: img1x2Jpg },
    },
  },
};

const heroSlice = createSlice({
  name: 'hero',
  initialState,
  reducers: {
    updateHero: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateHero } = heroSlice.actions;
export default heroSlice.reducer;

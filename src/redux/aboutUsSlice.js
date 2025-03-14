import { createSlice } from '@reduxjs/toolkit';

import img1x1Webp from '../assets/images/aboutUs/img-1@1x.webp';
import img1x2Webp from '../assets/images/aboutUs/img-1@2x.webp';
import img1x1Jpg from '../assets/images/aboutUs/img-1@1x.jpg';
import img1x2Jpg from '../assets/images/aboutUs/img-1@2x.jpg';

import imgMobile1x1Webp from '../assets/images/aboutUs/img-1Mobile@1x.webp';
import imgMobile1x2Webp from '../assets/images/aboutUs/img-1Mobile@2x.webp';
import imgMobile1x1Jpg from '../assets/images/aboutUs/img-1Mobile@1x.jpg';
import imgMobile1x2Jpg from '../assets/images/aboutUs/img-1Mobile@2x.jpg';

const initialState = {
  title: 'About us',
  content:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  contentSecondary:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  buttonText: 'Learn more',
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

const aboutUsSlice = createSlice({
  name: 'aboutUs',
  initialState,
  reducers: {
    updateAboutUs: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateAboutUs } = aboutUsSlice.actions;
export default aboutUsSlice.reducer;

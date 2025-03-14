import { createSlice } from '@reduxjs/toolkit';

import img1x1Webp from '../assets/images/shopByCategories/img-1@1x.webp';
import img1x2Webp from '../assets/images/shopByCategories/img-1@2x.webp';
import img1x1Jpg from '../assets/images/shopByCategories/img-1@1x.jpg';
import img1x2Jpg from '../assets/images/shopByCategories/img-1@2x.jpg';

import img2x1Webp from '../assets/images/shopByCategories/img-2@1x.webp';
import img2x2Webp from '../assets/images/shopByCategories/img-2@2x.webp';
import img2x1Jpg from '../assets/images/shopByCategories/img-2@1x.jpg';
import img2x2Jpg from '../assets/images/shopByCategories/img-2@2x.jpg';

import img3x1Webp from '../assets/images/shopByCategories/img-3@1x.webp';
import img3x2Webp from '../assets/images/shopByCategories/img-3@2x.webp';
import img3x1Jpg from '../assets/images/shopByCategories/img-3@1x.jpg';
import img3x2Jpg from '../assets/images/shopByCategories/img-3@2x.jpg';

import img4x1Webp from '../assets/images/shopByCategories/img-4@1x.webp';
import img4x2Webp from '../assets/images/shopByCategories/img-4@2x.webp';
import img4x1Jpg from '../assets/images/shopByCategories/img-4@1x.jpg';
import img4x2Jpg from '../assets/images/shopByCategories/img-4@2x.jpg';

import img5x1Webp from '../assets/images/shopByCategories/img-5@1x.webp';
import img5x2Webp from '../assets/images/shopByCategories/img-5@2x.webp';
import img5x1Jpg from '../assets/images/shopByCategories/img-5@1x.jpg';
import img5x2Jpg from '../assets/images/shopByCategories/img-5@2x.jpg';

const initialState = {
  title: 'Shop by categories',
  images: {
    img1: {
      webp: { x1: img1x1Webp, x2: img1x2Webp },
      jpg: { x1: img1x1Jpg, x2: img1x2Jpg },
    },
    img2: {
      webp: { x1: img2x1Webp, x2: img2x2Webp },
      jpg: { x1: img2x1Jpg, x2: img2x2Jpg },
    },
    img3: {
      webp: { x1: img3x1Webp, x2: img3x2Webp },
      jpg: { x1: img3x1Jpg, x2: img3x2Jpg },
    },
    img4: {
      webp: { x1: img4x1Webp, x2: img4x2Webp },
      jpg: { x1: img4x1Jpg, x2: img4x2Jpg },
    },
    img5: {
      webp: { x1: img5x1Webp, x2: img5x2Webp },
      jpg: { x1: img5x1Jpg, x2: img5x2Jpg },
    },
  },
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    updateShop: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateShop } = shopSlice.actions;

export default shopSlice.reducer;

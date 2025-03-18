import { createSlice } from '@reduxjs/toolkit';

import img1x1Webp from '../assets/images/newCollection/img-1@1x.webp';
import img1x2Webp from '../assets/images/newCollection/img-1@2x.webp';
import img1x1Png from '../assets/images/newCollection/img-1@1x.png';
import img1x2Png from '../assets/images/newCollection/img-1@2x.png';

import img1x1Webpx1920 from '../assets/images/newCollection/img-1x1920@1x.webp';
import img1x2Webpx1920 from '../assets/images/newCollection/img-1x1920@2x.webp';
import img1x1Pngx1920 from '../assets/images/newCollection/img-1x1920@1x.png';
import img1x2Pngx1920 from '../assets/images/newCollection/img-1x1920@2x.png';

import img2x1Webp from '../assets/images/newCollection/img-2@1x.webp';
import img2x2Webp from '../assets/images/newCollection/img-2@2x.webp';
import img2x1Png from '../assets/images/newCollection/img-2@1x.png';
import img2x2Png from '../assets/images/newCollection/img-2@2x.png';

import img2x1Webpx1920 from '../assets/images/newCollection/img-2x1920@1x.webp';
import img2x2Webpx1920 from '../assets/images/newCollection/img-2x1920@2x.webp';
import img2x1Pngx1920 from '../assets/images/newCollection/img-2x1920@1x.png';
import img2x2Pngx1920 from '../assets/images/newCollection/img-2x1920@2x.png';

import img3x1Webp from '../assets/images/newCollection/img-3@1x.webp';
import img3x2Webp from '../assets/images/newCollection/img-3@2x.webp';
import img3x1Png from '../assets/images/newCollection/img-3@1x.png';
import img3x2Png from '../assets/images/newCollection/img-3@2x.png';

import img3x1Webpx1920 from '../assets/images/newCollection/img-3x1920@1x.webp';
import img3x2Webpx1920 from '../assets/images/newCollection/img-3x1920@2x.webp';
import img3x1Pngx1920 from '../assets/images/newCollection/img-3x1920@1x.png';
import img3x2Pngx1920 from '../assets/images/newCollection/img-3x1920@2x.png';

const initialState = {
  title: 'New Collection',
  content:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  images: [
    {
      id: 1,
      alt: 'bush',
      webp: { x1: img1x1Webp, x2: img1x2Webp },
      png: { x1: img1x1Png, x2: img1x2Png },
      webp1920: { x1: img1x1Webpx1920, x2: img1x2Webpx1920 },
      png1920: { x1: img1x1Pngx1920, x2: img1x2Pngx1920 },
    },
    {
      id: 2,
      alt: 'flowerpot',
      webp: { x1: img2x1Webp, x2: img2x2Webp },
      png: { x1: img2x1Png, x2: img2x2Png },
      webp1920: { x1: img2x1Webpx1920, x2: img2x2Webpx1920 },
      png1920: { x1: img2x1Pngx1920, x2: img2x2Pngx1920 },
    },
    {
      id: 3,
      alt: 'leaf',
      webp: { x1: img3x1Webp, x2: img3x2Webp },
      png: { x1: img3x1Png, x2: img3x2Png },
      webp1920: { x1: img3x1Webpx1920, x2: img3x2Webpx1920 },
      png1920: { x1: img3x1Pngx1920, x2: img3x2Pngx1920 },
    },
  ],
};

const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    updateCollection: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateCollection } = collectionSlice.actions;

export default collectionSlice.reducer;

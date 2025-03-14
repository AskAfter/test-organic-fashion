import { configureStore } from '@reduxjs/toolkit';
import heroReducer from './heroSlice';
import headerReducer from './headerSlice';
import navigationReducer from './navigationSlice';
import aboutUsReducer from './aboutUsSlice';
import collectionReducer from './collectionSlice';
import shopReducer from './shopSlice';
import followUsReducer from './followUsSlice';

export const store = configureStore({
  reducer: {
    hero: heroReducer,
    header: headerReducer,
    navigation: navigationReducer,
    aboutUs: aboutUsReducer,
    collection: collectionReducer,
    shop: shopReducer,
    followUs: followUsReducer,
  },
});

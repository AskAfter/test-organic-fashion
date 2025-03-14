import { configureStore } from '@reduxjs/toolkit';
import heroReducer from './heroSlice';
import headerReducer from './headerSlice';
import navigationReducer from './navigationSlice';
import aboutUsReducer from './aboutUsSlice';
// import followUsReducer from './followUsSlice';
// import collectionReducer from './collectionSlice';

export const store = configureStore({
  reducer: {
    hero: heroReducer,
    header: headerReducer,
    navigation: navigationReducer,
    aboutUs: aboutUsReducer,
    // followUs: followUsReducer,
    // collection: collectionReducer,
  },
});

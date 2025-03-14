import { configureStore } from '@reduxjs/toolkit';
import heroReducer from './heroSlice';
// import aboutUsReducer from './aboutUsSlice';
// import followUsReducer from './followUsSlice';
// import collectionReducer from './collectionSlice';

export const store = configureStore({
  reducer: {
    hero: heroReducer,
    // aboutUs: aboutUsReducer,
    // followUs: followUsReducer,
    // collection: collectionReducer,
  },
});

import { configureStore } from '@reduxjs/toolkit';

import { globalSlice } from './globalSlice';
import { apiSlice } from './api/apiSlice';

const store = configureStore({
  reducer: {
    global: globalSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefault => getDefault().concat(apiSlice.middleware),
});

export default store;

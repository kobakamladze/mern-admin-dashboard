import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { configureStore } from '@reduxjs/toolkit';
import globalReducer from './state/index';

const store = configureStore({ reducer: { global: globalReducer } });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

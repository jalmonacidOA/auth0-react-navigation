import React from 'react';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';

import { Router } from './router';

import { store } from './redux';

export const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

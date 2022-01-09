import React from 'react';

import AppNavigator from './Navigation/Routes';
import {store} from './Store/store';
import {Provider} from 'react-redux';
import Root from './Navigation/Root';

export default function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}

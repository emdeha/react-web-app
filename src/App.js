import React from 'react';

import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';

import { PersistGate } from 'redux-persist/integration/react';

import './App.css';

import Gallery from './components/Gallery';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Gallery />
      </PersistGate>
    </Provider>
  );
}

export default App;

import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import PageHome from './pages/index/index.jsx';

function App() {
  return (
    <Provider store={store}>
      <PageHome />
    </Provider>
  );
}

export default App;

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

import store from './store';

import PageHome from './pages/index';
import Loading from './components/Base/Loading';

const User = loadable(() => import('./pages/user'), { fallback: <Loading /> });
const NotFound = loadable(() => import('./pages/404'), {
  fallback: <Loading />,
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={PageHome} />
          <Route path="/user" component={User} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

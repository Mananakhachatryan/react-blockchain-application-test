import React, { Suspense, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Routes } from './routes';
import './assets/style/main.scss';
import Loader from './shared/Loader/index';

const App = () => {
  const renderSwitch = () => (
    <Switch>
      {Routes.map(route => {
        return (
          <Route
            key={route.path}
            exact={route.isExact}
            path={route.path}
            component={route.component}
          />
        );
      })}
    </Switch>
  );

  return (
    <Suspense fallback={<Loader />} maxDuration={5000}>
      <BrowserRouter>
        <div id="main">
          <Fragment>{renderSwitch()}</Fragment>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;

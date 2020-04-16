import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Navigate from './pages/Navigate';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/Navigate" exact component={Navigate} />
    </Switch>
  );
}

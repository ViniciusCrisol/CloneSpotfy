import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Navigate from './pages/Navigate';
import Radio from './pages/Radio';
import Playlist from './pages/Playlist';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/Navigate" exact component={Navigate} />
      <Route path="/Radio" exact component={Radio} />
      <Route path="/Playlist" exact component={Playlist} />
    </Switch>
  );
}

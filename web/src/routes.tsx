import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Orphanages from './pages/Orphanages';
import CreateOrphanage from './pages/CreateOrphanage';
import Orphanage from './pages/Orphanage';
import SuccessCreateOrphanage from './pages/SuccessCreateOrphanage';
import Login from './pages/Login';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/home" component={Orphanages} />
        <Route path="/login" component={Login} />
        <Route path="/success" component={SuccessCreateOrphanage} />
        <Route path="/orphanages/create" component={CreateOrphanage} />
        <Route path="/orphanages/:id" component={Orphanage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

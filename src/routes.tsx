import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Landing} exact/>
                <Route path="/app" component={OrphanagesMap}/>
                <Route path="/login" component={Login}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/orphanages/create" component={CreateOrphanage} exact/>
                <Route path="/orphanages/:id" component={Orphanage} exact/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
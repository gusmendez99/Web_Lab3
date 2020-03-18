import React from 'react';

import { Switch, Route } from 'react-router';

import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import HomePage from './pages/home/home.component';
import EventsPage from './pages/events/events.component';

import './App.css';


const App = () => (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/:id" component={EventsPage} />
      </Switch>
)

export default App;

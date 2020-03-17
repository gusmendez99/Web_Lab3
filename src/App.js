import React from 'react';

import {Redirect, Switch, Route} from 'react-router';

import { store } from './redux/store';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import Home from './pages/home/home.component';
import './App.css';


const App = () => (
      <Switch>
        <Route exact path="/" component={Home} />
        
      </Switch>
)

export default App;

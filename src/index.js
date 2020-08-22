import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './Home';

import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
          <Route exact path="/admin" component={Home} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);

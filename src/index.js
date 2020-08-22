/*Import essential React components*/
import React from 'react';
import ReactDOM from 'react-dom';

/*Import routing components*/
import { BrowserRouter, Route, Switch } from "react-router-dom";

/*Import custom components*/
import Home from './Home';
import Login from './Login';

/*Import stylesheet*/
import './index.css';

/*Where components are rendered*/
ReactDOM.render(
    <BrowserRouter>
        <Switch>
          <Route exact path="/admin" component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);

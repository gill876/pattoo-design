import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar/>
        <MainContent/>
      </div>
    );
  };
};

class NavigationBar extends React.Component {
  render() {
    return (
      <div className="navi-bar" >
        <NavItem button={"Home"}/>
        <NavItem button={"Users"}/>
        <NavItem button={"Agents"}/>
        <NavItem button={"Login/Logout"}/>
      </div>
    );
  };
};

class NavItem extends React.Component {
  render() {
    return (
      <button className="navi-item" >
        {this.props.button}
      </button>
    );
  };
};

class MainContent extends React.Component {
  render() {
    return (
      <div className="main-content">
        Hello World
      </div>
    );
  };
};

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/users" component={MainPage} />
        <Route path="/agents" component={MainPage} />
        <Route path="/login" component={MainPage} />
        <Route path="/logout" component={MainPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

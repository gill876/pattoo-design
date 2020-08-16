import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch, useHistory, Link } from "react-router-dom";

class HomePage extends React.Component {
  render() {
    return (
      <div className="home-page">
        <NavigationBar/>
        <MainContent/>
      </div>
    );
  };
};

class LoginPage extends React.Component {
  render() {
    return (
      <div className="login-page">
        <NavigationBar/>
        <LoginContent/>
      </div>
    );
  };
};

class NavigationBar extends React.Component {

  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  };

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }
  
  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let button;
    if (isLoggedIn) {
      button = <NavItem button={"Logout"} onClick={this.handleLogoutClick} route={"/logout"}/>;
    } else {
      button = <NavItem button={"Login"} onClick={this.handleLoginClick} route={"/login"}/>;
    }

    return (
      <div className="navi-bar" >
        <NavItem button={"Home"} route={"/"}/>
        <NavItem button={"Users"}/>
        <NavItem button={"Agents"}/>
        {button}
      </div>
    );
  };
};

class NavItem extends React.Component {
  render() {
    return (
      <Link className="navi-item" to={this.props.route}>
        <button onClick={this.props.onClick}>
          {this.props.button}
        </button>
      </Link>
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

class LoginContent extends React.Component {
  render() {
    return (
      <div className="login-content">
        Login
      </div>
    );
  };
};

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/users" component={HomePage} />
        <Route path="/agents" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/logout" component={HomePage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

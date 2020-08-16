import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

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
  constructor(props){
    super (props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit(event) {
    alert('Username: ' + this.state.username + '\nPassword: ' +
    this.state.password)
    event.preventDefault()
  }

  render() {
    return (
      <div className="main-content">
        <div className="image-container">
          <img src="./Coruja-2.png" alt="An Owl"/>
        </div>

        <div className="form-container">
          <form id="login-form" method="POST" onSubmit={this.handleSubmit}>
            <div>
              <input id="user-input" type="text" name="username"
                placeholder="Username" value={this.state.username}
                onChange={this.handleInputChange}>
              </input>
            </div>
            <div>
              <input id="password-input" name="password"
                type="password" value={this.state.password} 
                placeholder="Password" onChange={this.handleInputChange}>
              </input>
            </div>
            <button id="login-button" type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  };
};

class UsersContent extends React.Component {
  render() {
    return (
      <div>
        <h3>Users</h3>
        <table>
          <tr>
            <th></th>
          </tr>
          <tr>
            <td></td>
          </tr>
        </table>
      </div>
    );
  };
};

class UsersRow extends React.Component {
  constructor(props){
    super (props);
  };

  render() {
    const idx_user = this.props.idx_user;
    const first_name = this.props.first_name;
    const last_name = this.props.last_name;
    const username = this.props.username;
    const password = this.props.password;
    const enabled = this.props.enabled;
    const ts_modified = this.props.ts_modified;
    const ts_created = this.props.created;
    return (
      <tr>
        <td>{idx_user}</td>
        <td>{first_name}</td>
        <td>{last_name}</td>
        <td>{username}</td>
        <td>{password}</td>
        <td>{enabled}</td>
        <td>{ts_modified}</td>
        <td>{ts_created}</td>
      </tr>
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

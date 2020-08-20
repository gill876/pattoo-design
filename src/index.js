import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

class HomePage extends React.Component {
  render() {
    return (
      <div className="main-page home-page">
        <NavigationBar/>
        <MainContent/>
      </div>
    );
  };
};

class LoginPage extends React.Component {
  render() {
    return (
      <div className="main-page login-page">
        <LoginContent/>
      </div>
    );
  };
};

class UsersPage extends React.Component {
  render() {
    return (
      <div className="main-page users-page">
        <NavigationBar/>
        <UsersContent/>
      </div>
    );
  };
};

class AgentsPage extends React.Component {
  render() {
    return (
      <div className="main-page agents-page">
        <NavigationBar/>
        <AgentsContent/>
      </div>
    );
  };
};

class NavigationBar extends React.Component {

  constructor(props) {
    super(props);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: true};
  };

  handleLogoutClick() {
    this.setState({isLoggedIn: true});
  }
  
  render() {
    return (
      <div className="navi-bar" >
        <NavItem button={"Home"} route={"/admin"}/>
        <NavItem button={"Users"} route={"/admin/users"}/>
        <NavItem button={"Agents"} route={"/admin/agents"}/>
        <NavItem id="login-item" button={"Logout"} onClick={this.handleLogoutClick} route={"/admin/logout"}/>
      </div>
    );
  };
};

class NavItem extends React.Component {
  render() {
    const id = this.props.id? this.props.id : ""
    return (
      <Link id={id} className="navi-item" to={this.props.route}>
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
          <img src="../Coruja-2.png" alt="An Owl"/>
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

    const test_users = [
      {
        idx_user: 1,
        first_name: "Cargill",
        last_name: "Seiveright",
        username: "sivrite",
        ts_modified: "-",
        ts_created: "2020-08-16"
      },
      {
        idx_user: 2,
        first_name: "John",
        last_name: "Bronw",
        username: "jbrown",
        ts_modified: "-",
        ts_created: "2020-08-19"
      },
      {
        idx_user: 3,
        first_name: "Mary",
        last_name: "Jane",
        username: "mjane",
        ts_modified: "-",
        ts_created: "2020-08-19"
      },
      {
        idx_user: 4,
        first_name: "Joy",
        last_name: "Campbell",
        username: "jcamp",
        ts_modified: "-",
        ts_created: "2020-08-19"
      },
    ]

    const user_rows = test_users.map((user)=>
      <UsersRow key={user.idx_user} user={user}/>
    );
    return (
      <div className="main-content">
        <h1>Users</h1>
        <table className="pattoo-table users-table">
          <UsersHead/>
          {user_rows}
        </table>
      </div>
    );
  };
};

class AgentsContent extends React.Component {
  render() {

    const test_agent = {
        agent_id: "agent-0001",
        agent_polled_target: "target-0001",
        agent_program: "pattoo_agent_os_linux",
        ts_modified: "-",
        ts_created: "2020-08-17"
      }

    return (
      <div className="main-content">
        <h1>Agents</h1>
        <table className="pattoo-table agents-table">
          <AgentsHead/>
          <AgentsRow agent={test_agent}/>
        </table>
      </div>
    );
  };
};

class AgentsRow extends React.Component {
  constructor(props){
    super (props);
    this.state = {
      enabled: "0"
    }

    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(event) {
    this.setState({
      enabled: event.target.value
    });
  };

  render() {
    const agent_id = this.props.agent.agent_id;
    const agent_polled_target = this.props.agent.agent_polled_target;
    const agent_program = this.props.agent.agent_program;
    const ts_modified = this.props.agent.ts_modified;
    const ts_created = this.props.agent.ts_created;
    return (
      <tbody>
        <tr>
          <td>{agent_id}</td>
          <td>{agent_polled_target}</td>
          <td>{agent_program}</td>
          <td>
            <select value={this.state.enabled} onChange={this.handleChange}>
              <option value="1">Enabled</option>
              <option value="0">Disabled</option>
            </select>
          </td>
          <td>{ts_modified}</td>
          <td>{ts_created}</td>
        </tr>
      </tbody>
    );
  };
};

class UsersRow extends React.Component {
  constructor(props){
    super (props);
    this.state = {
      enabled: "0"
    }

    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(event) {
    this.setState({
      enabled: event.target.value
    });
  };

  render() {
    const idx_user = this.props.user.idx_user;
    const first_name = this.props.user.first_name;
    const last_name = this.props.user.last_name;
    const username = this.props.user.username;
    const ts_modified = this.props.user.ts_modified;
    const ts_created = this.props.user.ts_created;
    return (
      <tbody>
        <tr>
          <td>{idx_user}</td>
          <td>{first_name}</td>
          <td>{last_name}</td>
          <td>{username}</td>
          <td>
            <select value={this.state.enabled} onChange={this.handleChange}>
              <option value="1">Enabled</option>
              <option value="0">Disabled</option>
            </select>
          </td>
          <td>{ts_modified}</td>
          <td>{ts_created}</td>
        </tr>
      </tbody>
    );
  };
};

class UsersHead extends React.Component {
  render() {
    return (
      <thead>
        <tr>
          <th>User ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Enabled</th>
          <th>Modified</th>
          <th>Created</th>
        </tr>
      </thead>
    );
  };
};

class AgentsHead extends React.Component {
  render() {
    return (
      <thead>
        <tr>
          <th>agent_id</th>
          <th>agent_polled_target</th>
          <th>agent_program</th>
          <th>enabled</th>
          <th>ts_modified</th>
          <th>ts_created</th>
        </tr>
      </thead>
    );
  };
};

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route exact path="/admin" component={HomePage} />
        <Route path="/admin/users" component={UsersPage} />
        <Route path="/admin/agents" component={AgentsPage} />
        <Route path="/admin/login" component={LoginPage} />
        <Route path="/admin/logout" component={LoginPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

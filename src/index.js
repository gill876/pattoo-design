import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class MainPage extends React.Component {
  render() {
    return (
      <NavigationBar/>
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

ReactDOM.render(
  <MainPage/>,
  document.getElementById('root')
);

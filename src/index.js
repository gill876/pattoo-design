import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class MainPage extends React.Component {
  render() {
    return (
      <div>
        Hello World
      </div>
    );
  };
};

ReactDOM.render(
  <div>Hello World</div>,
  document.getElementById('root')
);

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return(
      <h2>ReactApp Template</h2>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
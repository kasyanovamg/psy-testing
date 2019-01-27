import React, { Component } from 'react';
import Signin from './components/auth/SignIn'
class App extends Component {
  render() {
    return (
      <div>
        <header>
          Header
        </header>
        <Signin />
      </div>
    );
  }
}

export default App;

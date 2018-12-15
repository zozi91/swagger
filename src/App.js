import React, { Component } from 'react';

import Swagger from './components/Swagger'
import MenuApp from './components/MenuApp'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MenuApp>
              Openware API Documentation
          </MenuApp>
        </header>
        <Swagger />
      </div>
    );
  }
}

export default App;

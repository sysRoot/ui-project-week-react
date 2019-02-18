import React, { Component } from 'react';
import Routes from './routes/Routes.js';
import StickyFooter from './routes/Footer.js';
import Header from './routes/Header.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Routes />
        <StickyFooter />
      </div>
    );
  }
}

export default App;

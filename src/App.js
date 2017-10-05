import React, { Component } from 'react';

import './App.css';
import LotList from './components/lot-list';
import LotOverview from './components/lot-overview';
class App extends Component {



  render() {
    return (
      <div className="App">
          <LotList />
          <LotOverview />
      </div>
    );
  }
}

export default App;

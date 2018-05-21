import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AddXpForm from './Components/AddXpForm'
import Lvl40 from './Components/Lvl40'
import DailyXp from './Components/DailyXp'
import { getXpEntries } from './actions/Xp'

class App extends Component {
  componentDidMount() {
    getXpEntries();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">PoGo Progress Tracker</h1>
        </header>
        <div className="container">
          <div className="border m-2">
            <AddXpForm/>
            <hr className="ml-4 mr-4"/>
            <Lvl40 />
            <DailyXp />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

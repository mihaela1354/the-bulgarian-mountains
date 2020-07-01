import React, { Component } from 'react';
import mainState from './database';
import './styles/App.css';
import './styles/typography.css'
import Header from './Header/Header';
import Huts from './Hut/Huts';

class App extends Component {
  state ={...mainState}

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Huts isLogged={this.state.isLogged} huts={this.state.huts}/>
        </main>
      </div>
    );
  }
}

export default App;

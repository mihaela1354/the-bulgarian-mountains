import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import mainState from '../database';
import styles from './App.module.css';
import Header from './Header/Header';
import Footer from '../components/Footer/Footer'
import Aside from '../components/Aside/Aside';
import Cockpit from '../components/Cockpit/Cockpit';



class App extends Component {
  state = { ...mainState }

  render() {
    return (
      <div style={styles} className="App">
        <Header />
        <main>
          <Aside isLogged={this.state.isLogged} />
          <Cockpit state={this.state} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;

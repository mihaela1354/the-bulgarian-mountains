import React, { Component } from 'react';
import mainState from '../database';
import styles from './App.module.css';
import Header from '../Header/Header';
import Footer from '../components/Footer/Footer'
import Aside from '../components/Aside/Aside';
import Cockpit from '../components/Cockpit/Cockpit';
import Login from '../components/Auth/Login/Login';



class App extends Component {
  state = { ...mainState }

  render() {
    return (
      <div style={styles} className="App">
        <Header />
        <main>
          <Aside />
          {/* <Cockpit state={this.state}/>      */}
          <Login/>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;

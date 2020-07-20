import React, { Component } from 'react';
import mainState from '../database';
import styles from './App.module.css';
import Aside from '../components/Aside/Aside';
import Cockpit from '../components/Cockpit/Cockpit';
import Layout from '../components/Layout/Layout';



class App extends Component {
  state = { ...mainState }

  render() {
    return (
      <Layout style={styles}>
        <Aside isLogged={this.state.isLogged} />
        <Cockpit state={this.state} />
      </Layout>
    );
  }
}

export default App;

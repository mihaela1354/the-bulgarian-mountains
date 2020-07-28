import React, { Component } from 'react';
// import { Route, Switch, Link} from 'react-router-dom';

import mainState from '../database';
import styles from './App.module.css';

import Aux from '../hoc/Auxil';
import Header from '../components/Header/Header';
import Aside from '../components/Aside/Aside';
import Footer from '../components/Footer/Footer';


import Layout from '../hoc/Layout';


class App extends Component {
  state = { ...mainState }

  render() {
    return (
      <Aux style={styles}>
          <Header />
          <main>
              <Aside isLogged={this.state.isLogged} />
              <Layout state={this.state}/>
          </main>
          <Footer />
      </Aux>
    );
  }
}

export default App;

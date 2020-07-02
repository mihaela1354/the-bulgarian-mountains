import React, { Component } from 'react';
import mainState from './database';
import './styles/App.css';
import './styles/typography.css'
import Header from './Header/Header';
import Huts from './Hut/Huts';
import fs from 'fs';

class App extends Component {
  state = { ...mainState }

  changeHandler(key, event) {
    const hutIndex = this.state.huts.findIndex(hut => hut.id === key);
    const hut = { ...this.state.huts[hutIndex] };
    hut[event.target.name] = event.target.value;

    const huts = [...this.state.huts];
    huts[hutIndex] = hut;
    this.setState({ huts: huts });
  }
  changeLogged(event){
    console.log(event)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Huts
            isLogged={this.state.isLogged}
            changed={(key) => this.changeHandler.bind(this, key)}
            logged = {this.changeLogged}
            huts={this.state.huts} />
        </main>
      </div>
    );
  }
}

export default App;

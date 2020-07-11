import React, { Component } from 'react';
import mainState from './database';
import styles from './styles/App.module.css';
import Header from './Header/Header';
//import Huts from './Hut/Huts';
import Footer from './Footer/Footer'
//import Mountains from './Mountains/Mountain'
import Section from './Section/Section';
import Aside from './Aside/Aside';



class App extends Component {
  state = { ...mainState }

  asyncchangeHandler(key, event) {
    const hutIndex = this.state.huts.findIndex(hut => hut.id === key);
    const hut = { ...this.state.huts[hutIndex] };
    hut[event.target.name] = event.target.value;

    const huts = [...this.state.huts];
    huts[hutIndex] = hut;
    this.setState({ huts: huts });
  }
  changeLogged(event) {
    console.log(event)
  }

  render() {
    return (
      <div style={styles} className="App">
        <Header />
        <main>
          <Aside />
          <div className="sections">
            <Section title="Safety rules" info="Voluptate proident culpa excepteur quis ut et nisi amet laboris nulla elit. Nostrud laborum aliquip non enim et velit. Ex laboris ullamco deserunt qui ea sit. Eu dolor nisi aute minim velit ea proident ex dolore sit magna. Dolore qui excepteur enim culpa adipisicing adipisicing qui." />

            <Section title="Wall of Honor" cards={this.state.honored} />

            {/* <Huts
            isLogged={this.state.isLogged}
            changed={(key) => this.changeHandler.bind(this, key)}
            logged = {this.changeLogged}
            huts={this.state.huts} /> */}
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;

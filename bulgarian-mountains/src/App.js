import React, { Component } from 'react';
import './styles/App.css';
import './styles/typography.css'
import Header from './Header/Header';
import Hut from './Hut/Hut';

class App extends Component {
  state = {
    isLogged: false,
    huts: [{
      id: "jdlasdlmslakmd22o12madsl293i130",
      name: "Seven Rila Lakes",
      grade: 5.6,
      description: "Pariatur nostrud occaecat cupidatat non excepteur esse eiusmod adipisicing. Exercitation in cupidatat adipisicing nisi cupidatat quis sunt. Excepteur id magna labore laborum qui veniam Lorem occaecat nulla labore."
    }]
  }
  changeHandler = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
            <div>
              <Hut isLogged={this.state.isLogged} hut={this.state.huts[0]} />
            </div>
        </main>
      </div>
    );
  }
}

export default App;

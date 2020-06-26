import React, { Component } from 'react';
import './styles/App.css';
import './styles/typography.css'
import Header from './Header/Header';

class App extends Component {
  state = {
    text: "Some text"
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
      </div>
    );
  }
}

export default App;

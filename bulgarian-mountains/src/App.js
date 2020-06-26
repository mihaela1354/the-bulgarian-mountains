import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';

class App extends Component {
  state = {
    paragraph: {
      number: Math.round(Math.random()*10)
    }
  }
  changeHandler = () => {
    if (typeof this.state.paragraph.number === "number") {
      this.setState({
        paragraph: {
          number:"Changed"
        }
      })
    } else {
      this.setState({
        paragraph: {
          number: Math.round(Math.random()*100)
        }
      });
    }

  }

  render() {
    return (
      <div className="App">
        <Header />
        <p>{this.state.paragraph.number}</p>
        <button onClick={this.changeHandler}>Change</button>

      </div>
    );
  }
}

export default App;

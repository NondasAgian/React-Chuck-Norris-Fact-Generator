import React from 'react';
import './App.css';
import axios from 'axios';  

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Joke: 'Click the button below to get a joke'
    };
    
    this.getJoke = this.getJoke.bind(this);
  }
  
  getJoke() {
    axios.get('https://api.chucknorris.io/jokes/random')
      .then(response => {
      this.setState({Joke: response.data.value});
    }).catch(error => {
      console.log(error);
    });
  } 
  
  render() {
    return(
      <div className="container text-center">
        <h1>Chuck Norris Joke Generator</h1>
        <h3>{'"' + this.state.Joke + '"'}</h3>
        <button type="button" 
          className="btn btn-primary"
          onClick={this.getJoke}>
          Click here for the next joke!
        </button>
      </div>
    );
  }
}



export default App;

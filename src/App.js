import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  firebase from 'firebase';

class App extends Component {

constructor(){
  super();
  this.state={
    speed:20
  };
}

componentDidMount(){
  const rootRef=firebase.database().ref().child('reactdemo1-3e863');
  const speedRef=rootRef.child('speed');
  speedRef.on('value', snap=> {
    this.setState({
      speed:snap.val()
    });
  });
}

  render() {
    return (
      <div className="App">
        <h1>{this.state.speed}</h1>
      </div>
    );
  }
}

export default App;

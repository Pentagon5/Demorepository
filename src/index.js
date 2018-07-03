import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import  firebase from 'firebase';

// var firebase1= require("firebase");


   {/* Initialize Firebase */}
  var config = {
    apiKey: "AIzaSyDHNpvbVTAY5XMjnkqT1msnagbNE-cH0cA",
    authDomain: "reactdemo1-3e863.firebaseapp.com",
    databaseURL: "https://reactdemo1-3e863.firebaseio.com",
    projectId: "reactdemo1-3e863",
    storageBucket: "reactdemo1-3e863.appspot.com",
    messagingSenderId: "889492190529"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

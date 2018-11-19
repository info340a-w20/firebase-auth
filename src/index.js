import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase/app';

const config = {
    apiKey: "AIzaSyC_rrfdmAonRWE3xJYFBpdEwOYMcBDDsD0",
    authDomain: "fir-auth-69c48.firebaseapp.com",
    databaseURL: "https://fir-auth-69c48.firebaseio.com",
    projectId: "fir-auth-69c48",
    storageBucket: "",
    messagingSenderId: "231392926683"
};

firebase.initializeApp(config);
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

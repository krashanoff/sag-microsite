import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './components/nav/nav';
import Lock from './components/lock/lock';
import About from './components/about/about';
import Contact from './components/contact/contact';
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Nav />, document.getElementById('nav'));
ReactDOM.render(<Lock imgsrc='./images/sot13.jpg' name='SAFE-O-TRONIC ACCESS LS' />, document.getElementById('lock-ls'));
ReactDOM.render(<Lock imgsrc='./images/sot14.jpg' name='SAFE-O-TRONIC ACCESS LSW' />, document.getElementById('lock-lsw'));
ReactDOM.render(<About />, document.getElementById('about'));
ReactDOM.render(<Contact imgsrc='./images/leo.jpg' />, document.getElementById('contact'));
//registerServiceWorker();

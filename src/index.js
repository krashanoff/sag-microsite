import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './components/nav/nav';
import Lock from './components/lock/lock';
import About from './components/about/about';
import Contact from './components/contact/contact';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Nav />, document.getElementById('nav'));
ReactDOM.render(<Lock imgsrc='./images/sot13.jpg' url='http://en.sag-schlagbaum.com/home/us/safe-o-tronic-access-ls' name='SAFE-O-TRONIC&reg; ACCESS LS' />, document.getElementById('lock-ls'));
ReactDOM.render(<Lock imgsrc='./images/sot14.jpg' url='http://en.sag-schlagbaum.com/home/us/safe-o-tronic-access-lsw' name='SAFE-O-TRONIC&reg; ACCESS LSW' />, document.getElementById('lock-lsw'));
ReactDOM.render(<About />, document.getElementById('about'));
ReactDOM.render(<Contact imgsrc='./images/leo.jpg' />, document.getElementById('contact'));

// Register service worker for offline caching
//registerServiceWorker();
import React, { Component } from 'react';
import './nav.css';

class Nav extends Component {
    render() {
        return(
            <div className="navbar">
                <img className="navlogo" src="./favicon.png" />
                <a className="logo" href='http://en.sag-schlagbaum.com'>Schulty-Schlagbaum AG</a>
                <div className="navlinks">
                    <a href='http://google.com'>Google</a>
                    <a href='http://youtube.com'>YouTube</a>
                </div>
            </div>
        );
    }
};

export default Nav;
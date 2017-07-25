import React, { Component } from 'react';
import './nav.css';

class Nav extends Component {
    render() {
        return(
            <div className="navbar">
                <img className="navlogo" src="./favicon.png" />
                <a className="logo" href='http://en.sag-schlagbaum.com'>SAG Locking Systems North America, Inc.</a>
                <div className="links">
                    <a className="navlink" href='http://en.sag-schlagbaum.com/home/us/'>Full Site</a>
                    <a className="navlink" href='http://youtube.com'>Links</a>
                    <a className="navlink" href='http://youtube.com'>Go</a>
                    <a className="navlink" href='http://youtube.com'>Here</a>
                </div>
            </div>
        );
    }
};

export default Nav;
import React, { Component } from 'react';
import './nav.css';

class Nav extends Component {
    render() {
        return(
            <div className="navbar">
                <img className="navlogo" src="./favicon.png" alt="SAG Logo" />
                <a className="logo" href='http://en.sag-schlagbaum.com'>SAG Locking Systems North America, Inc.</a>
                <div className="links">
                    <a className="navlink" href='http://en.sag-schlagbaum.com/home/us/'>Full Site</a>
                    <a className="iconlink" href='https://www.youtube.com/watch?v=GWEjIckuPww'><img id="yt" src="./images/ytfc.png" alt="Youtube" /></a>
                </div>
            </div>
        );
    }
};

export default Nav;
import React, { Component } from 'react';
import './lock.css';

class Lock extends Component {
    render() {
        return(
            <div className="lockpanel">
                <img src={this.props.imgsrc} className="lockimage" alt="lock" />
                <h3 className="locktitle">{this.props.name}</h3>
            </div>
        );
    }
};

export default Lock;
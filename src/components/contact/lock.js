import React, { component } from 'react';
import './lock.css';

class lock extends component {
    render() {
        return(
            <div className="lockpanel">
                <img src={this.props.imgsrc} className="lockimage" />
                <h3 className="locktitle">{this.props.title}</h3>
            </div>
        );
    }
};

export default lock;
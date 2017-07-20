import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {
    render() {
        return(
            <div className="contact">
                <img className="contactimg" src={this.props.imgsrc} />
                <p className="contactname">Leo Krashanoff</p>
                <ul className="contactinfo">
                    <li id="phone">
                        Phone number
                    </li>
                    <li id="email">
                        email
                    </li>
                </ul>
            </div>
        );
    }
};

export default Contact;
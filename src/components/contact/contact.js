import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {
    render() {
        return(
            <div className="contact">
                <img className="contactimg" src={this.props.imgsrc} alt="Leo Krashanoff" />
                <div id="contactinfo">
                    <p className="contactname">Leo Krashanoff</p>
                    <p id="phone">Phone Number</p>
                    <a id="email" href="mailto:leokrashanoff@en.sag-schlagbaum.com">leokrashanoff@en.sag-schlagbaum.com</a>
                </div>
            </div>
        );
    }
};

export default Contact;
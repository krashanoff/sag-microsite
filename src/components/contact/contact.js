import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {
    render() {
        return(
            <div className="contact">
                <img className="contactimg" src={this.props.imgsrc} alt="Leo Krashanoff" />
                <div id="contactinfo">
                    <p className="contactname">Leo Krashanoff</p>
                    <p id="phone">+1(415)-870-9651</p>
                    <a id="email" href="mailto:leo.krashanoff@sag-northamerica.com">leo.krashanoff@sag-northamerica.com</a>
                </div>
            </div>
        );
    }
};

export default Contact;
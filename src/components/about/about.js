import React, { Component } from 'react';
import './about.css';

class About extends Component {
    render() {
        // Soft wrap in editor is recommended for viewing the following as per the amount of text on one line below
        return(
            <div className="aboutpanel">
                <h3 className="aboutcap">Electronic cabinet locking systems for convenient system control</h3>
                
                <p className="aboutbody">
                    SAFE-O-TRONIC® access sets new standards worldwide for securing and organising cabinets, valuables compartments, and functional furniture. PIN code and RFID technology are uniquely combined. Perfectly coordinated: the corresponding product line for room doors. Whether it’s changing room lockers, deposit boxes, office or other storage furniture, SAFE-O-TRONIC® access replaces mechanical locks with electronic locking convenience, making complex key management a thing of the past. Discover the numerous organisational advantages for your field of application – including time and cost savings. The appealing design fits in perfectly with your style of furnishing.
                </p>

                <ul className="aboutbullets">
                    <li>
                        <strong>Flexible to manage</strong>
                        <p>
                            The unique combination of PIN code and contactless RFID technology make it tremendously easy to organise your different security levels and user groups (e.g. VIPs, club members, day guests or staff).
                        </p>
                    </li>
                    <li>
                        <strong>Comfortable to operate</strong>
                        <p>
                            Simply lightly touch the key fields to input your personal PIN code (capacitive technology). RFID data carriers are simply held in front of the reading field for identification.
                        </p>
                    </li>
                    <li>
                        <strong>Optimise cabinet capacity</strong>
                        <p>
                            Convenient time control to automatically open or lock cabinets prevents lockers from being reserved.
                        </p>
                    </li>
                    <li>
                        <strong>2-in-1 closing convenience with RFID and PIN codes</strong>
                        <p>
                            Cabinets and lockers can be accessed via RFID data carrier or completely keylessly via PIN code (e.g. in the sauna area).
                        </p>
                    </li>
                    <li>
                        <strong>Protection against unwanted reservation</strong>
                        <p>
                            You can optimise your cabinet capacities using automated opening or locking or sanctioning during timeouts.
                        </p>
                    </li>
                    <li>
                        <strong>Innovative wireless networking for convenient online control</strong>
                        <p>
                            SAFE-O-TRONIC® access LSW uses data concentrators to allow for convenient control and monitoring of cable-free (!) systems at the click of the mouse.
                        </p>
                    </li>
                </ul>
            </div>
        );
    }
};

export default About;
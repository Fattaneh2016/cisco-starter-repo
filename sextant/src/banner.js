import React, { Component } from 'react';
import './banner.css';

class Banner extends Component {
    render() {
        return (
            <div className="Banner">
                <img src="https://images.credly.com/images/7bc2a3b9-289e-495b-959c-2bf431b5431d/Cisco_DevNetSpecialist.png" className="logo" alt="Exhibit" style={{ width: '100px', height: '100px' }} />
                <h1>{this.props.bannerText}</h1>
            </div>
        );
    }
}

export default Banner;
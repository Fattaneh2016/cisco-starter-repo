import React from 'react';
import './App.css';
import Banner from './banner';
import Exhibit from './exhibit';
import PublicIPComponent from './public_ip_component';
import PacketLatencyComponent from './packet_latency_component';

function App() {
    const exhibitData = [
        { name: 'Public IPv4 Address', url: 'https://api.ipify.org?format=json' },
        { name: 'Public IPv6 Address', url: 'https://api64.ipify.org?format=json' },
        { name: 'Packet Latency', component: <PacketLatencyComponent /> }
    ];

    return (
        <div className="App">
            <header className="App-header">
                <Banner bannerText="Welcome to Sextant App" />
            </header>
            <div className="container mt-5">
                <div className="row">
                    {exhibitData.map((exhibit, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <Exhibit name={exhibit.name}>
                                {exhibit.component || <PublicIPComponent url={exhibit.url} />}
                            </Exhibit>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;

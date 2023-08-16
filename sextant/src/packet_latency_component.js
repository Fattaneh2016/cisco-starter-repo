import React, { useState, useEffect } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import './packet_latency_component.css';  

const client = new W3CWebSocket('ws://localhost:55455');

function PacketLatencyComponent() {
    const [latency, setLatency] = useState(null);

    useEffect(() => {
        client.onmessage = (message) => {
            const receivedTime = parseInt(message.data);
            const currentTimestamp = new Date().getTime();
            const currentLatency = currentTimestamp - receivedTime;
            setLatency(currentLatency);
        };
    }, []);

    return <span className="PacketLatencyComponent">{latency}</span>;
}

export default PacketLatencyComponent;

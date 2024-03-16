import React, { useEffect, useState } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

const CustomWebSocket = ({ url }) => {
  const [messages, setMessages] = useState([]);
  const client = new W3CWebSocket(url);

  useEffect(() => {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };

    client.onmessage = (message) => {
      setMessages(prevMessages => [...prevMessages, message.data]);
    };

    return () => {
      client.close();
    };
  }, []);

  return (
    <div>
      {messages.map((msg, index) => (
        <p key={index}>{msg}</p>
      ))}
    </div>
  );
};

export default CustomWebSocket;

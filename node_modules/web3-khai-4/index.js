import React from 'react';
import { Toast } from 'react-bootstrap';

const CustomNotification = ({ message, onClose }) => {
  return (
    <Toast show={true} onClose={onClose}>
      <Toast.Header>
        <strong className="me-auto">Notification</strong>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
};

export default CustomNotification;

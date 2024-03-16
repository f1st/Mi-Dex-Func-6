import React from 'react';
import { Snackbar } from '@mui/material';

const MyAlert = ({ isOpen, onClose, message, severity }) => {
    return (
        <Snackbar open={isOpen} autoHideDuration={6000} onClose={onClose} message={message} severity={severity} />
    );
}

export default MyAlert;

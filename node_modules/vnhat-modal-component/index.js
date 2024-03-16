import React from 'react';
import { Modal, Box, Typography } from '@mui/material';

const MyModal = ({ isOpen, onClose, children }) => {
    return (
        <Modal open={isOpen} onClose={onClose}>
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
                {children}
            </Box>
        </Modal>
    );
}

export default MyModal;

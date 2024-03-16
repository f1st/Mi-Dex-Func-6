import React from 'react';
import { Modal, Box, Typography } from '@mui/material';

const CustomModal = ({ open, onClose, title, content }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ width: 400, bgcolor: 'background.paper', p: 2 }}>
        <Typography variant="h6" component="h2">{title}</Typography>
        <Typography variant="body1">{content}</Typography>
      </Box>
    </Modal>
  );
};

export default CustomModal;

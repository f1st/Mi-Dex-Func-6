import React from 'react';
import { Snackbar, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Toast = ({ open, message, onClose }) => {
  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={onClose} message={message}
      action={
        <IconButton size="small" aria-label="close" color="inherit" onClick={onClose}>
          <CloseIcon fontSize="small" />
        </IconButton>
      }
    />
  );
};

export default Toast;

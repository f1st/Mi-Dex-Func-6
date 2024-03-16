import React from 'react';
import { CircularProgress, Backdrop } from '@mui/material';

const Loading = ({ open }) => {
  return (
    <Backdrop open={open}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loading;

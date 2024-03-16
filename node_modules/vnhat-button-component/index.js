import React from 'react';
import { Button } from '@mui/material';

const MyButton = ({ onClick, label }) => {
    return <Button variant="contained" onClick={onClick}>{label}</Button>;
}

export default MyButton;

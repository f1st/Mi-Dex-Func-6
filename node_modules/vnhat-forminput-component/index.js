import React, { useState } from 'react';
import { TextField } from '@mui/material';

const FormInput = ({ label, type, required }) => {
    const [value, setValue] = useState('');
    
    const handleChange = (event) => {
        setValue(event.target.value);
    }
    
    return (
        <TextField
            label={label}
            type={type}
            required={required}
            value={value}
            onChange={handleChange}
        />
    );
}

export default FormInput;

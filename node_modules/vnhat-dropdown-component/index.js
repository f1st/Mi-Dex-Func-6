import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const MyDropdown = ({ options, onSelect }) => {
    return (
        <FormControl>
            <InputLabel id="dropdown-label">Select</InputLabel>
            <Select
                labelId="dropdown-label"
                onChange={(event) => onSelect(event.target.value)}
            >
                {options.map((option, index) => (
                    <MenuItem key={index} value={option}>{option}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default MyDropdown;

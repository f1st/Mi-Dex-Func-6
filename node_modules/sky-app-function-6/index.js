import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const SelectBox = ({ label, value, options, onChange }) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select value={value} onChange={onChange}>
        {options.map(option => (
          <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectBox;

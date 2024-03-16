import React from 'react';
import { TextField, Button, Box } from '@mui/material';

const CustomForm = ({ fields, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map(field => (
        <TextField key={field.name} fullWidth {...field} />
      ))}
      <Box mt={2}>
        <Button type="submit" variant="contained" color="primary">Submit</Button>
      </Box>
    </form>
  );
};

export default CustomForm;

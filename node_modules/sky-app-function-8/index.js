import React from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';

const CustomStepper = ({ steps, activeStep }) => {
  return (
    <Stepper activeStep={activeStep}>
      {steps.map(label => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default CustomStepper;

import React from "react";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
    'Start Task',
    'Provide Details',
    'Job Estimation',
    'Actions'
  ];

export default function StepperBar() {
    return (
      
        <Stepper activeStep={1} alternativeLabel>
            {steps.map((label) => (
            <Step key={label}>
            <StepLabel>{label}</StepLabel>
        </Step>
          ))}
    </Stepper>
  
    );
  
  }
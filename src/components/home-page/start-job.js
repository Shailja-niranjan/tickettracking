import React from 'react';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

export default function StartJobBox() {
    return (
      
    <FormControl variant="filled" sx={{ minWidth: 240 }}>
        <InputLabel>Start Job</InputLabel>
        <Select>
          <MenuItem>Start Job</MenuItem>
        </Select>
    </FormControl>
  
    );
  
  }
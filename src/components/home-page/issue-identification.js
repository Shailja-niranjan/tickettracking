import React from "react";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';


export default function Issue_Identification() {
    return (
      
      <FormControl variant="filled" sx={{ minWidth: 200 }}>
        <InputLabel>Issue Identification</InputLabel>
        <Select>
          <MenuItem>Issue Identification</MenuItem>
          <MenuItem>Issue Identification</MenuItem>
        </Select>
      </FormControl>
  
    );
  
  }
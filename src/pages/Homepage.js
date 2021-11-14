import React from 'react';
import Typography from '@material-ui/core/Typography';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SearchBar from 'material-ui-search-bar';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';
import SettingsIcon from '@material-ui/icons/Settings';
import PermIdentitySharpIcon from '@material-ui/icons/PermIdentitySharp';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
// import Header from "./pages/Header"
import Grid from '@mui/material/Grid';
import { fontWeight } from '@mui/system';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    minHeight: '10px'
  },
  startjob: {
  m: 1,
  border: 1,
  width: '5rem',
  height: '5rem',
  }
}));

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));


const steps = [
  'Start Task',
  'Provide Details',
  'Job Estimation',
  'Actions'
];



export default function Homepage() {
  const classes = useStyles();
  return (
    <Container size="lg"  >
      <Grid container spacing={2} paddingTop="20px">
        <Grid item xs={3}>
          <Typography variant="h6" color="primary" component="h2" gutterBottom>
            Troubleshooting
            <ArrowDropDownIcon color="primary" />
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <SearchBar
            placeholder="search platform for tool.."
            style={{
              margin: '0 auto',
              maxWidth: 400,
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <div style={{ textAlign: 'right', 
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap'}}>
            <HelpIcon color="primary" /><span style={{marginRight: "10px", color:"blue", fontWeight: "600" }}>Help</span>
            <SettingsIcon color="primary" /><span style={{marginRight: "10px", color:"blue", fontWeight: "600" }} >Setting</span>
            <PermIdentitySharpIcon>add_circle</PermIdentitySharpIcon><span style={{marginRight: "10px", color:"blue", fontWeight: "600" }}>Welcome</span>
          </div>
        </Grid>
      </Grid>

      {/* App Bar */}
      <Box sx={{ flexGrow: 1 }} style={{height: "45px" , paddingTop: "10px"}}>
      <AppBar position="static">
        <Toolbar  className={classes.toolbar}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> 
          <Typography  style={{paddingRight: '20px'}}>
            Troubleshooting
          </Typography>
          <Typography style={{paddingRight: '20px'}}>
            Issue Tracking
          </Typography>
          <Typography>
            Reports
          </Typography>
         
        </Toolbar>
      </AppBar>
    </Box>
    {/* Issue Identification Bar Drop Down */}
    <Grid container spacing={2} paddingTop="20px">
       <Grid item xs={3}>
            <FormControl variant="filled" sx={{ minWidth: 240 }}>
              <InputLabel>Issue Identification</InputLabel>
              <Select>
                <MenuItem>Issue Identification</MenuItem>
                <MenuItem>Issue Identification</MenuItem>
              </Select>
            </FormControl>
       </Grid>
       <Grid item xs={6}>
          <Box sx={{ width: '100%' }} style={{textAlign: "right", paddingLeft: "300px"}}>
                <Stepper activeStep={1} alternativeLabel>
                    {steps.map((label) => (
                    <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
                      ))}
                </Stepper>
          </Box>
       </Grid>
    </Grid>  
    
    
</Container>





  );
}

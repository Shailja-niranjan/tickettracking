import React from 'react';
import HeaderLogo from '../components/home-page/header-logo';
import SearchBar from '../components/home-page/search.js';
import HelpOption from '../components/home-page/help.js';
import SettingOption from '../components/home-page/setting.js';
import WelcomeOption from '../components/home-page/welcome.js';
import TroubleshootingOption from '../components/home-page/troubleshooting-option.js';
import IssueTracking from '../components/home-page/issue-tracking.js';
import Reports from '../components/home-page/reports.js';
import IssueIdentification from '../components/home-page/issue-identification.js';
import StepperProgress from '../components/home-page/stepper.js';
import StartJob from '../components/home-page/start-job.js';

//import SearchBar from 'material-ui-search-bar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';


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
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Header from "./pages/Header"
import Grid from '@mui/material/Grid';
import { bgcolor, fontWeight } from '@mui/system';
import Stack from '@mui/material/Stack';


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
  color: theme.palette.text.darkgray,
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
    <div size="lg"  >
      <Grid container spacing={2} paddingTop="10px">
        <Grid item xs={3}>
          <HeaderLogo />
        </Grid>
        <Grid item xs={6}>
           <SearchBar />
        </Grid>
        <Stack direction="row" spacing={2}>
          <div style={{ textAlign: 'right', 
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        }}>
            <HelpOption />
            <SettingOption />
            <WelcomeOption />
          </div>
        </Stack>
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
          <TroubleshootingOption />
          <IssueTracking />
          <Reports />
         
        </Toolbar>
      </AppBar>
    </Box>
    {/* Issue Identification Bar Drop Down */}
   <div style={{backgroundColor: "lightgray", paddingTop: "20px" , paddingLeft: "10px", paddingRight:"10px" }}> 
    <Grid container spacing={2} paddingTop="10px" style={{backgroundColor: "white"}}>
      
          <Grid item xs={3}>
                <IssueIdentification />
          </Grid>
          <Grid item xs={6}>
              <Box sx={{ width: '100%' }} style={{textAlign: "right", paddingLeft: "300px"}}>
                    <StepperProgress />
              </Box>
          </Grid>
         
    </Grid>  
    
    {/* Fullwidth Box */}

    <Box >
    <Grid container>
      <Grid item xs={12}>
        <Item  style={{ height: "200px" ,marginTop: "10px"}}>
          <StartJob />
           </Item>
      </Grid>
      
    </Grid>
    </Box>

    {/* Two Boxes */}
    
    <Box style= {{paddingBottom: "20px"}}>
    <Grid container >
    <Grid item xs={6}>
        <Item  style={{ height: "300px" ,marginTop: "10px",marginRight: "5px", fontWeight: "300"}}> 
         <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Job#</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
        
        
        </Item>
      </Grid>
      <Grid item xs={6}>
        <Item  style={{ height: "300px" ,marginTop: "10px"}}> Detailed Log</Item>
      </Grid>
      
    </Grid>
    </Box>
 </div>
</div>





  );
}

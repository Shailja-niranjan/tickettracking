import React from 'react';
import Typography from '@material-ui/core/Typography';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SearchBar from 'material-ui-search-bar';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';
import SettingsIcon from '@material-ui/icons/Settings';
import PermIdentitySharpIcon from '@material-ui/icons/PermIdentitySharp';
// import Box from '@material-ui/core/Box';

// import Header from "./pages/Header"
import Grid from '@mui/material/Grid';
import { fontWeight } from '@mui/system';

export default function Homepage() {
  return (
    <Container size="lg" >
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
    </Container>
  );
}

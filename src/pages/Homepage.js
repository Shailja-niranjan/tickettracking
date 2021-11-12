import React from 'react'
import Typography from '@material-ui/core/Typography'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SearchBar from "material-ui-search-bar";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';
import SettingsIcon from '@material-ui/icons/Settings';
import PermIdentitySharpIcon from '@material-ui/icons/PermIdentitySharp';
// import Box from '@material-ui/core/Box';

// import Header from "./pages/Header"

const useStyles = makeStyles({
   heading: {
     
   }


})





export default function Homepage() {
  const classes = useStyles()
  return (
    <Container size="lg">
      <Typography
        variant="h6" 
        color="primary"
        component="h2"
        gutterBottom
      >
        Troubleshooting 
        <ArrowDropDownIcon color="primary" /></Typography>
      <SearchBar placeholder="search platform for tool.."style={{
      margin: "0 auto",
      maxWidth: 400
    }}/> 
    <HelpIcon color="primary"/> 
    <SettingsIcon color="primary"/>
    <PermIdentitySharpIcon >add_circle</PermIdentitySharpIcon>
     </Container> 
   
  )
}

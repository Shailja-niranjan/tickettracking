import React from 'react'
import Typography from '@material-ui/core/Typography'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SearchBar from "material-ui-search-bar";
import Box from '@material-ui/core/Box';

// import Header from "./pages/Header"
// import Header from "./pages/Header"

export default function Homepage() {
  return (
    
    <div>
     <box width={100} ><Typography
      color="primary"
      component="h2"
      padding-left="10px"
    >
      Troubleshooting 
      <ArrowDropDownIcon color="primary" /></Typography></box>
    
 <SearchBar 
style={{
  margin: "0 auto",
  maxWidth: 400
}}/>
</div>
     
  )
}

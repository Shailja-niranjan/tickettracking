import React from 'react'
import Typography from '@material-ui/core/Typography'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import SearchBar from "material-ui-search-bar"


const useStyles = makeStyles((theme) => {
    return {
      root: {
        display: 'flex',
      },
      
      appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
      toolbar: theme.mixins.toolbar
    }
  })


export default function Header() {
    return (
     <div className={classes.root}>
        <Typography
          variant="h6" 
          color="primary"
          component="h2"
          gutterBottom
        >
          Troubleshooting 
          <ArrowDropDownIcon color="primary" /></Typography>
        
    <div className="searchBar" color="primary"> <SearchBar /></div>
    </div>
    )
  }
  
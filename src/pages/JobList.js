import React, { Component, useState, setState, useEffect } from 'react';
import { render } from 'react-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import StartJob from '../pages/startjobs.js';
import Drawer from '@mui/material/Drawer';





const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 650,
    display: "flex",
    marginleft: "5px",
    marginRight: "5px"
  },
  tableContainer: {
    borderRadius: 15,
    margin: '10px 10px'
  },
  tableRow: {
    minWidth: '100%',
    fontWeight: 'bold',
    borderBottom: 'solid 1px rgb(221, 221, 221)'
  },
  userRowStyle: {
    color: 'lightgray',
    minWidth: '100%'
  },
  smallWidthStyle: {
    width: '174px',
    textAlign: 'right'
  },
  mediumWidthStyle: {
    width: '280px',
    textAlign: 'right'
  },
  largeWidthStyle: {
    width: '350px',
    maxWidth: '350px',
    textAlign: 'right',
    overflowX: 'auto'
  },
  jobInputText: {
    // overflow: 'hidden',
    // textOverflow: 'ellipsis',
    // display: '-webkit-box',
    // webkitLineClamp: '2',
    // lineClamp: '2',
    // webkitBoxOrient: 'vertical'

    overflowX: 'scroll',
    wordWrap: 'break-word',
    maxHeight: '3.6em',
    lineHeight: '1.8em',
    display: 'block'
  }


}))


const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8
};

// Materialized Tabs code started

function TabPanel(props) {
  const { children, value, index } = props;



  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

// Materiazed tab code function ended



const tempJobList = [
  {
    startTime: '09/08/2021 9:14 AM',
    jobId: 4453,
    clusterName: 'emea-us',
    product: 'Equinix Fabric',
    jobTitle: 'Fabric VC Sanity Check',
    jobInput: {
      UUID: 'jkfsdahf-gjfhd763-jhfkj8834sj',
      WalkDirection: 'A-Z',
      Duration: '20 sec',
      jumpHost: 'test',
      Test: 'test i am testing the no of rows and max width of the column'
    },
    startedBy: 'Sushil K Madwani',
    userId: 'smadwani',
    status: 'Issues found'
  },
  {
    startTime: '09/08/2021 9:14 AM',
    jobId: 4453,
    clusterName: 'na-us',
    product: 'Equinix Fabric',
    jobTitle: 'Fabric VC Sanity Check',
    jobInput: {
      UUID: 'jkfsdahf-gjfhd763-jhfkj8834sj',
      WalkDirection: 'A-Z',
      Duration: '20 sec',
      jumpHost: 'test',
      Test: 'test'
    },
    startedBy: 'Sushil K Madwani',
    userId: 'smadwani',
    status: 'Active'
  },
  {
    startTime: '09/08/2021 9:14 AM',
    jobId: 4453,
    clusterName: 'na-us',
    product: 'Equinix Fabric',
    jobTitle: 'Fabric VC Sanity Check',
    jobInput: {
      UUID: 'jkfsdahf-gjfhd763-jhfkj8834sj',
      WalkDirection: 'A-Z',
      Duration: '20 sec',
      jumpHost: 'test',
      Test: 'test'
    },
    startedBy: 'Sushil K Madwani',
    userId: 'smadwani',
    status: 'OK'
  }
]

let JobList = []

for (let j = 0; j < 33; j++) {

  { Object.keys(tempJobList).map(item => (JobList.push(tempJobList[item]))) }
}




const JobListing = () => {


  const classes = useStyles();
  const [hasMore, setHasMore] = useState(false);
  const [start, setStart] = useState(false);
  const [anchor, setAnchor] = useState(false);
  const [value, setvalue] = useState(1);
  const [isDrawerOpened, toggleDrawerState] = React.useState(false);
  const [items, setJobList] = useState(JobList);
  const [productName, setProductName] = useState();

  const ProductValue = () => {

    return (

      <div>
        <StartJob data={productName} handleDrawerClose={handleDrawerClose}/>
      </div>
    );
  }

  const handleDrawerClose = () => {
    toggleDrawerState(false);
  }

  const updateProductName = (pName) => {
    setProductName(pName);
  };


  const fetchMoreData = () => {
    if (this.state.items.length >= 100) {
      this.setState({ hasMore: false });
      return;
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 20 }))
      });
    }, 500);
  };


  return (

    <Box sx={{ width: '100%' }}>
      <button onClick={() => { updateProductName("Equinix Fabric-From list"); toggleDrawerState(true) }}>Start Job</button>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} aria-label="basic tabs example">
          <Tab label="My jobs" style={{ borderWidth: 1 }} {...a11yProps(0)} />
          <Tab label="All Jobs" {...a11yProps(1)} />

        </Tabs>
        <div>
          <Drawer
            transitionDuration={{ enter: 500, exit: 500 }}
            anchor="left"
            open={isDrawerOpened}
            variant="temporary"
            onBackdropClick={handleDrawerClose}
          >
            < ProductValue />
          </Drawer>
        </div>

      </Box>
      <TabPanel value={0} index={0}>
        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table className={classes.table} aria-label="simple table">
            <div>
              <TableHead>

                <TableRow>
                  <TableCell className={classes.smallWidthStyle} style={{ color: "lightgray" }}>Time</TableCell>
                  <TableCell className={classes.smallWidthStyle} style={{ color: "lightgray" }} >Job ID</TableCell>
                  <TableCell className={classes.mediumWidthStyle} style={{ color: "lightgray" }} >Product</TableCell>
                  <TableCell className={classes.mediumWidthStyle} style={{ color: "lightgray" }} align="left">Job Title</TableCell>
                  <TableCell className={classes.largeWidthStyle} style={{ color: "lightgray" }} >Job Input</TableCell>
                  <TableCell className={classes.smallWidthStyle} style={{ color: "lightgray" }} >By</TableCell>
                  <TableCell className={classes.smallWidthStyle} style={{ color: "lightgray" }}>Status</TableCell>

                </TableRow>

              </TableHead>
            </div>
            <div>
              <TableBody>

                <InfiniteScroll
                  dataLength={items.length}
                  next={fetchMoreData}
                  hasMore={hasMore}
                  loader={<h4>Loading...</h4>}
                  endMessage={
                    <p style={{ textAlign: "center", width: "1200px" }}>
                      <b>Yay! You have seen it all</b>
                    </p>
                  }
                >

                  {items.map((i, index) => (
                    <div className={classes.userRowStyle} key={index}>
                      <thead style={{ borderBottomWidth: "1px", borderBottomStyle: "solid" }}>
                        <TableRow>
                          <TableCell className={classes.smallWidthStyle} >{(i["startTime"]).substring(0, 10)}<br /><Typography style={{ color: "gray", fontSize: "12px" }}>{(i.startTime).substring(11, 18)}</Typography></TableCell>
                          <TableCell className={classes.smallWidthStyle} ><Typography>{i.jobId}</Typography></TableCell>
                          <TableCell className={classes.mediumWidthStyle} align="left" >{i.product}</TableCell>
                          <TableCell className={classes.mediumWidthStyle} align="left">{i.jobTitle}</TableCell>
                          <TableCell className={classes.largeWidthStyle} >
                            <div style={{ width: '400px', maxWidth: '500px', display: 'block', wordWrap: 'reak-word', overflowY: 'hidden', overflowX: 'auto', maxHeight: '5em', lineHeight: '1.8em' }}>
                              <b>UUID:</b> {i.jobInput.UUID},
                              <b>WalkDirection:</b> {i.jobInput.WalkDirection},
                              <b> Duration:</b>{i.jobInput.Duration},
                              <b>jumpHost:</b>{i.jobInput.jumpHost},
                              <b>Test:</b>{i.jobInput.Test}
                            </div>
                          </TableCell>
                          <TableCell className={classes.smallWidthStyle} align="left"  >{i.startedBy}</TableCell>
                          <TableCell className={classes.smallWidthStyle} >
                            <div style={{
                              fontWeight: 'bold',
                              fontSize: '0.75rem',
                              color: (((i.status) === 'Active' && '#FFA700') ||
                                ((i.status) === 'Issues found' && 'red') ||
                                ((i.status) === 'OK' && 'green')),
                              borderRadius: 8,
                              padding: '3px 10px',
                              display: 'inline-block',
                              margin: "20px 5px 20px 0px",
                              backgroundColor: (((i.status) === 'Active' && '#FFFFC2') ||
                                ((i.status) === 'Issues found' && '#fbab8d') ||
                                ((i.status) === 'OK' && '#b0d8c8'))
                            }} align="left">{i.status}
                            </div>
                          </TableCell>
                        </TableRow>
                      </thead>
                    </div>
                  ))}
                </InfiniteScroll>
              </TableBody>
            </div>
          </Table>
        </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </Box>
  );
  // }
}

export default withStyles(useStyles)(JobListing)






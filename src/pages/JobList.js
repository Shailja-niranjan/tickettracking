import React , {Component} from 'react';
import { render } from 'react-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


const useStyles = theme => ({
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
  
 
  userRowStyle: {
       color: 'lightgray',
       minWidth: '100%'
  },
  smallWidthStyle:{
      width: '174px',
      textAlign: 'right'
  },
  mediumWidthStyle:{
    width: '200px',
    textAlign: 'right'
 },
 mediumWidthStyleNew:{
  maxWidth: '200px',
  textAlign: 'right',
  textOverflow: 'auto'
},
 largeWidthStyle:{
  width: '250px',
  textAlign: 'right'
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
  

});


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
          Test: 'test'
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

for(let j=0; j<500; j++){

  {Object.keys(tempJobList).map(item => ( JobList.push(tempJobList[item])))}
}

const classes = useStyles;
// const classes = useStyle();
// interface Props extends makeStyles<typeof styles>{ }
class App extends Component {

  _renderValue = () => () => {
    const [value, setValue] = React.useState(0);

    // return <div>{ value }</div>
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  }

  

  
  

  
  state = {
    // items: Array.from({ length: 20 }),
    items: JobList,
    hasMore: true
  };

  fetchMoreData = () => {
    if (this.state.items.length >= 500) {
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

  render() {
    const { classes } = this.props;

    const changeValue = this._renderValue();
  
  


    return (
      <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={this.value} onChange={changeValue} aria-label="basic tabs example">
                <Tab label="Item One" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
              
              </Tabs>
            </Box>
            <TabPanel value={this.value} index={0}>  
            <TableContainer component={Paper} className={classes.tableContainer}>
              <Table className={classes.table} aria-label="simple table">
                <div>
                <TableHead>
                  <TableRow> 
                    <TableCell className={classes.smallWidthStyle} style={{color:"lightgray"}}>Time</TableCell>
                    <TableCell className={classes.smallWidthStyle} style={{color:"lightgray"}} >Job ID</TableCell>
                    <TableCell className={classes.mediumWidthStyle} style={{color:"lightgray"}} >Product</TableCell>
                    <TableCell className={classes.mediumWidthStyle} style={{color:"lightgray"}} align="left">Job Title</TableCell>
                    <TableCell className={classes.largeWidthStyle} style={{color:"lightgray"}} >Job Input</TableCell>
                    <TableCell className={classes.smallWidthStyle} style={{color:"lightgray"}} >By</TableCell>
                    <TableCell className={classes.smallWidthStyle} style={{color:"lightgray"}}>Status</TableCell>
                    
                  </TableRow>
                  
                </TableHead>
                </div>
                <div>
                <TableBody>
                
                <InfiniteScroll
                  dataLength={this.state.items.length}
                  next={this.fetchMoreData}
                  hasMore={this.state.hasMore}
                  loader={<h4>Loading...</h4>}
                  endMessage={
                    <p style={{ textAlign: "center" , width: "1200px"}}>
                      <b>Yay! You have seen it all</b>
                    </p>
                  }
                >
                  
                  {this.state.items.map((i, index) => (
                    <div className={classes.userRowStyle} key={index}>
                    <TableRow>
                    <TableCell className={classes.smallWidthStyle} >{(i.startTime).substring(0, 10)}<br /><Typography style={{color: "gray", fontSize: "12px"}}>{(i.startTime).substring(11, 18)}</Typography></TableCell>
                    <TableCell className={classes.smallWidthStyle} ><Typography>{i.jobId}</Typography></TableCell>
                    <TableCell className={classes.smallWidthStyle}  >{i.product}</TableCell>
                    <TableCell className={classes.mediumWidthStyle}  align="left">{i.jobTitle}</TableCell>
                    <TableCell  >
                        <b>UUID:</b> {i.jobInput.UUID}, <br />
                        <b>WalkDirection:</b> {i.jobInput.WalkDirection},<br />
                        <b>Duration:</b>{i.jobInput.Duration},
                        <b>jumpHost:</b>{i.jobInput.jumpHost},
                        <b>Test:</b>{i.jobInput.Test}
                                                                      
                    </TableCell>
                    <TableCell  align="left"  >{i.startedBy}</TableCell>
                    <TableCell style={{fontWeight: 'bold',
                                        fontSize: '0.75rem',
                                        color: (((i.status) === 'Active' && 'yellow')||
                                              ((i.status) === 'Issues found' && 'red')||
                                              ((i.status) === 'OK' && 'green')),
                                        borderRadius: 8,
                                        padding: '3px 10px',
                                        display: 'inline-block', 
                                        margin: "20px 5px 20px 100px",
                                        backgroundColor: (((i.status) === 'Active' && '#FFFFC2')||
                                                          ((i.status) === 'Issues found' && '#fbab8d')||
                                                          ((i.status) === 'OK' && '#b0d8c8'))
                                      }}  align="left">{i.status}</TableCell>
                  </TableRow>
                    </div>
                  ))}          
                  
                  
                

                </InfiniteScroll>
                </TableBody>
                </div>
              </Table>
            </TableContainer>
            </TabPanel>
            <TabPanel value={this.value} index={1}>
              Item Two
            </TabPanel>
            </Box> 
    );
  }
}




export default withStyles(useStyles)(App);


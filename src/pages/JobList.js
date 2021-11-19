import React , {Component} from 'react';
// import PropTypes from 'prop-types';
import { render } from 'react-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { withStyles } from '@material-ui/core/styles';
// import { styled} from '@mui/material/styles';
// import { withStyles } from '@mui/styles';
import Typography from '@material-ui/core/Typography';
import InfiniteScroll from 'react-infinite-scroll-component';


const useStyles = theme => ({
  table: {
    minWidth: 650,
    display: "flex"
  },
  tableContainer: {
    borderRadius: 15,
    margin: '10px 10px'
  },
  status: {
     fontWeight: 'bold',
     fontSize: '0.75rem',
     color: 'white',
     backgroundColor: 'grey',
     borderRadius: 8,
     padding: '3px 10px',
     display: 'inline-block'
  },
  userRowStyle: {
       color: 'lightgray',
       minWidth: '100%'
  },
  smallWidthStyle:{
      width: '100px'
  },
  mediumWidthStyle:{
    width: '150px'
 },
 largeWidthStyle:{
  width: '200px'
}
  

});


const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8
};

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

  // const { classes } = this.props;
  

  
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
    return (
      
        <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <div>
        <TableHead>
          <TableRow> 
            <TableCell className={classes.mediumWidthStyle} style={{color:"lightgray"}}>Time</TableCell>
            <TableCell className={classes.smallWidthStyle} style={{color:"lightgray"}} align="right">Job ID</TableCell>
            <TableCell className={classes.mediumWidthStyle} style={{color:"lightgray"}} align="right">Product</TableCell>
            <TableCell className={classes.mediumWidthStyle} style={{color:"lightgray"}} align="right">Job Title</TableCell>
            <TableCell className={classes.largeWidthStyle} style={{color:"lightgray"}} align="right">Job Input</TableCell>
            <TableCell className={classes.mediumWidthStyle} style={{color:"lightgray"}} align="right">By</TableCell>
            <TableCell className={classes.smallWidthStyle} style={{color:"lightgray"}}align="right">Status</TableCell>
            
          </TableRow>
          
        </TableHead>
        </div><div>
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
            // <div className={classes.userRowStyle} key={index}>
            <TableRow>
            <TableCell className={classes.mediumWidthStyle} >{i.startTime}</TableCell>
            <TableCell className={classes.smallWidthStyle} ><Typography>{i.jobId}</Typography></TableCell>
            <TableCell className={classes.mediumWidthStyle}  align="right">{i.product}</TableCell>
            <TableCell className={classes.mediumWidthStyle}  align="right">{i.jobTitle}</TableCell>
            <TableCell className={classes.mediumWidthStyle}  align="right">{i.jobTitle}</TableCell>
            <TableCell className={classes.mediumWidthStyle}  align="right">{i.startedBy}</TableCell>
            <TableCell className={classes.smallWidthStyle}  align="right">{i.status}</TableCell>
          </TableRow>
            // </div>
          ))}          
          
          
        

        </InfiniteScroll>
        </TableBody>
        </div>
      </Table>
    </TableContainer>
      
    );
  }
}




export default withStyles(useStyles)(App);


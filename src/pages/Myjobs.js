import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import Typography from '@material-ui/core/Typography';
import InfiniteScroll from 'react-infinite-scroll-component';


const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
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
  tableCellDesign: {
    fontWeight: 'bold',
  }

}));

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

for(let j=0; j<180; j++){

  {Object.keys(tempJobList).map(item => ( JobList.push(tempJobList[item])))}
}

// state = {
//   // items: Array.from({ length: 20 }),
//   items: JobList,
//   hasMore: true
// };


// fetchMoreData = () => {
//   if (this.state.items.length >= 500) {
//     this.setState({ hasMore: false });
//     return;
//   }
//   // a fake async api call like which sends
//   // 20 more records in .5 secs
//   setTimeout(() => {
//     this.setState({
//       items: this.state.items.concat(Array.from({ length: 20 }))
//     });
//   }, 500);
// };


export default function Myjobslist() {
  const classes = useStyles();


const [state] = React.useState({
  items: JobList,
  hasMore: true
})

  // fetchMoreData = () => {
  //   if (this.state.items.length >= 500) {
  //     this.setState({ hasMore: false });
  //     return;
  //   }
  //   // a fake async api call like which sends
  //   // 20 more records in .5 secs
  //   setTimeout(() => {
  //     this.setState({
  //       items: this.state.items.concat(Array.from({ length: 3 }))
  //     });
  //   }, 500);
  // };
          
  return (

    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow> 
            <TableCell style={{color:"lightgray"}}>Time</TableCell>
            <TableCell style={{color:"lightgray"}} align="right">Job ID</TableCell>
            <TableCell style={{color:"lightgray"}} align="right">Product</TableCell>
            <TableCell style={{color:"lightgray"}} align="right">Job Title</TableCell>
            <TableCell style={{color:"lightgray"}} align="right">Job Input</TableCell>
            <TableCell style={{color:"lightgray"}} align="right">By</TableCell>
            <TableCell style={{color:"lightgray"}}align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <InfiniteScroll
          dataLength={state.items.length}
          // next={this.fetchMoreData}
          hasMore={state.hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          
          {this.state.items.map((i, index) => (
              
                            
              <TableRow>
              <TableCell  >{i.startTime}</TableCell>
              <TableCell align="right"><Typography>{i.jobId}</Typography></TableCell>
              <TableCell align="right">{i.product}</TableCell>
              <TableCell align="right">{i.jobTitle}</TableCell>
              {/* <TableCell align="right">{JobList[item].jobInput}</TableCell> */}
              <TableCell align="right">{i.startedBy}</TableCell>
              <TableCell align="right">
                <Typography className={classes.tableCellDesign}>{i.status}</Typography>
               </TableCell>
            </TableRow>

                 ))}
           </InfiniteScroll>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
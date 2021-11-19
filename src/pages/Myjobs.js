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


const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    borderRadius: 15,
    margin: '10px 10px'
  }
}));

const JobList = [
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



export default function Myjobslist() {
  const classes = useStyles();
               
  return (

    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow> 
            <TableCell style={{color:"lightgray"}}>Time</TableCell>
            <TableCell align="right">Job ID</TableCell>
            <TableCell align="right">Product</TableCell>
            <TableCell align="right">Job Title</TableCell>
            <TableCell align="right">Job Input</TableCell>
            <TableCell align="right">By</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(JobList).map(item => (
              <TableRow>
              <TableCell>{JobList[item].startTime}</TableCell>
              <TableCell align="right"><Typography>{JobList[item].jobId}</Typography></TableCell>
              <TableCell align="right">{JobList[item].product}</TableCell>
              <TableCell align="right">{JobList[item].jobTitle}</TableCell>
              {/* <TableCell align="right">{JobList[item].jobInput}</TableCell> */}
              <TableCell align="right">{JobList[item].startedBy}</TableCell>
              <TableCell align="right">{JobList[item].status}</TableCell>
            </TableRow>

))}
            
        </TableBody>
      </Table>
    </TableContainer>
  );
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [

  {
    id: 'rank',
    label: 'ランク',
    align: 'center',
    minWidth: 6,

  },
  { id: 'name', label: 'アニメタイトル', minWidth: 200 ,  align: 'center',},
  {
    id: 'score',
    label: 'スコア',
    minWidth: 5,
    align: 'center',
  },
 
];

function createData(rank, name, score) {

  return {rank, name, score };
}

const rows = [
  createData('1', 'ようこそ実力至上手技教室', 354),
  createData('2', 'CN', 1403500365, ),
  createData('3', 'IT', 60483973, ),
  createData('4', '　が０るgg', 327167434),
  createData('5', 'CA', 37602103),
  createData('6', 'AU', 25475400),
  createData('7', 'DE', 83019200,),
  createData('1', 'IN', 1324171354),
  createData('2', 'CN', 1403500365, ),
  createData('3', 'IT', 60483973, ),
  createData('4', 'US', 327167434),
  createData('5', 'CA', 37602103),
  createData('6', 'AU', 25475400),
  createData('2', 'CN', 1403500365, ),
  createData('3', 'IT', 60483973, ),
  createData('4', 'US', 327167434),
  createData('5', 'CA', 37602103),
  createData('6', 'AU', 25475400),
  
];

const useStyles = makeStyles({
  root: {
    width: '100%',
    height:650,

  },
  container: {
    maxHeight:650,

      backgroundColor:"#6C6966"
  },
  head:{
        backgroundColor:"#AB5A25"  
  },
  row:{
      fontSize:20,
        color:"white",
        fontWeight:800,
        marginTop:20,
        marginBottom:20,



  },
  cell:{
      borderBottomColor:"#4D4745"
  }
});

export default function TitleTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(40);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table" style={{height:850}}>
          <TableHead >
            <TableRow style={{backgroundColor:"#AB5A25"}}>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{minWidth:column.minWidth}}

                >
                  <Box fontSize={20} fontWeight={800} color="#3E3939">{column.label}</Box>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody >
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code} >
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align} className={classes.cell}>
                        <Box textAlign="center" className={classes.row}>{value}</Box>

                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
     
    </Paper>
  );
}

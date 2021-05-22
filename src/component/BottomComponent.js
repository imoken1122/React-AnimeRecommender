import React from 'react';
import Toolbar from '@material-ui/core/Toolbar'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import SearchComponent from "./SearchComponent"
import PostOption from "./PostOption"
import Button from '@material-ui/core/Button';
import TitleTable from "./Table"
const useStyles = makeStyles((theme) => ({
    div:{
 
     backgroundColor: "rgba(0,0,0,0.15)",
     width :"100%", 
     height:"100vh",
    }, 
    ct:{
     backgroundColor: "transparent",
     backgroundColor: "rgba(0,0,0,0.7)",


     width :"70%", 
     height:"100vh",
    },
    title:{
        padding:"60px 10px 60px 10px",
        fontSize:30,
        fontWeight:800,
        color: '#FF7F32'
    }
  
   })); 
export default function BottomComponent() {
    const classes = useStyles()
    return(

    <div className={classes.div}>
            <Container className={classes.ct}>
                <Box textAlign="center" className={classes.title}>
                    レコメンドの結果
                </Box>
                <TitleTable />
            </Container>
    
    </div>
    )
}
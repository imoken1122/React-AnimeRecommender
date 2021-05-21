import React from 'react';
import Toolbar from '@material-ui/core/Toolbar'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import SearchComponent from "./SearchComponent"
import PostOption from "./PostOption"
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
   div:{

    backgroundColor: "rgba(0,0,0,0.75)",
    width :"100%", 
    height:"100vh",
   }, 
   ct:{
    backgroundColor: "transparent",

    width :"100%", 
    height:700,
   },
   title:{
       paddingTop:300,
   },
   btn:{
       marginTop:70,
       background:  "rgba(256,151,87,0.01)",
       padding:"25px 70px 25px 70px",
       borderColor:"#FF670B",
       '&:hover': {
        background:  "rgba(256,151,87,0.15)",
        borderColor:"rgba(256,151,87,0.95)",
        },
        "&:action":{
            background:  "rgba(256,151,87,0.15)",
            borderColor:"rgba(256,151,87,0.15)",
        }

   },
  })); 
  
export default function TopComponent() {
    const classes = useStyles()

    return(
        <div className={classes.div}>
            <Container className={classes.ct}>
                <Box className={classes.title}>

                </Box>

                <SearchComponent />
                <Box >
                    <PostOption />
                </Box>
                <Box textAlign="center">
                    <Button variant="outlined" className={classes.btn} startIcon={<></>}>
                        <Box fontWeight={800} color="#FF904C" fontSize={20}> アニメを検索</Box>
                    </Button>
                </Box>
            </Container>
 
        </div>
    )
}
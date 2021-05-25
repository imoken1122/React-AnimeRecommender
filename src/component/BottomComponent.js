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
 
     backgroundColor: "rgba(0,0,0,0.75)",
     width :"100%", 
     height:"100vh",
     minHeight:700,
    overflow: "hidden"
    }, 
    ct:{
     backgroundColor: "rgba(0,0,0,0.38)",

        height:"100%",
     width :"80vw",
     minWidth:375, 

    },
    title:{
        padding:"50px 10px 45px 10px",
        fontSize:"calc(15px + 1vmin)",
        fontWeight:800,
        color: '#FF873F'
    },
    sub:{
        color: 'white' ,
        fontSize:"calc(5px + 1min)",
        fontWeight:800,
        marginTop:-40,
        marginBottom:40
    }
  
   })); 
export default function BottomComponent(props) {
    const classes = useStyles()
    let title = props.anime_title
    return(
    <div className={classes.div}>
            <Container className={classes.ct}>
                <Box textAlign="center" className={classes.title}>
                    「{title}」の類似アニメ
                </Box>
                <Box textAlign="center" className={classes.sub}>
                    アニメタイトルをクリックするとGoogle検索
                </Box>
                <TitleTable />
            </Container>
    
    </div>
    )
}
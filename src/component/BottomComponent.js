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
import tile from '../images/tile2.jpg';
const useStyles = makeStyles((theme) => ({
    divimg:{
        backgroundImage: `url(${tile})`,
     height:"100vh",

    },
    div:{
 
     backgroundColor: "rgba(0,0,0,0.75)",
     width :"100%", 
     height:"100vh",
    }, 
    ct:{
     backgroundColor: "transparent",
     backgroundColor: "rgba(0,0,0,0.38)",


     width :"70%", 
     height:"100vh",
    },
    title:{
        padding:"60px 10px 60px 10px",
        fontSize:30,
        fontWeight:800,
        color: '#FF873F'
    },
    sub:{
        color: 'white' ,
        fontSize:20,
        fontWeight:800,
        marginTop:-40,
        marginBottom:40
    }
  
   })); 
export default function BottomComponent(props) {
    const classes = useStyles()
    let title = props.anime_title
    return(
    <div className={classes.divimg}>
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
    </div>
    )
}
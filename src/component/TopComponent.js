import React,{useContext,useLayoutEffect,useState} from 'react';
import Toolbar from '@material-ui/core/Toolbar'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';
import {TitleContext} from "../Home"
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import SearchComponent from "./SearchComponent"
import PostOption from "./PostOption"
import Button from '@material-ui/core/Button';
import axios from 'axios';
import tile from '../images/tile2.jpg';
const useStyles = makeStyles((theme) => ({
    divimg:{
        backgroundImage: `url(${tile})`,
    width :"100%", 
    height:"100vh",

    },
   div:{

    backgroundColor: "rgba(0,0,0,0.75)",
    width :"100%", 
    height:"100vh",
    zIndex:1
   }, 
   ct:{
    backgroundColor: "transparent",

    width:"100%",
    height:700,
   },
   title:{
       paddingTop:"10vh",

       fontSize:80,
       color:"white",
       fontFamily:'Roboto',
       letterSpacing:-3,
       lineHeight:2,
       fontWeight:800,
   },
   subtxt:{
       marginTop:-20,
       color:"white",
       fontSize:23,
       fontWeight:800,
       paddingBottom:"10vh",

   },
   btn:{
       marginTop:40,
       background:  "rgba(0,0,0,0.3)",
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
  
export default function TopComponent(props) {
    const classes = useStyles()

    const {postinfo, setPostInfo} = useContext(TitleContext)

    const onClickHandler = () => {
       props.Post()
          
        
    }
    return(
        <div className={classes.divimg}>
        <div className={classes.div}>
            <Container className={classes.ct}>
                <Box textAlign="center"  className={classes.title}>
                    Anime Recommender
                </Box>
                <Box textAlign="center"  className={classes.subtxt}>
                    〜 約500万件のユーザレビューを用いて類似アニメをレコメンドします 〜
                </Box>
                <SearchComponent/>
                <Box >
                    <PostOption />
                </Box>
                <Box textAlign="center">
                    <Button disabled = {postinfo.anime_title.length == 0 ? true : false} variant="outlined" className={classes.btn}  onClick={onClickHandler} startIcon={<></>}>
                        <Box fontWeight={800} color={postinfo.anime_title.length == 0 ? "#804725" : "#FF904C"} fontSize={20}> アニメを検索</Box>
                    </Button>
                </Box>
            </Container>
 
        </div>
        </div>
    )
}
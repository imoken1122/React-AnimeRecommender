import React,{useContext,useRef} from 'react';

import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';
import {TitleContext} from "../Home"

import Box from '@material-ui/core/Box';
import SearchComponent from "./SearchComponent"
import PostOption from "./PostOption"
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
   div:{

    backgroundColor: "rgba(0,0,0,0.75)",
    width :"100%", 
    height:"auto",
    minHeight:"100vh",

    overflow: "hidden"
   }, 
   ct:{
    marginTop:"15vh",
    marginBottom:"10vh",
    backgroundColor: "transparent",
    width:"100%",
    overflow: "hidden"



   },
   title:{

       fontSize:"calc(48px + 1vmin)",
       color:"white",
       fontFamily:'Roboto',
       letterSpacing:-3,

       fontWeight:800,
   },
   subtxt:{
       marginTop:"2vh",
       marginBottom:"6vh",
       color:"white",
       fontSize:"calc(12px + 1vmin)",
       fontWeight:800,


   },
   btn:{
       margin:"10vh 0 1vh 0",

       background:  "rgba(0,0,0,0.3)",
       padding:"15px 40px 15px 40px",
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



    const onClickHandler = (e) => {

        e.preventDefault()
            props.Post()
                
    }
    return(

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
                        <Box fontWeight={800} color={postinfo.anime_title.length == 0 ? "#804725" : "#FF904C"} fontSize="calc(10px + 1vmin)"> アニメを検索</Box>
                    </Button>
                </Box>

            </Container> 
        </div>

    )
}
import React, { useState, useContext} from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {TitleContext} from "../Home"
const useStyles = makeStyles({
    root: {
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "white"
      },
     
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#FF9757"
      }
    }
  });

export default function SearchComponent(props) {
    const classes = useStyles()
    const {postinfo, setPostInfo} = useContext(TitleContext)
    function ChangeHandler(e){
      setPostInfo(postinfo => ({...postinfo,anime_title:e.target.value}))
    }
  return (
       <Box textAlign="center">
        <TextField required 

                placeholder = "アニメタイトル入力"
                 variant="outlined" 
                 inputProps={{ style: { fontSize:25,fontWeight:800, padding:"20px 10px 20px 10px" ,marginLeft:25, color: 'white'}}}
                 style = {{width: 800,marginBottom:90,}}
                 className={classes.root}
                 onChange={ChangeHandler}

                 />   
        </Box>

  );
}

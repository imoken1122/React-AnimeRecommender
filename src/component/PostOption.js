import React, { useState, useContext} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {TitleContext} from "../Home"
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

     title:{
         marginBottom:20,
        marginLeft:-30,
        
        fontWeight:800,
         fontSize:20, 
         color:"white"
     },
     rtitle:{
        color:"white",
        paddingRight:20
     },
     radio: {
        color:"orange",
        '&$checked': {
          color: '#FF670B'
        },

      },
      checked: {}

   
   })); 
export default function RowRadioButtonsGroup() {
   const classes = useStyles()
   const {postinfo, setPostInfo} = useContext(TitleContext)

  const ChangeNumHandler = (e) => { 
    setPostInfo(postinfo => ({...postinfo, num_item:e.target.value}))
  }
  const ChangeModelHandler = (e) => { 
    setPostInfo(postinfo => ({...postinfo, model:e.target.value}))
  }

  return (
      <Box textAlign="center">
    <FormControl component="fieldset">
      <Box component="legend" className={classes.title}>レコメンドアルゴリズム</Box>
      
      <Box textAlign="center" style={{marginLeft:40,marginRight:90,marginBottom:50,}}>
      <RadioGroup row defaultValue="RankMF" onChange={ChangeModelHandler}>
        <FormControlLabel value="RankMF" control={<Radio  classes={{root: classes.radio, checked: classes.checked}} />} label={<Box fontSize={20} fontWeight={700}>RankMF</Box>} className={classes.rtitle} />
        <FormControlLabel value="MF" control={<Radio  classes={{root: classes.radio, checked: classes.checked}}/>} label={<Box fontSize={20}fontWeight={700}> MF</Box>} className={classes.rtitle}/>
        </RadioGroup>
        </Box>
    </FormControl>


    <FormControl component="fieldset">
      <Box component="legend" className={classes.title}>レコメンドする数</Box>
    <Box textAlign="center" style={{marginLeft:0}}>
      <RadioGroup row defaultValue="10" onChange={ChangeNumHandler}>
        <FormControlLabel value="10"  control={<Radio  classes={{root: classes.radio, checked: classes.checked}}/>} label={<Box fontSize={20}fontWeight={700}> 10</Box>} className={classes.rtitle}/>
        <FormControlLabel value="15" control={<Radio  classes={{root: classes.radio, checked: classes.checked}}/>} label={<Box fontSize={20}fontWeight={700}> 15</Box>} className={classes.rtitle}/>
        <FormControlLabel value="20" control={<Radio  classes={{root: classes.radio, checked: classes.checked}}/>} label={<Box fontSize={20}fontWeight={700}> 20</Box>}className={classes.rtitle}/>
      </RadioGroup>
    </Box>
    </FormControl>
    </Box>
  );
}
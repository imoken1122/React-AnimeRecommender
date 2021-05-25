import React, {  useContext} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {TitleContext} from "../Home"
import FormControl from '@material-ui/core/FormControl';

import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

     title:{
         marginBottom:"1vh",
        
        fontWeight:800,
         fontSize:"calc(10px + 1vmin)", 
         color:"white"
     },
     rtitle:{
        color:"white",
        paddingRight:10
     },
     radio: {

        color:"orange",
        '&$checked': {
          color: '#FF670B'
        },

      },
      checked: {}
      ,
      radioword:{
         fontSize:"calc(10px + 1vmin)", 
         fontWeight:600

      }
   
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
      <Box textAlign="center" style={{margin:"0 6vh 0 4vh",display: "inline-block"}}>
    <FormControl component="fieldset">
      <Box component="legend" className={classes.title}>レコメンドアルゴリズム</Box>
      
      <RadioGroup row defaultValue="RankMF" onChange={ChangeModelHandler}>
        <FormControlLabel value="RankMF" control={<Radio  classes={{root: classes.radio, checked: classes.checked}} />} label={<Box className={classes.radioword}>RankMF</Box>} className={classes.rtitle} />
        <FormControlLabel value="MF" control={<Radio  classes={{root: classes.radio, checked: classes.checked}}/>} label={<Box className={classes.radioword}> MF</Box>} className={classes.rtitle}/>
        </RadioGroup>
    </FormControl>
        </Box>

    <Box textAlign="center" style={{marginTop:"2vh",display: "inline-block"}}>
    <FormControl component="fieldset">
      <Box component="legend" className={classes.title}>レコメンドする数</Box>
      <RadioGroup row defaultValue="10" onChange={ChangeNumHandler}>
        <FormControlLabel value="10"  control={<Radio  classes={{root: classes.radio, checked: classes.checked}}/>} label={<Box className={classes.radioword}> 10</Box>} className={classes.rtitle}/>
        <FormControlLabel value="15" control={<Radio  classes={{root: classes.radio, checked: classes.checked}}/>} label={<Box className={classes.radioword}> 15</Box>} className={classes.rtitle}/>
        <FormControlLabel value="20" control={<Radio  classes={{root: classes.radio, checked: classes.checked}}/>} label={<Box className={classes.radioword}> 20</Box>}className={classes.rtitle}/>
      </RadioGroup>
    </FormControl>
    </Box>
    </Box>
  );
}
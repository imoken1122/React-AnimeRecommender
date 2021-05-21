
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';

export default function Header() {
    return (
        <>

      <AppBar style={{paddingBottom:40,position:"fixed"}}>
          <Toolbar>
              <Box style={{marginLeft:"46%",marginRight:"50%",marginTop:20}}>
                  ARNCMM 
              </Box>
          </Toolbar>
      </AppBar>
        </>
    )
} 
import React,{useState} from 'react'
import BackToTop from "./component/Header"
import TopComponent from "./component/TopComponent"
import BottomComponent from "./component/BottomComponent"
import Divider from '@material-ui/core/Divider';
function Home() {


    return(
        <div>

            <TopComponent />
            
            <Divider />

            <BottomComponent />

        </div>
    )



}

export default Home;
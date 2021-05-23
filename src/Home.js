import React, { useState, useContext} from 'react'
import BackToTop from "./component/Header"
import TopComponent from "./component/TopComponent"
import BottomComponent from "./component/BottomComponent"
import Divider from '@material-ui/core/Divider';
export const TitleContext = React.createContext({anime_title:"",num_item:"",model:""})
export const RecommendContext = React.createContext([{"rank":1,"recommend_title":"ようじつ ","score":1.1}])
function Home() {

    const [postinfo, setPostInfo] = useState({anime_title:"",num_item:"10",model:"RankMF"})
    const [recommendtitle, setRecommendtitle] = useState([{"rank":1,"recommend_title":"ようじつ ","score":1.1}])
    console.log(postinfo)
    console.log(recommendtitle)
    return(
        <div>
            <TitleContext.Provider value={{postinfo,setPostInfo}}>
                <TopComponent setRecommendtitle={setRecommendtitle}/>
            </TitleContext.Provider>
            <Divider />

            <RecommendContext.Provider value={{recommendtitle,setRecommendtitle}}>
            <BottomComponent anime_title={postinfo.anime_title}/>
            </RecommendContext.Provider>

        </div>
    )



}

export default Home;
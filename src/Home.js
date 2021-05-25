import React, { useState,useEffect} from 'react'
import TopComponent from "./component/TopComponent"
import BottomComponent from "./component/BottomComponent"
import Divider from '@material-ui/core/Divider';
import axios from "axios"
import tile from './images/tile.jpg';
import { makeStyles } from '@material-ui/core/styles';
export const TitleContext = React.createContext({anime_title:"",num_item:"",model:""})
export const RecommendContext = React.createContext({fortitle:"", recommend:[{"rank":1,"recommend_title":"あああ","score":0.3}]})
const initPostInfo = {anime_title:"",num_item:"10",model:"RankMF"}
const initRecommendTitle = {fortitle:"", recommend:[{rank:1,recommend_title:"ようこそ実力主義",score:0.2}]}
const url = "http://localhost:8000/api/recommend"
const deploy = "https://fastapi-recommender.herokuapp.com/api/recommend"
function sleep(a){
  var dt1 = new Date().getTime();
  var dt2 = new Date().getTime();
  while (dt2 < dt1 + a){
    dt2 = new Date().getTime();
  }
  return;
}
const useStyles = makeStyles((theme) => ({
  divimg:{
      backgroundImage: `url(${tile})`,
      backgroundPosition:"center center",
      backgroundAttachment:"fixed",
      //backgroundSize:"cover",
      width:"100%",
      height:"auto",
      margin:0,
  }
}))

function Home() {
    let [isloading,setIsLoading] = useState(true)
    let [isInit,setisInit] = useState(true)
    let [postinfo, setPostInfo] = useState(initPostInfo)
  const classes = useStyles()
     let [recommendtitle, setRecommendtitle] = useState(initRecommendTitle)

    const ref = React.useRef(null)

    const scrollToBottomOfList = React.useCallback(() => {
      if (ref && ref.current) {

          ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      })

        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ ref ])
    const Post = () => {

            let jsoninfo = JSON.stringify(postinfo)
            const method = "POST"
           axios.post(`${deploy}` , jsoninfo,{
                headers:{
                    'Accept': 'application/json',
                    'Content-type':'application/json'    
                  },
            }).then(res => {
                console.log(res.data)
                setIsLoading(false);
                setRecommendtitle(res.data)



            }).catch((error) =>{
                console.error(error);
            }) 
        setIsLoading(false)

          sleep(1100)
        scrollToBottomOfList()


    }
// 最初だけ
  useEffect(()=>{
    if (!isloading && isInit) {
        scrollToBottomOfList()
        setisInit(false)
      }
  })
   
   
    return(
    <div className={classes.divimg}>
            <TitleContext.Provider value={{postinfo,setPostInfo}}>
                <TopComponent Post={Post}/>
            </TitleContext.Provider>
            <Divider />
            {isloading ? <></> : 
            <>
            <RecommendContext.Provider value={{recommendtitle,setRecommendtitle}}>
            <BottomComponent anime_title={recommendtitle.fortitle}/>
            </RecommendContext.Provider>
                </>
            }
             <div ref={ref}/>
        </div>
    )



}

export default Home;
import React, { useState, useRef,useEffect,useLayoutEffect} from 'react'
import BackToTop from "./component/Header"
import TopComponent from "./component/TopComponent"
import BottomComponent from "./component/BottomComponent"
import Divider from '@material-ui/core/Divider';
import axios from "axios"
export const TitleContext = React.createContext({anime_title:"",num_item:"",model:""})
export const RecommendContext = React.createContext({fortitle:"", recommend:[]})
const initPostInfo = {anime_title:"",num_item:"10",model:"RankMF"}
const initRecommendTitle = {fortitle:"", recommend:[]}

function sleep(a){
  var dt1 = new Date().getTime();
  var dt2 = new Date().getTime();
  while (dt2 < dt1 + a){
    dt2 = new Date().getTime();
  }
  return;
}


function Home() {
    let [isloading,setIsLoading] = useState(true)
    let [isInit,setisInit] = useState(true)
    let [postinfo, setPostInfo] = useState(initPostInfo)

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
           axios.post("https://fastapi-recommender.herokuapp.com/api/recommend" , jsoninfo,{
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

          sleep(500)
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
        <>
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
        </>
    )



}

export default Home;
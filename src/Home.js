import React, { useState, useRef,useEffect,useLayoutEffect} from 'react'
import BackToTop from "./component/Header"
import TopComponent from "./component/TopComponent"
import BottomComponent from "./component/BottomComponent"
import Divider from '@material-ui/core/Divider';
export const TitleContext = React.createContext({anime_title:"",num_item:"",model:""})
export const RecommendContext = React.createContext([{rank:0,recommend_title:"",score:0}])
function Home() {
    let [isloading,setIsLoading] = useState(true)
    const [postinfo, setPostInfo] = useState({anime_title:"",num_item:"10",model:"RankMF"})
    let [recommendtitle, setRecommendtitle] = useState([{}])




    const ref = React.useRef()
    // このコールバックを呼び出して ref.current.scrollIntoView() を呼び出してスクロール
    const scrollToBottomOfList = React.useCallback(() => {
      if (ref && ref.current) {
          console.log(3)
          ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      })

        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ ref ])
  
    // useEffect() 内はページが描画されたあとに呼び出される
    useEffect(()=>{
        setIsLoading(false);
        isloading = false

    })
  
   
   
    return(
        <>
            <TitleContext.Provider value={{postinfo,setPostInfo}}>
                <TopComponent setLoading={setIsLoading}setRecommendtitle={setRecommendtitle} scrollFunc={scrollToBottomOfList}/>
            </TitleContext.Provider>
            <Divider />
            {isloading ? <></> : 
            <>
            <RecommendContext.Provider value={{recommendtitle,setRecommendtitle}}>
            <BottomComponent anime_title={postinfo.anime_title}/>
            </RecommendContext.Provider>
             <div ref={ref}/>
                </>
            }
        </>
    )



}

export default Home;
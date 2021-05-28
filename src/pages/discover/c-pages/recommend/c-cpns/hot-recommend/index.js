import React ,{memo,useEffect} from 'react';
import HYThemeHeaderRcm from "@/components/theme-header-rcm";
import {
    HotRecommendWrapper
} from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import {
  getHotRecommendAction
} from '../../store/actionCreators'
import {HOT_RECOMMEND_LIMIT} from "@/common/contants"

//组件
import HYSongsCover from "@/components/songs-cover";


export default memo(function HYHotRecommend(){
 const {hotRecommends}=useSelector(state=>({
   hotRecommends:state.getIn(["recommend","hotRecommends"])
 }),shallowEqual)
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT))
  },[dispatch])
  return (
    <HotRecommendWrapper>
     <HYThemeHeaderRcm title="热门推荐" keywords={["华语","流行","民谣","摇滚","电子"]}/>
     <div className="recommend-list">
       {
         hotRecommends.map((item,index)=>{
          //  return <div key={item.name}>{item.name}</div>
          return <HYSongsCover key={item.id} info={item}></HYSongsCover>
         })     
       }
     </div>
    </HotRecommendWrapper>
  )

})
import React ,{memo,useState,useCallback,useEffect,useRef} from 'react';
import {useSelector,useDispatch,shallowEqual} from "react-redux"
import {getTopBannerAction} from '../../store/actionCreators'

import { Carousel } from 'antd';

import{
   BannerWrapper,
   BannerLeft,
   BannerRight,
   BannerControl
} from './style'
export default memo(function HYTopBanner(){
  const [currentIndex, setCurrentIndex] = useState(0);
      //组件和redux关联，获取数据和进行操作。
  const {topBanners}=useSelector(state => ({
    // topBanners:state.get("recommend").get("topBanners")
  //  等价的
    topBanners:state.getIn(["recommend","topBanners"])
  }),shallowEqual);
  // console.log(topBanners)
  const dispatch=useDispatch();
  //其他hooks
  const bannerRef=useRef();

  useEffect(()=>{
    dispatch(getTopBannerAction())
  },[dispatch]);
  const bannerchange=useCallback((from,to)=>{
    // console.log('11')
    setCurrentIndex(to)

  },[])
  //其他业务逻辑
  const bgImage=topBanners[currentIndex]&&topBanners[currentIndex].imageUrl+"?imageView&blur=40x20";
  return (
    <div>
      <BannerWrapper bgImage={bgImage}>
          <div className="banner wrap-v2">
              <BannerLeft>
              <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerchange}>
       {
         topBanners.map((item,index)=>{
           return (
             <div className="banner-item" key={item.imageUrl}>
               <img className="image" src={item.imageUrl} alt={item.typeTitle}></img>

             </div>
           )

         })
       }
  </Carousel>
              </BannerLeft>
              <BannerRight></BannerRight>
              <BannerControl>
                <button className="btn left" onClick={e=>bannerRef.current.prev()}></button>
                <button className="btn right" onClick={e=>bannerRef.current.next()}></button>
              </BannerControl>
          </div>
      </BannerWrapper>
    </div>
  )

})
import React ,{memo} from 'react';
import HYTopBanner from './c-cpns/top-banner';
import HYHotRecommend from './c-cpns/hot-recommend'

import HYNewAlbum from "./c-cpns/new-album";
import HYRecommendRanking from "./c-cpns/recommend-ranking";


import {RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
} from "./style"
 function HYRecommend(){

  return(
    <RecommendWrapper>
     <HYTopBanner/>
     <Content className="wrap-v2">
       <RecommendLeft>
         <HYHotRecommend/>
         <HYNewAlbum/>
         <HYRecommendRanking/>
       </RecommendLeft>
       <RecommendRight></RecommendRight>
     </Content>
    </RecommendWrapper>
  )
}
export default memo(HYRecommend);
// function HYRecommend(props){
//   const {getBanners,topBanners}=props;
//  useEffect(()=>{
//    getBanners()
//  },[getBanners])
//  return (
//    <div>
//      HYRecommend:{topBanners.length}
//    </div>
//  )
// }
// const mapStateToProps=state=>({
//  topBanners:state.recommend.topBanners
// });
// const mapDispatchToProps=dispatch=>({
//  getBanners:()=>{
//    dispatch(getTopBannerAction())
//  }
// })
// export default connect(mapStateToProps,mapDispatchToProps)(memo(HYRecommend));
// shallowEqual性能优化
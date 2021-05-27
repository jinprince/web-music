import React ,{memo} from 'react';
import HYTopBanner from './c-cpns/top-banner';
import {RecommendWrapper} from "./style"
 function HYRecommend(){

  return(
    <RecommendWrapper>
     <HYTopBanner></HYTopBanner>
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
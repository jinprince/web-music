import * as actionTypes from "./constants";
import {getTopBanners,getHotRecommends} from '@/services/recommend';
const changeTopBannerAction=(res)=>({
    type:actionTypes.CHANGE_TOP_BANNERS,
    topBanners:res.banners
})
export const getTopBannerAction=()=>{
    return dispatch=>{
        getTopBanners().then(res=>{
            console.log(res);
           dispatch(changeTopBannerAction(res))
        })
    }
};
const changeHotRecommendAction=(res)=>({
    type:actionTypes.CHANGE_HOT_RECOMMEND,
    hotRecommends:res.result
})
export const getHotRecommendAction=(limit)=>{
    return dispatch=>{
           getHotRecommends(limit).then(res=>{
            //    console.log(res)
            dispatch(changeHotRecommendAction(res));
           })
    }
}
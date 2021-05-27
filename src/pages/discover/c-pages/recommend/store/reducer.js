import * as actionTypes from "./constants";
import {Map} from 'immutable'
const defaultState=Map({
    topBanners:[],
})
function reducer(state=defaultState,action){
    // console.log(action.topBanners)
    switch(action.type){
        case actionTypes.CHANGE_TOP_BANNERS:
            return state.set("topBanners",action.topBanners);
        default:
            return state
    }
}
export default reducer; 
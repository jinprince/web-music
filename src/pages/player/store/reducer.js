import {Map} from "immutable"; 

import * as actionTypes from "./constants";

const defaultState=Map({
    playList:[], 
    currentSongIndex:0,
    currentSong:{},
    sequence:0//循环，1 随机， 
})

function reducer(state=defaultState,action){
    switch(action.type){
        case actionTypes.CHANGE_CURRENT_SONG:
            return state.set("currentSong",action.currentSong)
        case actionTypes.CHANGR_PLAT_LIST:
            return state.set("playList",action.playList)
        case actionTypes.CHANGE_CURRENT_SONG_INDEX:
            return state.set("currentSongIndex",action.index)
        case actionTypes.CHANGE_SEQUENCE:
            return state.set("sequence",action.sequence);
        default:
            return state;
    }
}

export default reducer;
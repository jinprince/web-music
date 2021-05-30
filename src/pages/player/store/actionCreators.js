import {getSongDetsil} from "@/services/player"

import * as actionTypes from './constants'

const changeCurrentSongAction=(currentSong)=>({
    type:actionTypes.CHANGE_CURRENT_SONG,
    currentSong
})
export const getSongDetailAction=(ids)=>{
    return dispatch=>{
        getSongDetsil(ids).then(res=>{
            console.log(res)
            dispatch(changeCurrentSongAction(res.songs[0]))
        })
    }
}
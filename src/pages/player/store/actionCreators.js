import {getSongDetsil} from "@/services/player"
import {getRandomNumber} from '@/utils/math-utils'
import * as actionTypes from './constants'

const changeCurrentSongAction=(currentSong)=>({
    type:actionTypes.CHANGE_CURRENT_SONG,
    currentSong
});
const changePlayListAction=(playList)=>({
    type:actionTypes.CHANGR_PLAT_LIST,
     playList
});
const changeCurrentSongIndexAction=(index)=>({
    type:actionTypes.CHANGE_CURRENT_SONG_INDEX,
    index
});
 export const changeSequenceAction=(sequence)=>({
     type:actionTypes.CHANGE_SEQUENCE,
     sequence
 });
 export const changeCurrentIndexAndSongAction=(tag)=>{
      return (dispatch,getState)=>{
          const playList=getState().getIn(["player","playList"]);
          const sequence=getState().getIn(["player","sequence"]);
          let currentSongIndex=getState().getIn(["player","currentSongIndex"]);
        //   console.log(sequence)
          switch(sequence){
              case 1://表示随机播放
              let randomIndex=-1;
              while(randomIndex===currentSongIndex){
                randomIndex=getRandomNumber(playList.length);
              }
              currentSongIndex=randomIndex;
              break;
              default://顺序播放
              currentSongIndex+=tag;
              if(currentSongIndex>=playList.length) currentSongIndex=0;
              if(currentSongIndex<0) currentSongIndex=playList.length-1;
          }
          const currentSong=playList[currentSongIndex];
          dispatch(changeCurrentSongAction(currentSong));
          dispatch(changeCurrentSongIndexAction(currentSongIndex));
      }
 }

export const getSongDetailAction=(ids)=>{
    return (dispatch,getState)=>{
        //1、根据id查找playList这是否已经有了该歌曲
        const playList=getState().getIn(["player","playList"]);
        const songIndex=playList.findIndex(song=>song.id===ids);
        // console.log(songIndex);
        //判断是否找到歌曲
        if(songIndex!==-1){

            dispatch(changeCurrentSongIndexAction(songIndex));
            const song=playList[songIndex];
            dispatch(changeCurrentSongAction(song))
        }else{//没有找到歌曲
               getSongDetsil(ids).then(res=>{
                // console.log(res)
                const song=res.songs&&res.songs[0];
                // console.log(song)
                if(!song) return;
                //1.将最新请求到的歌曲添加到播放列表中
                const newPlayList=[...playList];
                newPlayList.push(song);
                // console.log(newPlayList)
                // 更新redux中的值
                dispatch(changePlayListAction(newPlayList));
                dispatch(changeCurrentSongIndexAction(newPlayList.length-1));
                dispatch(changeCurrentSongAction(song))
            })
        }
     
    }
}
import React ,{memo,useCallback,useEffect,useRef,useState} from 'react';

import {PlaybarWrapper,Control,PlayInfo,
Operator} from "./style";

import {getSizeImage,formatDate,getPlaySong} from "@/utils/format-utils"
import {getSongDetailAction,changeSequenceAction,changeCurrentIndexAndSongAction} from "../store/actionCreators";
// import {getSongDetsil} from "@/services/player"
import { Slider} from 'antd';


import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
export default memo(function HYAppPlayerBar(){
        const [currentTime, setCurrentTime] = useState(0);
        const [progress, setProgress] = useState(0);
        const [isChange, setIsChange] = useState(false);
        const [isPlaying, setIsPlaying] = useState(false);
     // hook redux
    const {currentSong,sequence}=useSelector(state=>({
        currentSong:state.getIn(["player","currentSong"]),
        sequence:state.getIn(["player","sequence"])
    }),shallowEqual)
       
        const dispatch=useDispatch()
//  other hook
   const audioRef=useRef();

    useEffect(()=>{
        // getSongDetsil(167876).then(res=>{
        //     console.log(res);
        // },[])
        dispatch(getSongDetailAction(1847923325))
    },[dispatch])

    useEffect(()=>{
        audioRef.current.src=getPlaySong(currentSong.id);
        audioRef.current.play().then(res=>{
            setIsPlaying(true);
        }).catch(err=>{
            setIsPlaying(false);
        });
    },[currentSong])


    //other handle
    const picUrl=currentSong.al && currentSong.al.picUrl;
    const name=currentSong.ar && currentSong.ar[0].name;
    const duration=currentSong.dt||0;
    const playMusic=useCallback(()=>{
        // console.log(111)
        isPlaying?audioRef.current.pause():audioRef.current.play();
        setIsPlaying(!isPlaying);
    },[isPlaying])
    const timeUpdate=(e)=>{
        // console.log(e.target.currentTime);
       
        if(!isChange){
            setCurrentTime(e.target.currentTime*1000)
            setProgress(currentTime/duration*100)
        }
    }
    const sliderChange=useCallback((value)=>{
        // console.log(value);
        setIsChange(true);
        const currentTime=value/100*duration;
        setCurrentTime(currentTime*1000);
       setProgress(value)

    },[duration])
    const sliderAfterChange=useCallback((value)=>{
        // console.log(value);
        const currentTime=value/100*duration/1000;
        audioRef.current.currentTime=currentTime;
        setCurrentTime(currentTime*1000);
        setIsChange(false);
        if(!isPlaying){
            playMusic();
        }
    },[duration,isPlaying,playMusic])

   
    // const progress=currentTime/duration*100;
    const changeSequence=()=>{
        let currentSequence=sequence+1;
        if(currentSequence>2){
            currentSequence=0
        }
        dispatch(changeSequenceAction(currentSequence));
    }
    const changeMusic=(tag)=>{
        dispatch(changeCurrentIndexAndSongAction(tag))
    }
    const handleMusicEnded=()=>{
        // console.log(1)
        if(sequence===2){
            audioRef.current.currentTime=0;
            audioRef.current.play()
        }else{
            dispatch(changeCurrentIndexAndSongAction(1))
            
        }
    }
    return (
    <PlaybarWrapper className="sprite_player">
      <div className="content wrap-v2">
          <Control isPlaying={isPlaying}>
              <button className="sprite_player prev" onClick={e=>changeMusic(-1)}></button>
              <button className="sprite_player play" onClick={e=>playMusic()}></button>
              <button className="sprite_player next" onClick={e=>changeMusic(1)}></button>
          </Control>
          <PlayInfo>
              <div className="image">
                  <NavLink to="/discover/player">
                      <img src={getSizeImage(picUrl,35)} alt={currentSong.name}/>
                  </NavLink>
              </div>
              <div className="info">
                  <div className="song">
                      <span className="song-name">{currentSong.name}</span>
                      <span className="singer-name">{name}</span>
                  </div>
                  <div className="progress">
                  <Slider defaultValue={30} value={progress}
                  onChange={sliderChange}
                  onAfterChange={sliderAfterChange}
                  />
                  <div className="time">
                      <span className="now-time">{formatDate(currentTime,"mm:ss")}</span>
                      <span className="divider">/</span>
                      <span className="duration">{formatDate(duration,"mm:ss")}</span>
                  </div>
                  </div>
              </div>
          </PlayInfo>
          <Operator sequence={sequence}>
              <div className="left">
                    <button className="sprite_player btn favor"></button>
                    <button className="sprite_player btn share"></button>
              </div>
              <div className="right sprite_player">
                  <button className="sprite_player btn volume"></button>
                  <button className="sprite_player btn loop" onClick={e=>changeSequence()}></button>
                  <button className="sprite_player btn playlist"></button>
              </div>
          </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={e=>timeUpdate(e)} onEnded={e=>handleMusicEnded()}/>
    </PlaybarWrapper     >
  )

})
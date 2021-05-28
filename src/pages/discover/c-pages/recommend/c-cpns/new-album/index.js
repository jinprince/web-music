import React ,{memo,useEffect} from 'react';
import {shallowEqual, useDispatch,useSelector} from "react-redux";
import {getNewAlbumAction} from "../../store/actionCreators"
// import {getNewAlbums} from "@/services/recommend";
 import HYThemeHeaderRCM from "@/components/theme-header-rcm";
export default memo(function HYNewAlbum(){

  const {newAlbums}=useSelector(state=>({
    newAlbums:state.getIn(["recommend","newAlbums"])

  }),shallowEqual)
  const dispatch=useDispatch();
  useEffect(()=>{
    // getNewAlbums(10).then(res=>{
    //   // console.log((res)) 
    //   setAlbums(res.albums);
    // })
    dispatch(getNewAlbumAction(10))

  },[dispatch])
  return (
    <div>
      <HYThemeHeaderRCM title="新碟上架">HYNewAlbum</HYThemeHeaderRCM>
    <div>
      {
        newAlbums.map((item)=>{
          return <div key={item.id}>{item.name}</div>
        })
      }
    </div>
    </div>
  )

})
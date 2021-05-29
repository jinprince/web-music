import React ,{memo,useEffect,useRef} from 'react';
import {shallowEqual, useDispatch,useSelector} from "react-redux";
import {getNewAlbumAction} from "../../store/actionCreators"

import { Carousel } from 'antd';

// import {getNewAlbums} from "@/services/recommend";
 import HYThemeHeaderRCM from "@/components/theme-header-rcm";
 import HYAlbumCover from '@/components/album-cover';

 //样式导入
 import {AlbumWrapper} from "./style"


export default memo(function HYNewAlbum(){

  const {newAlbums}=useSelector(state=>({
    newAlbums:state.getIn(["recommend","newAlbums"])

  }),shallowEqual)
  //other hooks
  const pageRef=useRef()
  const dispatch=useDispatch();
  useEffect(()=>{
    // getNewAlbums(10).then(res=>{
    //   // console.log((res)) 
    //   setAlbums(res.albums);
    // })
    dispatch(getNewAlbumAction(10))

  },[dispatch])
  return (
    <AlbumWrapper>
      <HYThemeHeaderRCM title="新碟上架">HYNewAlbum</HYThemeHeaderRCM>
    <div className="content">
     <button className="arrow arrow-left sprite_02" onClick={e=>pageRef.current.prev()}></button>
     <div className="album">
     <Carousel dots={false} ref={pageRef}>
    {
      [0,1].map(item=>{
        return (
          <div key={item} className="page">
            {
              newAlbums.slice(item*5,(item+1)*5).map(iten=>{
                return <HYAlbumCover  key={iten.id}info={iten} size={100} width={118} 
                bgp="-570px"
                />
              })
            }
          </div>
        )
      })
    }
    </Carousel>
     </div>
     <button className="arrow arrow-right sprite_02" onClick={e=>pageRef.current.prev()}></button>
    </div>
    </AlbumWrapper>
  )

})
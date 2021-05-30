import React from 'react';
import HYDiscover from '../pages/discover';
import HYFriend from '../pages/friend';
import HYMine from '../pages/mine'
import {Redirect} from 'react-router-dom'
import HYRecommend from '../pages/discover/c-pages/recommend'
import HYRanking from '../pages/discover/c-pages/ranking'
import HYSongs from '../pages/discover/c-pages/songs'
import HYDjradio from '../pages/discover/c-pages/djradio'              
import HYArtist from '../pages/discover/c-pages/artist'
import HYAlbum from '../pages/discover/c-pages/album'
import HYPlayer from "../pages/player"
const routes=[
    {
        path:'/',
        exact:true,
        render:()=>(
            <Redirect to="/discover"/>
        )
    },
    {
        path:'/discover',
        component:HYDiscover,
        routes:[
            {
                path:'/discover/recommend',
                component:HYRecommend
            },
            {
                path:'/discover/ranking',
                component:HYRanking
            },
            {
                path:'/discover/songs',
                component:HYSongs
            },
            {
                path:'/discover/artist',
                component:HYArtist
            },
            {
                path:'/discover/djradio',
                component:HYDjradio
            },
            {
                path:'/discover/album',
                component:HYAlbum
            },
            {
                path:'/discover/player',
                component:HYPlayer
            },
        ]
    },
    {
        path:'/mine',
        component:HYMine
    },
    {
        path:'/friend',
        component:HYFriend
    },
  
    

];
export default routes;
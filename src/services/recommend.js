import request from './request';
export function getTopBanners(){
    return request({
        url:'/banner'
    })

}

export function getHotRecommends(limit){
    return request({
        url:'/personalized',
        params:{
            limit
        }
    })
}

export function getNewAlbums(limit){
    return request({
        url:'/top/album',
        params:{
            id:32311,
            limit
        }
    })
}
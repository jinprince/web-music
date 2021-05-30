import request from './request';
export function getSongDetsil(ids){
    return request({
        url:"/song/detail",
        params:{
            ids
        }
    })
}
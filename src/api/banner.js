import request from '@/utils/request.js';
const api = {
    list: '/banner'
}
export function getBannerList() {
    return request({
        url: api.list,
        method: 'get'
    })
}
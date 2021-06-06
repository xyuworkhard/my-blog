import request from '@/utils/request.js';
const api = {
    sets: '/setting',
}
export function getSetting() {
    return request({
        url: api.sets,
        method: 'get'
    })
}
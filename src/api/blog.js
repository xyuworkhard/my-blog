import request from '@/utils/request.js';
const api = {
    all: '/blogtype',
    single: '/blog'
}
export function getAllBlogList() {
    return request({
        url: api.all,
        method: 'get'
    })
}
export function getSingleBlogList(page = 1, limit = 10, categoryid = -1) {
    return request({
        url: api.single,
        method: 'get',
        params: {
            page,
            limit,
            categoryid
        }
    })
}

export function getBlog(id) {
    return request.get(`/api/blog/${id}`);
}

/**
 * 提交评论
 */
export function postComment(commentInfo) {
    return request.post(`/api/comment`, commentInfo);
}

export function getComments(blogid, page = 1, limit = 10) {
    return request.get("/api/comment", {
        params: {
            blogid,
            page,
            limit,
        },
    });
}
import axios from 'axios'
import showMessage from './showMessage'
const request = axios.create({
    baseURL: '/api',
    timeout: 1000,
})
request.interceptors.response.use(function (res) {
    // 对响应数据做点什么
    // if (response.data.code === 0) {
    //     return response.data.data;
    // } else {
    //     showMessage({
    //         context: response.data.msg
    //     })
    //     return null
    // }
    if (res.data.code !== 0) {
        showMessage({
            context: res.data.msg,
            type: "error",
            duration: 1500,
        });
        return null;
    }
    return res.data.data;
}, function (error) {
    // 对响应错误做点什么

    return Promise.reject(error);
});
export default request;
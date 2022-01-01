/*
 * @Author: your name
 * @Date: 2021-10-07 19:33:31
 * @LastEditTime: 2021-10-07 19:33:32
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \data-screen-study\imooc-datav-report-dev\src\utils\request.js
 */
import axios from 'axios'

const service = axios.create({
    baseURL: '',
    timeout: 5000
})

service.interceptors.response.use(
    response => {
        if (response.status === 200 && response.data) {
            console.log("[请求返回的数据]", response.data)
            return response.data
        } else {
            return Promise.reject(new Error('请求失败'))
        }
    },
    error => {
        return Promise.reject(error)
    }
)

export default service;
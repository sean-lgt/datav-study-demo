/*
 * @Author: your name
 * @Date: 2021-10-07 19:36:01
 * @LastEditTime: 2021-10-07 19:36:02
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \data-screen-study\imooc-datav-report-dev\src\api\index.js
 */

import request from '../utils/request.js'

const icode = '13926EAFCAA16CC3'

export function test() {
    return request({
        url: '/screen/data',
        method: 'get',
        params: {
            icode
        }
    })
}
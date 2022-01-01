/*
 * @Description: 
 * @Author: lgt
 * @Date: 2021-09-22 21:42:10
 * @LastEditTime: 2021-09-22 21:42:11
 * @LastEditors: xxx
 */
module.exports = {
    lintOnSave: false,
    devServer: {
        open: true,
        //以上的ip和端口是我们本机的;下面为需要跨域的
        proxy: { //配置跨域
            '/screen': { // 这里和方法里 axios里的 url匹配   （本行为第9行）
                target: 'https://apis.imooc.com/screen', //这里后台的地址模拟的;应该填写你们真实的后台接口  // 这里和后台地址完全匹配
                ws: true,
                changOrigin: true, //允许跨域
                pathRewrite: {
                    '^/screen': '' //请求的时候使用这个api就可以 // 这里和  第9行匹配
                }
            }
        }
    },
}
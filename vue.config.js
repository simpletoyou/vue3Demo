/*
 * @Description: 
 * @version: 
 * @Author: simpletoyou
 * @Date: 2022-04-18 14:43:45
 * @LastEditors: simpletoyou
 * @LastEditTime: 2022-04-18 17:15:11
 */
module.exports = {
  devServer: {
      port: 6666, // 端口
      // proxy: {
      //     '/api': { //请求路径关键字
      //         target: 'http://localhost:8024/management/', //对应自己的接口
      //         changeOrigin: true,//是否允许跨域,在本地会创建一个虚拟服务端，然后发送请求的数据，
      //                             // 并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
      //         ws: true,
      //         pathRewrite: {
      //             '^/api': ''      //这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替
      //                                 // 比如我要调用'http://localhost:8024/management/user/add'，直接写‘/api/user/add’即可
      //         }
      //     }
      // }
       proxyTable: {
      // 可配置多个代理
      "/service": {
        // 把 localhost:8080 代理为下面的地址
        target: "https://music.163.com", // localhost:8080代理为这个地址
        secure: true, // 如果是https，需要配置true
        changeOrigin: true, // 是否跨域
        pathRewrite: {   // 重写，如果开发环境地址中不需要service，那么可以将其重写为''
          "^/service": ""
        }
      }
    },
  },
  // lintOnSave: false // 取消 eslint 验证
}

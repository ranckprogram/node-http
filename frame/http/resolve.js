// 解析路由得到 控制器 方法 参数
var util = require('util');
var url = require('url');
var path = require('path')
var querystring = require('querystring')
var router = require('../../config/router'); // 读取开发者路由配置，指向对应的控制器方法

module.exports = function (req, res) {

    var allUrl = url.parse(req.url, true)
    var pathname = allUrl.pathname // 这个可以用于路由映射
    var controller = router[pathname]
    var className = controller && controller.split('.')[0]
    var methodName = controller && controller.split('.')[1]
    var params
    var M
    if (pathname === '/favicon.ico') {
        return
    }
    if (className && methodName) {
        M = require(Rf.root + '/controller/' + className)
    }
    req.query = allUrl.query
    req.search = allUrl.search
    switch (req.method) {
        case 'GET':
            M && M[methodName](req, res)
            // res.end()  // 这个分片了，拆装一下
            break;
        case 'POST':
        M && M[methodName](req, res)
            // var post = '';
            // req.on('data', function (chunk) {
            //     post += chunk;
            // });
            // req.on('end', function () {
            //     req.file = post
            //     post = querystring.parse(post);
            //     req.params = post
            //     M && M[methodName](req, res)
            //     // res.end()
            // });
            break
        case 'PUT':
            console.dir("put")
            break
        case 'DELETE':
            console.dir('delete');
            break
        default:
            console.dir('默认')
            break
    }
}
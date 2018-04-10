var http = require('http')
var url = require('url');
var resolve = require('./resolve');
var util = require('util');

http.createServer(function (req, res) {
    // res.writeHead(200, {
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Origin": "*"  // 允许跨域访问
    // })
    console.dir(process.cwd() + '/uploads')
    resolve(req, res)
}).listen(Rf.port)

console.dir(`${Rf.host}:${Rf.port}启动成功`)
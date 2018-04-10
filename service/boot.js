// 现在先把框架的boot和应用的boot合在一起
var fs = require('fs')
var path = require('path')
var config = require('../config/app') 
global.Rf = {
  v: 'v1.1',
  auth: 'ranck',
  host: config.host,
  port: config.port,
  root: path.dirname(require.main.filename),
}
module.exports = function (cb) {
  console.dir('boot 启动中正在初始化各种配置')
  // 这段是废弃的，但是为了练习操作文件，暂时没删
  fs.readdir(path.join(Rf.root, 'controller/'), function (err, files) {
      if (err) {
          console.dir(err + '控制器读取错误')
          return false
      }
      files.forEach(file => {
        var name = file.split('.')
      })
      cb()
  })

  // 配置文件中的上传文件夹目录，如果不存在，则创建文件夹
  fs.stat(config.uploadFolder, function (err) {
    if (err) {
      fs.mkdir(err.path)      
    }
  })

}
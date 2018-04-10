// 我希望运行这个文件就可以启动起所有我配置好的服务
// 把全部属性方法放到一个变量中 (十分重要)，也许在boot中就要这样弄, 配置肯定要存到里面去

// 再启动过程中，拿到控制器，存到全局中，方便下一步http和router获取处理
//// 特定的目录结构可以在初始化那里判断生成
var boot = require('./service/boot')

var policy = require('./service/policy')
var http = require('./frame/http/index')

// 实际上这里的启动也是异步的，各自管各自的
// 可以使用回调
boot(function () {
    console.dir(Rf.controllerList)    
})
policy()
// 然后是控制器，当访问控制器时候，用路由解析访问规则，拿到控制器和参数
http

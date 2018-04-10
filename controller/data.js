var BaseResult = require('../model/Index');

BaseResult.SUCCESS.setData({a:10,b:[{c:20,d:30},{e:40,f:50}]});
console.log(BaseResult.SUCCESS);

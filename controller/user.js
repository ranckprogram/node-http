var multiparty = require('multiparty');
var fs = require('fs')
var path = require('path')
var util = require('util')
var fileTools = require('../frame/file/index')
var config = require('../config/app')

function UnicodeToAscii(content) {
    var code = content.match(/&#(\d+);/g);
    result = '';
    for (var i = 0; i < code.length; i++) {
        result += String.fromCharCode(code[i].replace(/[&#;]/g, ''));

    }
    return result
}
module.exports = {
    info(req, res) {
        let result = {
            name: 'ranck',
            query: req.query
        }
        res.write(JSON.stringify(result))
    },
    upload(req, res) {
        var result = {
            data: '上传成功'
        }
        var uploadPath = config.uploadFolder       
        var form = new multiparty.Form();
        form.parse(req, function (err, fields, files) {
            if (err) {
                throw err
            }
            var regFileName = /filename="(\S*)"/
            files.upload.forEach(file => {
                var obj = file.headers
                var fileName = obj['content-disposition'].match(regFileName)[1]
                var fileNameArr = fileName.split('.')
                var brifName = (fileNameArr[0])
                var suffixName = fileNameArr[1]

                fileTools.move(file.path, path.join(uploadPath, `${brifName}.${suffixName}`))

                res.writeHead(200, {
                    'content-type': 'text/plain'
                });
                res.write('');
                res.end(util.inspect(result));
            });
        });
    }
}
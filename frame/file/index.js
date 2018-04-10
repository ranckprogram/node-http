var fs = require('fs')

module.exports = {
    move: function (oldFile, newFile, callback) {
        var readStream = fs.createReadStream(oldFile);
        var writeStream = fs.createWriteStream(newFile);
        readStream.pipe(writeStream);
        if (callback && callback.end) {
            readStream.on('end', function () {
                callback.end()
                console.log('copy end');
            });
        }
        if (callback && callback.error) {
            readStream.on('error', function () {
                callback.error()
                console.log('copy error');
            });
        }
    }
}
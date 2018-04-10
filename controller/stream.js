var fs = require('fs')
module.exports = {
    writeFile(req, res) {
        var name = req.query.name

        var writable = fs.createWriteStream('index.txt', {
            flags: 'w',
            defaultEncoding: 'utf8',
            mode: 0666,
        });

        writable.on('finish', function () {
            console.log('write finished 000000');
            process.exit(0);
        });

        writable.on('error', function (err) {
            console.log('write error - %s', err.message);
        });

        writable.write(name, 'utf8');

        writable.end();
        res.write('123')

    }
}
var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:20717/'

MongoClient.connect(url , function (err, db) {
    if (err) throw err
    var dbo = db.db('school')

})
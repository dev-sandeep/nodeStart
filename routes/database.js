
/*
 * Example to start with database
 */

exports.connectionTest = function (req, res) {
    var mongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/retail";

    mongoClient.connect(url, function (err, db) {
        if (err) throw err;
        console.log("Database created!");
        res.send("Database connected!");
        db.close();
    });
    //res.send({ users: ["sandeep", "gunjan"] });
};

exports.getData = function (req, res) {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/retail";

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("retail");
        dbo.collection("inventory").findOne({}, function (err, result) {
            if (err) throw err;
            res.send({ result: result });
            db.close();
        });
    });

};


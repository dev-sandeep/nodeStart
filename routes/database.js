
/*
 * Example to create database connection
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
};

/**
 * Example to make a get call
 */
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

/**
 * Example to make a post call
 */
exports.postData = function (req, response) {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("retail");
        var date = new Date();
        var dateStr = date.toLocaleTimeString();

        var myobj = {
            "item": "item_" + dateStr,
            "qty": "25",
            "size": { "h": 10, "w": 35.5, "uom": "cm" },
            "tags": ["tag_" + dateStr]
        };
        dbo.collection("inventory").insertOne(myobj, function (err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            response.send("1 document inserted");
            db.close();
        });
    });
}

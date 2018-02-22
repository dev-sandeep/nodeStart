
/*
 * GET users listing.
 */

exports.list = function (req, res) {
    res.send({ result: 'true', data: ["IBM", "SAP", "GS"] });
};
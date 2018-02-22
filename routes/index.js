
/*
 * GET home page.
 */

exports.index = function (req, res) {
  // res.render('index', { title: 'Express' });
  res.send({ result: 'true', data: [{ name: "sandeep", school: "army", college: "arya" }] });
};
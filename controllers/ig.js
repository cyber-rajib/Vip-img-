const { errorHandler } = require("../utils");

exports.ig = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../data/image/ig.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
  res.json({"Authors":"Islamick Chat","data" : `${link}`, "url" : `${link}`});
};
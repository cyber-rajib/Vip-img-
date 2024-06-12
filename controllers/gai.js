const { errorHandler } = require("../utils");

exports.gai = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../data/image/gai.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
  res.json({"Authors":"Islamick Chat","data" : `${link}`, "url" : `${link}`});
};
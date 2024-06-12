const { errorHandler } = require("../utils");

exports.mp3 = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../data/audio/mp3.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
 res.json({"Authors":"Văn Thiện","data" : `${link}`, "url" : `${link}`});
};
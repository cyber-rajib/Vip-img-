const { errorHandler } = require("../utils");
const fs = require("fs");
const path = require("path");

const controllersPath = path.join(__dirname, "../controllers");

exports.home = async (req, res, next) => {
  const apiUrls = fs.readdirSync(controllersPath)
    .map(file => path.parse(file).name.toLowerCase())
    .reduce((acc, api) => ({ ...acc, [api]: `https://apirandom-2.cuongaz132006.repl.co/${api}` }), {});

  const jsonString = `========== [ DANH SÁCH API ] =========\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n
${Object.entries(apiUrls).map(([api, url]) => `${api}:  ${url}`).join("\n\n")}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n========== [ COPYRIGHT ] ==========\nⒸⓇⒺ Văn Thiện\nFacebook: https://www.facebook.com/lamvanthien206\nⒸⓇⒺ Mạnh Cường\nFacebook: https://ww.facebook.com/100022376349973`;

  res.set('Content-Type', 'application/json');
  res.send(jsonString);
};
const request = require("request");
const Login = require("./login");
const site = "https://projekodun.org/";

module.exports = (token, secret, authid, callback) => {
  Login(token);
    request(`${site}api/find-user/${secret}/${authid}`, (error, response, body) => {
      if (!error && response.statusCode == 200) {
        const info = JSON.parse(body);
        if (info.status != "success") {
          return callback("ProjeKodun API Error: " + info.msg, null);
        } else {
          return callback(null, info)
        }
      } else {
        return callback("ProjeKodun API Error: " + error, null)
      }
    });
};

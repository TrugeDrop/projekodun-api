const request = require("request");
const Login = require("./login");
const site = "https://projekodun.org/";

module.exports = (token, code_title, callback) => {
  Login(token);
  request(`${site}api/app/login/${token}/like-code/${code_title}`, function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    const info = JSON.parse(body);
    if(info.status != "success"){
      return callback("ProjeKodun API Error: "+info.msg);
    }else{
      return callback(info)
    }
    }else{
    console.log(error)
  }
})
}

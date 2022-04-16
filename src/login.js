const request = require("request");
const site = "https://projekodun.org/";

module.exports = (token, callback) => request(`${site}api/app/login/${token}`, function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    const info = JSON.parse(body);
    if(info.status != "success"){
      console.log("ProjeKodun API connect error!");
    }
  }else{
    console.log(error)
  }
})

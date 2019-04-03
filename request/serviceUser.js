const chai = require('chai'), chaiHttp = require('chai-http');
chai.use(chaiHttp);
const apis = require("../config/apis").allApis;
const baseUrl = require("../config/env").env;

exports.get_user_profile = (accesToken) => {
  return chai.request(baseUrl.prod)
    .get(apis.user.getUserProfile)
    .set({Authorization: "Bearer " + accesToken, 'content-type': 'application/json'})
}
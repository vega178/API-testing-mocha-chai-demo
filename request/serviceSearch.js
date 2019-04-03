const chai = require('chai'), chaiHttp = require('chai-http');
chai.use(chaiHttp);
const apis = require("../config/apis").allApis;
const baseUrl = require("../config/env").env;

exports.search = function(accesToken){
  return chai.request(baseUrl.prod)
    .get(apis.search.searchItem)
    .set({Authorization: "Bearer " + accesToken, 'content-type': 'application/json'})
    .query({q:'Metallica', type: 'artist'})
}
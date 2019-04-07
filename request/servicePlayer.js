const chai = require('chai'), chaiHttp = require('chai-http');
chai.use(chaiHttp);
const apis = require("../config/apis").allApis;
const baseUrl = require("../config/env").env;

exports.playback_start = function(accesToken,playbackId){
    return chai.request(baseUrl.prod)
      .put(apis.player.startUserPlayback)
      .set({Authorization: "Bearer " + accesToken, 'content-type': 'application/json'})
      .send({context_uri: playbackId})
}
var chai = require('chai'), chaiHttp = require('chai-http');
var expect = require("chai").expect;
chai.use(chaiHttp);
var apis = require("../../API-testing-mocha-chai-demo/urls/apis").allApis;
var baseUrl = require("../../API-testing-mocha-chai-demo/urls/env").env;
var accesToken = "BQDZVL3hnrdGltxzbXogwAFTuf7i8fnlrwUtDI3u6t-msYIdIaKpQ-uqPT6_XGAZfRr1_0ykR6HuMkoXNxBHpgO7zQmXyLy_l10zN7HdWz9Q3tFFApauzqB19ayTH2ujf1sW63FBY16FqzzM9J09RLzAKgECGDtThuCd6dCkmYN6MFCzTwyX3r9DFCUUe11BaqXxtVIKiYfsKbcEkvi7jRQj3yGU1rsTHE5O7gZQL69QNMCqXamMIa_oprCDEuBS3O1H__SaQ4tkxTA"; 

describe("@DemoTest @UserSpotify Scenarios API \n", function() {
  this.timeout(0);
  
  it("@test002 @search_an_item @demoSuite", function(done){
    chai.request(baseUrl.prod)
    .get(apis.search.searchItem)
    .set({Authorization: "Bearer " + accesToken, 'content-type': 'application/json'})
    .query({q:'Metallica', type: 'artist'})
    .end(function(error, response) {  
      expect(error).to.be.null;
      expect(response).to.have.status(200);
      response.body.artists.items.forEach(function (result) { 
         expect(result).not.to.be.null; 
         expect(result.type).to.have.string('artis');         
      }); 
      done();  
    });
  }); 
});  
var chai = require('chai'), chaiHttp = require('chai-http');
var expect = require("chai").expect;
chai.use(chaiHttp);
var apis = require("../../API-testing-mocha-chai-demo/urls/apis").allApis;
var baseUrl = require("../../API-testing-mocha-chai-demo/urls/env").env;
var credentials = require("../../API-testing-mocha-chai-demo/data/userCredentials").credentials;
var accesToken = "BQDZVL3hnrdGltxzbXogwAFTuf7i8fnlrwUtDI3u6t-msYIdIaKpQ-uqPT6_XGAZfRr1_0ykR6HuMkoXNxBHpgO7zQmXyLy_l10zN7HdWz9Q3tFFApauzqB19ayTH2ujf1sW63FBY16FqzzM9J09RLzAKgECGDtThuCd6dCkmYN6MFCzTwyX3r9DFCUUe11BaqXxtVIKiYfsKbcEkvi7jRQj3yGU1rsTHE5O7gZQL69QNMCqXamMIa_oprCDEuBS3O1H__SaQ4tkxTA"; 

describe("@DemoTest @UserSpotify Scenarios API \n", function() {
  this.timeout(0);
  
  it("@test001 @get_user_profile @demoSuite", function(done){
    chai.request(baseUrl.prod)
    .get(apis.user.getUserProfile)
    .set({Authorization: "Bearer " + accesToken, 'content-type': 'application/json'})
    .end(function(error, response) { 
      expect(error).to.be.null;
      expect(response).to.have.status(200);
      expect(response.body.display_name).to.equal(credentials.prod.name);
      expect(response.body.id).to.equal(credentials.prod.id);
      expect(response.body.email).to.equal(credentials.prod.email);
      expect(response.body.birthdate).to.equal(credentials.prod.birthDate);
      expect(response.body.external_urls).not.to.be.null; 
      response.body.images.forEach(function(img){
        expect(img.url).not.to.be.null; 
      });
      done();  
    });
  }); 

  /*it("@test001 @get_user_profile @demoSuite", function(done){
    setTimeout(function(){

      chai.request(baseUrl.prod)
      .get(apis.user.getUserProfile)
      .set({Authorization: "Bearer " + accesToken, 'content-type': 'application/json'})
      .end(function(error, response) {
        console.log(response.body);
        expect(error).to.be.null;
        expect(response).to.have.status(200); 
        done();  
      });

     }
     ,4000); 
  });*/
}); 
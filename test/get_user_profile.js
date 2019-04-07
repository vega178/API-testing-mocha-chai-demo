const chai = require('chai'), chaiHttp = require('chai-http');
const expect = require("chai").expect;
chai.use(chaiHttp);
const credentials = require("../../API-testing-mocha-chai-demo/data/userCredentials").credentials;
const accesToken = require("../../API-testing-mocha-chai-demo/config/auth").tokens;
const userProfile = require("../request/serviceUser");

describe("@DemoTest @UserSpotify Scenarios API \n", () => {

  it("@test001 @get_user_profile @demoSuite", (done) => {
    userProfile.get_user_profile(accesToken.prod)
    .end((error, response) => { 
      expect(error).to.be.null;
      expect(response).to.have.status(200);
      expect(response.body.display_name).to.equal(credentials.prod.name);
      expect(response.body.id).to.equal(credentials.prod.id);
      expect(response.body.email).to.equal(credentials.prod.email);
      expect(response.body.birthdate).to.equal(credentials.prod.birthDate);
      expect(response.body.external_urls).not.to.be.null; 
      response.body.images.forEach((img) => {
        expect(img.url).not.to.be.null; 
      });
      done();  
    });
  }); 
}); 
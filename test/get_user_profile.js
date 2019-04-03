const chai = require('chai'), chaiHttp = require('chai-http');
const expect = require("chai").expect;
chai.use(chaiHttp);
const credentials = require("../../API-testing-mocha-chai-demo/data/userCredentials").credentials;
const accesToken = "BQBP_JmR9cIPjB77QIXOYNTHMchNyBZsjhkbK5GwRJjp_Jn-fMHsKdkbSSYNsMpKdzmv4Gz2CYTzzNJvdFRsJFQXruCt3j8dzfTocgnWZ59fhNA-vKcM3WnbrAODzMDJfwYKE55OdCiQNNjn01UMKh8Lw9jjSDbmfRF3sI959MxUM_kzyxpWYwlgaE5n0-ISoUvovuPI14KRr1oIhRZQHa0_Z0y0ex_swDIo1xEe8vQq7-2XWNPUry6sze4M4sB7tPAQZTcWDP0OD2s"; 
const userProfile = require("../request/serviceUser");

describe("@DemoTest @UserSpotify Scenarios API \n", () => {

  it("@test001 @get_user_profile @demoSuite", (done) => {
    userProfile.get_user_profile(accesToken)
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
const chai = require('chai'), chaiHttp = require('chai-http');
const expect = require("chai").expect;
chai.use(chaiHttp);
const token = "BQBP_JmR9cIPjB77QIXOYNTHMchNyBZsjhkbK5GwRJjp_Jn-fMHsKdkbSSYNsMpKdzmv4Gz2CYTzzNJvdFRsJFQXruCt3j8dzfTocgnWZ59fhNA-vKcM3WnbrAODzMDJfwYKE55OdCiQNNjn01UMKh8Lw9jjSDbmfRF3sI959MxUM_kzyxpWYwlgaE5n0-ISoUvovuPI14KRr1oIhRZQHa0_Z0y0ex_swDIo1xEe8vQq7-2XWNPUry6sze4M4sB7tPAQZTcWDP0OD2s"; 
const searchItem = require("../../API-testing-mocha-chai-demo/request/serviceSearch"); 

describe("@DemoTest @UserSpotify Scenarios API \n", () => {

  it("@test002 @search_an_item @demoSuite", (done) => {
    searchItem.search(token)
    .end((error, response) => {  
      expect(error).to.be.null;
      expect(response).to.have.status(200);
      response.body.artists.items.forEach((result) => { 
        expect(result).not.to.be.null; 
        expect(result.type).to.have.string('artis');         
      }); 
      done();  
    });
  }); 
});  
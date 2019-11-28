const chai = require('chai'), chaiHttp = require('chai-http');
const expect = require("chai").expect;
chai.use(chaiHttp);
const accesToken = require("../../API-testing-mocha-chai-demo/config/auth").tokens;
const searchItem = require("../../API-testing-mocha-chai-demo/request/serviceSearch"); 
const playBackService  = require("../../API-testing-mocha-chai-demo/request/servicePlayer");

describe("@DemoTest @UserSpotify Scenarios API \n", () => {
  let idSong = ""; 
  let nameSong = "...And Justice For All"; 

  it("@test002 @search_an_item @demoSuite", (done) => {
    searchItem.search(accesToken.prod, 'metallica' , 'artist', 2)
    .end((error, response) => { 
      expect(error).to.be.null;
      expect(response).to.have.status(200);
      response.body.artists.items.forEach((result) => { 
        expect(result).not.to.be.null; 
        expect(result.type).to.have.string('artist');         
      }); 
      done();  
    });
  });

  it("@test003 @search_a_album_item_and_start_it @demoSuite", (done) => {
    searchItem.search(accesToken.prod, nameSong, 'album', 10)
    .end((error, response) => {
      idSong = response.body.albums.items[0].uri; 
      response.body.albums.items.forEach((albumData) => {
        expect(albumData.type).to.equal('album');
        expect(albumData.release_date_precision.length > 0).to.equal(true);
        expect(albumData.total_tracks > 0).to.equal(true);
      });
      
      playBackService.playback_start(accesToken.prod, idSong)
      .end((error, response) => {
        expect(response).to.have.status(204);
        expect(error).to.be.null; 
        done(); 
      }); 
    });
  });
});  
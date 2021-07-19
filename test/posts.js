let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../app");
let bodyParser = require("body-parser");
var app = require('../app.js');

server.use(bodyParser.urlencoded({ extended: false }));
 server.use(bodyParser.json());

//Assertion style
chai.should();

chai.use(chaiHttp);


describe('Posts API', () => {
  /*test the GET route*/

  describe("GET /posts", ()=>{
    it("It should get all the posts", (done)=>{
      chai.request(server)
          .get("/posts")
          .end((err, response)=>{
              response.should.have.status(200);
              response.body.should.be.a("array");
            //response.body.length.should.be.eq(3);
            done();

          });
    });

    it("It should not get any the posts", (done)=>{
      chai.request(server)
          .get("/post")
          .end((err, response)=>{
              response.should.have.status(404);
           done();

         });
    });
  });

  /*test the GET (by id) route*/

  describe("GET /posts/:postId", ()=>{
    it("It should get a post by the id provided", (done)=>{
      const postId = '60f3499e9b8a9b12415b540f';

      chai.request(server)
          .get("/posts/" + postId)
          .end((err, response)=>{
              response.should.have.status(200);
              response.body.should.be.a("object");
              response.body.should.have.property('_id');
              response.body.should.have.property('title');
              response.body.should.have.property('description');
            done();

          });
    });

});



  /*test the POST route*/

    describe("POST /posts", ()=>{
      it("It should post a new post", (done)=>{
        const post = {
          title : "post for test",
          description : "this test is for testing the application"
        };
        chai.request(server)
            .post("/posts")
            .send(post)
            .end((err, response)=>{
                response.should.have.status(200);
                response.body.should.be.a('object');
                response.body.should.have.property('title').eql('post for test');
                response.body.should.have.property('description').eql('this test is for testing the application');
              done();

            });


            it("It should not post a new post without title property", (done)=>{
              const post = {

                description : "this test is for testing the application"
              };
              chai.request(server)
                  .post("/posts")
                  .send(post)
                  .end((err, response)=>{
                      response.should.have.status(400);
                      response.text.should.be.eq("The post needs a title");
                    done();

                  });
      });


});
  /*test the PATCH route*/

    describe("PATCH /posts/postId", ()=>{
      it("It should patch an existing post", (done)=>{
        const postId = '60f4ba1a800d221759acfbec';
        const post = {
          title:'post for patching'
        };
        chai.request(server)
            .patch("/posts/" + postId)
            .send(post)
            .end((err, response)=>{
                response.should.have.status(200);
                //response.body.should.be.a("object");
              //response.body.length.should.be.eq(3);
              done();

            });
      });

});

    /*test the DELETE route*/

    describe("DELETE /posts/:postId", ()=>{
      it("It should delete an existing post", (done)=>{
        const postId = '60f4ba1a800d221759acfbec';

        chai.request(server)
            .delete("/posts/" + postId)
            .end((err, response)=>{
                response.should.have.status(200);
              done();

            });
      });


});

});

});

/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
process.env.NODE_ENV = "test";

const mongoose = require("mongoose");

const chai = require("chai");
const chaiHttp = require("chai-http");
const Test = require("../models/Test");

const app = require("../app");

const should = chai.should();

chai.use(chaiHttp);

describe("Tests", () => {
  beforeEach((done) => {
    Test.remove({}, (err) => {
      done();
    });
  });

  describe("/GET tests", () => {
    it("it should GET all tests", (done) => {
      chai
        .request(app)
        .get("/tests")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });
  describe("/POST test", () => {
    it("it should POST a Test anyway", (done) => {
      const test = {
        testGroup: "Test Group",
        description: "Test Description",
        type: "E2E",
      };
      chai
        .request(app)
        .post("/tests")
        .send(test)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a("object");
          res.body.should.have.a
            .property("message")
            .eql("Successfully created");
          res.body.test.should.have.property("testGroup");
          res.body.test.should.have.property("description");
          res.body.test.should.have.property("type");
          done();
        });
    });
  });

  describe("/GET /test/:test  ", () => {
    it("it should GET a test by the given id", (done) => {
      const test = new Test({
        testGroup: "Test Group",
        description: "Test Description",
        type: "E2E",
      });
      test.save((err, testSaved) => {
        chai
          .request(app)
          .get(`/tests/${testSaved.id}`)
          .send(testSaved)
          .end((_, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have.property("testGroup");
            res.body.should.have.property("description");
            res.body.should.have.property("type");
            res.body.should.have.property("_id").eql(testSaved.id);
            done();
          });
      });
    });
  });

  describe("/PUT /test/:test ", () => {
    it("it should UPDATE an test given an id", (done) => {
      const test = new Test({
        testGroup: "Test Group",
        description: "Test Description",
        type: "E2E",
      });
      test.save((err, testSaved) => {
        chai
          .request(app)
          .put(`/tests/${testSaved.id}`)
          .send({ testGroup: "New Issue", description: "Nouvelle description" })
          .end((_, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have.property("message").eql("Test updated");
            done();
          });
      });
    });
  });
  describe("/DELETE /issue/:issue issue ", () => {
    it("it should DELETE an issue given an id", (done) => {
      const test = new Test({
        testGroup: "Test Group",
        description: "Test Description",
        type: "E2E",
      });
      test.save((err, testSaved) => {
        chai
          .request(app)
          .delete(`/tests/${testSaved.id}`)
          .send({ title: "New ", description: "Nouvelle description" })
          .end((_, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have
              .property("message")
              .eql("successfully deleted!");
            done();
          });
      });
    });
  });
});

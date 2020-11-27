/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
process.env.NODE_ENV = 'test';

const mongoose = require('mongoose');

const chai = require('chai');
const chaiHttp = require('chai-http');
const Sprint = require('../models/Sprint');

const app = require('../app');

const should = chai.should();

chai.use(chaiHttp);

describe('Sprints', () => {
  beforeEach((done) => {
    Sprint.remove({}, (err) => {
      done();
    });
  });

  describe('/GET sprint', () => {
    it('it should GET all sprints', (done) => {
      chai
        .request(app)
        .get('/sprints')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });

  describe('/POST Sprint', () => {
    it('it should not POST sprint without startDate field', (done) => {
      const sprint = {
        endDate: new Date(),
      };
      chai
        .request(app)
        .post('/sprints')
        .send(sprint)
        .end((err, res) => {
          res.should.have.status(401);
          res.should.be.a('object');
          res.should.have.property('error');
          done();
        });
    });

    it('it should POST a Sprint', (done) => {
      const sprint = {
        endDate: new Date(),
        startDate: new Date(),
      };
      chai
        .request(app)
        .post('/sprints')
        .send(sprint)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.a
            .property('message')
            .eql('successfully created');
          res.body.sprint.should.have.property('endDate');
          res.body.sprint.should.have.property('startDate');
          res.body.sprint.should.have.property('issues');
          done();
        });
    });
  });

  describe('/GET /sprint/:sprint sprint ', () => {
    it('it should GET a sprint by the given id', (done) => {
      const sprint = new Sprint({
        endDate: new Date(),
        startDate: new Date(),
      });
      sprint.save((err, sprintSaved) => {
        chai
          .request(app)
          .get(`/sprints/${sprintSaved._id}`)
          .send(sprintSaved)
          .end((_, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('endDate');
            res.body.should.have.property('startDate');
            done();
          });
      });
    });
  });

  describe('/DELETE /sprint/:sprint sprint ', () => {
    it('it should DELETE a sprint given an id', (done) => {
      const sprint = new Sprint({
        endDate: new Date(),
        startDate: new Date(),
      });
      sprint.save((err, sprintSaved) => {
        chai
          .request(app)
          .delete(`/sprints/${sprintSaved._id}`)
          .end((_, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have
              .property('message')
              .eql('successfully deleted!');
            done();
          });
      });
    });
  });
});

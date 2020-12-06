/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
process.env.NODE_ENV = 'test';

const mongoose = require('mongoose');

const chai = require('chai');
const chaiHttp = require('chai-http');
const Issue = require('../models/Issue');

const app = require('../app');

const should = chai.should();

chai.use(chaiHttp);

describe('Issues', () => {
  beforeEach((done) => {
    Issue.remove({}, (err) => {
      done();
    });
  });

  describe('get all issues', () => {
    it('it should GET all issues', (done) => {
      chai
        .request(app)
        .get('/issues')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });

  describe('create issue', () => {
    it('it should not create an Issue without title field', (done) => {
      const issue = {
        description: 'A test description',
        type: 'feature',
      };
      chai
        .request(app)
        .post('/issues')
        .send(issue)
        .end((err, res) => {
          res.should.have.status(401);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          res.body.should.have.property('message').eql('Missing property');
          done();
        });
    });

    it('it should create an Issue', (done) => {
      const issue = {
        title: 'Test Issue',
        description: 'Test Description',
        type: 'feature',
      };
      chai
        .request(app)
        .post('/issues')
        .send(issue)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.a.property('message').eql('Créé avec succès');
          res.body.issue.should.have.property('title').eql('Test Issue');
          res.body.issue.should.have
            .property('description')
            .eql('Test Description');
          done();
        });
    });
  });

  describe('Get an issue by id', () => {
    it('it should get an issue by the given id', (done) => {
      const issue = new Issue({
        title: 'New Issue',
        description: 'New description',
        type: 'documentation',
      });
      issue.save((err, issueSaved) => {
        chai
          .request(app)
          .get(`/issues/${issueSaved.id}`)
          .send(issueSaved)
          .end((_, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('title').eql('New Issue');
            res.body.should.have.property('description').eql('New description');
            res.body.should.have.property('_id').eql(issueSaved.id);
            done();
          });
      });
    });
    it("it should send an error if issue doesn't exist", (done) => {
      const issue = new Issue({
        title: 'New Issue',
        description: 'New description',
        type: 'documentation',
      });
      issue.save((err, issueSaved) => {
        chai
          .request(app)
          .get(`/issues/abcdEfgH`)
          .send(issueSaved)
          .end((_, res) => {
            res.should.have.status(400);
            res.body.should.be.a('object');
            res.body.should.have.property('error');
            res.body.should.have.property('message').eql("Issue doesn't exist");
            done();
          });
      });
    });
  });

  describe('update an issue ', () => {
    it('it should UPDATE an issue given an id', (done) => {
      const issue = new Issue({
        title: 'New Issue',
        description: 'New description',
        type: 'documentation',
      });
      issue.save((err, issueSaved) => {
        chai
          .request(app)
          .put(`/issues/${issueSaved.id}`)
          .send({ title: 'New Issue', description: 'Nouvelle description' })
          .end((_, res) => {
            res.should.have.status(201);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Issue updated');
            res.body.should.have.property('issue');
            res.body.issue.should.have.property('title').eql('New Issue');
            res.body.issue.should.have
              .property('description')
              .eql('Nouvelle description');
            res.body.issue.should.have.property('_id').eql(issueSaved.id);
            done();
          });
      });
    });
  });
  describe('delete an issue ', () => {
    it('it should DELETE an issue given an id', (done) => {
      const issue = new Issue({
        title: 'New Issue',
        description: 'New description',
        type: 'feature',
      });
      issue.save((err, issueSaved) => {
        chai
          .request(app)
          .delete(`/issues/${issueSaved.id}`)
          .send({ title: 'New ', description: 'Nouvelle description' })
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
  describe('update issue difficulty ', () => {
    it('it should UPDATE an issue given an id and a difficulty', (done) => {
      const issue = new Issue({
        title: 'New Issue',
        description: 'New description',
        type: 'feature',
      });
      issue.save((err, issueSaved) => {
        chai
          .request(app)
          .put(`/issues/difficulty/${issueSaved.id}`)
          .send({ difficulty: 2 })
          .end((_, res) => {
            res.should.have.status(201);
            res.body.should.be.a('object');
            res.body.should.have.property('difficulty').eql(2);
            res.body.should.have.property('_id').eql(issueSaved.id);
            done();
          });
      });
    });
    it('it should not UPDATE an issue with invalid field', (done) => {
      const issue = new Issue({
        title: 'New Issue',
        description: 'New description',
        type: 'feature',
      });
      issue.save((err, issueSaved) => {
        chai
          .request(app)
          .put(`/issues/difficulty/${issueSaved.id}`)
          .send({ difficulty: 'Truc' })
          .end((_, res) => {
            res.should.have.status(401);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Invalid field');
            done();
          });
      });
    });
  });
  describe('update issue priority ', () => {
    it('it should UPDATE an issue given an id and a priority', (done) => {
      const issue = new Issue({
        title: 'New Issue',
        description: 'New description',
        type: 'feature',
      });
      issue.save((err, issueSaved) => {
        chai
          .request(app)
          .put(`/issues/priority/${issueSaved.id}`)
          .send({ priority: 'HIGH' })
          .end((_, res) => {
            res.should.have.status(201);
            res.body.should.be.a('object');
            res.body.should.have.property('priority').eql('HIGH');
            res.body.should.have.property('_id').eql(issueSaved.id);
            done();
          });
      });
    });
    it('it should not UPDATE an issue with invalid field', (done) => {
      const issue = new Issue({
        title: 'New Issue',
        description: 'New description',
        type: 'feature',
      });
      issue.save((err, issueSaved) => {
        chai
          .request(app)
          .put(`/issues/priority/${issueSaved.id}`)
          .send({ priority: 'Truc' })
          .end((_, res) => {
            res.should.have.status(401);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Invalid field');
            done();
          });
      });
    });
  });
});

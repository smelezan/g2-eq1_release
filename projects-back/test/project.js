/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
process.env.NODE_ENV = 'test';

const mongoose = require('mongoose');

const chai = require('chai');
const chaiHttp = require('chai-http');
const Project = require('../models/Project');

const app = require('../app');

const should = chai.should();

chai.use(chaiHttp);

describe('Projects', () => {
  beforeEach((done) => {
    Project.remove({}, (err) => {
      done();
    });
  });

  describe('get all projects', () => {
    it('it should GET all projects', (done) => {
      chai
        .request(app)
        .get('/projects')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });
  describe('create project', () => {
    it('it should not create a project without name field', (done) => {
      const project = {
        sprints: [],
        issues: [],
      };
      chai
        .request(app)
        .post('/projects')
        .send(project)
        .end((err, res) => {
          res.should.have.status(401);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          res.body.should.have.property('message').eql('Missing property');
          done();
        });
    });
    it('it should creaet a project', (done) => {
      const project = {
        name: 'test project',
      };
      chai
        .request(app)
        .post('/projects')
        .send(project)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('Successfully created');
          res.body.should.have.property('project');
          res.body.project.should.have.property('name').eql('test project');
          done();
        });
    });
  });
  describe('Get a project by id', () => {
    it('it should get a project by the given id', (done) => {
      const project = new Project({
        name: 'test project',
      });
      project.save((err, projectSaved) => {
        chai
          .request(app)
          .get(`/projects/${projectSaved._id}`)
          .send(projectSaved)
          .end((_, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('name').eql('test project');
            done();
          });
      });
    });
  });
});

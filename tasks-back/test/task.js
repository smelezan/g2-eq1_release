/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
process.env.NODE_ENV = 'test';

const mongoose = require('mongoose');

const chai = require('chai');
const chaiHttp = require('chai-http');
const Task = require('../models/Task');

const app = require('../app');

const should = chai.should();

chai.use(chaiHttp);

describe('Tasks', () => {
  beforeEach((done) => {
    Task.remove({}, (err) => {
      done();
    });
  });

  describe('/GET task', () => {
    it('it should GET all tasks', (done) => {
      chai
        .request(app)
        .get('/tasks')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });

  describe('/POST task', () => {
    it('it should not POST an Task without title field', (done) => {
      const task = {
        description: 'A test description',
      };
      chai
        .request(app)
        .post('/tasks')
        .send(task)
        .end((err, res) => {
          res.should.have.status(401);
          res.should.be.a('object');
          res.should.have.property('error');
          done();
        });
    });

    it('it should POST a Task', (done) => {
      const task = {
        title: 'Test Task',
        description: 'Test Description',
      };
      chai
        .request(app)
        .post('/tasks')
        .send(task)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.a.property('message').eql('Créé avec succès');
          res.body.task.should.have.property('title');
          res.body.task.should.have.property('description');
          done();
        });
    });
  });

  describe('/GET /task/:task task ', () => {
    it('it should GET an task by the given id', (done) => {
      const task = new Task({
        title: 'New Task',
        description: 'New description',
      });
      task.save((err, taskSaved) => {
        chai
          .request(app)
          .get(`/tasks/${taskSaved.id}`)
          .send(taskSaved)
          .end((_, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('title');
            res.body.should.have.property('description');
            res.body.should.have.property('_id').eql(taskSaved.id);
            done();
          });
      });
    });
  });

  describe('/PUT /task/:task task ', () => {
    it('it should UPDATE an task given an id', (done) => {
      const task = new Task({
        title: 'New Task',
        description: 'New description',
      });
      task.save((err, taskSaved) => {
        chai
          .request(app)
          .put(`/tasks/${taskSaved.id}`)
          .send({ title: 'New Task', description: 'Nouvelle description' })
          .end((_, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Task updated');
            done();
          });
      });
    });
  });
  describe('/DELETE /task/:task task ', () => {
    it('it should DELETE an task given an id', (done) => {
      const task = new Task({
        title: 'New Task',
        description: 'New description',
      });
      task.save((err, taskSaved) => {
        chai
          .request(app)
          .delete(`/tasks/${taskSaved.id}`)
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
});

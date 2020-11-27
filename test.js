process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');

const should = chai.should(); // eslint-disable-line no-unused-vars
const { describe, it } = chai;

chai.use(chaiHttp);

describe('Issues', () => {
  describe('# Hello World', () => {
    it('ça doit afficher Hello', (done) => {
      done();
    });
    it('ça doit afficher World', (done) => {
      done();
    });
  });

  describe('# Super title', () => {
    it('Un test générique', (done) => {
      done();
    });
  });

  describe('# Issue with difficulty 3', () => {
    it('Test de la difficulté', (done) => {
      done();
    });
    it('Test de la facilité', (done) => {
      done();
    });
    it('Test de la faci-difficulté', (done) => {
      done();
    });
  });

  describe('* Première tache', () => {
    it('Test de la première tâche', (done) => {
      done();
    });
  });
  describe('* troisième tache', () => {
    it('Test de la troisième tâche', (done) => {
      done();
    });
  });
});

process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Issue = require('../models/Issue');

let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();

chai.use(chaiHttp);

describe('Issues', () =>{
    beforeEach((done) => {
        Issue.remove({},(err)=> {
            done(); 
        })
    });

    describe('/GET issue', () => {
        it ('it should GET all issues', (done) =>{
            chai.request(app)
                .get('/issues')
                .end((err,res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                done();
                });
        });
    });


    describe('/POST issue',() => {
        it('it should not POST an Issue without title field', (done)=>{
            let issue = {
                description: 'A test description',
                type: 'feature'
            }
            chai.request(app)
                .post('/issues')
                .send(issue)
                .end((err,res) =>{
                    res.should.have.status(401);
                    res.should.be.a('object');
                    res.should.have.property('error');
                done();
                });
        });

        it('it should POST a Issue', (done) =>{
            let issue = {
                title: 'Test Issue',
                description: 'Test Description',
                type:'feature'
            }
            chai.request(app)
                .post('/issues')
                .send(issue)
                .end((err,res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    res.body.should.have.a.property('message').eql('Créé avec succès');
                    res.body.issue.should.have.property('title');
                    res.body.issue.should.have.property('description');
                done();
                });
        });
    });

    describe('/GET /issue/:issue issue ', () => {
        it ('it should GET an issue by the given id', (done) =>{
            const issue = new Issue( {title:'New Issue', description: 'New description', type:'documentation'});
            issue.save((err,issue) =>{
                chai.request(app)
                    .get('/issues/'+ issue.id)
                    .send(issue)
                    .end((err,res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('title');
                        res.body.should.have.property('description');
                        res.body.should.have.property('_id').eql(issue.id);
                    done();
                    });
            });
        });
    });

    describe('/PUT /issue/:issue issue ', () => {
        it ('it should UPDATE an issue given an id', (done) =>{
            const issue = new Issue( {title:'New Issue', description: 'New description', type:'documentation'});
            issue.save((err,issue) =>{
                chai.request(app)
                    .put('/issues/'+ issue.id)
                    .send({title: "New Issue" , description: 'Nouvelle description'})
                    .end((err,res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('message').eql('Issue updated');
                    done();
                    });
            });
        });
    });
    describe('/DELETE /issue/:issue issue ', () => {
        it ('it should DELETE an issue given an id', (done) =>{
            const issue = new Issue( {title:'New Issue', description: 'New description', type:'feature'});
            issue.save((err,issue) =>{
                chai.request(app)
                    .delete('/issues/'+ issue.id)
                    .send({title: "New " , description: 'Nouvelle description'})
                    .end((err,res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('message').eql('successfully deleted!');
                    done();
                    });
            });
        });
    });

});
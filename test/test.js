var request = require('supertest'); 
var app = require('../app.js');
var express = require('express');
var bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//1
describe('GET /', function() {   it("should return home page", function(done) {    
        // The line below is the core test of our app.     
        request(app).get('/')
        .expect("Content-type",/json/)
        .expect(200) // THis is HTTP response
        .end(function(err,res){
            done();
        });
    });
});

//2
describe('POST /tinh', function() {   it("should return number plus to calculate", function(done) {    
    request(app)
    .post('/tinh')
    .type('form')
    .send({num1 : 10, num2 : 20, pheptinh: '+'})
    .expect(200)
    .end((err, res) => {
        if(res.body.result == 30){
            done();
        }
    });
});
});

//3
describe('POST /tinh', function() {   it("should return number minus to calculate", function(done) {    
    request(app)
    .post('/tinh')
    .type('form')
    .send({num1 : 10, num2 : 20, pheptinh: '-'})
    .expect(200)
    .end((err, res) => {
        if(res.body.result == -10){
            done();
        }
    });
});
});

//4
describe('POST /tinh', function() {   it("should return number multiply to calculate", function(done) {    
    request(app)
    .post('/tinh')
    .type('form')
    .send({num1 : 5, num2 : 6, pheptinh: '*'})
    .expect(200)
    .end((err, res) => {
        if(res.body.result == 30){
            done();
        }
    });
});
});

//5
describe('POST /tinh', function() {   it("should return number divide to calculate", function(done) {    
    request(app)
    .post('/tinh')
    .type('form')
    .send({num1 : 6, num2 : 2, pheptinh: '/'})
    .expect(200)
    .end((err, res) => {
        if(res.body.result == 3){
            done();
        }
    });
});
});

//6
describe('POST /tinh', function() {   it("should return number power to calculate", function(done) {    
    request(app)
    .post('/tinh')
    .type('form')
    .send({num1 : 10, num2 : 2, pheptinh: 'mu'})
    .expect(200)
    .end((err, res) => {
        if(res.body.result == 100){
            done();
        }
    });
});
});

//7
describe('POST /tinh', function() {   it("should return number square root to calculate", function(done) {    
    request(app)
    .post('/tinh')
    .type('form')
    .send({num1 : 4, num2 : 2, pheptinh: 'can'})
    .expect(200)
    .end((err, res) => {
        if(res.body.result == 2){
            done();
        }
    });
});
});
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

//phep cong dung
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

//phep cong sai
describe('POST /tinh', function() {   it("should return wrong number plus to calculate", function(done) {    
    request(app)
    .post('/tinh')
    .type('form')
    .send({num1 : 'aa', num2 : 20, pheptinh: '+'})
    .expect(200)
    .end((err, res) => {
        if(res.body.result != 30){
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

//Phép nhân đúng
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

//Phép nhân sai
describe('POST /tinh', function() {   it("should return WRONG number multiply to calculate", function(done) {    
    request(app)
    .post('/tinh')
    .type('form')
    .send({num1 : 'aa', num2 : 6, pheptinh: '*'})
    .expect(200)
    .end((err, res) => {
        if(res.body.result !== 30){
            done();
        }
    });
});
});

//Phép chia đúng
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

//Phép chia sai
describe('POST /tinh', function() {   it("should return WRONG number divide to calculate", function(done) {    
    request(app)
    .post('/tinh')
    .type('form')
    .send({num1 : 'aa', num2 : 2, pheptinh: '/'})
    .expect(200)
    .end((err, res) => {
        if(res.body.result !== 3){
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

describe('POST /tinh', function() {   it("should return wrong number power to calculate", function(done) {    
    request(app)
    .post('/tinh')
    .type('form')
    .send({num1 : 'aa', num2 : 2, pheptinh: '+'})
    .expect(200)
    .end((err, res) => {
        if(res.body.result !== 100){
            done();
        }
    });
});
});

// Phep chia dung
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

// Phep chia sai
describe('POST /tinh', function() {   it("should return number square root to calculate", function(done) {    
    request(app)
    .post('/tinh')
    .type('form')
    .send({num1 : 'aa', num2 : 2, pheptinh: 'can'})
    .expect(200)
    .end((err, res) => {
        if(res.body.result !== 2){
            done();
        }
    });
});
});

// Ràng buộc input
describe('POST /tinh', function() {   it("input have to be a number", function(done) {
    request(app)
        .post('/tinh')
        .type('form')
        .send({num1 : 'abc', num2 : 2, pheptinh: '*'})
        .expect(200)
        .end((err, res) => {
            if(res.body.result == -1){
                done();
            }
        });
});
});
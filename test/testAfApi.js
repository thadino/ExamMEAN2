/**
 * Created by mrlef on 1/5/2017.
 */

var assert = require('assert');
var url = "http://localhost:3000/"
var request = require('request');

describe('create method', function () {  //describe bliver brugt til at groupere individuelle tests
    it("returns status 200 of create", function (done) {
        request.post(url + "create", function (error, response, body) {
            console.log("from create " + body)
            assert.equal(response.statusCode, 200);
            done();
        });
    });
});

describe('get method', function () {  //describe bliver brugt til at groupere individuelle tests
    it("get returns code 200", function () {
        request.get(url + "get", function (error, response, body) {
            console.log("from get " + body)
            assert.equal(response.statusCode, 200);
            done();
        });
    });
});


describe('update method', function () {  //describe bliver brugt til at groupere individuelle tests
    it("update returns code 200", function () {
        request.put(url + "update", function (error, response, body) {
            console.log("from update " + body)
            assert.equal(response.statusCode, 200);
            done();
        });
    });
});

describe('delete method', function () {  //describe bliver brugt til at groupere individuelle tests
    it("delete returns code 200", function () {
        request.delete(url + "delete", function (error, response, body) {
            assert.equal(response.statusCode, 200);
            done();
        });
    });
});

//for at test vores api så skriv i terminalen: mocha test/testAfApi.js
const request = require('supertest');
const app = require('../src/app');

describe('GET /', function () {
  it('responds with Hello World', function (done) {
    request(app)
      .get('/')
      .expect('Hello World', done);
  });
});

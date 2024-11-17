const request = require('supertest');
const app = require('../src/app');

describe('GET /', function () {
  it('responds with Goodbye World', function (done) {
    request(app)
      .get('/')
      .expect('Goodbye World', done);  // Intentionally incorrect expectation
  });
});

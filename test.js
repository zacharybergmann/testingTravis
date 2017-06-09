const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./server');

const expect = chai.expect;

chai.use(chaiHttp);
describe('Langsnap API server', (done) => {
  it('should return a 200 response for a GET request to the / route', () => {
    chai.request(server)
      .get('/')
      .then((resp) => {
        expect(resp.statusCode).to.equal(200);
        done();
      })
      .catch(err => err);
    // const response = await chai.request(server).get('/')
  });
});

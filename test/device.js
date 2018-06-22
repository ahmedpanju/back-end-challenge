process.env.NODE_ENV = 'test';

let mongoose = require('mongoose');
let Devices = require('../api/models/device');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = 'http://localhost:8080';
let should = chai.should();

chai.use(chaiHttp);

describe('Devices', () => {

describe('/GET DeviceInfo', () => {
  it('it should GET the desired deviceInfo for a valid DeviceId', (done) => {
    chai.request(server)
      .get('/device/5b2d13b75d02c529fb6cbcd1')
        .end((err, res) => {
          if(err) done(err);
              res.should.have.status(200);
             done();
           });
     });
 });

 describe('/GET DeviceInfo', () => {
   it('it should not GET the desired deviceInfo for an invalid DeviceId', (done) => {
     chai.request(server)
       .get('/device/5b2d13b75d02c529fb6')
         .end((err, res) => {
           if(err) done(err);
               res.should.have.status(500);
              done();
            });
      });
  });

});

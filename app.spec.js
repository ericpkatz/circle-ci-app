const db = require('./db');
const expect = require('chai').expect;
describe('My App', ()=> {
  beforeEach(()=> db.syncAndSeed());
  it('true is true', ()=> {
    expect(true).to.equal(true);
  });
  it('moe is moe', ()=> {
    return db.User.findOne({ where: { name: 'moe' }})
      .then( moe => expect(moe.name).to.equal('moe'));
  });
});

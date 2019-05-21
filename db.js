const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL);

const User = conn.define('user', {
  name: Sequelize.STRING
});

const syncAndSeed = ()=> {
  return conn.sync({ force: true })
    .then(()=> User.create({ name: 'moe'}));

};

module.exports = {
  syncAndSeed,
  User
};

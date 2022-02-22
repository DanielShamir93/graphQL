const { UsersList } = require('../fakeData');

const resolvers = {
  Query: {
    users() {
      return UsersList;
    }
  }
}

module.exports = { resolvers };
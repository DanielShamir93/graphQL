const { UsersList, MoviesList } = require('../fakeData');
const _ = require('lodash');

const resolvers = {
  Query: {
    // Users resolvers
    users: () => {
      return UsersList;
    },
    user: (parent, args) => {
      const id = +args.id;
      const user = _.find(UsersList, { id });
      return user;
    },
    // Movie resolvers
    movies: () => {
      return MoviesList;
    },
    movie: (parent, args) => {
      const name = args.name;
      const movie = _.find(MoviesList, { name });
      return movie;
    }
  },
  User: {
    favoriteMovies: () => {
      return _.filter(MoviesList, (movie) => movie.yearOfPublication < 2005)
    }
  },

  Mutation: {
    createUser: (parent, args) => {
      const user = args.input
      console.log(user);
    },
    updateUsername: (parent, args) => {
      const { id, newUsername } = args.input;
      let userUpdated = null;
      UsersList.forEach((user) => {
        if (user.id === +id) {
          user.username = newUsername;
          userUpdated = user;
        }
      })

      return userUpdated;
    }
  }
}

module.exports = { resolvers };
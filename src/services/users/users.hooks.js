

module.exports = {
  before: {
    all: [],
    find: [async context => {
      console.log('hello')
      const users = await context.app.service('users').find({
        query: {
          first_name: "Vladimir"
        }
      })
      console.log(users)
    }],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};

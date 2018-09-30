/**
 * Photos.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    file: {
      type: 'string'
    },
    upvotes: {
      type: 'string'
    },
    downvote: {
      type: 'string'
    },
    catergory: {
      collection: 'catergories',
      via:'photo'
    },
    user: {
      collection: 'users',
      via: 'photo'
    },
  }

};


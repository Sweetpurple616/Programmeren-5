/**
 * Users.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    email: {
      type: 'string',
      unique: true,
      isEmail: true,
      maxLength: 200,
      example: 'example@example.com'
    },
    password: {
      type: 'string',
      required: true,
      description: 'Securely hashed representation of the user\'s login password.',
      protect: true,
      example: '2$28a8eabna301089103-13948134nad'
    },
    fullname: {
      type: 'string',
      required: true,
      description: 'Full representation of the user\'s name',
      maxLength: 120,
      example: 'Cool Beans'
    },
    isAdmin: {
      type: 'boolean',
      description: 'Is the user a admin.',
    }
  },
};


module.exports = {


  friendlyName: 'Update',


  description: 'Update something.',


  inputs: {
    emailAddress: {
      required: true,
      type: 'string',
      isEmail: true,
      description: 'Email address for the account',
    },

    password: {
      required: true,
      type: 'string',
      maxLength: 200,
      example: 'password',
      description: 'The unencrypted password.'
    },

    fullName:  {
      required: true,
      type: 'string',
      example: 'Cool beans',
      description: 'full name for the account',
    }
  },


  exits: {
  },


  fn: async function (inputs, exits) {
    await User.update(inputs);
    return exits.success();

  }


};

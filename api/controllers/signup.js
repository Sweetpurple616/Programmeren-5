module.exports = {


  friendlyName: 'Signup',


  description: 'Signup for account.',


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
      description: 'The unencrypted password to use for the new account.'
    },

    fullName:  {
      required: true,
      type: 'string',
      example: 'Cool beans',
      description: 'full name for the account',
    }

  },


  exits: {
    invalid: {
      responseType: 'badRequest',
      description: 'The provided fullName, password and/or email address are invalid.',
      extendedDescription: 'If this request was sent from a graphical user interface, the request '+
      'parameters should have been validated/coerced _before_ they were sent.'
    },

    emailAlreadyInUse: {
      statusCode: 409, //conflict code
      description: 'input email address is already in use.',
    },
  },


  fn: async function (inputs, exits) {

    return exits.success();

  }


};

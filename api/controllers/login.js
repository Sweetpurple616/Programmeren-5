module.exports = {


  friendlyName: 'Login',


  description: 'Login something.',


  inputs: {
    email: {
      required: true,
      type: 'string',
      isEmail: true,
      unique: true,
      description: 'Email address for the account',
    },

    password: {
      required: true,
      type: 'string',
      maxLength: 200,
      example: 'password',
      description: 'The unencrypted password to use for the new account.'
    },

  },


  exits: {
    somethingHappened: {
      responseType: 'dataNotVal'
    },
    success:{
      responseType: 'view',
      viewTemplatePath: 'upload.ejs'
    },
    notFound: {
      description: 'No user with the specified ID was found in the database.',
      responseType: 'redirect'
    },
    passwordInvalid: {
      description: 'Password invalid.',
      responseType: 'notFound'
    },
  },



  fn: async function (inputs, exits) {
    var user = await User.findOne({email: inputs.email});
    if(!user) {
      sails.log('geen user found');
      throw { somethingHappened: ['Account niet gevonden']};

    }
    sails.log('login');
    await sails.helpers.passwords.checkPassword(inputs.password, user.password)
    .intercept('somethingHappend', 'passwordInvalid');
    user.timesLoggedin = user.timesLoggedin + 1;
    await User.update({email: inputs.email})
    .set({timesLoggedin: user.timesLoggedin});

    this.req.session.userId = user.id;

    return exits.success();

  }


};

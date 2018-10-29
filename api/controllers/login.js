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
    success:{
      responseType: 'view',
      viewTemplatePath: 'homepage.ejs'
    },
    notFound: {
      description: 'No user with the specified ID was found in the database.',
      responseType: 'notFound'
    },
    passwordInvalid: {
      description: 'Password invalid.',
      responseType: 'notFound'
    }
  },



  fn: async function (inputs, exits) {
    var user = await User.findOne({email: inputs.email});
    if (!user) { return exits.notFound(); }
    sails.log('login');
    await sails.helpers.passwords.checkPassword(inputs.password, user.password)
    .intercept('passwordInvalid', 'notFound');

    this.req.session.userId = user.id;


    return exits.success();

  }


};

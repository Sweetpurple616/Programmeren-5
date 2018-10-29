module.exports = {


  friendlyName: 'Login',


  description: 'Login something.',


  inputs: {
    emailAddress: {
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
      viewTemplatePath: 'login.ejs'
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
    var user = await User.findOne({emailAddress: inputs.emailAddress});
    if (!user) { return exits.notFound(); }
    if (user.password !== inputs.password){
      return exits.passwordInvalid();
    }

    return exits.success({id: user.id});

  }


};

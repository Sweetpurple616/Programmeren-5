module.exports = {


  friendlyName: 'Update',


  description: 'Update something.',


  inputs: {
    email: {
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

    fullname:  {
      required: true,
      type: 'string',
      example: 'Cool beans',
      description: 'full name for the account',
    }
  },


  exits: {
    success:{
      responseType: 'view',
      viewTemplatePath: 'upload.ejs'
    },
    redirect: {
      description: 'The requesting user agent looks to be a web browser.',
      extendedDescription: 'After logging out from a web browser, the user is redirected away.',
      responseType: 'redirect'
    },
  },


  fn: async function (inputs, exits) {
    sails.log('update');
    await User.update({id:inputs.id})
    .set({fullname: inputs.fullname},
      {email: inputs.email},
      {password: inputs.password });

    throw {redirect: '/profile'};

  }


};

module.exports = {


  friendlyName: 'Toggle',


  description: 'Toggle something.',


  inputs: {
    id:{
      type:'string'
    },
    state:{
      type:'boolean',
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
    var state =! inputs.state;

    sails.log(inputs.state);
    await Photos.update({id: inputs.id})
    .set({state: state});
    throw {redirect: '/admin'};
    return exits.success();

  }


};

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

  },


  fn: async function (inputs, exits) {
    var state =! inputs.state;

    sails.log(inputs.state);
    await Photos.update({id: inputs.id})
    .set({state: state});
    return exits.success();

  }


};

module.exports = {


  friendlyName: 'Upload',


  description: 'Upload something.',


  inputs: {
    name:  {
      required: true,
      type: 'string',
      example: 'Cool beans',
      description: 'full name for the account',
    },
    description:  {
      required: true,
      type: 'string',
      example: 'this is a description',
      description: 'description for the photo',
    },
    file:  {
      required: true,
      type: 'string',
      description: 'upload a photo',
    }

  },


  exits: {
    success:{
      responseType: 'view',
      viewTemplatePath: 'upload.ejs'
    }
  },


  fn: async function (inputs, exits) {
    var photo = await Photos.create(inputs);
    sails.log('nhgd');
    return exits.success(photo);



  }


};

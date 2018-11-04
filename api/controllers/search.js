module.exports = {


  friendlyName: 'Search',


  description: 'Search something.',


  inputs: {
    search:{
      type:'string'
    },
    catergory:{
      type:'string',
    },
  },


  exits: {
    success:{
      responseType: 'view',
      viewTemplatePath: 'search.ejs'
    },
  },


  fn: async function (inputs, exits) {
    var searchresult = await Photos.find({
      or : [
        {name: inputs.search},
        {description: inputs.search}
      ]
    });
    sails.log(inputs);
    sails.log(searchresult);
    if (inputs.catergory){
      searchresult = await Photos.find({
        catergory: inputs.catergory,
      });

    }

    //sails.log(inputs.search);
    //sails.log(searchresult);
    return exits.success({search: inputs.search, result: searchresult});

  }


};

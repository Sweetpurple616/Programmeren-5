/**
 * PhotosController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  admin: async (request, response) => {
    try {
      let alldata = await Photos.find({});
      if (!alldata) {
        return response.notFound('The user was NOT found!');
      }
      sails.log('admin');
      response.view('admin', { alldata });
    } catch (err) {
      response.serverError(err);
    }
  }
};


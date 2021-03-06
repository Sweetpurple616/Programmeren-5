/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  render: async (request, response) => {
    try {
      let data = await User.findOne({
        id: request.session.userId
      });
      if (!data) {
        return response.notFound('The user was NOT found!');
      }
      response.view('profile', { data });
    } catch (err) {
      response.serverError(err);
    }
  },
  delete: async (request, response) => {
    await User.destroy({id: request.session.userId});
    response.view('homepage');
  }
};


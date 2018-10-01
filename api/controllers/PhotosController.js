/**
 * PhotosController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  'show':function(req, res){
    Photos.find({}).exec((err, photos) => {
      if(err){
        res.send(500, {error: 'Database Error'});
      }
      res.view('show', {photos:photos});
    });
  }

};


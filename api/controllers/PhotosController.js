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
  },

  'add':function(req, res){
    res.view('add');
  },

  'create':function(req, res){
    var name = req.body.name;
    var description = req.body.description;

    Photos.create({name:name, description:description }).exec((err) => {
      if(err){
        res.send(500, {error: 'Database Error'});
      }
      res.redirect('/photos');
    });
  },

  'delete':function(req, res){
    Photos.destroy({id:req.params.id}).exec((err) => {
      if(err){
        res.send(500, {error: 'Database Error'});
      }
      res.redirect('/photos');
    });
    return false;
  },
};


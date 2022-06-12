const res = require('express/lib/response');
const Watch = require('../models/Watch');
const { mongooseToObject } = require('../../util/mongoose');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class WatchController {
  // [GET] /watchs/create
  create(req, res, next) {
    res.render('watch/create');
  }

  mil(req, res, next) {
    res.render('watch/mil');
  }

  // [POST] /watchs/store
  store(req, res, next) {
    req.body.image = `https://michaelkors.scene7.com/is/image/MichaelKors/${req.body.imageID}?wid=558&hei=748&op_sharpen=1&resMode=sharp2&qlt=90`;
    const watch = new Watch(req.body);
    watch
      .save()
      .then(() => res.redirect('/me/stored/watchs'))
      .catch((error) => {});
  }

  // [GET] /watchs/showNam
  showNam(req, res, next) { 
    Watch.find({ type: 'nam' })
      .then((watch) =>
        res.render('watch/showNam', { 
          watch: mutipleMongooseToObject(watch), 
        }),
      )
      .catch(next);
  }

  // [GET] /watchs/showNam
  showNu(req, res, next) { 
    Watch.find({ type: 'nu' })
      .then((watch) =>
        res.render('watch/showNu', { 
          watch: mutipleMongooseToObject(watch), 
        }),
      )
      .catch(next);
  }

  // [GET] /watchs/showTreEm
  showTreEm(req, res, next) { 
    Watch.find({ type: 'tre-em' })
      .then((watch) =>
        res.render('watch/showTreEm', { 
          watch: mutipleMongooseToObject(watch), 
        }),
      )
      .catch(next);
  }

  // [GET] /watchs/:slug
  show(req, res, next) {
    Watch.findOne({ slug: req.params.slug })
      .then((watch) =>
        res.render('watch/show', { 
          watch: mongooseToObject(watch),
        }),
      )
      .catch(next);
  }

  // [GET] /watchs/:id/edit
  edit(req, res, next) {
    Watch.findById(req.params.id)
      .then((watch) =>
        res.render('watch/edit', {
          watch: mongooseToObject(watch),
        }),
      )
      .catch(next);
  }

  // [PUT] /watchs/:id/
  update(req, res, next) {
    Watch.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/me/stored/watchs'))
      .catch(next);
  }

  // [DELETE] /watchs/:id/
  delete(req, res, next) {
    Watch.delete({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }

  // [DELETE] /watchs/:id/force
  force(req, res, next) {
    Watch.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }

  // [PATCH] /watchs/:id/restore
  restore(req, res, next) {
    Watch.restore({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }


}
module.exports = new WatchController();

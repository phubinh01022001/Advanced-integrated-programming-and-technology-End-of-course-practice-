const res = require('express/lib/response');
const Watch = require('../models/Watch');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
  // [GET] /
  index(req, res, next) {
    Watch.find({})
      .then((watchs) => {
        res.render('home', {
          watchs: mutipleMongooseToObject(watchs),
        });
      })
      .catch(next);
  }

  // [GET] /search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();

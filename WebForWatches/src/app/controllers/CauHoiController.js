const res = require('express/lib/response');
const Watch = require('../models/Watch');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class CauHoiController {
  // [GET] /
  index(req, res, next) { 
    Watch.find({})
      .then((watchs) => {
        res.render('cauHoi', {
          watchs: mutipleMongooseToObject(watchs),
        });
      })
      .catch(next);
  }
}

module.exports = new CauHoiController();

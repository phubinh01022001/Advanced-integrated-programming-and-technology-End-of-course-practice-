const res = require('express/lib/response');
const Watch = require('../models/Watch');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class IntroduceController {
  // [GET] /
  index(req, res, next) { 
    Watch.find({})
      .then((watchs) => {
        res.render('introduce', {
          watchs: mutipleMongooseToObject(watchs),
        });
      })
      .catch(next);
  }
}

module.exports = new IntroduceController();

const res = require('express/lib/response');
const Watch = require('../models/Watch');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class BPVHDController {
  // [GET] /
  index(req, res, next) { 
    Watch.find({})
      .then((watchs) => {
        res.render('bpvhd', {
          watchs: mutipleMongooseToObject(watchs),
        });
      })
      .catch(next);
  }
}

module.exports = new BPVHDController();

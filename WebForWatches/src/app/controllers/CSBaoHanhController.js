const res = require('express/lib/response');
const Watch = require('../models/Watch');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class CSBaoHanhController {
  // [GET] /
  index(req, res, next) { 
    Watch.find({})
      .then((watchs) => {
        res.render('csBaoHanh', {
          watchs: mutipleMongooseToObject(watchs),
        });
      })
      .catch(next);
  }
}

module.exports = new CSBaoHanhController();

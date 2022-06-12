const res = require('express/lib/response');
const Watch = require('../models/Watch');
const { mongooseToObject } = require('../../util/mongoose');

class SearchController {
  // [GET] /
  index(req, res, next) { 
    var search = req.body.search;
    Watch.findOne({ name: search })
      .then((watchs) => {
        res.render('search', {
          watchs: mongooseToObject(watchs),
        });
      })
      .catch(next);
    
  }
}

module.exports = new SearchController();

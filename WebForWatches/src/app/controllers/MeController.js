const res = require('express/lib/response');
const Watch = require('../models/Watch');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeController {
  // [GET] /me/stored/watchs
  storedWatchs(req, res, next) {
    Promise.all([Watch.find({}), Watch.countDocumentsDeleted()])
      .then(([watchs, deletedCount]) =>
        res.render('me/stored-watchs', {
          deletedCount,
          watchs: mutipleMongooseToObject(watchs),
        }),
      )
      .catch(next);
  }

  // [GET] /me/trash/watchs
  trashWatchs(req, res, next) {
    Watch.findDeleted({})
      .then((watchs) =>
        res.render('me/trash-watchs', {
          watchs: mutipleMongooseToObject(watchs),
        }),
      )
      .catch(next);
  }
}
module.exports = new MeController();

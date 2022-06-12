const searchRouter = require('./search');
const accountRouter = require('./account');
const bpVhdRouter = require('./bpVhd');
const cauHoiRouter = require('./cauHoi');
const lienHeRouter = require('./lienHe');
const csBaoHanhRouter = require('./csBaoHanh');
const introduceRouter = require('./introduce');
const watchsRouter = require('./watchs');
const siteRouter = require('./site');
const meRouter = require('./me');

function route(app) {
  app.use('/search', searchRouter);
  app.use('/account', accountRouter);
  app.use('/bpVhd', bpVhdRouter);
  app.use('/cauHoi', cauHoiRouter);
  app.use('/lienHe', lienHeRouter);
  app.use('/csBaoHanh', csBaoHanhRouter);
  app.use('/introduce', introduceRouter);
  app.use('/watchs', watchsRouter);
  app.use('/me', meRouter);
  app.use('/', siteRouter);
}

module.exports = route;

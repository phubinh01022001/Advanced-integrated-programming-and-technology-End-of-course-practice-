const express = require('express');
const router = express.Router();

const watchController = require('../app/controllers/WatchController');

router.get('/create', watchController.create);
router.post('/store', watchController.store);
router.get('/:id/edit', watchController.edit);
router.put('/:id', watchController.update);
router.delete('/:id', watchController.delete);
router.delete('/:id/force', watchController.force);
router.patch('/:id/restore', watchController.restore);
router.get('/showNam', watchController.showNam);
router.get('/showNu', watchController.showNu);
router.get('/showTreEm', watchController.showTreEm);
router.get('/mil', watchController.mil);
router.get('/:slug', watchController.show);


module.exports = router;

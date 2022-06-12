const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/stored/watchs', meController.storedWatchs);
router.get('/trash/watchs', meController.trashWatchs);

module.exports = router;

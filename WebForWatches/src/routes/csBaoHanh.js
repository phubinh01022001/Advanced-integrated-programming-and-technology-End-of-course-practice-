const express = require('express');
const router = express.Router();

const CSBaoHanhController = require('../app/controllers/CSBaoHanhController');

router.get('/', CSBaoHanhController.index);

module.exports = router;

'use strict';

const express = require('express');
const router = express.Router();
const ledService = require('../modules/ledService');
const animationService = require('../modules/animationService');

router.all('/off', (req, res) => {
	ledService.off();
	res.status(200).end();
});

module.exports = router;
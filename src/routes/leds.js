'use strict';

const express = require('express');
const router = express.Router();
const ledService = require('../modules/ledService');

router.get('/', (req, res) => {
	let status = ledService.getAll();
	res.json(status);
});

router.post('/', (req, res) => {
	if (req.body && req.body.toString().length > 0) {
		ledService.setPixels(req.body);
		res.status(200).end();
	} else {
		res.status(400).end();
	}
});

module.exports = router;
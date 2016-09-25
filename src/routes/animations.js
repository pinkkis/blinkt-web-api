'use strict';

const express = require('express');
const router = express.Router();
const animationService = require('../modules/animationService');

router.get('/', (req, res) => {
	res.status(501).json({});
});

router.post('/', (req, res) => {
	res.status(501).json({});
});

module.exports = router;
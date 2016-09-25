'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.json({
		message: 'Blinkt Api'
	});
});

app.use('/util', require('./routes/util'));
app.use('/leds', require('./routes/leds'));
app.use('/animations', require('./routes/animations'));

app.listen(3000, () => {
	console.info('app running');
});
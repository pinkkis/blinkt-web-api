'use strict';

const Blinkt = require('blinktjs');
const Led = require('../model/led');

const leds = [];
const defaultBrightness = 0.3;

const blinkt = new Blinkt({
	defaultBrightness: defaultBrightness
});

for (let i = 0; i < 8; i++) {
	leds.push(new Led(i));
}

let getAll = () => {
	return leds;
};

let setPixels = (ledData) => {
	if (!Array.isArray(ledData)) {
		ledData = [ledData];
	}

	ledData.forEach( (pixel) => {
		if (pixel.number < 0 || pixel.number > 7) { return; }

		leds[pixel.number].set(pixel.r, pixel.g, pixel.b, pixel.a);
	});

	draw();
};

let off = () => {
	blinkt.off();
};

let draw = () => {
	leds.forEach( (pixel) => {
		blinkt.setPixel(pixel.number, pixel.red, pixel.green, pixel.blue, pixel.brightness);
	});

	blinkt.draw();
};

/**
 * register process cleanup here
 */
process.on('exit', () => {
	off();
});

module.exports = {
	getAll: getAll,
	setPixels: setPixels,
	off: off
};